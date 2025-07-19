import React, { useEffect, useRef } from 'react';

export function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const starCount = 100;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random size
      const size = `${Math.random() * 3}px`;
      star.style.width = size;
      star.style.height = size;

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(star);
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
  );
}
