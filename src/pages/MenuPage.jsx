import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pizza1 from '../assets/pngegg (3).png';
import pizza2 from '../assets/pngegg.png';
import pizza3 from '../assets/pngegg (2).png';
import burger1 from '../assets/hero-image.png';
import burger2 from '../assets/pngegg (4).png';
import chicken from '../assets/pngegg (7).png';
import fries from '../assets/pngegg (5).png';
import taco from '../assets/pngegg (8).png';
import burrito from '../assets/burito.png';

gsap.registerPlugin(ScrollTrigger);

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef();

  const allMenuItems = [
    { img: pizza1, title: "Classic Pizza", desc: "Indulge in the timeless favorite, our Classic Pizza. Featuring a hand-tossed crust, tangy tomato sauce, and a generous layer of melted mozzarella cheese.", price: "99", oldPrice: "149", off: "40%", category: "Pizza" },
    { img: pizza2, title: "Italian Pizza", desc: "Experience the authentic taste of Italy with our Italian Pizza. Featuring a thin, crispy crust topped with a rich tomato sauce, fresh mozzarella cheese.", price: "159", oldPrice: "199", off: "20%", category: "Pizza" },
    { img: pizza3, title: "Chicken Pizza", desc: "Savor the delicious combination of tender, juicy chicken and our signature blend of cheeses on a perfectly baked crust.", price: "199", oldPrice: "249", off: "20%", category: "Pizza" },
    { img: burger1, title: "Hot and Saucy Burger", desc: "Turn up the heat with our Hot and Saucy Burger. This fiery favorite boasts a succulent beef patty smothered in a spicy, tangy sauce.", price: "69", oldPrice: "119", off: "40%", category: "Burger" },
    { img: burger2, title: "Crispy Chicken Burger", desc: "Get ready to crunch into perfection with our Crispy Chicken Burger. Featuring a golden, breaded chicken fillet that's fried to crispy perfection.", price: "159", oldPrice: "199", off: "20%", category: "Burger" },
    { img: chicken, title: "Crispy Fried Chicken", desc: "Sink your teeth into our mouthwatering Crispy Fried Chicken. Each piece is hand-breaded and fried to golden perfection.", price: "199", oldPrice: "299", off: "33%", category: "Chicken" },
    { img: fries, title: "Golden Crunch Fries", desc: "Indulge in our Golden Crunch Fries, perfectly cut and fried to a crispy golden brown. Sprinkled with just the right amount of sea salt.", price: "59", oldPrice: "99", off: "40%", category: "Sides" },
    { img: taco, title: "Zesty Taco", desc: "Take a bite of our Zesty Street Taco and enjoy a taste explosion. Filled with seasoned ground beef, fresh lettuce, diced tomatoes.", price: "79", oldPrice: "149", off: "45%", category: "Tacos" },
    { img: burrito, title: "Fiesta Burrito", desc: "Experience a burst of flavors with our Fiesta Burrito. Packed with seasoned rice, tender grilled chicken, black beans, fresh pico de gallo.", price: "129", oldPrice: "179", off: "25%", category: "Burritos" }
  ];

  const categories = ['All', 'Pizza', 'Burger', 'Chicken', 'Sides', 'Tacos', 'Burritos'];

  const filteredItems = allMenuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useGSAP(() => {
    gsap.from(".menu-item-card", {
      scrollTrigger: {
        trigger: ".menu-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef, dependencies: [filteredItems] });

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bowlby text-primary mb-4 drop-shadow-lg">Our Complete Menu</h1>
          <p className="text-gray-400 font-comfortaa text-lg max-w-2xl mx-auto">Browse through our entire collection of delicious items. Filter by category or search for your favorite dish!</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between bg-[#1a1a1a] p-6 rounded-2xl border border-primary/20">
          {/* Search Bar */}
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 bg-black/50 text-white rounded-full border-2 border-primary/30 focus:border-primary outline-none font-comfortaa placeholder-gray-500 transition-all"
            />
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg"></i>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-bold font-comfortaa transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-black shadow-lg shadow-primary/30'
                    : 'bg-black/50 text-white border border-primary/30 hover:border-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400 font-comfortaa">
          Showing <span className="text-primary font-bold">{filteredItems.length}</span> {filteredItems.length === 1 ? 'item' : 'items'}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="menu-item-card bg-[#1a1a1a] rounded-3xl p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>

                {/* Image */}
                <div className="relative h-48 flex items-center justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl text-primary font-bowlby leading-tight">{item.title}</h3>
                    <span className="bg-primary-alt text-black text-xs font-bold px-2 py-1 rounded-full shrink-0">{item.off} OFF</span>
                  </div>

                  <p className="text-gray-300 text-sm font-comfortaa line-clamp-2">{item.desc}</p>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm line-through">&#8377;{item.oldPrice}</span>
                      <span className="text-3xl text-primary-alt font-bowlby">&#8377;{item.price}</span>
                    </div>
                    <button className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl text-gray-400 font-comfortaa">No items found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
