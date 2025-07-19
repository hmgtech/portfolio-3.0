import React, { useEffect, useRef } from 'react';

const ParallaxStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));

    // Create comets
    const comets = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      tail: 50,
      active: false,
      timeUntilActive: Math.random() * 5000
    }));

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    };

    const drawComet = (comet: typeof comets[0]) => {
      if (!ctx) return;
      
      // Draw comet tail
      const gradient = ctx.createLinearGradient(
        comet.x,
        comet.y,
        comet.x - Math.cos(comet.angle) * comet.tail,
        comet.y - Math.sin(comet.angle) * comet.tail
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(
        comet.x - Math.cos(comet.angle) * comet.tail,
        comet.y - Math.sin(comet.angle) * comet.tail
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw comet head
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        drawStar(star.x, star.y, star.size, star.opacity);
      });

      // Update and draw comets
      comets.forEach(comet => {
        if (!comet.active) {
          comet.timeUntilActive -= 16;
          if (comet.timeUntilActive <= 0) {
            comet.active = true;
            comet.x = -50;
            comet.y = Math.random() * canvas.height;
            comet.angle = Math.PI * 0.15;
          }
          return;
        }

        comet.x += Math.cos(comet.angle) * comet.speed * 5;
        comet.y += Math.sin(comet.angle) * comet.speed * 5;

        if (comet.x > canvas.width + 100 || comet.y > canvas.height + 100 || comet.y < -100) {
          comet.active = false;
          comet.timeUntilActive = Math.random() * 5000;
        } else {
          drawComet(comet);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParallaxStars;