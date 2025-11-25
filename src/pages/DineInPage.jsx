import React, { useState } from 'react';
import { places } from '../config/placesConfig';
import AnimatedLines from '../components/AnimatedLines';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const DineInPage = () => {
  const [filterCity, setFilterCity] = useState('All');
  const cities = ['All', ...new Set(places.map(place => place.city))];

  const filteredPlaces = filterCity === 'All' 
    ? places 
    : places.filter(place => place.city === filterCity);

  return (
    <div className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl lg:text-6xl text-primary font-bowlby mb-4 text-center">Dine In</h1>
        <p className="text-center text-gray-400 font-comfortaa mb-12 max-w-2xl mx-auto">
          Experience the Sizzle ambiance at a location near you.
        </p>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setFilterCity(city)}
              className={`px-6 py-2 rounded-full font-bold font-comfortaa transition-all duration-300 ${
                filterCity === city 
                  ? 'bg-primary text-black scale-105 shadow-lg shadow-primary/20' 
                  : 'bg-[#1a1a1a] text-white border border-white/10 hover:border-primary'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <div 
              key={place.id}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {place.city}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-yellow-500 font-bold text-sm border border-white/10">
                  <FaStar /> {place.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bowlby text-white mb-4 group-hover:text-primary transition-colors">{place.name}</h3>
                
                <div className="space-y-3 text-gray-400 font-comfortaa text-sm">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                    <p>{place.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-primary shrink-0" />
                    <p>{place.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-primary shrink-0" />
                    <p>{place.timing}</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-white/5 hover:bg-primary hover:text-black text-white font-bold py-3 rounded-xl transition-all duration-300 border border-white/10 border-transparent">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DineInPage;
