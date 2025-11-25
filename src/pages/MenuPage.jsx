import React, { useState, useRef } from 'react';
import AnimatedLines from '../components/AnimatedLines';
import ItemModal from '../components/ItemModal';
import { menuItems, categories } from '../config/menuConfig';

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const containerRef = useRef();

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const VegNonVegIcon = ({ isVeg }) => (
    <div className={`w-5 h-5 border-2 ${isVeg ? 'border-green-500' : 'border-red-500'} flex items-center justify-center`}>
      <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      
      <div className="max-w-7xl mx-auto relative z-10">
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
                onClick={() => setSelectedItem(item)}
                className="menu-item-card bg-[#1a1a1a] rounded-3xl p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 group relative overflow-hidden opacity-0 animate-fade-in cursor-pointer flex flex-col h-full"
                style={{animationDelay: `${index * 80}ms`}}
              >
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>

                {/* Veg/Non-Veg Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <VegNonVegIcon isVeg={item.isVeg} />
                </div>

                {/* Image */}
                <div className="relative h-48 flex items-center justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 flex-grow flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-2xl text-primary font-bowlby leading-tight">{item.title}</h3>
                    <span className="bg-primary-alt text-black text-xs font-bold px-2 py-1 rounded-full shrink-0 h-fit">{item.off} OFF</span>
                  </div>

                  <p className="text-gray-300 text-sm font-comfortaa line-clamp-2 mb-4">{item.desc}</p>

                  {/* Price and Button - Separated Rows */}
                  <div className="mt-auto space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl text-white font-bowlby">&#8377;{item.price}</span>
                      <span className="text-gray-500 text-sm line-through decoration-red-500">&#8377;{item.oldPrice}</span>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                      className="w-full bg-primary text-black py-3 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      <span>ADD TO CART</span>
                      <i className="fas fa-shopping-cart text-sm"></i>
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
