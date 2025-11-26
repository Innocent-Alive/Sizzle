import React, { useRef, useState, useEffect } from 'react';
import AnimatedLines from './AnimatedLines';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/Person4.webp';
import person5 from '../assets/Person5.png';
import person6 from '../assets/Person6.avif';
import person7 from '../assets/Person7.jpg';
import person8 from '../assets/Person8.webp';
import person9 from '../assets/Person9.jpg';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  const allReviews = [
    {
      img: person1,
      name: "Anisha Gupta",
      rating: 5,
      text: "Absolutely amazing food! The pizzas are to die for and the service is impeccable. I order from Sizzle at least twice a week!"
    },
    {
      img: person9,
      name: "Mahesh Raghurai",
      rating: 4.5,
      text: "The burgers here are the best I've had in Mumbai. Great value for money and the delivery is always quick. Highly recommended!"
    },
    {
      img: person5,
      name: "Priya Sharma",
      rating: 5,
      text: "Best tacos in town! Fresh ingredients and amazing flavors. The zesty taco is a must-try. Never disappoints!"
    },
    {
      img: person3,
      name: "Rohini Pathak",
      rating: 4.5,
      text: "Delicious food with generous portions. The crispy chicken is my favorite! The packaging is also very good. Will definitely order again."
    },
    {
      img: person4,
      name: "Rahul Verma",
      rating: 4,
      text: "Great variety on the menu. Love their combo deals! The fries are perfectly crispy and the portions are generous."
    },
    {
      img: person6,
      name: "Sneha Patel",
      rating: 5,
      text: "Outstanding service and delicious food! The Italian pizza is authentic and tastes incredible. Highly recommended for pizza lovers!"
    },
    {
      img: person8,
      name: "Vikram Singh",
      rating: 5,
      text: "The ambiance is just perfect for a weekend dinner. The staff is super friendly and the food arrived piping hot. Loved it!"
    },
    {
      img: person7,
      name: "Neha Kapoor",
      rating: 4.5,
      text: "Sizzle never fails to impress. The pasta was creamy and rich, just how I like it. A solid 10/10 for taste and presentation."
    },
    {
      img: person2,
      name: "Arjun Reddy",
      rating: 5,
      text: "Hands down the best dining experience I've had in a while. The spicy wings are addictive! Can't wait to visit again."
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3 >= allReviews.length ? 0 : prev + 3));
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [allReviews.length]);

  const displayedReviews = allReviews.slice(currentIndex, currentIndex + 3);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-primary-alt" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-primary-alt" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#374151" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <section ref={containerRef} id="Reviews" className="review-section py-20 px-4 lg:px-8 bg-background relative">
      <AnimatedLines />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl lg:text-6xl text-center text-primary font-bowlby mb-4 drop-shadow-lg">Customer Reviews</h1>
        <p className="text-center text-gray-400 font-comfortaa mb-12">See what our happy customers have to say about their Sizzle experience!</p>
        
        <div className="space-y-6">
          {displayedReviews.map((review, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="review-card bg-[#1a1a1a] rounded-2xl p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 flex items-center gap-6 animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Left Side - Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/30">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bowlby text-white mb-1">{review.name}</h3>
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="text-primary-alt text-2xl font-bowlby">{review.rating}</div>
                </div>
                <p className="text-gray-300 font-comfortaa leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array(Math.ceil(allReviews.length / 3)).fill().map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
