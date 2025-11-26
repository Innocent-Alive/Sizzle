import React, { useRef, useState } from 'react';
import AnimatedLines from './AnimatedLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import redPepper from '../assets/red-pepper.jpg';
import chefHero from '../assets/chef-hero.jpg';
import childImage from '../assets/child-image.png';
import kitchenImage from '../assets/Kitchen-Image.jpg';
import foodEveryone from '../assets/food-for-everyon.jpg';
import playIcon from '../assets/play.png';
import promoVideo from '../assets/promotional-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef();

  useGSAP(() => {
    // Animate each section
    const sections = gsap.utils.toArray('.about-section-item');
    
    sections.forEach((section, i) => {
      const image = section.querySelector('.about-image');
      const text = section.querySelector('.about-text');
      
      // Image animation
      gsap.from(image, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        x: i % 2 === 0 ? 100 : -100, // Alternate direction based on layout (Image Right = 100, Image Left = -100)
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Text animation
      gsap.from(text, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });
    });

    // Video animation & Logic
    gsap.from(".video-container", {
      scrollTrigger: {
        trigger: ".video-container",
        start: "top 85%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Smart Video Playback
    ScrollTrigger.create({
      trigger: ".video-container",
      start: "top 30%",
      end: "bottom 60%",
      onEnter: () => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      },
      onLeave: () => {
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      onEnterBack: () => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      },
      onLeaveBack: () => {
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
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
    <section ref={containerRef} id="About" className="about-section min-h-screen pt-[150px] pb-[80px] px-[20px] lg:px-[100px] relative overflow-hidden">
      <AnimatedLines />
      
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-[100px] lg:gap-[150px]">
        
        {/* Section 1: Natural Ingredients (Text Left, Image Right) */}
        <div className="about-section-item flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="about-text w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] text-primary font-bowlby uppercase leading-tight mb-6">
              Pure & Natural <br/> Ingredients
            </h2>
            <p className="font-comfortaa text-gray-300 text-[1.1rem] leading-relaxed text-justify lg:text-left">
              At Sizzle, we believe that great flavor starts with nature. We source only the freshest, 
              high-quality ingredients directly from local farms. From sun-ripened peppers to organic 
              herbs, every component of your meal is selected with care to ensure a burst of authentic, 
              natural taste in every bite. No preservatives, just pure, wholesome goodness.
            </p>
          </div>
          <div className="about-image w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img 
              src={redPepper} 
              alt="Fresh Red Peppers" 
              className="w-full max-w-[500px] h-[350px] object-cover rounded-[30px] shadow-[20px_20px_0px_rgba(255,68,0,0.2)] border-2 border-white/10"
            />
          </div>
        </div>

        {/* Section 2: Our Kitchen / Origins (Image Left, Text Right) */}
        <div className="about-section-item flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="about-image w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={kitchenImage} 
              alt="Our Kitchen" 
              className="w-full max-w-[500px] h-[350px] object-cover rounded-[30px] shadow-[-20px_20px_0px_rgba(255,68,0,0.2)] border-2 border-white/10"
            />
          </div>
          <div className="about-text w-full lg:w-1/2">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] text-primary font-bowlby uppercase leading-tight mb-6">
              Where It All <br/> Started
            </h2>
            <p className="font-comfortaa text-gray-300 text-[1.1rem] leading-relaxed text-justify lg:text-left">
              Life is busy, but that doesn't mean you can't enjoy really delicious meals. This is where we started 20 years ago, 
              with a small kitchen and a big dream. Our humble beginnings taught us the value of hard work and the importance 
              of putting love into every dish. Today, our kitchen may be bigger, but our commitment to quality remains unchanged.
            </p>
          </div>
        </div>

        {/* Section 3: Culinary Mastery (Text Left, Image Right) */}
        <div className="about-section-item flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="about-text w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] text-primary font-bowlby uppercase leading-tight mb-6">
              Culinary <br/> Mastery
            </h2>
            <p className="font-comfortaa text-gray-300 text-[1.1rem] leading-relaxed text-justify lg:text-left">
              Our kitchen is led by world-class chefs who bring passion and expertise to every dish. 
              With years of experience in global cuisines, they craft each meal as a work of art. 
              Their dedication to perfection ensures that you don't just eat, but experience a symphony 
              of flavors that have been perfected over decades of culinary tradition.
            </p>
          </div>
          <div className="about-image w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img 
              src={chefHero} 
              alt="Master Chef" 
              className="w-full max-w-[500px] h-[350px] object-cover rounded-[30px] shadow-[20px_20px_0px_rgba(255,68,0,0.2)] border-2 border-white/10"
            />
          </div>
        </div>

        {/* Section 4: Sizzle for a Cause (Image Left, Text Right) */}
        <div className="about-section-item flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="about-image w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={childImage} 
              alt="Community Impact" 
              className="w-full max-w-[500px] h-[350px] object-cover rounded-[30px] shadow-[-20px_20px_0px_rgba(255,68,0,0.2)] border-2 border-white/10"
            />
          </div>
          <div className="about-text w-full lg:w-1/2">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] text-primary font-bowlby uppercase leading-tight mb-6">
              Sizzle for <br/> a Cause
            </h2>
            <p className="font-comfortaa text-gray-300 text-[1.1rem] leading-relaxed text-justify lg:text-left">
              We believe in giving back. Sizzle is committed to fighting hunger in our communities. 
              A portion of every meal you order goes towards feeding underprivileged children and 
              supporting families in rural villages. We don't just serve food; we serve hope. 
              Together with you, we are making a difference, one meal at a time.
            </p>
          </div>
        </div>

        {/* Section 5: Food for Everyone (Text Left, Image Right) */}
        <div className="about-section-item flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="about-text w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] text-primary font-bowlby uppercase leading-tight mb-6">
              Food is for <br/> Everyone
            </h2>
            <p className="font-comfortaa text-gray-300 text-[1.1rem] leading-relaxed text-justify lg:text-left">
              At Sizzle, we believe in the power of good food to bring people together. Our diverse menu 
              offers something for everyone, from classic pizzas and crispy chicken burgers to delicious 
              fries and hearty burritos. We cater to all dietary preferences with a variety of vegetarian, 
              vegan, and gluten-free options. At Sizzle, everyone is welcome, and every meal is a celebration.
            </p>
          </div>
          <div className="about-image w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img 
              src={foodEveryone} 
              alt="Food for Everyone" 
              className="w-full max-w-[500px] h-[350px] object-cover rounded-[30px] shadow-[20px_20px_0px_rgba(255,68,0,0.2)] border-2 border-white/10"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="video-container flex flex-col items-center mt-10 relative">
          <div className="relative w-full max-w-[900px]">
            <button 
              type="button" 
              onClick={togglePlay}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            >
              <img src={playIcon} alt="Play" className="w-[80px] h-[80px] drop-shadow-lg" />
            </button>
            <video
              ref={videoRef}
              src={promoVideo}
              className="w-full h-auto rounded-[20px] border-[4px] border-primary/50 shadow-[0_0_50px_rgba(255,68,0,0.2)]"
              controls={false}
              onClick={togglePlay}
              muted={false}
            ></video>
          </div>
          <p className="mt-6 font-comfortaa text-gray-400 text-sm tracking-widest uppercase">Experience the Sizzle Vibe</p>
        </div>

      </div>
    </section>
  );
};

export default About;
