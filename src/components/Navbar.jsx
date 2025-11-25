import React, { useState } from 'react';
import menuOpenIcon from '../assets/iconmonstr-eat-2-48.png';
import menuCloseIcon from '../assets/iconmonstr-eat-1-48.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <nav className="flex justify-between items-center px-[20px] lg:px-[50px] py-2 bg-primary shadow-lg">
        <Link to="/" className="no-underline">
          <div className="flex flex-col p-[5px] rounded-[10px] cursor-pointer bg-[radial-gradient(var(--color-primary-alt)_10%,var(--color-primary)_80%)] hover:scale-105 transition-transform duration-300">
            <img src="/Sizzle.png" alt="Sizzle Logo" className="h-[50px] lg:h-[60px] w-auto object-contain drop-shadow-md" />
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
          <div className="lg:hidden cursor-pointer z-50" onClick={toggleMenu}>
            <img 
              src={isMenuOpen ? menuCloseIcon : menuOpenIcon} 
              alt="Menu" 
              className="w-[30px] h-[30px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className={`
            fixed inset-0 bg-primary flex flex-col items-center justify-center gap-[30px] text-[1.5rem] transition-transform duration-300 ease-in-out z-40
            lg:static lg:flex-row lg:bg-transparent lg:p-0 lg:gap-2 lg:text-[1rem] lg:translate-x-0
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            {navItems.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`
                    navlink transition-all duration-200 rounded-[50px] no-underline px-[15px] py-[8px] text-white tracking-[1px] font-bold font-comfortaa
                    hover:bg-secondary hover:text-black hover:shadow-md
                    ${item.name === 'Order Now' ? 'border-2 border-secondary' : ''}
                    ${location.pathname === item.path ? 'bg-secondary text-black shadow-md' : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name}
                  href={item.path} 
                  className={`
                    navlink transition-all duration-200 rounded-[50px] no-underline px-[15px] py-[8px] text-white tracking-[1px] font-bold font-comfortaa
                    hover:bg-secondary hover:text-black hover:shadow-md
                    ${item.name === 'Order Now' ? 'border-2 border-secondary' : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
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
