import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, Star, Clock, MapPin, ChevronRight, Waves } from 'lucide-react';
import { DESTINATIONS } from '../data/toursData';

export const NileCruiseListPage: React.FC = () => {
  const cruiseDestinations = [
    { id: 'luxor-aswan-cruise', label: 'River Nile Cruises' },
    { id: 'felucca-cruise', label: 'Felucca Adventures' },
    { id: 'dahabiya-cruise', label: 'Dahabiya Cruises' },
    { id: 'lake-nasser-cruise', label: 'Lake Nasser Cruises' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-brand-emerald py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=2000" 
            alt="Nile" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Nile River Cruises
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience the heartbeat of Egypt. From legendary vessels to traditional Dahabiyas, discover your perfect journey.
          </p>
        </div>
      </section>

      {/* Cruise Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {cruiseDestinations.map((dest, idx) => {
            const data = DESTINATIONS[dest.id];
            if (!data) return null;

            return (
              <div key={dest.id} className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                    <Waves size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-brand-emerald">{dest.label}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.tours.map((tour) => (
                    <motion.div
                      key={tour.id}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl group cursor-pointer h-full flex flex-col"
                    >
                      <Link to={`/nile-cruise/${dest.id}/${tour.id}`} className="flex flex-col h-full">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img 
                            src={tour.images[0]} 
                            alt={tour.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand-emerald uppercase tracking-widest flex items-center gap-1">
                            <Star size={10} className="fill-brand-gold text-brand-gold" />
                            5-Star Luxury
                          </div>
                        </div>

                        <div className="p-8 flex-grow">
                          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-brand-emerald transition-colors line-clamp-2">
                            {tour.title}
                          </h3>
                          
                          <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <MapPin size={14} className="text-brand-gold" />
                              {tour.itinerary[0]?.event.includes('Aswan') ? 'Aswan to Luxor' : 'Luxor to Aswan'}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock size={14} className="text-brand-gold" />
                              {tour.itinerary.length > 0 ? `${Math.ceil(tour.itinerary.length / 2)} Days` : 'Multi-day'}
                            </div>
                          </div>

                          <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                            <div>
                              <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Starting from</span>
                              <span className="text-2xl font-bold text-brand-emerald">{tour.prices[0]?.price} <span className="text-sm font-normal text-gray-400">/ USD</span></span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                              <ChevronRight size={20} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
