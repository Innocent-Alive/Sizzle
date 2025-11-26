import React, { useState } from 'react';
import menuOpenIcon from '../assets/iconmonstr-eat-2-48.png';
import menuCloseIcon from '../assets/iconmonstr-eat-1-48.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', path: '/about', isRoute: true },
    { name: 'Menu', path: '/menu', isRoute: true },
    { name: 'Dine In', path: '/dine-in', isRoute: true },
    { name: 'Deals', path: '/#Deals', isRoute: false },
    { name: 'Order Now', path: '/#Order', isRoute: false }
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <nav className={`flex justify-between items-center px-[20px] lg:px-[50px] py-3 transition-all duration-300 ${
        isTransparent 
          ? 'bg-primary shadow-lg' 
          : 'bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl'
      }`}>
        <Link to="/" className="no-underline">
          <div className="flex flex-col p-[5px] rounded-[10px] cursor-pointer bg-[radial-gradient(var(--color-primary-alt)_10%,var(--color-primary)_80%)] hover:scale-105 transition-transform duration-300">
            <img src="/Sizzle.png" alt="Sizzle Logo" className="h-[50px] lg:h-[60px] w-auto object-contain drop-shadow-md" />
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
          <div className="lg:hidden cursor-pointer z-50 p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-colors" onClick={toggleMenu}>
            <img 
              src={isMenuOpen ? menuCloseIcon : menuOpenIcon} 
              alt="Menu" 
              className="w-[24px] h-[24px] invert"
            />
          </div>

          {/* Desktop Menu */}
          <div className={`
            fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-[30px] text-[1.5rem] transition-transform duration-500 ease-out z-40 rounded-[20px]
            lg:static lg:flex-row lg:bg-transparent lg:p-0 lg:gap-4 lg:text-[1rem] lg:translate-x-0
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            {navItems.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`
                    navlink relative px-6 py-2 rounded-full font-bold font-comfortaa transition-all duration-300 overflow-hidden group
                    ${location.pathname === item.path 
                      ? 'bg-primary text-black shadow-[0_0_20px_rgba(255,69,0,0.4)] scale-105' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'}
                    ${item.name === 'Order Now' 
                      ? isTransparent 
                        ? 'bg-black text-primary border-2 border-black hover:bg-white hover:text-black hover:border-white shadow-lg'
                        : 'bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary shadow-lg shadow-primary/20'
                      : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname !== item.path && item.name !== 'Order Now' && (
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  )}
                </Link>
              ) : (
                <a 
                  key={item.name}
                  href={item.path} 
                  className={`
                    navlink relative px-6 py-2 rounded-full font-bold font-comfortaa transition-all duration-300 overflow-hidden group
                    text-gray-300 hover:text-white hover:bg-white/5
                    ${item.name === 'Order Now' 
                      ? isTransparent 
                        ? 'bg-black text-primary border-2 border-black hover:bg-white hover:text-black hover:border-white shadow-lg'
                        : 'bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary shadow-lg shadow-primary/20'
                      : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                </a>
              )
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
