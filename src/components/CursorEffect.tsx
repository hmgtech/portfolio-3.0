import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const frameRef = useRef<number>(0);
  const lastEmitTimeRef = useRef(0);

  const colors = [
    'rgba(123, 97, 255, 0.6)',  // Reduced opacity
    'rgba(45, 149, 255, 0.6)',
    'rgba(255, 89, 199, 0.6)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 211, 25, 0.6)',
  ];

  const createParticle = (x: number, y: number, speedMultiplier = 1): Particle => {
    return {
      x,
      y,
      size: Math.random() * 2 + 1, // Reduced size
      speedX: (Math.random() - 0.5) * 3 * speedMultiplier, // Reduced speed
      speedY: (Math.random() - 0.5) * 3 * speedMultiplier,
      life: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: 'circle' // Simplified to just circles
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastEmitTimeRef.current < 16) return; // Limit to ~60fps

      const speed = Math.sqrt(
        Math.pow(e.clientX - mouseRef.current.prevX, 2) +
        Math.pow(e.clientY - mouseRef.current.prevY, 2)
      );
      
      const particleCount = Math.min(Math.floor(speed / 20), 3); // Reduced particles
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }

      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        prevX: mouseRef.current.x,
        prevY: mouseRef.current.y
      };
      
      lastEmitTimeRef.current = currentTime;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= 0.03; // Faster fade
        if (particle.life <= 0) return false;

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95; // Faster shrink

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('0.6', `${particle.life}`);
        ctx.fill();

        return true;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default CursorEffect;