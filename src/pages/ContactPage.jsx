import React from 'react';
import swiggyLogo from '../assets/Swiggy-Logo.png';
import dunzoLogo from '../assets/dunzo-logo.png';
import uberEatsLogo from '../assets/logo-uber-eats.png';
import zomatoLogo from '../assets/Zomato-Logo.png';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bowlby text-primary mb-4 drop-shadow-lg">Get In Touch</h1>
          <p className="text-gray-400 font-comfortaa text-lg max-w-2xl mx-auto">Have questions or feedback? We'd love to hear from you! Reach out to us through any of the methods below.</p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Address & Details */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-primary/20">
            <h2 className="text-3xl font-bowlby text-primary mb-6">Contact Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-primary font-comfortaa font-bold mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot"></i> Address
                </h3>
                <p className="text-gray-300 font-comfortaa leading-relaxed">
                  119, New Unique Industrial Estate, 3rd Floor,<br />
                  Dr. R.P. Road, Mulund (West),<br />
                  Mumbai, Maharashtra 400080
                </p>
              </div>

              <div>
                <h3 className="text-xl text-primary font-comfortaa font-bold mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-at"></i> Email
                </h3>
                <a href="mailto:sizzleindia@yaahoo.com" className="text-gray-300 font-comfortaa hover:text-primary transition-colors">
                  sizzleindia@yaahoo.com
                </a>
              </div>

              <div>
                <h3 className="text-xl text-primary font-comfortaa font-bold mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-phone-volume"></i> Call Us
                </h3>
                <p className="text-gray-300 font-comfortaa">
                  9394645735 / 9394645755
                </p>
              </div>

              <div>
                <h3 className="text-xl text-primary font-comfortaa font-bold mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-clock"></i> Serving Hours
                </h3>
                <p className="text-gray-300 font-comfortaa">
                  Monday-Friday: 2:30pm - 10:30pm<br />
                  Sunday: 4:30pm - 12:00am
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-primary/20 flex flex-col">
            <h2 className="text-3xl font-bowlby text-primary mb-6">Find Us Here</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.0591983022599!2d72.9524945628028!3d19.17802972235283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fbfa4053e7%3A0xb14ab2ac17e2ade1!2sSIZZLE!5e0!3m2!1sen!2sin!4v1716296753942!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow rounded-2xl border-2 border-primary/30 min-h-[300px]"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-primary/20">
          <h2 className="text-3xl font-bowlby text-primary mb-6 text-center">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="px-4 py-3 bg-black/50 text-white rounded-xl border-2 border-primary/30 focus:border-primary outline-none font-comfortaa placeholder-gray-500 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                className="px-4 py-3 bg-black/50 text-white rounded-xl border-2 border-primary/30 focus:border-primary outline-none font-comfortaa placeholder-gray-500 transition-all"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              required
              className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border-2 border-primary/30 focus:border-primary outline-none font-comfortaa placeholder-gray-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              required
              rows="6"
              className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border-2 border-primary/30 focus:border-primary outline-none font-comfortaa placeholder-gray-500 transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-primary-alt transition-colors shadow-lg shadow-primary/20 font-comfortaa text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
