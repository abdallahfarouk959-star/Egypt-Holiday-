import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react'; // تم توحيد الأيقونات مع التورز والباكجات
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
      {/* Hero Section */}
      <section className="bg-brand-emerald py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=2000&fmt=webp" 
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

      {/* Cruise Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {cruiseDestinations.map((dest) => {
            const data = DESTINATIONS[dest.id];
            if (!data) return null;

            return (
              <div key={dest.id} className="relative">
                {/* Section Title */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-2 h-8 bg-[#d4af37] rounded-full"></div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900">{dest.label}</h2>
                </div>

                {/* Grid Container (طابق تماماً لتصميم التورز والباكجات) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.tours.map((tour, i) => (
                    <motion.div
                      key={tour.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex"
                    >
                      <Link 
                        to={`/nile-cruise/${dest.id}/${tour.id}`} 
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer w-full"
                      >
                        {/* Image Layer */}
                        <div className="relative h-56 bg-slate-200 overflow-hidden">
                          <img 
                            src={tour.images[0]} 
                            alt={tour.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 right-4 bg-[#004d33] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 uppercase tracking-widest">
                            <Star size={10} className="fill-brand-gold text-brand-gold" />
                            5-Star Luxury
                          </div>
                        </div>

                        {/* Content Layer (نفس التقسيمة والـ Line Clamps بتاعة التورز) */}
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px] group-hover:text-[#004d33] transition-colors">
                            {tour.title}
                          </h3>
                          <p className="text-slate-500 text-xs line-clamp-3 mb-4 flex-grow leading-relaxed">
                            {tour.highlights || 'Experience an unforgettable luxury journey along the historic Nile River.'}
                          </p>
                          
                          {/* Features / Inclusions (طريقة عرض الخصائص بالـ CheckCircle) */}
                          <div className="mb-6">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cruise Features</h4>
                            <ul className="space-y-1.5">
                              {(tour.inclusions || []).slice(0, 3).map((inc: string, index: number) => (
                                <li key={index} className="text-xs text-slate-600 flex items-center gap-1.5">
                                  <CheckCircle size={12} className="text-[#004d33] shrink-0" />
                                  <span className="truncate">{inc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pricing & Action Area (منفصلة ونظيفة تماماً بدون أيقونة الساعة) */}
                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-medium uppercase">Price From</span>
                              <span className="text-base font-extrabold text-[#004d33]">
                                {tour.prices[0]?.price} <span className="text-xs font-medium text-slate-500">/ USD</span>
                              </span>
                            </div>
                            <div className="bg-[#004d33] group-hover:bg-[#003322] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                              View Cruise
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