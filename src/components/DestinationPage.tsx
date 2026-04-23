import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, ChevronLeft, Anchor, Users, Maximize, Wind, Zap, Navigation, Coffee, Waves, Wifi, Tv, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DESTINATIONS } from '../data/toursData';

export const DestinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const data = id ? DESTINATIONS[id] : null;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug('DestinationPage params:', { id, hasData: !!data });
  }, [id, data]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, location.hash]);

  // Form State
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e: React.FormEvent, tourTitle: string) => {
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
          tourTitle: tourTitle,
          category: data?.title
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

  if (!data) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif">Destination not found</h2>
        <Link to="/" className="text-emerald-600 mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-emerald py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=2000" 
            alt="background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold mb-8 hover:text-white transition-colors">
            <ChevronLeft size={20} /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 uppercase tracking-tight">{data.title}</h1>
            <p className="text-xl md:text-2xl italic leading-relaxed text-white/90">
              "{data.quote}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages List */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="space-y-32">
          {data.tours.map((tour, index) => (
            <motion.div 
              key={tour.id} 
              id={`tour-${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50"
            >
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold text-lg shrink-0">{tour.id}</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-emerald">{tour.title}</h3>
                </div>
                
                <div className="relative group">
                  <img 
                    src={tour.images[0]} 
                    alt={tour.title} 
                    className="rounded-2xl w-full h-96 object-cover shadow-lg transition-transform duration-700 group-hover:scale-[1.02]" 
                    referrerPolicy="no-referrer" 
                  />
                  {tour.boatDetails && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Luxury Vessel
                    </div>
                  )}
                </div>
                
                <div className="prose prose-emerald max-w-none">
                  <div className="mb-12">
                    <h4 className="text-emerald-800 uppercase tracking-widest text-[10px] font-bold mb-3 flex items-center gap-2">
                       Highlights
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg italic">{tour.highlights}</p>
                    {tour.boatDetails?.usp && (
                      <div className="mt-4 p-4 bg-brand-gold/5 border-l-4 border-brand-gold text-brand-emerald text-sm italic">
                        "{tour.boatDetails.usp}"
                      </div>
                    )}
                  </div>

                  {/* Boat Details Section */}
                  {tour.boatDetails && (
                    <div className="mb-12">
                      <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-6">Technical Specifications & Facilities</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8">
                        <div className="flex items-center gap-3">
                          <Maximize size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Dimensions</p>
                            <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.length} x {tour.boatDetails.specs.width}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Wind size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Engines</p>
                            <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.engines.split(' ')[0]} x {tour.boatDetails.specs.engines.split(' ')[2]}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Navigation size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Speed</p>
                            <p className="text-sm font-bold text-brand-emerald">{tour.boatDetails.specs.speed.split(',')[0].trim()}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Anchor size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Private Dock</p>
                            <p className="text-sm font-bold text-brand-emerald">Al Bughdadi District</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Waves size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Pool</p>
                            <p className="text-sm font-bold text-brand-emerald">150cm Depth</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Wifi size={18} className="text-brand-gold" />
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Connectivity</p>
                            <p className="text-sm font-bold text-brand-emerald">Free Wi-Fi</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                          <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-4">On-Board Facilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {tour.boatDetails.facilities.map((f, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-500 font-medium border border-gray-100">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                          <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-4">Accommodation Options</h4>
                          <div className="space-y-4 text-[10px] text-gray-500">
                            {tour.boatDetails.cabins.map((c, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                                <div>
                                  <span className="font-bold text-brand-emerald block text-xs">{c.name}</span>
                                  <span className="text-[8px] uppercase tracking-wider">{c.decks.join(', ')} Decks • {c.size}</span>
                                </div>
                                <div className="flex gap-2">
                                  {c.amenities.includes('Smart TV') && <Tv size={12} className="text-brand-gold" />}
                                  {c.amenities.includes('Espresso Machine') && <Coffee size={12} className="text-brand-gold" />}
                                  {c.amenities.includes('Free Wi-Fi') && <Wifi size={12} className="text-brand-gold" />}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-4">Inclusions</h4>
                      <ul className="space-y-2">
                        {tour.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                            <ChevronRight size={14} className="mt-0.5 text-brand-emerald shrink-0" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-emerald-800 uppercase tracking-widest text-[10px] font-bold mb-4">Exclusions</h4>
                      <ul className="space-y-2">
                        {tour.exclusions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                            <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                            {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-8">Detailed Itinerary Timeline</h4>
                    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-emerald/10 before:via-brand-emerald/5 before:to-transparent">
                      {tour.itinerary.map((step, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                          {/* Dot */}
                          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-emerald text-white shadow-xl shadow-brand-emerald/20 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:bg-brand-gold transition-colors duration-500">
                            <Zap size={16} />
                          </div>
                          {/* Content */}
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col mb-1">
                              <time className="font-serif font-bold text-brand-gold text-lg">
                                {step.day ? `${step.day} - ${step.time}` : step.time}
                              </time>
                              <div className="text-sm font-bold text-brand-emerald uppercase tracking-widest mb-2">{step.event}</div>
                            </div>
                            {step.detail && <p className="text-gray-500 text-xs leading-relaxed">{step.detail}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-8 bg-white rounded-2xl border border-brand-emerald/5 shadow-sm">
                  <h4 className="text-brand-emerald uppercase tracking-widest text-[10px] font-bold mb-6">Price Comparison (USD)</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                    {tour.prices.map((p, i) => (
                      <div key={i} className="text-center group">
                        <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 group-hover:text-brand-gold transition-colors">{p.label}</div>
                        <div className="text-xl font-bold text-brand-emerald">{p.price}</div>
                      </div>
                    ))}
                  </div>
                  {tour.childPolicy && (
                    <div className="mt-6 pt-6 border-t border-gray-50 text-[10px] font-bold text-brand-gold uppercase tracking-widest flex items-center gap-2">
                      <ChevronRight size={14} /> Child Policy: {tour.childPolicy}
                    </div>
                  )}
                  {tour.note && (
                    <div className="mt-4 text-xs font-bold text-red-500 italic">
                      Note: {tour.note}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 sticky top-32">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8">
                  <h4 className="text-xl font-serif font-bold text-brand-emerald mb-6">Request This Trip</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">Interested in this tour? Fill out the form below and our experts will contact you shortly.</p>
                  <form className="space-y-4" onSubmit={(e) => handleSubmit(e, tour.title)}>
                    <div>
                      <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your full name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Phone Number</label>
                      <div className="flex gap-2">
                         <select 
                            value={formData.countryCode}
                            onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                            className="bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 text-xs focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none cursor-pointer"
                         >
                            <option value="+20">+20</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+966">+966</option>
                         </select>
                         <input 
                           type="tel" 
                           required
                           placeholder="Enter your phone number"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                         />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div>
                         <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Select Date</label>
                         <input 
                           type="date" 
                           required
                           value={formData.date}
                           onChange={(e) => setFormData({...formData, date: e.target.value})}
                           className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 text-xs focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none"
                         />
                       </div>
                       <div>
                         <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Cabin Number</label>
                         <select 
                           value={formData.cabins}
                           onChange={(e) => setFormData({...formData, cabins: e.target.value})}
                           className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 text-xs focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none cursor-pointer appearance-none"
                         >
                           {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} Cabin{n>1?'s':''}</option>)}
                         </select>
                       </div>
                    </div>

                    <div className="space-y-3 pt-2">
                       <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl border border-gray-100">
                          <div>
                             <span className="block text-[10px] font-bold text-brand-emerald">Adults</span>
                             <span className="text-[8px] text-gray-400 uppercase tracking-tighter">(+12 years)</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <button type="button" onClick={() => updateCounter('adults', -1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-xs">{formData.adults}</span>
                             <button type="button" onClick={() => updateCounter('adults', 1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>
                       <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl border border-gray-100">
                          <div>
                             <span className="block text-[10px] font-bold text-brand-emerald">Children</span>
                             <span className="text-[8px] text-gray-400 uppercase tracking-tighter">(0 to 5.99 years)</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <button type="button" onClick={() => updateCounter('childrenUnder6', -1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-xs">{formData.childrenUnder6}</span>
                             <button type="button" onClick={() => updateCounter('childrenUnder6', 1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>
                       <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl border border-gray-100">
                          <div>
                             <span className="block text-[10px] font-bold text-brand-emerald">Children</span>
                             <span className="text-[8px] text-gray-400 uppercase tracking-tighter">(6 to 11.99 years)</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <button type="button" onClick={() => updateCounter('children6To12', -1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">-</button>
                             <span className="w-4 text-center font-bold text-xs">{formData.children6To12}</span>
                             <button type="button" onClick={() => updateCounter('children6To12', 1)} className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-brand-emerald shadow-sm hover:bg-brand-gold hover:text-white transition-all">+</button>
                          </div>
                       </div>
                    </div>

                    <div>
                      <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1 ml-1">Message</label>
                      <textarea 
                        placeholder="Type message" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-emerald/20 transition-all outline-none resize-none" 
                        rows={2} 
                      />
                    </div>

                    <div className="flex items-start gap-3 px-1">
                       <input 
                        type="checkbox" 
                        id="agreeReq"
                        required
                        checked={formData.agreed}
                        onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                        className="mt-1 accent-brand-emerald"
                       />
                       <label htmlFor="agreeReq" className="text-[8px] text-gray-500 leading-tight">
                          I agree to the <Link to="/policies#terms" className="text-brand-emerald font-bold hover:underline">Terms & Conditions</Link>, Payment, and Cancellation Policies.
                       </label>
                    </div>

                    <button 
                      disabled={!isFormValid || submitStatus === 'submitting'}
                      className={`w-full py-4 font-bold rounded-xl transition-all transform uppercase tracking-widest text-[10px] shadow-lg ${
                        submitStatus === 'submitting'
                        ? 'bg-gray-400 text-white cursor-wait'
                        : isFormValid 
                        ? 'bg-brand-gold text-white shadow-brand-gold/20 hover:bg-brand-emerald hover:scale-[1.01] active:scale-95' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {submitStatus === 'submitting' ? 'Sending...' : 'Book Now'}
                    </button>

                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-emerald-50 text-emerald-700 p-3 rounded-xl text-[10px] font-bold text-center border border-emerald-100"
                        >
                          Booking request sent successfully!
                        </motion.div>
                      )}
                      {submitStatus === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-red-50 text-red-700 p-3 rounded-xl text-[10px] font-bold text-center border border-red-100"
                        >
                          Error sending request. Please try again.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-4 border-t border-gray-50 text-center">
                      <img src={tour.imagePath} />
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
