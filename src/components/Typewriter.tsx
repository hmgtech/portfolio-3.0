import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      setCurrentText(prev => {
        if (!isDeleting) {
          if (prev === word) {
            setTimeout(() => setIsDeleting(true), delay);
            return prev;
          }
          return word.substring(0, prev.length + 1);
        }
        if (prev === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return '';
        }
        return word.substring(0, prev.length - 1);
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="text-purple-400">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Typewriter;
