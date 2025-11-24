import React from 'react';
import { Link } from 'react-router-dom';
import swiggyLogo from '../assets/Swiggy-Logo.png';
import dunzoLogo from '../assets/dunzo-logo.png';
import uberEatsLogo from '../assets/logo-uber-eats.png';
import zomatoLogo from '../assets/Zomato-Logo.png';

const Footer = () => {
  return (
    <>
      <section id="Order" className="social-section mt-[50px] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl text-primary font-bowlby mb-4 drop-shadow-lg">Order Now</h1>
          <p className="text-gray-400 font-comfortaa text-lg mb-8">Get your favorite food delivered to your doorstep</p>
          
          <div className="delivery-app">
            <h3 className="text-xl text-center tracking-[1.5px] text-primary font-comfortaa mb-6">Available On Platforms:</h3>
            <div className="delivery-logo flex gap-6 justify-center items-center flex-wrap">
              <a rel="noopener" href="https://www.swiggy.com/" target="_blank" className="transition-transform hover:scale-110">
                <img src={swiggyLogo} alt="Swiggy logo" className="h-[40px] w-auto hover:brightness-110" />
              </a>
              <a rel="noopener" href="https://www.dunzo.com/" target="_blank" className="transition-transform hover:scale-110">
                <img src={dunzoLogo} alt="Dunzo logo" className="h-[30px] w-auto hover:brightness-110" />
              </a>
              <a rel="noopener" href="https://www.ubereats.com/" target="_blank" className="transition-transform hover:scale-110">
                <img src={uberEatsLogo} alt="uber eats logo" className="h-[40px] w-auto hover:brightness-110" />
              </a>
              <a rel="noopener" href="https://www.zomato.com/" target="_blank" className="transition-transform hover:scale-110">
                <img src={zomatoLogo} alt="Zomato logo" className="h-[30px] w-auto hover:brightness-110" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="font-comfortaa font-bold bg-black text-white pt-[50px] px-[60px] pb-[10px] mt-[50px] border-t border-white/10">
        <div className="social-media flex items-center flex-wrap mb-[30px] text-[1.2rem] font-black">
          <h4>Get New Deals &amp; Updates:</h4>
          <div className="social-icons ml-[20px]">
            <i className="fa-brands fa-square-instagram mr-[20px] text-[2.5rem] transition-all duration-200 ease-in hover:text-primary-alt cursor-pointer"></i>
            <i className="fa-brands fa-square-youtube mr-[20px] text-[2.5rem] transition-all duration-200 ease-in hover:text-primary-alt cursor-pointer"></i>
            <i className="fa-brands fa-square-facebook mr-[20px] text-[2.5rem] transition-all duration-200 ease-in hover:text-primary-alt cursor-pointer"></i>
          </div>
        </div>
        <div className="footer flex justify-between flex-wrap gap-8">
          <div className="footer-items flex flex-col gap-2">
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Terms &amp; Conditions</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Privacy Policy</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Caution Notice</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Sizzle India</a>
          </div>
          <div className="footer-items flex flex-col gap-2">
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Nutrition &amp; Allergen</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">About Sizzle</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Gift Card</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Order Lookup</a>
          </div>
          <div className="footer-items flex flex-col gap-2">
            <Link to="/contact" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Contact Us</Link>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Get Help</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Support</a>
            <a href="" className="text-white text-[0.8rem] transition-all duration-200 ease-in hover:underline hover:text-primary-alt">Feedback</a>
          </div>
        </div>
        <div className="credits mt-[30px] text-center">
          <p>Copyright &copy; 2024</p>
          <p>Created By The <a className="text-primary tracking-[1px] font-black no-underline transition-all duration-100 ease-in hover:text-white hover:underline cursor-pointer">Innocent</a>.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
