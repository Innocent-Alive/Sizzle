import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: ".review-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
  }, { scope: containerRef });

  const reviews = [
    {
      img: person1,
      name: "Anisha Gupta",
      rating: 5,
      text: "Absolutely amazing food! The pizzas are to die for and the service is impeccable. I order from Sizzle at least twice a week!"
    },
    {
      img: person2,
      name: "Mahesh Raghurai",
      rating: 4.5,
      text: "The burgers here are the best I've had in Mumbai. Great value for money and the delivery is always quick. Highly recommended!"
    },
    {
      img: person3,
      name: "Rohini Pathak",
      rating: 4.5,
      text: "Delicious food with generous portions. The crispy chicken is my favorite! The packaging is also very good. Will definitely order again."
    }
  ];

  return (
    <section ref={containerRef} id="Reviews" className="review-section py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-primary font-bowlby mb-4 drop-shadow-lg">Customer Reviews</h1>
        <p className="text-center text-gray-400 font-comfortaa mb-12 max-w-2xl mx-auto">See what our happy customers have to say about their Sizzle experience!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="review-card group">
              {/* Card */}
              <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-primary/20 hover:border-primary transition-all duration-300 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>

                {/* Profile Image */}
                <div className="relative z-10 flex flex-col items-center mb-6">
                  <div className="w-24 h-24 mb-4 relative">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bowlby text-white mb-2">{review.name}</h3>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(Math.floor(review.rating)).fill().map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary-alt" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    {review.rating % 1 !== 0 && (
                      <svg className="w-5 h-5 text-primary-alt" fill="currentColor" viewBox="0 0 20 20">
                        <defs>
                          <linearGradient id={`half-${index}`}>
                            <stop offset="50%" stopColor="currentColor"/>
                            <stop offset="50%" stopColor="#374151" stopOpacity="0.3"/>
                          </linearGradient>
                        </defs>
                        <path fill={`url(#half-${index})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative z-10">
                  <div className="text-primary text-5xl mb-2 opacity-20">"</div>
                  <p className="text-gray-300 font-comfortaa text-center leading-relaxed -mt-8">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
