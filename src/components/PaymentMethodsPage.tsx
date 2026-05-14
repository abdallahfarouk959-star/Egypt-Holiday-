import React from "react";
import { CreditCard, Smartphone, Globe, ShieldCheck } from "lucide-react";

export const PaymentMethodsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
            <br />
            <br />
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-4">
            Our Payment Methods
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We partner with Square to provide a seamless, secure, and flexible payment experience. 
            Here is everything you need to know about how you can pay for your unforgettable Egyptian holiday.
          </p>
        </div>

        {/* Payment Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Credit & Debit Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="text-brand-emerald" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Credit & Debit Cards</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We accept all major credit and debit cards securely. Whether your card is 
              Canadian-issued or internationally issued, you can use it to complete your booking without any hassle.
            </p>
          </div>

          {/* Mobile Wallets */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="text-brand-emerald" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Wallets</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              For a faster checkout experience, we fully support contactless mobile payments. 
              You can easily pay using <strong>Apple Pay</strong>, <strong>Google Pay</strong>, or <strong>Samsung Pay</strong>.
            </p>
          </div>

          {/* International & Prepaid */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-brand-emerald" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">International & Prepaid Cards</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Traveling from abroad? No problem. We accept most international cards and prepaid cards 
              through our Square payment gateway, ensuring a smooth transaction from anywhere in the world.
            </p>
          </div>

          {/* Secure Processing */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-brand-emerald" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Processing</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              All transactions are processed securely by Square. We process all card types 
              with standard rates, meaning no hidden fees for choosing your preferred payment method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};