import React from 'react';
import AnimatedLines from '../components/AnimatedLines';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-16 px-4 lg:px-8 relative">
      <AnimatedLines />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl lg:text-6xl text-primary font-bowlby mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 text-gray-300 font-comfortaa">
          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">1. Introduction</h2>
            <p>Welcome to Sizzle. By accessing our website and placing an order, you agree to be bound by these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">2. Ordering</h2>
            <p>All orders are subject to availability and confirmation of the order price. Dispatch times may vary according to availability and subject to any delays resulting from postal delays or force majeure for which we will not be responsible.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">3. Pricing and Availability</h2>
            <p>While we try and ensure that all details, descriptions and prices which appear on this Website are accurate, errors may occur. If we discover an error in the price of any goods which you have ordered we will inform you of this as soon as possible.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">4. Payment</h2>
            <p>Upon receiving your order we carry out a standard authorization check on your payment card to ensure there are sufficient funds to fulfill the transaction.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bowlby mb-3">5. Delivery</h2>
            <p>Delivery costs will be charged in addition; such additional charges are clearly displayed where applicable and included in the 'Total Cost'.</p>
          </section>
          
          <div className="pt-6 border-t border-white/10 text-sm text-gray-500">
            Last updated: November 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
