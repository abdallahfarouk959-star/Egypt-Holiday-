import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Anchor, 
  Maximize, 
  Wind, 
  Zap, 
  Navigation, 
  Coffee, 
  Waves, 
  Wifi, 
  Tv,
  Star,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Info
} from 'lucide-react';
import { DESTINATIONS } from '../data/toursData';

export const NileCruiseDetailPage: React.FC = () => {
  const { destId, tourId } = useParams<{ destId: string, tourId: string }>();
  
  const resolveDestKey = (id?: string | null) => {
    if (!id) return null;
    if (DESTINATIONS[id]) return id;
    const parts = id.split(/[-_]/).map(p => p.toLowerCase());
    // try to find a matching key among the parts
    for (const p of parts) {
      if (DESTINATIONS[p]) return p;
    }
    return null;
  };

  const destKey = resolveDestKey(destId);
  const destData = destKey ? DESTINATIONS[destKey] : null;
  const tour = destData?.tours.find(t => t.id === Number(tourId));

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug('NileCruiseDetail params:', { destId, tourId, destKey, hasDest: !!destData, hasTour: !!tour });
  }, [destId, tourId, destKey, destData, tour]);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+20',
    phone: '',
    date: '',
    cabins: '1',
    adults: 0,
    childrenUnder6: 0,
    children6To12: 0,
    message: '',
    agreed: false
  });

  const updateCounter = (field: 'adults' | 'childrenUnder6' | 'children6To12', delta: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.max(0, prev[field] + delta)
    }));
  };

  const isFormValid = 
    formData.name.trim() !== '' && 
    formData.email.trim() !== '' && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.phone.trim() !== '' && 
    formData.date !== '' && 
    formData.agreed;

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitStatus('submitting');
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tourTitle: tour?.title,
          category: 'Nile Cruise'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          countryCode: '+20',
          phone: '',
          date: '',
          cabins: '1',
          adults: 2,
          childrenUnder6: 0,
          children6To12: 0,
          message: '',
          agreed: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif">Cruise not found</h2>
        <Link to="/nile-cruise" className="text-emerald-600 mt-4 inline-block">View All Cruises</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header / Hero */}
      <section className="bg-brand-emerald py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={tour.images[1] || tour.images[0]} 
            alt="background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/nile-cruise" className="inline-flex items-center gap-2 text-brand-gold mb-8 hover:text-white transition-colors">
            <ChevronLeft size={20} /> All Nile Cruises
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-brand-gold text-brand-gold" />)}
              <span className="text-xs uppercase tracking-widest font-bold ml-2">Luxury Cruise ship</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">{tour.title}</h1>
            <p className="text-xl md:text-2xl italic text-white/90 border-l-4 border-brand-gold pl-6 leading-relaxed">
              "{tour.highlights}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            
            {/* Gallery Preview */}
            <div className="grid grid-cols-2 gap-4 mb-16">
              {tour.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={tour.title} 
                  className={`rounded-2xl w-full object-cover shadow-lg ${idx === 0 ? 'h-[400px] col-span-2' : 'h-64'}`}
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>

            {/* Quick Specs (If available) */}
            {tour.boatDetails && (
              <div className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-brand-emerald mb-8 flex items-center gap-3">
                  <Waves className="text-brand-gold" /> Cruise Specifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><Maximize size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Length x Width</span>
                        <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.length} x {tour.boatDetails.specs.width}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><Wind size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Speed</span>
                        <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.speed.split(' ')[0]} Nautical Knots</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><Zap size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Engines</span>
                        <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.engines.split(' ')[0]} Units</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><CheckCircle2 size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Condition</span>
                        <p className="text-sm font-bold text-brand-emerald">Refurbished 2024</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><Wifi size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Internet</span>
                        <p className="text-sm font-bold text-brand-emerald">Smart Connectivity</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm"><Anchor size={20} /></div>
                      <div>
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Dock</span>
                        <p className="text-sm font-bold text-brand-emerald">Private Mooring</p>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* Itinerary */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-brand-emerald mb-8 flex items-center gap-3">
                <Calendar className="text-brand-gold" /> Detailed Itinerary
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-brand-emerald/10">
                {tour.itinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-14 group">
                    <div className="absolute left-3 top-0 w-4 h-4 rounded-full border-2 border-brand-gold bg-white group-hover:bg-brand-emerald transition-colors" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                       <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{step.day} • {step.time}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-emerald mb-2">{step.event}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.detail || 'Experience the beauty of the Nile as we explore historical landmarks and enjoy on-board hospitality.'}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities & Cabins */}
            {tour.boatDetails && (
              <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                   <h3 className="text-xl font-bold text-brand-emerald mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                      <Coffee size={20} className="text-brand-gold" /> Cruise Facilities
                   </h3>
                   <ul className="grid grid-cols-1 gap-4">
                      {tour.boatDetails.facilities.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                           <CheckCircle2 size={16} className="text-emerald-500" /> {f}
                        </li>
                      ))}
                   </ul>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-brand-emerald mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                      <Maximize size={20} className="text-brand-gold" /> Accommodation
                    </h3>
                    <div className="space-y-6">
                       {tour.boatDetails.cabins.map((c, i) => (
                         <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                           <div className="flex justify-between items-center mb-2">
                              <span className="font-bold text-brand-emerald">{c.name}</span>
                              <span className="text-[10px] bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded-full font-bold uppercase">{c.size}</span>
                           </div>
                           <div className="flex gap-2 mb-3">
                              {c.amenities.includes('Smart TV') && <Tv size={14} className="text-gray-400" />}
                              {c.amenities.includes('Free Wi-Fi') && <Wifi size={14} className="text-gray-400" />}
                              {c.amenities.includes('Espresso Machine') && <Coffee size={14} className="text-gray-400" />}
                           </div>
                           <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Available Decks: {c.decks.join(', ')}</div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* Prices */}
            <div className="mb-16 bg-gray-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap size={120} strokeWidth={1} />
               </div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-serif font-bold mb-10 flex items-center gap-3">
                    <Star className="text-brand-gold" /> Pricing & Availability
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tour.prices.map((p, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:bg-white/10 transition-colors">
                        <span className="block text-[10px] text-white/50 uppercase font-bold tracking-widest mb-2">{p.label}</span>
                        <div className="text-3xl font-bold text-brand-gold">{p.price}</div>
                        <span className="text-[8px] text-white/30 uppercase mt-2 block">Per person / Full Board</span>
                      </div>
                    ))}
                 </div>
                 {tour.note && (
                   <div className="mt-12 flex items-start gap-3 text-sm text-white/60 bg-white/5 p-4 rounded-xl border border-white/10 italic">
                      <Info size={18} className="shrink-0 text-brand-gold mt-0.5" />
                      <span>{tour.note}</span>
                   </div>
                 )}
               </div>
            </div>

            {/* Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                  <h4 className="text-brand-emerald font-bold uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500" /> Inclusions
                  </h4>
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-gray-500">
                        <CheckCircle2 size={14} className="mt-0.5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                  <h4 className="text-brand-emerald font-bold uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                    <XCircle size={16} className="text-red-400" /> Exclusions
                  </h4>
                  <ul className="space-y-3">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-gray-500">
                        <XCircle size={14} className="mt-0.5 text-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

          </div>

          {/* Sticky Form */}
          <div className="lg:col-span-4 h-fit sticky top-32">
             <div className="bg-white border border-gray-100 shadow-2xl rounded-[3rem] p-10">
                <div className="mb-8">
                   <h3 className="text-2xl font-serif font-bold text-brand-emerald mb-2">Book Your Cruise</h3>
                   <p className="text-gray-400 text-sm">Direct booking with Egypt's #1 operator.</p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                   <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                      />
                   </div>
                   <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                      />
                   </div>
                   <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Phone Number</label>
                      <div className="flex gap-2">
                         <select 
                            value={formData.countryCode}
                            onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                            className="bg-gray-50 border border-gray-100 rounded-2xl px-3 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none cursor-pointer"
                         >
                            <option value="+20">EG (+20)</option>
                            <option value="+1">US (+1)</option>
                            <option value="+44">UK (+44)</option>
                            <option value="+966">SA (+966)</option>
                            <option value="+971">UAE (+971)</option>
                            <option value="+49">DE (+49)</option>
                            <option value="+33">FR (+33)</option>
                         </select>
                         <input 
                           type="tel" 
                           required
                           placeholder="Enter your phone number"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           className="flex-grow bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                         />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Select Date</label>
                        <input 
                          type="date" 
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Cabin Number</label>
                        <select 
                           value={formData.cabins}
                           onChange={(e) => setFormData({...formData, cabins: e.target.value})}
                           className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all appearance-none cursor-pointer outline-none"
                        >
                           {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} Cabin{n>1?'s':''}</option>)}
                        </select>
                      </div>
                   </div>
                   
                   <div className="space-y-4 pt-2">
                       <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                          <div>
                             <span className="block text-[11px] font-bold text-brand-emerald">Adults</span>
                             <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(+12 years)</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <button type="button" onClick={() => updateCounter('adults', -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-sm">{formData.adults}</span>
                             <button type="button" onClick={() => updateCounter('adults', 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>

                       <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                          <div>
                             <span className="block text-[11px] font-bold text-brand-emerald">Children</span>
                             <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(0 to 5.99 years)</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <button type="button" onClick={() => updateCounter('childrenUnder6', -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-sm">{formData.childrenUnder6}</span>
                             <button type="button" onClick={() => updateCounter('childrenUnder6', 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>

                       <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                          <div>
                             <span className="block text-[11px] font-bold text-brand-emerald">Children</span>
                             <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(6 to 11.99 years)</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <button type="button" onClick={() => updateCounter('children6To12', -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-sm">{formData.children6To12}</span>
                             <button type="button" onClick={() => updateCounter('children6To12', 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>
                   </div>

                   <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-2">Message</label>
                      <textarea 
                        rows={3}
                        placeholder="Type message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none resize-none"
                      />
                   </div>

                   <div className="flex items-start gap-3 px-2">
                       <input 
                        type="checkbox" 
                        id="agree"
                        required
                        checked={formData.agreed}
                        onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                        className="mt-1 accent-brand-emerald"
                       />
                       <label htmlFor="agree" className="text-[10px] text-gray-500 leading-tight cursor-pointer">
                          I agree to the <Link to="/policies#terms" className="text-brand-emerald font-bold hover:underline">Terms & Conditions</Link>, Payment, and Cancellation Policies.
                       </label>
                   </div>

                   <button 
                    type="submit"
                    disabled={!isFormValid || submitStatus === 'submitting'}
                    className={`w-full py-5 font-bold rounded-2xl shadow-xl transition-all transform uppercase tracking-widest text-xs ${
                       submitStatus === 'submitting'
                       ? 'bg-gray-400 text-white cursor-wait'
                       : isFormValid 
                       ? 'bg-brand-gold text-white shadow-brand-gold/20 hover:bg-brand-emerald hover:scale-[1.02] active:scale-95' 
                       : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                    }`}
                   >
                      {submitStatus === 'submitting' ? 'Sending Request...' : 'Book Now'}
                   </button>

                   <AnimatePresence>
                      {submitStatus === 'success' && (
                         <motion.div 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           exit={{ opacity: 0, height: 0 }}
                           className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-[11px] font-bold text-center border border-emerald-100"
                         >
                            Request sent! We will contact you shortly.
                         </motion.div>
                      )}
                      {submitStatus === 'error' && (
                         <motion.div 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           exit={{ opacity: 0, height: 0 }}
                           className="bg-red-50 text-red-700 p-4 rounded-xl text-[11px] font-bold text-center border border-red-100"
                         >
                            Something went wrong. Please try again.
                         </motion.div>
                      )}
                   </AnimatePresence>

                   <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                     By clicking "Reserve Your Spot Now" you agree to our <Link to="/policies#terms" className="text-brand-emerald font-bold hover:underline">Terms & Conditions</Link>
                   </p>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
