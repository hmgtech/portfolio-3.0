import React from 'react';
import { Award, ExternalLink, Tag } from 'lucide-react';

interface CertificateTag {
  name: string;
  color: string;
}

interface Certificate {
  name: string;
  description: string;
  tags: CertificateTag[];
  image: string;
  source_code_link: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      name: 'Google Developer Student Clubs',
      description:
        "I've earned Google Cloud badges in network setup, Kubernetes, ML integration, and data engineering, showcasing hands-on experience on GCP.",
      tags: [
        { name: 'gcp', color: 'blue-text-gradient' },
        { name: 'kubernetes', color: 'green-text-gradient' },
        { name: 'ml', color: 'pink-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/gcp-59ee9406.png',
      source_code_link:
        'https://www.cloudskillsboost.google/public_profiles/5b3e1f00-4f5b-400b-b255-9c2c3d996a0e',
    },
    {
      name: 'Python for Beginners',
      description:
        'Through hands-on Python sessions, I learned fundamentals and advanced topics, developing efficient programs, games, and modules.',
      tags: [
        { name: 'python', color: 'blue-text-gradient' },
        { name: 'oop', color: 'pink-text-gradient' },
        { name: 'coding', color: 'green-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/python-84016ead.jpg',
      source_code_link:
        'https://www.udemy.com/certificate/UC-bfee6a9f-5c08-45a1-8a77-e2d618f54c39/',
    },
    {
      name: 'Convolutional Neural Networks',
      description:
        'In this module, I learned about computer vision fundamentals, including edge detection, convolutions, pooling layers, and gained insights from experts like Yann LeCun.',
      tags: [
        { name: 'open-cv', color: 'blue-text-gradient' },
        { name: 'numpy', color: 'green-text-gradient' },
        { name: 'cnn', color: 'pink-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/cnn-9639aea9.png',
      source_code_link:
        'https://www.coursera.org/account/accomplishments/certificate/WZWSXT6DT6FD',
    },
    {
      name: 'AWS Machine Learning',
      description:
        'Learned AWS ML services like Rekognition, Textract, Comprehend, Transcribe, Translate, Lex, SageMaker, with hands-on exercises.',
      tags: [
        { name: 'aws', color: 'blue-text-gradient' },
        { name: 'ml', color: 'green-text-gradient' },
        { name: 'image-processing', color: 'pink-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/aws-08b1d163.png',
      source_code_link:
        'https://www.coursera.org/account/accomplishments/certificate/SYD4ACJ5KCFC',
    },
    {
      name: 'Natural Language Processing',
      description:
        'I learned logistic regression, recurrent neural networks, and self-attention for sentiment analysis and language tasks.',
      tags: [
        { name: 'nlp', color: 'blue-text-gradient' },
        { name: 'rnn', color: 'green-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/NLP-75408f8a.png',
      source_code_link:
        'https://www.coursera.org/account/accomplishments/certificate/RM48DS6MR3WL',
    },
    {
      name: 'AI For Medical Diagnosis',
      description:
        'I covered medical image diagnosis, model training, class imbalances, multi-task learning, data handling, testing, and additional topics with readings.',
      tags: [
        { name: 'ai', color: 'blue-text-gradient' },
        { name: 'medical-diagnosis', color: 'green-text-gradient' },
      ],
      image: 'https://guptahitesh.me/assets/AIInMedical-d2ae4929.png',
      source_code_link:
        'https://www.coursera.org/account/accomplishments/certificate/RM48DS6MR3WL',
    },
  ];

  const getTagColor = (color: string) => {
    switch (color) {
      case 'blue-text-gradient':
        return 'bg-blue-500/20 text-blue-300';
      case 'green-text-gradient':
        return 'bg-green-500/20 text-green-300';
      case 'pink-text-gradient':
        return 'bg-pink-500/20 text-pink-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section
      id="certificates"
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Achievement Constellations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of certifications that mark significant milestones in
            my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={cert.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={20} className="text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(
                        tag.color
                      )} flex items-center`}
                    >
                      <Tag size={12} className="mr-1" />
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
