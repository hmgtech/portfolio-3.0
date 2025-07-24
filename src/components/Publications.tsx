import React from 'react';
import { BookOpen, ExternalLink, Tag } from 'lucide-react';

interface PublicationTag {
  name: string;
  color: string;
}

interface Publication {
  name: string;
  description: string;
  tags: PublicationTag[];
  image: string;
  source_code_link: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      name: 'Cleanliness Automation: YOLOv3',
      description:
        "We tackled India's waste management challenge by leveraging YOLOv3 for real-time waste detection from CCTV feeds. Our solution promises efficient suburban waste management, enhancing residents' quality of life.",
      tags: [
        { name: 'yolov3', color: 'blue-text-gradient' },
        { name: 'waste-management', color: 'green-text-gradient' },
        { name: 'ml', color: 'pink-text-gradient' },
      ],
      image:
        'https://v2.guptahitesh.me/assets/CleanlinessAutomationYOLOv3-bd0dc769.png',
      source_code_link: 'https://ieeexplore.ieee.org/document/9418056',
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
      id="publications"
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
              Research Nebulae
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover my contributions to the scientific community through
            published research.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <div
              key={pub.name}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={pub.image}
                  alt={pub.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={pub.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={20} className="text-red-400" />
                  <h3 className="text-xl font-bold text-white">{pub.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{pub.description}</p>

                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
