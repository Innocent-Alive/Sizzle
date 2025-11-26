import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import swiggyLogo from '../assets/Swiggy-Logo.png';
import dunzoLogo from '../assets/dunzo-logo.png';
import eatSureLogo from '../assets/eat-sure.png';
import magicpinLogo from '../assets/magicpin.png';
import zomatoLogo from '../assets/Zomato-Logo.png';

const Footer = () => {
  const platforms = [
    { name: 'Swiggy', logo: swiggyLogo, url: 'https://www.swiggy.com/', height: 'h-[40px]' },
    { name: 'Zomato', logo: zomatoLogo, url: 'https://www.zomato.com/', height: 'h-[30px]' },
    { name: 'Eat Sure', logo: eatSureLogo, url: 'https://www.eatsure.com/', height: 'h-[35px]' },
    { name: 'Magicpin', logo: magicpinLogo, url: 'https://magicpin.in/', height: 'h-[35px]' },
    { name: 'Dunzo', logo: dunzoLogo, url: 'https://www.dunzo.com/', height: 'h-[30px]' },
  ];

  return (
    <>
      <section id="Order" className="social-section mt-[50px] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl text-primary font-bowlby mb-4 drop-shadow-lg">Order Now</h1>
          <p className="text-gray-400 font-comfortaa text-lg mb-8">Get your favorite food delivered to your doorstep</p>
          
          <div className="delivery-app">
            <h3 className="text-xl text-center tracking-[1.5px] text-primary font-comfortaa mb-6">Available On Platforms:</h3>
            <div className="delivery-logo flex gap-8 justify-center items-center flex-wrap">
              {platforms.map((platform) => (
                <a 
                  key={platform.name}
                  rel="noopener noreferrer" 
                  href={platform.url} 
                  target="_blank" 
                  className="group relative transition-transform hover:scale-110"
                >
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className={`${platform.height} w-auto hover:brightness-110 transition-all duration-300`} 
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    <div className="bg-primary text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg relative">
                      Order on {platform.name}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer 
        className="font-comfortaa font-bold text-white pt-[50px] px-[20px] lg:px-[60px] pb-[20px] mt-[50px] border-t border-white/10"
        style={{
          backgroundColor: '#000',
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 69, 0, 0.1) 10px, rgba(255, 69, 0, 0.1) 11px)'
        }}
      >
        <div className="social-media flex flex-col md:flex-row items-center justify-between mb-[40px] gap-4">
          <h4 className="text-[1.2rem] font-black">Get New Deals &amp; Updates:</h4>
          <div className="social-icons flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-alt transition-colors duration-200">
              <FaInstagram size={32} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-alt transition-colors duration-200">
              <FaYoutube size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-alt transition-colors duration-200">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-alt transition-colors duration-200">
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="footer-items flex flex-col gap-3">
            <Link to="/terms" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Privacy Policy</Link>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Caution Notice</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Sizzle India</a>
          </div>
          <div className="footer-items flex flex-col gap-3">
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Nutrition &amp; Allergen</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">About Sizzle</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Gift Card</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Order Lookup</a>
          </div>
          <div className="footer-items flex flex-col gap-3">
            <Link to="/contact" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Contact Us</Link>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Get Help</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Support</a>
            <a href="#" className="text-gray-400 text-[0.9rem] transition-all duration-200 ease-in hover:text-primary hover:translate-x-1">Feedback</a>
          </div>
        </div>

        <div className="credits mt-[30px] pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright &copy; 2024</p>
          <p>
            Created By The <a href="https://abhaykumardas.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary font-black no-underline transition-all duration-200 hover:text-white hover:underline">Innocent</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
