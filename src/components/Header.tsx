import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, FileText } from 'lucide-react';
import ResumeViewer from './ResumeViewer';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'intro', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'tech-projects', label: 'Projects' },
    { id: 'certificates', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket size={24} className="text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Hitesh Gupta | Space Odyssey
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-2 py-1 transition-all duration-300
                    ${activeSection === item.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded animate-[fadeIn_0.3s_ease-out]"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white flex items-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-colors"
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '73px', height: 'calc(100vh - 73px)' }}
        >
          <nav className="container mx-auto px-4 py-6 h-full overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsResumeOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-colors"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Resume Viewer Modal */}
      {isResumeOpen && (
        <ResumeViewer onClose={() => setIsResumeOpen(false)} />
      )}
    </>
  );
};

export default Header;