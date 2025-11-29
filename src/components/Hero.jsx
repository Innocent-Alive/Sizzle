import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImage from '../assets/hero-image.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.2
    })
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scale: 0.8
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="heroSection" className="hero-section min-h-screen bg-primary pt-24 pb-12 px-4 lg:px-16 flex items-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-8">
        
        {/* Left Content - Text */}
        <div ref={textRef} className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bowlby text-black leading-tight mb-4 lg:mb-6 drop-shadow-sm">
            Explore India's <br className="hidden lg:block"/>
            Culinary <br className="hidden lg:block"/>
            Wonderland!
          </h1>
          
          <p className="text-white/90 font-comfortaa text-base lg:text-xl leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 font-bold drop-shadow-md px-2 lg:px-0">
            A Gastronomic Journey Awaits! Savor the Irresistible Delights of
            Authentic Pizza, Juicy Burgers, Crispy Fries, and More. Elevate Your
            Taste Buds to New Heights with Every Bite.
          </p>
          
          <Link to="/menu">
            <button className="bg-black text-white font-bowlby text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0">
              BROWSE MENU
            </button>
          </Link>
        </div>

        {/* Right Content - Image */}
        <div ref={imageRef} className="flex-1 flex justify-center lg:justify-end relative z-10 w-full">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-[80px] lg:blur-[100px] rounded-full -z-10"></div>
          
          <img 
            src={heroImage} 
            alt="Delicious Burger" 
            className="w-[280px] md:w-[400px] lg:w-full max-w-[500px] lg:max-w-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Background Texture/Pattern (Optional subtle overlay) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
