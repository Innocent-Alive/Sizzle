import React, { useState, useRef, useEffect } from 'react';
import { places } from '../config/placesConfig';
import AnimatedLines from '../components/AnimatedLines';
import LocationModal from '../components/LocationModal';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DineInPage = () => {
  const location = useLocation();
  const [filterCity, setFilterCity] = useState('All');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const containerRef = useRef();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get('city');
    if (cityParam) {
      setFilterCity(cityParam);
    }
  }, [location]);

  useGSAP(() => {
    // Header Animation
    gsap.fromTo(".dine-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Filter Buttons Animation
    gsap.fromTo(".filter-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)", delay: 0.3 }
    );

    // Cards Animation
    const cards = gsap.utils.toArray(".place-card");
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [filterCity] });

  const cities = ['All', ...new Set(places.map(place => place.city))];

  const filteredPlaces = filterCity === 'All' 
    ? places 
    : places.filter(place => place.city === filterCity);

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="dine-header text-center mb-12">
          <h1 className="text-4xl lg:text-6xl text-primary font-bowlby mb-4">Dine In</h1>
          <p className="text-gray-400 font-comfortaa max-w-2xl mx-auto text-lg">
            Experience the Sizzle ambiance at a location near you. Click on any card to view the location map.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setFilterCity(city)}
              className={`filter-btn px-6 py-2 rounded-full font-bold font-comfortaa transition-all duration-300 ${
                filterCity === city 
                  ? 'bg-primary text-black scale-105 shadow-[0_0_20px_rgba(255,69,0,0.4)]' 
                  : 'bg-[#1a1a1a] text-white border border-white/10 hover:border-primary hover:text-primary'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div 
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="place-card group cursor-pointer bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10"></div>
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-yellow-500 font-bold text-sm border border-white/10 shadow-lg">
                  <FaStar /> {place.rating}
                </div>
                <div className="absolute top-4 left-4 z-20 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {place.city}
                </div>
                
                {/* Map Overlay Hint */}
                <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaMapMarkerAlt /> View Map
                  </div>
                </div>
              </div>

              <div className="p-8 relative">
                <h3 className="text-2xl font-bowlby text-white mb-6 group-hover:text-primary transition-colors">{place.name}</h3>
                
                <div className="space-y-4 text-gray-400 font-comfortaa text-sm">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <p className="pt-1 group-hover/item:text-white transition-colors">{place.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <FaPhoneAlt className="text-primary" />
                    </div>
                    <p className="group-hover/item:text-white transition-colors">{place.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <FaClock className="text-primary" />
                    </div>
                    <p className="group-hover/item:text-white transition-colors">{place.timing}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Get Directions</span>
                  <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Modal */}
      {selectedPlace && (
        <LocationModal 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)} 
        />
      )}
    </div>
  );
};

export default DineInPage;
