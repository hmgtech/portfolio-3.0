import React from 'react';
import { Briefcase, Calendar, Zap, Rocket } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const WorkExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 'siemens',
      company: 'Siemens',
      role: 'Software Developer - AI',
      period: 'September 2024 - Current',
      achievements: [
          "Contributed to an innovative Retrieval-Augmented Generation system integrating advanced data pipelines, vector embeddings, and large language models, enabling data retrieval.",
          "Built FastAPI endpoints to improve front-end and AI model communication.",
          "Streamlined DevOps with Jenkins for automated CI/CD pipelines.",
          "Optimized AI systems and APIs for better performance and scalability.",
          "Developed and optimized React components for AI-powered app UIs.",
          "Participated in code reviews and promoted teamwork within the dev team.",
          "Skills: RAG, React, FastAPI, Jenkins, LLM, DevOps, AI, Collaboration"
      ]

    },
    {
      id: 'manentia',
      company: 'Manentia AI',
      role: 'Software Engineer [ML OPS]',
      period: 'August 2022 - July 2023',
      achievements: [
        'Secured $1 Million investment for pioneering technology excellence',
        'Developed Django APIs integrated with machine learning for medical imaging, reducing response time by 15% through caching and indexing',
        'Decreased React frontend load time by 20% using code-splitting and lazy loading techniques',
        'Implemented AWS CodePipeline and Lambda instances, reducing downtime by 25% and server costs by 10%',
        'Processed DICOM medical data with 98% accuracy using PyTorch and TensorFlow ML models',
        "Skills: Microservices (Python, Docker), RESTful APIs, Database Optimization (PostgreSQL), React Optimization, AWS, Leadership, Communication"
      ]
    },
    {
      id: 'mobiuso',
      company: 'Mobiuso Technologies',
      role: 'Software Engineer',
      period: 'January 2021 - July 2022',
      achievements: [
        'Reduced load time for Angular project using Pure Pipe, Preloading modules, and lazy loading by 20%',
        'Improved API latency in NodeJS and Django by 15% using async operations and database caching',
        'Developed advanced web scrapers that improved data-driven decision-making for clients',
        'Delivered quality software solutions praised by clients',
        "Skills: Django, NodeJS, ExpressJS, React, Linux, Data Processing and Analysis, Communication, Innovative, Teamwork"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Mission Control
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate through my professional journey across different space stations ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline for mobile */}
          <div className="md:hidden space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-purple-500/50"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full">
                  <div className="absolute w-6 h-6 bg-purple-500/20 rounded-full -left-1 -top-1 animate-pulse"></div>
                </div>
                
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                  <div className="flex items-center text-purple-400 mb-2">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.role}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Zap size={16} className="text-purple-400 mt-1" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500/50 via-purple-500/50 to-indigo-500/50 rounded-full transform -translate-x-1/2"></div>

            <div className="relative">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex items-center justify-center mb-24 last:mb-0`}
                >
                  <div className={`w-full flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-[calc(50%-3rem)] perspective-1000`}>
                      <div 
                        className={`
                          bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20
                          transition-all duration-500 transform hover:scale-[1.02]
                          group hover:border-purple-500/40
                          ${index % 2 === 0 ? 'origin-right hover:rotate-y-3' : 'origin-left hover:rotate-y-minus-3'}
                        `}
                      >
                        {/* Card header */}
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-purple-400 mb-2 text-lg">
                            <Briefcase size={20} className="mr-2" />
                            <span>{exp.role}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-lg">
                            <Calendar size={20} className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-4">
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i}
                              className="group/item hover:bg-purple-500/10 rounded-lg p-3 transition-all duration-300
                                transform hover:translate-x-2"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <Zap 
                                    size={20} 
                                    className="text-purple-400 transform group-hover/item:scale-110 transition-transform"
                                    fill="currentColor"
                                  />
                                </div>
                                <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg">
                                  {achievement}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>

                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl -z-10"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <div className="relative w-24 flex items-center justify-center">
                      <div className="relative">
                        {/* Rocket node */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full w-16 h-16 animate-bounce" style={{ animationDuration: '3s' }}>
                          <Rocket 
                            size={32} 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rotate-45"
                          />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="w-[calc(50%-3rem)]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;