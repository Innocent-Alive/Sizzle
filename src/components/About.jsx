import React, { useRef, useState } from 'react';
import AnimatedLines from './AnimatedLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import kitchenImage from '../assets/Kitchen-Image.jpg';
import foodEveryoneImage from '../assets/food-for-everyon.jpg';
import playIcon from '../assets/play.png';
import promoVideo from '../assets/promotional-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".kitchen-image", {
      scrollTrigger: {
        trigger: ".kitchen-image",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1
    });

    gsap.from(".center-item", {
      scrollTrigger: {
        trigger: ".center-item",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1
    });
  }, { scope: containerRef });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} id="About" className="about-section min-h-screen py-[80px] px-[50px] pt-20 relative">
      <AnimatedLines />
      <div className="relative z-10">
        {/* Kitchen Image Section */}
        <div className="about-items kitchen-image flex flex-col-reverse lg:flex-row justify-between items-center w-full relative mb-[250px] lg:mb-0">
          <h2 id="overtext" className="text-[2.5rem] lg:text-[3rem] text-primary uppercase static lg:absolute lg:left-[5%] lg:z-10 lg:w-[60%] lg:mb-[-400px] mt-[50px] lg:mt-0">
            Life is busy, but that doesn't mean you can't enjoy really delicious meals.
          </h2>
          <div className="right-item flex flex-col items-center lg:items-end w-full lg:w-auto">
            <img 
              src={kitchenImage} 
              alt="kitchen image" 
              id="kitchen-image" 
              className="h-[350px] w-auto"
            />
            <p className="text-center lg:absolute lg:right-[5%] lg:mb-[-600px] font-comfortaa text-[1.5rem] font-black mt-4 lg:mt-0">
              This is where we started 20 years before.
            </p>
          </div>
        </div>

        {/* Food for Everyone Section */}
        <div className="about-items center-item flex flex-col lg:flex-row justify-between items-center mt-[0px] lg:mt-[500px] mb-[50px] text-center lg:text-left">
          <img 
            src={foodEveryoneImage} 
            alt="kitchen image" 
            id="food-everyone" 
            className="h-[350px] w-auto"
          />
          <div className="right-item lg:ml-[50px] max-w-[600px]">
            <h2 className="text-[2.5rem] lg:text-[3rem] text-primary uppercase">Food is for everyone.</h2>
            <p id="information" className="font-comfortaa font-bold text-[1rem] lg:text-[1.2rem] text-justify lg:text-left">
              At Sizzle, we believe in the power of good food to bring people
              together. Our diverse menu offers something for everyone, from
              classic pizzas and crispy chicken burgers to delicious fries and
              hearty burritos. We use only the freshest ingredients to ensure
              every bite is perfect. We cater to all dietary preferences with a
              variety of vegetarian, vegan, and gluten-free options. At Sizzle,
              everyone is welcome, and every meal is a celebration. Join us and
              discover your new favorite dish today!
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="about-items video flex flex-col items-center mb-[100px] lg:mb-0 relative">
          <button 
            type="button" 
            id="playPauseButton" 
            onClick={togglePlay}
            className={`bg-transparent z-[1] relative lg:absolute top-1/2 lg:top-1/2 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none outline-none cursor-pointer ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
          >
            <img src={playIcon} alt="Play" className="w-[70px] h-auto" />
          </button>
          <video
            ref={videoRef}
            src={promoVideo}
            id="promotional-video"
            className="h-[270px] lg:h-[400px] border-[5px] border-primary rounded-[10px] p-[5px] grayscale-[10] lg:grayscale-0"
            controls={false}
            onClick={togglePlay}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default About;
