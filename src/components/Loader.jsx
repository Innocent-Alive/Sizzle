import React, { useEffect, useState } from 'react';

const Loader = ({ isLoading }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      setIsExiting(true);
      // Wait for animation to finish before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
      }, 1000); // 1s animation duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Background Overlay - Fades out */}
      <div 
        className={`fixed inset-0 z-[9998] bg-[#050505] transition-opacity duration-1000 ease-in-out ${
          isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Logo Container - Animates to Navbar position */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none transition-all duration-1000 ease-in-out will-change-transform ${
          isExiting 
            ? 'translate-x-[calc(-50vw+60px)] translate-y-[calc(-50vh+45px)] scale-[0.5]' // Moves to top-left
            : 'scale-100'
        }`}
      >
        {/* Pulsing Logo */}
        <div className={`relative ${!isExiting ? 'animate-pulse' : ''}`}>
           {/* Glow effect */}
           <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full scale-150"></div>
           
           {/* Logo Image */}
           <div className="relative z-10 p-4 rounded-2xl bg-[radial-gradient(var(--color-primary-alt)_10%,var(--color-primary)_80%)] shadow-[0_0_30px_rgba(255,68,0,0.3)]">
             <img 
               src="/Sizzle.png" 
               alt="Sizzle Logo" 
               className="h-[100px] w-auto object-contain drop-shadow-lg" 
             />
           </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
