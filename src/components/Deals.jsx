import React, { useRef } from 'react';
import { deals } from '../config/dealsConfig';

const Deals = () => {
  const containerRef = useRef();

  const getCardStyle = (variant) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-primary to-primary-alt border-primary text-black';
      case 'primary-alt':
        return 'bg-gradient-to-br from-primary-alt to-primary border-primary text-black';
      case 'alt':
        return 'bg-primary-alt border-primary-alt text-black';
      case 'dark':
      default:
        return 'bg-[#1a1a1a] border-primary/30 hover:border-primary text-white';
    }
  };

  return (
    <section ref={containerRef} id="Deals" className="deals-section py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-primary font-bowlby mb-4 drop-shadow-lg">Wow Deals</h1>
        <p className="text-center text-gray-400 font-comfortaa mb-12 max-w-2xl mx-auto">Grab our exclusive combo deals and save big! Limited time offers you don't want to miss.</p>
        
        {/* Bento Grid - 4 Columns */}
        <div className="deals-grid grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`deal-card ${deal.gridClass} group relative overflow-hidden rounded-3xl p-6 border-2 ${getCardStyle(deal.variant)} hover:scale-[1.02] transition-all duration-300 animate-fade-in flex flex-col justify-between`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl transition-colors ${
                deal.variant === 'dark' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-black/10'
              }`}></div>

              {/* Top Content */}
              <div className="relative z-10">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-3 inline-block ${
                  deal.variant === 'dark' ? 'bg-primary/20 text-primary' : 'bg-black/10 text-black/70'
                }`}>
                  {deal.offer}
                </span>
                <h2 className="text-xl lg:text-2xl font-bowlby leading-tight mb-1">
                  {deal.title}
                </h2>
                <p className={`text-sm font-comfortaa ${
                  deal.variant === 'dark' ? 'text-gray-400' : 'text-black/70'
                }`}>
                  {deal.subtitle}
                </p>
              </div>
              
              {/* Bottom Content */}
              <div className="relative z-10 mt-4">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bowlby ${
                    deal.variant === 'dark' ? 'text-primary-alt' : 'text-black'
                  }`}>
                    ₹{deal.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
