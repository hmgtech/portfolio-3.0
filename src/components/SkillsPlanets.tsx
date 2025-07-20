import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Cpu, LineChart, Server } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  orbitDuration: number;
  initialRotation: number;
  size: number;
}

const SkillsPlanets: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills: Skill[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Mastery in React, Vue.js, and modern JavaScript frameworks. Specializing in responsive design, state management, and performance optimization.',
      icon: <Code className="text-white" />,
      color: 'from-blue-500 to-cyan-400',
      orbitDuration: 20,
      initialRotation: 0,
      size: isMobile ? 50 : 80
    },
    {
      id: 'backend',
      name: 'Backend Development',
      description: 'Expert in Node.js, Express, and microservices architecture. Building scalable APIs and real-time applications.',
      icon: <Server className="text-white" />,
      color: 'from-green-500 to-emerald-400',
      orbitDuration: 25,
      initialRotation: 60,
      size: isMobile ? 45 : 70
    },
    {
      id: 'database',
      name: 'Database Engineering',
      description: 'Proficient in SQL and NoSQL databases. Experienced in optimization, scaling, and data modeling.',
      icon: <Database className="text-white" />,
      color: 'from-yellow-500 to-orange-400',
      orbitDuration: 30,
      initialRotation: 120,
      size: isMobile ? 40 : 65
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with modern design principles and tools.',
      icon: <Palette className="text-white" />,
      color: 'from-purple-500 to-pink-400',
      orbitDuration: 35,
      initialRotation: 180,
      size: isMobile ? 45 : 75
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      description: 'Implementing intelligent solutions using TensorFlow and PyTorch. Expertise in computer vision and NLP.',
      icon: <Cpu className="text-white" />,
      color: 'from-red-500 to-rose-400',
      orbitDuration: 40,
      initialRotation: 240,
      size: isMobile ? 42 : 70
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      description: 'Building data visualization solutions and analytics dashboards for informed decision-making.',
      icon: <LineChart className="text-white" />,
      color: 'from-indigo-500 to-violet-400',
      orbitDuration: 45,
      initialRotation: 300,
      size: isMobile ? 38 : 60
    }
  ];

  useEffect(() => {
    const planets = document.querySelectorAll('.skill-planet');
    planets.forEach((planet) => {
      if (activeSkill) {
        planet.classList.add('paused');
      } else {
        planet.classList.remove('paused');
      }
    });
  }, [activeSkill]);

  return (
    <section id="skills" className="min-h-screen relative py-32 overflow-hidden">
      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(var(--initial-rotation)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--initial-rotation)));
            }
            to {
              transform: rotate(calc(360deg + var(--initial-rotation))) translateX(var(--orbit-radius)) rotate(calc(-1 * (360deg + var(--initial-rotation))));
            }
          }

          .skill-planet {
            --orbit-radius: ${isMobile ? '100px' : '150px'};
            position: absolute;
            top: 50%;
            left: 50%;
            animation: orbit var(--orbit-duration) linear infinite;
            transform: rotate(var(--initial-rotation)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--initial-rotation)));
          }

          .skill-planet.paused {
            animation-play-state: paused;
          }

          .orbit-path {
            border: 1px dashed rgba(255, 255, 255, 0.1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
          }

          .orbit-path::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50%;
            background: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            opacity: 0.5;
          }
        `}
      </style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Skill Planets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the cosmic system of my skills and expertise, each planet representing a unique domain of knowledge.
          </p>
        </div>

        <div ref={containerRef} className="relative h-[500px] md:h-[600px] mx-auto max-w-[600px]">
          {/* Central sun */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 flex items-center justify-center z-0 animate-pulse shadow-[0_0_60px] shadow-orange-500/50">
            <div className="text-white text-center">
              <div className="font-bold text-lg md:text-lg">Core</div>
              <div className="text-base md:text-md">Skills</div>
            </div>
          </div>

          {/* Orbit paths with glow effect */}
          {skills.map((_, index) => (
            <div
              key={`orbit-${index}`}
              className="orbit-path"
              style={{
                width: `${(isMobile ? 200 : 300) + index * (isMobile ? 40 : 60)}px`,
                height: `${(isMobile ? 200 : 300) + index * (isMobile ? 40 : 60)}px`,
              }}
            />
          ))}

          {/* Planets */}
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-planet transition-transform duration-300 ${
                activeSkill && activeSkill !== skill.id ? 'opacity-30' : 'opacity-100'
              }`}
              style={{
                '--orbit-duration': `${skill.orbitDuration}s`,
                '--initial-rotation': `${skill.initialRotation}deg`,
                '--orbit-radius': `${(isMobile ? 100 : 150) + index * (isMobile ? 20 : 30)}px`
              } as any}
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div
                className={`
                  absolute -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-gradient-to-br ${skill.color}
                  cursor-pointer transition-all duration-300
                  hover:scale-110 z-10
                  flex items-center justify-center
                  shadow-lg hover:shadow-2xl
                  group
                `}
                style={{
                  width: `${skill.size}px`,
                  height: `${skill.size}px`,
                }}
              >
                <div className="text-xl">{skill.icon}</div>

                {/* Info Card */}
                {activeSkill === skill.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-gray-900/95 backdrop-blur-md p-4 rounded-lg shadow-xl z-50 border border-gray-700 transition-opacity duration-300 opacity-100">
                    <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-300">{skill.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPlanets;