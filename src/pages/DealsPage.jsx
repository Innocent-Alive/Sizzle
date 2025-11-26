import React, { useState, useRef } from 'react';
import { deals } from '../config/dealsConfig';
import AnimatedLines from '../components/AnimatedLines';
import { FaCopy, FaCheck } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DealsPage = () => {
  const [copiedId, setCopiedId] = useState(null);
  const containerRef = useRef();

  useGSAP(() => {
    // Header Animation - Simple fade in on load
    gsap.fromTo(".deals-header", 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Grid Items Animation - Animate each card as it comes into view
    const cards = gsap.utils.toArray(".deal-card-item");
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Animate when top of card hits bottom 10% of viewport
            toggleActions: "play none none reverse" // Re-animate on scroll up/down
          }
        }
      );
    });
  }, { scope: containerRef });

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isDark = (variant) => !['primary', 'primary-alt', 'alt'].includes(variant);

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
    <div ref={containerRef} className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="deals-header">
          <h1 className="text-4xl lg:text-6xl text-primary font-bowlby mb-4 text-center">Exclusive Deals</h1>
          <p className="text-center text-gray-400 font-comfortaa mb-12 max-w-2xl mx-auto">
            Grab the hottest offers and save big on your favorite meals.
          </p>
        </div>

        <div className="deals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`deal-card-item relative overflow-hidden rounded-3xl p-6 border-2 ${getCardStyle(deal.variant)} hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-[250px]`}
            >
              {/* Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl transition-colors ${
                isDark(deal.variant) ? 'bg-primary/10' : 'bg-black/10'
              }`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    isDark(deal.variant) ? 'bg-primary/20 text-primary' : 'bg-black/10 text-black/70'
                  }`}>
                    {deal.offer}
                  </span>
                </div>
                <h2 className="text-2xl font-bowlby leading-tight mb-1">{deal.title}</h2>
                <p className={`text-sm font-comfortaa ${
                  isDark(deal.variant) ? 'text-gray-400' : 'text-black/70'
                }`}>
                  {deal.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-4 flex items-end justify-between">
                <span className={`text-4xl font-bowlby ${
                  isDark(deal.variant) ? 'text-primary-alt' : 'text-black'
                }`}>
                  ₹{deal.price}
                </span>

                <button
                  onClick={() => handleCopy(deal.code, deal.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold font-comfortaa transition-all duration-300 ${
                    isDark(deal.variant) 
                      ? 'bg-white/10 hover:bg-primary hover:text-black text-white' 
                      : 'bg-black/10 hover:bg-black hover:text-white text-black'
                  }`}
                >
                  {copiedId === deal.id ? (
                    <>
                      <FaCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy /> {deal.code}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
