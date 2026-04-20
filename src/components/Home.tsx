import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import { HERO_IMAGES } from "../data/toursData";
import { CONTACT_INFO } from "../constants";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Handle hash scrolling on home page
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
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src={HERO_IMAGES[1].url}
            alt="The Great Pyramids"
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
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl leading-tight">
              {t("hero.title")}
            </h2>
            <p className="text-sm md:text-lg text-white max-w-3xl mx-auto opacity-100 tracking-wide font-medium bg-black/20 backdrop-blur-sm py-2 px-4 rounded-full inline-block">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Top-Rated Nile Cruise Spotlight --- */}
      <section id="nile-cruise" className="max-w-7xl mx-auto px-4 py-32 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              Top-Rated Nile Cruise in Egypt
            </h2>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                The best selection of Nile cruises in Egypt based on customer reviews. You can enjoy amazing trips during your Egypt River cruise journey. We offer amazing Nile cruises like the Sonesta Nile Goddess Nile Cruise, the Movenpick Hamees Nile Cruise, and the Soleil Nile Cruise, etc. Each <span className="text-emerald-700 font-bold border-b border-emerald-200">Nile Cruise Luxor to Aswan</span> gives you a great way to see Egypt's history while enjoying beautiful views and excellent service. 
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4">
                Egypt Nile Cruise lets you explore the unique beauty of Egypt and gives you a closer look at the local lifestyle and culture. Taking the Nile Cruise in Egypt is the perfect way to explore and learn about Egyptian history. Book now with a simple and fast Nile River cruise booking to enjoy every moment of your journey.
              </p>
            </div>
            <Link to="/nile-cruise">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#00995b', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 px-8 py-4 border-2 border-brand-emerald text-brand-emerald font-bold rounded-xl transition-all uppercase tracking-widest text-xs shadow-lg shadow-brand-emerald/10"
              >
                Discover more
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: 'Mövenpick MS Sunray', 
              type: 'Smart Luxury Nile Experience', 
              price: '$210', 
              img: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/luxor-aswan-cruise/1'
            },
            { 
              name: 'Mövenpick MS Hamees', 
              type: 'Contemporary Nile Comfort', 
              price: '$200', 
              img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/luxor-aswan-cruise/2'
            },
            { 
              name: 'Møvenpick Royal Lily', 
              type: 'Luxury Nile Egypt', 
              price: '$839', 
              img: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/luxor-aswan-cruise/1'
            },
            { 
              name: 'Historia Nile River Cruise', 
              type: 'Luxury Nile Egypt', 
              price: '$1339', 
              img: 'https://images.unsplash.com/photo-1568322422676-9d713bcc136b?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/luxor-aswan-cruise/1'
            },
            { 
              name: 'Swan Luxury Dahabiya', 
              type: 'Dahabiya Nile', 
              price: '$1179', 
              img: 'https://images.unsplash.com/photo-1539186607619-df476afe1ff1?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/dahabiya-cruise/1'
            },
            { 
              name: 'Sonesta Nile Goddess', 
              type: 'Deluxe Nile River', 
              price: '$479', 
              img: 'https://images.unsplash.com/photo-1628178651610-d9d1be6a32d1?auto=format&fit=crop&q=80&w=800',
              link: '/nile-cruise/luxor-aswan-cruise/1'
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
              <Link to={cruise.link || '#'}>
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
                      <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Start From</span>
                      <span className="text-2xl font-bold text-gray-900">{cruise.price} <span className="text-sm text-gray-400 font-normal">/ USD</span></span>
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
      {/* --- About Us Section --- */}
      <section id="about-us" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 font-bold">Crafting Unforgettable Journeys Since 2004</h2>
              <div className="prose prose-emerald text-gray-600 space-y-6">
                <p className="text-lg leading-relaxed">Egypt Holiday Aswan was born from a passion for the eternal wonders of our homeland. For over two decades, we have been more than just a tour company—we are your local storytellers and guardians of the Nile's heritage.</p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <div className="text-4xl font-serif font-bold text-brand-emerald mb-2">20+</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-brand-emerald mb-2">50k+</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1000" alt="About" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Us Section --- */}
      <section id="contact-us" className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-bold">
              {t("contact.title")}
            </h2>
            <p className="text-gray-500">{t("contact.subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center h-full flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-brand-gold/5 rounded-xl flex items-center justify-center text-brand-gold mx-auto mb-6">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
              <a href={`tel:${CONTACT_INFO.PHONE_EGYPT}`} className="block text-brand-emerald font-bold mb-1">
                EG: {CONTACT_INFO.PHONE_EGYPT}
              </a>
              <a href={`tel:${CONTACT_INFO.PHONE_CANADA}`} className="block text-brand-emerald font-bold">
                CA: {CONTACT_INFO.PHONE_CANADA}
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center h-full flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-brand-gold/5 rounded-xl flex items-center justify-center text-brand-gold mx-auto mb-6">
                <Mail size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
              <div className="w-full">
                <EmailContact email={CONTACT_INFO.EMAIL} />
              </div>
            </div>
          </div>

          {/* TripAdvisor Card */}
          <div className="max-w-4xl mx-auto mt-12 px-4">
            <div className="bg-white border border-emerald-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-20 h-20 bg-emerald-50 rounded-xl flex items-center justify-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path d="M7 9.5C7.55228 9.5 8 9.05228 8 8.5C8 7.94772 7.55228 7.5 7 7.5C6.44772 7.5 6 7.94772 6 8.5C6 9.05228 6.44772 9.5 7 9.5Z" fill="#000"/>
                  <path d="M11 9.5C11.5523 9.5 12 9.05228 12 8.5C12 7.94772 11.5523 7.5 11 7.5C10.4477 7.5 10 7.94772 10 8.5C10 9.05228 10.4477 9.5 11 9.5Z" fill="#000"/>
                  <path d="M16.5 9.5C17.0523 9.5 17.5 9.05228 17.5 8.5C17.5 7.94772 17.0523 7.5 16.5 7.5C15.9477 7.5 15.5 7.94772 15.5 8.5C15.5 9.05228 15.9477 9.5 16.5 9.5Z" fill="#000"/>
                </svg>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900">Egypt Holiday — TripAdvisor</h3>
                <p className="text-sm text-gray-500 mt-1">See our official TripAdvisor listing and recent reviews.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g294204-d25427404-Reviews-Egypt_Holidays_Tours-Aswan_Aswan_Governorate_Nile_River_Valley.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm shadow hover:bg-emerald-700 transition-colors"
                >
                  View on TripAdvisor
                </a>
                <a
                  href="https://www.tripadvisor.com/UserReviewEdit-g294204-d25427404-Egypt_Holidays_Tours-Aswan_Aswan_Governorate_Nile_River_Valley.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors"
                >
                  Write a review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const EmailContact: React.FC<{ email: string }> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-100 transition-colors"
      >
        <Mail size={16} />
        <span className="text-sm break-all">{email}</span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
        aria-label="Copy email"
      >
        {copied ? "Copied" : "Copy email"}
      </button>
    </div>
  );
};

export default Home;
