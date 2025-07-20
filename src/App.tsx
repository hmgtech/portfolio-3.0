import { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SkillsPlanets from './components/SkillsPlanets';
import Technologies from './components/Technologies';
// import ProjectsStations from './components/ProjectsStations';
import WorkExperience from './components/WorkExperience';
import WebProjects from './components/WebProjects';
import TechProjects from './components/TechProjects';
import Certificates from './components/Certificates';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import ParallaxStars from './components/ParallaxStars';
import { WelcomeDialog } from './components/WelcomeDialog';
import CursorEffect from './components/CursorEffect';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');
  const appRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    // Show welcome dialog after a short delay
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionIds = [
      'intro',
      'skills',
      'technologies',
      'projects',
      'experience',
      'web-projects',
      'tech-projects',
      'certificates',
      'publications',
      'education',
      'social-links',
      'contact',
    ];

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        const currentScrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (currentScrollY / maxScroll) * 100;
        setScrollPosition(scrollPercentage);

        const animate = () => {
          const scrollDiff = currentScrollY - lastScrollY.current;
          const easing = 0.08;

          if (Math.abs(scrollDiff) > 0.1) {
            lastScrollY.current += scrollDiff * easing;

            if (rocketRef.current) {
              const rocketProgress = Math.min(
                (lastScrollY.current / maxScroll) * 100,
                95
              );
              const verticalOffset = Math.sin(rocketProgress * 0.1) * 20;
              const rotation = Math.sin(rocketProgress * 0.05) * 2;

              rocketRef.current.style.left = `${rocketProgress}%`;
              rocketRef.current.style.transform = `translateY(${verticalOffset}px) rotate(${rotation}deg)`;
            }

            animationFrameId.current = requestAnimationFrame(animate);
          } else {
            lastScrollY.current = currentScrollY;
          }
        };

        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={appRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <CursorEffect />
      {showWelcome && <WelcomeDialog />}
      <ParallaxStars />

      <div
        ref={rocketRef}
        className="fixed bottom-10 z-50 transition-transform duration-500 ease-out"
        style={{ left: '0%' }}
      >
        <div className="relative">
          <Rocket size={48} className="text-white transform -rotate-90" />
          <div className="absolute -bottom-2 left-1/2 w-16 h-8 bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent opacity-70 blur-md rounded-full transform -translate-x-1/2 rotate-90"></div>
        </div>
      </div>

      <Header activeSection={activeSection} />

      <div className="relative z-10">
        <Introduction />
        <SkillsPlanets />
        <Technologies />
        {/* <ProjectsStations /> */}
        <WorkExperience />
        <WebProjects />
        <TechProjects />
        <Certificates />
        <Publications />
        <Education />
        <SocialLinks />
        <Contact />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${scrollPosition}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
