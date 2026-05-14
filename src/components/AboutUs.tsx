import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">About Us</h1>
          <p className="text-xl text-emerald-700 font-medium">Get to know us more</p>
        </div>

        {/* Our Journey Section */}
        <div className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Our Journey</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Founded in 2004, Egypt Holidays began as a collaboration between passionate travel experts with a shared vision: to create unique and unforgettable journeys throughout Egypt. From humble beginnings, we have grown step by step, expanding our services to highlight the country’s diverse wonders, hidden treasures, and unique gems.
            </p>
            <p>
              Throughout our journey, we have earned the trust and appreciation of our travelers, whose consistent support has been the cornerstone of our success. From the golden sands of the Sahara to the vibrant life along the Nile, and the breathtaking Red Sea and Sinai beaches, we remain committed to providing exceptional travel experiences.
            </p>
            <p>
              Today, with offices in Egypt and a partnership branch in Canada, we continue to connect people to the soul of Egypt. Whether it’s your first trip or a return adventure, we are here to make your journey unforgettable.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mb-16">
          <div className="bg-emerald-600 text-white rounded-3xl px-12 py-8 shadow-xl text-center transform hover:scale-105 transition-transform">
            <span className="text-6xl font-bold block mb-2">20+</span>
            <span className="text-sm uppercase tracking-widest font-semibold">Years of experience</span>
          </div>
        </div>

        {/* Our Values & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Our Values</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">Authenticity</h4>
                <p className="text-gray-600">Creating experiences that truly capture the essence of Egypt.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">Excellence</h4>
                <p className="text-gray-600">Delivering unmatched quality in every detail.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">Community</h4>
                <p className="text-gray-600">Building lasting relationships with our travelers and partners.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Why Choose Us?</h3>
            <ul className="space-y-6 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                Over 20 years of experience in crafting unforgettable trips.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                Local expertise combined with global connections.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                Personalized itineraries tailored to your dreams.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;