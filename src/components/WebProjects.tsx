import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';

interface WebProject {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

const WebProjects: React.FC = () => {
  const projects: WebProject[] = [
    {
      id: 'gupta-transport',
      title: "Gupta Transport",
      description: "India's Premier Logistics Partner with 50 years of excellence in transportation, connecting businesses across India with reliability and innovation.",
      url: 'https://gupta-transport.netlify.app/',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 'golden-cuts',
      title: "Golden Cuts",
      description: "PREMIUM BARBER SHOP - Experience the art of grooming with our expert barbers. Where style meets tradition.",
      url: 'https://golden-cuts.netlify.app/',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 'portfolio',
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my journey as a Software Developer.",
      url: 'https://guptahitesh.me/',
      image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  ];

  return (
<section id="web-projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Orbital Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my web development projects launched into the digital universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <Globe size={20} className="text-blue-400" />
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">Visit Site</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;