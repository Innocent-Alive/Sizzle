import React, { useRef } from 'react';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LocationModal = ({ place, onClose }) => {
  const modalRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    gsap.fromTo(modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo(contentRef.current,
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }
    );
  }, { scope: modalRef });

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: onClose
    });
  };

  if (!place) return null;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(place.address)}&output=embed`;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        ref={contentRef}
        className="relative w-full max-w-4xl bg-[#1a1a1a] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(255,69,0,0.3)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bowlby text-white">{place.name}</h2>
              <p className="text-gray-400 font-comfortaa text-sm">{place.city}</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors group"
          >
            <FaTimes className="text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Map Container */}
        <div className="relative h-[500px] w-full bg-[#1a1a1a]">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
            src={mapUrl}
            allowFullScreen
          ></iframe>
          
          {/* Overlay to ensure clicks work but style remains consistent */}
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-primary/5"></div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#121212] border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-comfortaa text-sm text-center md:text-left">
            {place.address}
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-black font-bold font-comfortaa rounded-xl hover:bg-white transition-colors shadow-lg shadow-primary/20"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
