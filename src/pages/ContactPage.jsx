import React, { useRef } from 'react';
import AnimatedLines from '../components/AnimatedLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Header Animation
    tl.from(".contact-header", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2
    });

    // Grid Items Animation
    gsap.from(".contact-card", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });

    gsap.from(".map-card", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });

    // Form Animation
    gsap.from(".contact-form-container", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-form-container",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative overflow-hidden">
      <AnimatedLines />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bowlby text-primary mb-6 drop-shadow-lg">Get In Touch</h1>
          <p className="text-gray-400 font-comfortaa text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions or feedback? We'd love to hear from you! Reach out to us through any of the methods below.
          </p>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Address & Details */}
          <div className="contact-card bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl">
            <h2 className="text-3xl font-bowlby text-primary mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl text-white font-comfortaa font-bold mb-2 flex items-center gap-3 group-hover:text-primary transition-colors">
                  <span className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                    <FaLocationArrow />
                  </span> 
                  Address
                </h3>
                <p className="text-gray-400 font-comfortaa leading-relaxed pl-12 group-hover:text-gray-200 transition-colors">
                  119, New Unique Industrial Estate, 3rd Floor,<br />
                  Dr. R.P. Road, Mulund (West),<br />
                  Mumbai, Maharashtra 400080
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl text-white font-comfortaa font-bold mb-2 flex items-center gap-3 group-hover:text-primary transition-colors">
                  <span className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                    <FaEnvelope />
                  </span>
                  Email
                </h3>
                <a href="mailto:sizzleindia@yaahoo.com" className="text-gray-400 font-comfortaa pl-12 hover:text-white transition-colors block">
                  sizzleindia@yaahoo.com
                </a>
              </div>

              <div className="group">
                <h3 className="text-xl text-white font-comfortaa font-bold mb-2 flex items-center gap-3 group-hover:text-primary transition-colors">
                  <span className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                    <FaPhoneAlt />
                  </span>
                  Call Us
                </h3>
                <p className="text-gray-400 font-comfortaa pl-12 group-hover:text-gray-200 transition-colors">
                  9394645735 / 9394645755
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl text-white font-comfortaa font-bold mb-2 flex items-center gap-3 group-hover:text-primary transition-colors">
                  <span className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                    <FaClock />
                  </span>
                  Serving Hours
                </h3>
                <p className="text-gray-400 font-comfortaa pl-12 group-hover:text-gray-200 transition-colors">
                  Monday-Friday: 2:30pm - 10:30pm<br />
                  Sunday: 4:30pm - 12:00am
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-card bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl flex flex-col h-full min-h-[500px]">
            <div className="flex justify-between items-center mb-6 px-4 pt-2">
              <h2 className="text-3xl font-bowlby text-primary">Find Us Here</h2>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold font-comfortaa bg-white/10 hover:bg-primary hover:text-black px-3 py-1 rounded-full transition-all"
              >
                Open in Maps ↗
              </a>
            </div>
            <div className="relative flex-grow w-full rounded-2xl overflow-hidden border border-white/10 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.0591983022599!2d72.9524945628028!3d19.17802972235283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fbfa4053e7%3A0xb14ab2ac17e2ade1!2sSIZZLE!5e0!3m2!1sen!2sin!4v1716296753942!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(90%) grayscale(20%)' }}
              ></iframe>
              {/* Overlay for better interaction hint */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -z-10"></div>

          <h2 className="text-4xl lg:text-5xl font-bowlby text-primary mb-8 text-center drop-shadow-md">Send Us a Message</h2>
          
          <form className="max-w-3xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  className="w-full px-6 py-4 bg-black/40 text-white rounded-2xl border border-white/10 focus:border-primary focus:bg-black/60 outline-none font-comfortaa placeholder-gray-500 transition-all duration-300 group-hover:border-white/30"
                />
              </div>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  className="w-full px-6 py-4 bg-black/40 text-white rounded-2xl border border-white/10 focus:border-primary focus:bg-black/60 outline-none font-comfortaa placeholder-gray-500 transition-all duration-300 group-hover:border-white/30"
                />
              </div>
            </div>
            <div className="group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                className="w-full px-6 py-4 bg-black/40 text-white rounded-2xl border border-white/10 focus:border-primary focus:bg-black/60 outline-none font-comfortaa placeholder-gray-500 transition-all duration-300 group-hover:border-white/30"
              />
            </div>
            <div className="group">
              <textarea
                name="message"
                placeholder="Your Message*"
                required
                rows="6"
                className="w-full px-6 py-4 bg-black/40 text-white rounded-2xl border border-white/10 focus:border-primary focus:bg-black/60 outline-none font-comfortaa placeholder-gray-500 transition-all duration-300 resize-none group-hover:border-white/30"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-orange-600 text-black font-black py-5 rounded-2xl hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,69,0,0.3)] transition-all duration-300 font-comfortaa text-xl flex items-center justify-center gap-3 group"
            >
              <span>Send Message</span>
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
