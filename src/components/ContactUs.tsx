import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-emerald-700 font-medium">Start your journey today. Our team is always available to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-gray-100">
          
          {/* Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-4 border bg-gray-50 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-4 border bg-gray-50 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-4 border bg-gray-50 transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-emerald-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
              {status && (
                <p className={`text-center mt-4 font-medium ${status.includes('successfully') ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-gray-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-12">
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-4">Address</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Canada Location:</p>
                    <p className="text-lg">Registered Office Location: EDMONTON, AB</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Egypt Location:</p>
                    <p className="text-lg">Aswan, Atlas Building Y 1 Flat 2, Aswan, Egypt</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-4">Phone</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Canada:</p>
                    <p className="text-xl">+1 587-566-6922</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Egypt:</p>
                    <p className="text-xl">+20 101-116-9085</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-4">Email</h3>
                <a href="mailto:reservation@egyptholidayaswan.com" className="text-xl hover:text-emerald-300 transition break-all">
                  reservation@egyptholidayaswan.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;