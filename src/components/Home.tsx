import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Backgrh from "../assets/BackGrH.png";

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="relative h-screen w-full overflow-hidden pt-24 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 top-0 z-0"
        >
          {/* Overlay Dark */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={Backgrh}
            alt="Nile River Egypt"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Experience the True Essence of Egypt
            </h2>
            <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto font-medium  py-3 px-6 inline-block mb-10">
              Discover historical wonders, hidden treasures, and unforgettable
              journeys tailored just for you.
            </p>
            <div>
              <a
                href="mailto:reservation@egyptholidayaswan.com?subject=Website%20Inquiry"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition duration-300 shadow-xl inline-block cursor-pointer"
              >
                Book Your Adventure
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Top-Rated Nile Cruise Spotlight --- */}
      <section
        id="nile-cruise"
        className="max-w-7xl mx-auto px-4 py-32 border-t border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              Top-Rated Nile Cruise in Egypt
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mövenpick MS Sunray",
              type: "Smart Luxury Nile Experience",
              price: "$210",
              img: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
            {
              name: "Mövenpick MS Hamees",
              type: "Contemporary Nile Comfort",
              price: "$200",
              img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/2",
            },
            {
              name: "Møvenpick Royal Lily",
              type: "Luxury Nile Egypt",
              price: "$839",
              img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
            {
              name: "Historia Nile River Cruise",
              type: "Luxury Nile Egypt",
              price: "$1339",
              img: "https://images.unsplash.com/photo-1568322422676-9d713bcc136b?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
            {
              name: "Swan Luxury Dahabiya",
              type: "Dahabiya Nile",
              price: "$1179",
              img: "https://images.unsplash.com/photo-1539186607619-df476afe1ff1?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/dahabiya-cruise/1",
            },
            {
              name: "Sonesta Nile Goddess",
              type: "Deluxe Nile River",
              price: "$479",
              img: "https://images.unsplash.com/photo-1628178651610-d9d1be6a32d1?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
          ].map((cruise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Link to={cruise.link || "#"}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cruise.img}
                    alt={cruise.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold font-serif text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors">
                    {cruise.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium mb-8">
                    {cruise.type}
                  </p>
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                        Start From
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {cruise.price}{" "}
                        <span className="text-sm text-gray-400 font-normal">
                          / USD
                        </span>
                      </span>
                    </div>
                    <button className="px-6 py-3 bg-white border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all text-xs uppercase tracking-widest shadow-md hover:shadow-brand-gold/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Discover Our Great Packeges --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              Discover Our Great Packages
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mövenpick MS Sunray",
              type: "Smart Luxury Nile Experience",
              price: "$210",
              img: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
            {
              name: "Mövenpick MS Hamees",
              type: "Contemporary Nile Comfort",
              price: "$200",
              img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/2",
            },
            {
              name: "Møvenpick Royal Lily",
              type: "Luxury Nile Egypt",
              price: "$839",
              img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
              link: "/nile-cruise/luxor-aswan-cruise/1",
            },
          ].map((cruise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Link to={cruise.link || "#"}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cruise.img}
                    alt={cruise.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold font-serif text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors">
                    {cruise.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium mb-8">
                    {cruise.type}
                  </p>
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                        Start From
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {cruise.price}{" "}
                        <span className="text-sm text-gray-400 font-normal">
                          / USD
                        </span>
                      </span>
                    </div>
                    <button className="px-6 py-3 bg-white border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all text-xs uppercase tracking-widest shadow-md hover:shadow-brand-gold/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TripAdvisor Premium Card */}
      <div className="max-w-4xl mx-auto mt-16 px-4 pb-24">
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none group-hover:bg-emerald-100 transition-colors duration-500"></div>

          <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm rounded-full p-4 z-10">
            <svg className="w-full h-full" fill="#34E0A1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Tripadvisor</title>
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
            </svg>
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-[#34E0A1]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 text-sm font-bold text-gray-800 uppercase tracking-widest">Excellent</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
              Egypt Holiday Tours
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Every Journey We Create Is Designed With Care And Delivered By People Who Truly Know Egypt . See What Our Guests Say About Traveling With Us
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10 mt-4 md:mt-0">
            <a 
              href="https://www.tripadvisor.com/Attraction_Review-g294204-d32865044-Reviews-Egypt_Holiday_Aswan-Aswan_Aswan_Governorate_Nile_River_Valley.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#34E0A1] hover:text-gray-900 hover:shadow-lg transition-all duration-300 text-center whitespace-nowrap"
            >
              SEE OUR REVIEWES ON TRIPADVISOR
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
