import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="heroSection" className="hero-section flex flex-col lg:flex-row justify-center items-center min-h-screen px-[50px] bg-primary pt-20">
      <div ref={textRef} className="items flex flex-col gap-[10px] lg:w-1/2 p-[20px] rounded-[10px] bg-[radial-gradient(var(--color-primary-alt)_20%,var(--color-primary)_70%)]">
        <h1 className="text-[3rem] lg:text-[3.5rem] pt-[30px] text-center lg:text-left leading-tight capitalize text-black">
          Explore India's Culinary Wonderland!
        </h1>
        <p className="text-[1rem] lg:text-[1.5rem] text-center lg:text-justify">
          A Gastronomic Journey Await! Savor the Irresistible Delights of
          Authentic Pizza, Juicy Burgers, Crispy Fries, and More. Elevate Your
          Taste Buds to New Heights with Every Bite.
        </p>
        <a href="#menu-start" className="mx-auto lg:mx-0">
          <button type="button" className="bg-black cursor-pointer text-[1rem] lg:text-[1.2rem] font-inherit text-white no-underline outline-none border-none mt-[20px] px-[20px] py-[15px] transition-all duration-300 ease-in hover:text-secondary hover:bg-background hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] hover:-rotate-2 hover:scale-105 active:border-[5px] active:border-primary">
            BROWSE MENU
          </button>
        </a>
      </div>
      <div ref={imageRef} className="items lg:w-1/2 flex justify-center">
        <img 
          src={heroImage} 
          alt="burger image" 
          className="drop-shadow-[12px_15px_15px_#222] h-[300px] lg:h-[400px] w-auto max-w-[600px]"
        />
      </div>
    </section>
  );
};

export default Hero;
