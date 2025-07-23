import React, { useEffect, useState, useRef } from 'react';

const ParallaxStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    
    // Adjust star parameters based on device
    const starCount = isMobile ? 100 : 200;
    const maxStarSize = isMobile ? 1.5 : 2;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxStarSize,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    const resize = () => {
      // Store existing stars positions as percentages
      const starsPositions = stars.map(star => ({
        xPercent: star.x / canvas.width,
        yPercent: star.y / canvas.height,
        size: star.size,
        speed: star.speed
      }));

      // Update canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalculate star positions based on new dimensions
      stars.forEach((star, index) => {
        star.x = starsPositions[index].xPercent * canvas.width;
        star.y = starsPositions[index].yPercent * canvas.height;
      });
    };

    resize();
    animate();

    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isMobile]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParallaxStars;