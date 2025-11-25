import React from 'react';
import AnimatedLines from '../components/AnimatedLines';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl lg:text-6xl text-primary font-bowlby mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 text-gray-300 font-comfortaa">
          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">3. Sharing of Information</h2>
            <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: Through Our Services We may share your information with our drivers to enable them to provide the Services you request.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">4. Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">5. Cookies</h2>
            <p>We use cookies and similar technologies to facilitate and improve the performance and security of our Services and to personalize content and ads.</p>
          </section>
          
          <div className="pt-6 border-t border-white/10 text-sm text-gray-500">
            Last updated: November 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
