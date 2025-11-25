import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaStar, FaFire, FaClock, FaArrowRight } from 'react-icons/fa';
import { BiFoodTag } from 'react-icons/bi';

const ItemModal = ({ item, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!item) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] w-full max-w-5xl rounded-3xl shadow-2xl border border-primary/20 animate-fade-in flex flex-col lg:flex-row h-[85vh] overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
        >
          <FaTimes />
        </button>

        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative bg-[#121212] p-8 flex items-center justify-center min-h-[300px] lg:h-auto overflow-hidden group">
          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,69,0,0.15)_0%,transparent_70%)] animate-spin-slow"></div>
          
          {/* Floating Image */}
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full max-w-[380px] object-contain relative z-10 animate-float transition-transform duration-500 hover:scale-110"
          />
          
          {/* Veg/Non-Veg Badge */}
          <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 z-20 shadow-lg">
             <div className={`w-6 h-6 border-2 ${item.isVeg ? 'border-green-500' : 'border-red-500'} flex items-center justify-center p-0.5`}>
              <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 flex flex-col h-full bg-[#1a1a1a] min-h-0">
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-10 custom-scrollbar min-h-0">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="bg-primary-alt text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.off} OFF
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bowlby text-white mb-2 leading-tight">{item.title}</h2>
              <div className="flex items-center gap-4 text-gray-400 font-comfortaa text-sm">
                <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {item.stats.rating} Rating</span>
                <span className="flex items-center gap-1"><FaFire className="text-orange-500" /> {item.stats.orders} Orders</span>
                <span className="flex items-center gap-1"><FaClock className="text-yellow-500" /> {item.stats.prepTime}</span>
              </div>
            </div>

            <p className="text-gray-300 font-comfortaa leading-relaxed mb-8 border-l-4 border-primary pl-4">
              {item.desc}
            </p>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-primary font-bowlby text-lg mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, idx) => (
                  <span key={idx} className="bg-white/5 text-gray-300 px-3 py-1 rounded-md text-sm border border-white/10">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="mb-8">
              <h3 className="text-primary font-bowlby text-lg mb-3">Nutrition Facts</h3>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(item.nutrition).map(([key, value]) => (
                  <div key={key} className="bg-white/5 p-2 rounded-lg text-center border border-white/10">
                    <div className="text-primary-alt font-bold text-lg">{value}</div>
                    <div className="text-gray-500 text-xs uppercase">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fixed Footer - Price & Action */}
          <div className="p-6 border-t border-white/10 bg-[#1a1a1a] z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <div className="text-3xl font-bowlby text-white">₹{item.price}</div>
                <div className="text-gray-500 text-sm line-through decoration-red-500">₹{item.oldPrice}</div>
              </div>
              <button className="flex-1 bg-primary hover:bg-white text-black font-bold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group text-base">
                <span>ORDER NOW</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default ItemModal;
