import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ExternalLink } from 'lucide-react';

interface Technology {
  name: string;
  link: string;
  icon: string;
}

const Technologies: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
      name: "Angular",
      link: "https://angular.io",
      icon: "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
      name: "Django",
      link: "https://www.djangoproject.com/",
      icon: "https://cdn.worldvectorlogo.com/logos/django.svg"
    },
    {
      name: "Spring",
      link: "https://spring.io/",
      icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
      name: "AWS",
      link: "https://aws.amazon.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
    },
    {
      name: "Google Cloud",
      link: "https://console.cloud.google.com/",
      icon: "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png"
    },
    {
      name: "TensorFlow",
      link: "https://www.tensorflow.org",
      icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      name: "PyTorch",
      link: "https://pytorch.org/",
      icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
    },
    {
      name: "OpenCV",
      link: "https://opencv.org/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    }
  ];

  return (
    <section id="technologies" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
              Technology Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my technological universe - an interactive showcase of the tools and technologies I've mastered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-gray-800/50"
            >
              <div className="w-16 h-16 mb-4 relative">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </h3>
              
              <ExternalLink 
                size={14} 
                className="absolute top-2 right-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              />

              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-orange-500/50 to-red-500/50 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;