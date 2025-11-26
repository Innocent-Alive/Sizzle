import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pizza1 from '../assets/pngegg (3).png';
import pizza2 from '../assets/pngegg.png';
import pizza3 from '../assets/NonvegPizza2.png';
import burger1 from '../assets/hero-image.png';
import burger2 from '../assets/pngegg (4).png';
import chicken from '../assets/pngegg (7).png';
import fries from '../assets/pngegg (5).png';
import taco from '../assets/pngegg (8).png';
import burrito from '../assets/burito.png';

gsap.registerPlugin(ScrollTrigger);

const MenuCategory = ({ title, items, direction = 'left' }) => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useEffect(() => {
    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="mb-16 overflow-hidden">
      <h3 className="text-4xl text-primary font-bowlby mb-8 px-8 border-l-8 border-primary-alt ml-8">{title}</h3>
      <div 
        ref={containerRef}
        className="scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <div 
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap ${direction === 'right' ? 'animate-[scroll-right_40s_linear_infinite]' : 'animate-[scroll-left_40s_linear_infinite]'}`}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="w-[350px] h-[520px] flex-shrink-0 bg-[#1a1a1a] rounded-[30px] p-6 border-2 border-primary/30 relative group hover:border-primary transition-colors duration-300 flex flex-col"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="relative h-[200px] flex items-center justify-center mb-4 flex-shrink-0 bg-black rounded-2xl p-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-between relative z-10">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-2xl text-primary font-bowlby leading-tight">{item.title}</h4>
                    <span className="bg-primary-alt text-black text-xs font-bold px-2 py-1 rounded-full shrink-0">{item.off} OFF</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm font-comfortaa line-clamp-2">{item.desc}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm line-through decoration-primary decoration-2">&#8377;{item.oldPrice}</span>
                    <span className="text-3xl text-primary-alt font-bowlby">&#8377;{item.price}</span>
                  </div>
                  <button className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const pizzas = [
    {
      img: pizza1,
      title: "Classic Pizza",
      desc: "Indulge in the timeless favorite, our Classic Pizza. Featuring a hand-tossed crust.",
      price: "99",
      oldPrice: "149",
      off: "40%"
    },
    {
      img: pizza2,
      title: "Italian Pizza",
      desc: "Experience the authentic taste of Italy with our Italian Pizza.",
      price: "159",
      oldPrice: "199",
      off: "20%"
    },
    {
      img: pizza3,
      title: "Chicken Pizza",
      desc: "Savor the delicious combination of tender, juicy chicken and our signature blend.",
      price: "199",
      oldPrice: "249",
      off: "20%"
    }
  ];

  const burgers = [
    {
      img: burger1,
      title: "Hot and Saucy Burger",
      desc: "Turn up the heat with our Hot and Saucy Burger. Fiery favorite.",
      price: "69",
      oldPrice: "119",
      off: "40%"
    },
    {
      img: burger2,
      title: "Crispy Chicken Burger",
      desc: "Get ready to crunch into perfection with our Crispy Chicken Burger.",
      price: "159",
      oldPrice: "199",
      off: "20%"
    },
    {
      img: chicken,
      title: "Crispy Fried Chicken",
      desc: "Sink your teeth into our mouthwatering Crispy Fried Chicken.",
      price: "199",
      oldPrice: "299",
      off: "33%"
    }
  ];

  const others = [
    {
      img: fries,
      title: "Golden Crunch Fries",
      desc: "Indulge in our Golden Crunch Fries, perfectly cut and fried.",
      price: "59",
      oldPrice: "99",
      off: "40%"
    },
    {
      img: taco,
      title: "Zesty Taco",
      desc: "Take a bite of our Zesty Street Taco and enjoy a taste explosion.",
      price: "79",
      oldPrice: "149",
      off: "45%"
    },
    {
      img: burrito,
      title: "Fiesta Burrito",
      desc: "Experience a burst of flavors with our Fiesta Burrito.",
      price: "129",
      oldPrice: "179",
      off: "25%"
    }
  ];

  return (
    <section id="Menu" className="menu-section py-20 bg-black/95 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-6xl text-primary font-bowlby mb-4 drop-shadow-[0_5px_5px_rgba(255,69,0,0.3)]">Culinary Delights</h1>
        <p className="text-gray-400 font-comfortaa max-w-2xl mx-auto">Explore our wide range of delicious food items, prepared with love and the finest ingredients.</p>
      </div>

      <MenuCategory title="Pizzas" items={pizzas} direction="left" />
      <MenuCategory title="Burgers" items={burgers} direction="right" />
      <MenuCategory title="Others" items={others} direction="left" />

      <style jsx>{`
        @keyframes scroll-left {
          to { transform: translateX(calc(-50% - 1rem)); }
        }
        @keyframes scroll-right {
          from { transform: translateX(calc(-50% - 1rem)); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Menu;
