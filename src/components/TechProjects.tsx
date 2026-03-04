import React from 'react';
import { Github, Tag } from 'lucide-react';

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

const TechProjects: React.FC = () => {
  const projects: Project[] = [
    {
    name: "AskHim",
    description:
      "LLM-powered codebase assistant with ChromaDB embeddings and semantic search.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Embeddings",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/hmgtech/askhim/refs/heads/master/media/UI.png",
    source_code_link: "https://github.com/hmgtech/askhim",
  },
  {
      name: "QuickHire",
      description: "QuickHire, an online marketplace where people can offer their skills and services for others to hire or buy.",
      tags: [
        { name: "reactjs", color: "blue-text-gradient" },
        { name: "nodejs", color: "green-text-gradient" },
        { name: "mongodb", color: "pink-text-gradient" },
      ],
      image: "https://raw.githubusercontent.com/hmgtech/quickhire/refs/heads/master/index.png",
      source_code_link: "https://github.com/hmgtech/quickhire",
    },
    // {
    //   name: "Dal Community App",
    //   description: "The dynamic mobile app designed to unite and empower the Dalhousie University community.",
    //   tags: [
    //     { name: "kotlin", color: "blue-text-gradient" },
    //     { name: "firebase", color: "green-text-gradient" },
    //     { name: "mobile-app", color: "pink-text-gradient" },
    //   ],
    //   image: "https://raw.githubusercontent.com/hmgtech/dal-community/master/img/Dal%20Community%20Mobile%20App24.png",
    //   source_code_link: "https://github.com/hmgtech/dal-community",
    // },
    {
      name: "Agile Track",
      description: "A robust task tracker project management app, utilizing React for the frontend, Flask for the backend, and MySQL for data storage.",
      tags: [
        { name: "reactjs", color: "blue-text-gradient" },
        { name: "flask", color: "green-text-gradient" },
        { name: "aws", color: "pink-text-gradient" },
      ],
      image: "https://raw.githubusercontent.com/hmgtech/agiletrack/master/index.png",
      source_code_link: "https://github.com/hmgtech/agiletrack",
    },
    {
      name: "RentX",
      description: "RentX provides a localized platform for users to buy, rent, or sell items, offering affordable options during financial hardships.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "springboot", color: "pink-text-gradient" },
        { name: "mysql", color: "green-text-gradient" },
      ],
      image: "https://raw.githubusercontent.com/hmgtech/rentx/master/assets/seller.png",
      source_code_link: "https://github.com/hmgtech/rentx",
    },
    {
      name: "Geo Waste Detection",
      description: "IEEE Recognized, Waste Detection App – an innovative solution for identifying and categorizing waste using ML.",
      tags: [
        { name: "ML", color: "blue-text-gradient" },
        { name: "flask", color: "green-text-gradient" },
        { name: "yolo", color: "pink-text-gradient" },
      ],
      image: "https://raw.githubusercontent.com/hmgtech/Geo-Waste/main/screenshots/Detection.png",
      source_code_link: "https://github.com/hmgtech/Geo-Waste",
    },
    {
      name: "Drowsiness Detection",
      description: "This project focuses on creating a tool for detecting drowsiness in individuals, especially applicable in scenarios like driving where alertness is crucial.",
      tags: [
        { name: "open-cv", color: "blue-text-gradient" },
        { name: "numpy", color: "green-text-gradient" },
        { name: "threading", color: "pink-text-gradient" },
      ],
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/5481e13-3da0-b8e5-f87f-a5ff1b6da72c_eyeSight_-_Driver_Monitoring_Driver_Asleep_1.jpeg",
      source_code_link: "https://github.com/hmgtech/Drowsiness-Detection",
    }
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
    <section id="tech-projects" className="min-h-screen relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              Cosmic Innovations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my technical projects that push the boundaries of innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag.color)} flex items-center`}
                    >
                      <Tag size={12} className="mr-1" />
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechProjects;