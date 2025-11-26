import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mumbaiImg from '../assets/Mumbai.jpg';
import puneImg from '../assets/Pune.jpg';
import bangaloreImg from '../assets/Bangalore.jpg';
import goaImg from '../assets/Goa.jpg';

const Locations = () => {
  const cities = [
    { name: 'Mumbai', image: mumbaiImg },
    { name: 'Pune', image: puneImg },
    { name: 'Bangalore', image: bangaloreImg },
    { name: 'Goa', image: goaImg }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-primary font-bowlby mb-4">Find Us In</h2>
          <p className="text-gray-400 font-comfortaa max-w-2xl mx-auto">
            Experience the Sizzle vibe across these vibrant cities in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link 
              key={city.name} 
              to={`/dine-in?city=${city.name}`}
              className="group relative h-[300px] rounded-3xl overflow-hidden border-2 border-white/10 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,68,0,0.3)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300 border border-white/20">
                  <FaMapMarkerAlt className="text-2xl text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-3xl font-bowlby text-white group-hover:text-primary transition-colors duration-300 tracking-wider">
                  {city.name}
                </h3>
                <span className="mt-2 text-sm font-comfortaa text-gray-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                  View Locations &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
