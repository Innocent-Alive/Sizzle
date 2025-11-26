import React, { useEffect, useState } from 'react';

const AnimatedLines = () => {
  const [lineStates, setLineStates] = useState([]);

  useEffect(() => {
    // Create 30 diagonal lines covering the entire screen
    const numberOfLines = 30;
    const initialStates = Array(numberOfLines).fill(0).map((_, i) => ({
      id: i,
      visible: Math.random() > 0.5, // Randomly start visible or hidden
      animationDelay: Math.random() * 5,
    }));
    setLineStates(initialStates);

    // Randomly toggle line visibility
    const interval = setInterval(() => {
      setLineStates(prev => 
        prev.map(line => ({
          ...line,
          visible: Math.random() > 0.3, // 70% chance to be visible
        }))
      );
    }, 3000); // Change pattern every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 35px,
          rgba(255, 68, 0, 0.03) 35px,
          rgba(255, 68, 0, 0.03) 37px
        )`
      }}>
        {/* Animated overlay lines */}
        {lineStates.map((line, index) => (
          <div
            key={line.id}
            className="absolute w-full h-0.5 bg-primary origin-top-left transition-opacity duration-1000"
            style={{
              top: `${(index * 100) / lineStates.length}%`,
              left: 0,
              transform: 'rotate(45deg) translateX(-50%)',
              width: '200%',
              opacity: line.visible ? 0.15 : 0,
              transitionDelay: `${line.animationDelay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLines;
