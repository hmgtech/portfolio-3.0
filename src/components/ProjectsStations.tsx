import React, { useState } from 'react';
import { Satellite, ExternalLink, Code, Users, Zap, Shield } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  link?: string;
}

const ProjectsStations: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Nebula Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and AI-powered product recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
      icon: <Zap size={24} />,
      color: 'from-blue-500 to-cyan-400',
      link: '#'
    },
    {
      id: 'project2',
      title: 'Stellar Analytics Dashboard',
      description: 'Interactive data visualization platform for business intelligence with customizable widgets and automated reporting.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      icon: <Code size={24} />,
      color: 'from-purple-500 to-pink-400',
      link: '#'
    },
    {
      id: 'project3',
      title: 'Orbit Social Network',
      description: 'Community platform with real-time messaging, content sharing, and advanced privacy controls.',
      technologies: ['React Native', 'Firebase', 'GraphQL', 'WebRTC'],
      icon: <Users size={24} />,
      color: 'from-green-500 to-emerald-400',
      link: '#'
    },
    {
      id: 'project4',
      title: 'Quantum Security Suite',
      description: 'Enterprise security solution with advanced threat detection and automated incident response capabilities.',
      technologies: ['Python', 'Kubernetes', 'TensorFlow', 'ELK Stack'],
      icon: <Shield size={24} />,
      color: 'from-red-500 to-orange-400',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Space Stations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dock at these orbital stations representing major projects and milestones throughout my professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 border border-gray-800 group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Background glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
              
              {/* Station icon */}
              <div className="absolute -right-6 -top-6 w-24 h-24 flex items-center justify-center">
                <Satellite 
                  size={48} 
                  className={`text-gray-700 transform rotate-45 transition-transform duration-500 ${
                    activeProject === project.id ? 'rotate-[135deg]' : 'rotate-45'
                  }`} 
                />
              </div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-6`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={`${project.id}-${tech}`}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsStations;