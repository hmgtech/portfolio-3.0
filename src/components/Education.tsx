import React, { useEffect, useRef } from 'react';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
  description: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
}

const Education: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add('animate-fade-in');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const educationItems: Education[] = [
    {
      id: 'edu1',
      degree: 'Master of Applied Computer Science',
      institution: 'Dalhousie University',
      year: '2033-2024',
      location: 'Halifax, Canada',
      description:
        'Specialized in Artificial Intelligence and Machine Learning with a focus on neural networks and computer vision.',
    },
    {
      id: 'edu2',
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Parul Institute of Engineering and Technology',
      year: '2017-2021',
      location: 'Vadodara, India',
      description:
        'Graduated with honors. Focused on full-stack development and distributed systems.',
    },
  ];

  const certifications: Certification[] = [
    {
      id: 'cert1',
      name: 'Google Professional Cloud Architect',
      issuer: 'Google Cloud',
      year: '2023',
      description:
        'Demonstrates expertise in designing, developing, and managing secure, scalable, and reliable cloud solutions using Google Cloud technologies.',
    },
    {
      id: 'cert2',
      name: 'Meta Full Stack Developer Professional Certificate',
      issuer: 'Meta (via Coursera)',
      year: '2022',
      description:
        'Covers front-end and back-end web development using modern technologies like React, Node.js, databases, and best coding practices.',
    },
    {
      id: 'cert3',
      name: 'AWS Certified Machine Learning – Specialty',
      issuer: 'Amazon Web Services (AWS)',
      year: '2021',
      description:
        'Validates expertise in designing, implementing, and maintaining machine learning models on AWS for real-world applications.',
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-gray-900/20"></div>

        {/* Asteroid belt visualization */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`asteroid-${i}`}
              className="absolute rounded-full bg-gray-600"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
              Knowledge Asteroids
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate through the asteroid belt of my educational background and
            professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen size={24} className="text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div
              ref={timelineRef}
              className="relative pl-8 border-l-2 border-indigo-500/30"
            >
              {educationItems.map((item, index) => (
                <div
                  key={item.id}
                  className="timeline-item mb-12 opacity-0 transition-opacity duration-500"
                >
                  <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-indigo-500"></div>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                    <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                    <div className="flex items-center text-indigo-300 mb-1">
                      <Award size={16} className="mr-2" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.year}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award size={24} className="text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="timeline-item bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold">{cert.name}</h4>
                    <span className="px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-blue-300 mb-3">{cert.issuer}</div>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
