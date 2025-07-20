import React, { useState, useRef } from 'react';
import { MessageSquare, Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ user_name: '', user_email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>

        {/* Galaxy visualization in the background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gradient-radial from-purple-900/20 via-blue-900/10 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
              Final Destination
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our journey ends at this distant galaxy. Connect with me through
            this interstellar communication module.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-center">
                  <p className="text-green-300 font-medium">
                    Message sent successfully! I'll respond as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-center mb-4">
                      <p className="text-red-300 font-medium">{error}</p>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="user_name" className="block text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="user_email" className="block text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 mb-8">
              <div className="flex items-center mb-6">
                <Mail size={24} className="text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold">Contact Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <p className="text-white">hiteshgupta6011@gmail.com</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">Saskatoon, Earth</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Availability</p>
                  <p className="text-white">
                    Anytime - It's Digital Cosmic World
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <Linkedin size={24} className="text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Connect</h3>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-900 transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-blue-400" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github size={20} className="text-white" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-900 transition-colors duration-300"
                >
                  <Mail size={20} className="text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full py-6 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Hitesh Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
