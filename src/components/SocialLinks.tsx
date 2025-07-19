import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  link: string;
  icon: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hiteshkumar-gupta-0878b3173/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/c/enggtech",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
    },
    {
      name: "Medium",
      link: "https://medium.com/@hitesh-gupta",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg"
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/hiteshgupta2198/",
      icon: "https://assets.leetcode.com/static_assets/public/icons/favicon-32x32.png"
    },
    {
      name: "GitHub",
      link: "https://github.com/hmgtech/",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/13533000/hitesh-gupta",
      icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/hiteshcoding",
      icon: "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg"
    }
  ];

  return (
    <section id="social-links" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
              Digital Constellations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with me across the digital universe through these stellar networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 transform transition-all duration-500 hover:scale-[1.05] flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-white/10 p-2">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-lg font-medium text-white mb-2">{social.name}</h3>
              
              <ExternalLink size={16} className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl -z-10"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;