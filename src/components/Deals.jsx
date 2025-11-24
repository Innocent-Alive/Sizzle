import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Deals = () => {
  const containerRef = useRef();

  // Removed glitchy GSAP animation - using CSS animations instead

  return (
    <section ref={containerRef} id="Deals" className="deals-section py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-primary font-bowlby mb-4 drop-shadow-lg">Wow Deals</h1>
        <p className="text-center text-gray-400 font-comfortaa mb-12 max-w-2xl mx-auto">Grab our exclusive combo deals and save big! Limited time offers you don't want to miss.</p>
        
        {/* Bento Grid */}
        <div className="deals-grid grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {/* Card 1 - Large */}
          <div className="deal-card md:col-span-2 lg:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-primary to-primary-alt border-2 border-primary hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '0ms'}}>
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-black/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bowlby text-black mb-2">5 Classic Pizzas</h2>
                <p className="text-black/80 font-comfortaa text-lg">Perfect for parties!</p>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bowlby text-black">₹459</span>
                  <span className="text-sm text-black/70">only</span>
                </div>
                <p className="text-black/90 font-bold font-comfortaa mb-4">+ free Golden Crunch Fries</p>
                <button className="w-full bg-black text-primary-alt py-3 rounded-full font-bold hover:bg-gray-900 transition-all">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 - Medium */}
          <div className="deal-card md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl p-6 bg-[#1a1a1a] border-2 border-primary/30 hover:border-primary hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '100ms'}}>
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bowlby text-primary mb-2">5 Hot N' Saucy Burger</h2>
                <p className="text-gray-300 font-comfortaa">Fiery & delicious</p>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bowlby text-primary-alt">₹319</span>
                  <span className="text-sm text-gray-400">only</span>
                </div>
                <p className="text-white font-bold font-comfortaa mb-4">+ free 1 Classic Pizza</p>
                <button className="w-full bg-primary text-black py-3 rounded-full font-bold hover:bg-primary-alt transition-all">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 3 - Small */}
          <div className="deal-card md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl p-6 bg-primary-alt border-2 border-primary-alt hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bowlby text-black mb-1">2 Fiesta Burritos</h2>
                <p className="text-black/80 font-comfortaa text-sm">Mexican delight</p>
              </div>
              <div>
                <span className="text-4xl font-bowlby text-black block mb-1">₹239</span>
                <p className="text-black/90 font-bold font-comfortaa text-sm mb-3">+ free 2 Pepsi</p>
                <button className="w-full bg-black text-primary-alt py-2 rounded-full font-bold text-sm hover:bg-gray-900 transition-all">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 4 - Small */}
          <div className="deal-card md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl p-6 bg-[#1a1a1a] border-2 border-primary/30 hover:border-primary hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '300ms'}}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bowlby text-primary mb-1">2 Zesty Taco</h2>
                <p className="text-gray-300 font-comfortaa text-sm">Crunchy treat</p>
              </div>
              <div>
                <span className="text-4xl font-bowlby text-primary-alt block mb-1">₹149</span>
                <p className="text-white font-bold font-comfortaa text-sm mb-3">+ free 2 Pepsi</p>
                <button className="w-full bg-primary text-black py-2 rounded-full font-bold text-sm hover:bg-primary-alt transition-all">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 5 - Medium Tall */}
          <div className="deal-card md:col-span-2 lg:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-primary-alt to-primary border-2 border-primary hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-black/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bowlby text-black mb-2 leading-tight">2 Chicken Pizzas + 1 Crispy Fried Chicken</h2>
                <p className="text-black/80 font-comfortaa">Ultimate combo!</p>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-bowlby text-black">₹499</span>
                </div>
                <p className="text-black/90 font-bold font-comfortaa mb-4">+ free 2 Pepsi</p>
                <button className="w-full bg-black text-primary-alt py-3 rounded-full font-bold hover:bg-gray-900 transition-all">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 6 - Medium */}
          <div className="deal-card md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-3xl p-6 bg-[#1a1a1a] border-2 border-primary/30 hover:border-primary hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{animationDelay: '500ms'}}>
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bowlby text-primary mb-2">Italian + Classic Pizza Combo</h2>
                <p className="text-gray-300 font-comfortaa">Best of both worlds</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bowlby text-primary-alt">₹239</span>
                    <span className="text-sm text-gray-400">only</span>
                  </div>
                  <p className="text-white font-bold font-comfortaa">+ free 2 Pepsi</p>
                </div>
                <button className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-alt transition-all">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
