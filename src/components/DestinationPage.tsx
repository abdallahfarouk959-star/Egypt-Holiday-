import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../data/toursData';
import { CheckCircle, X, Users, MessageSquare, ChevronLeft } from 'lucide-react'; // تم حذف الـ Clock icon من هنا

export default function DestinationPage() {
  const { category, tourId } = useParams<{ category: string; tourId?: string }>();
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Booking form states
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', countryCode: '+1', date: '',
    adults: 1, childrenUnder6: 0, children6To12: 0, message: '', agreed: false
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Extract total section data cleanly
  const currentCategoryData = category && DESTINATIONS[category.toLowerCase()] ? DESTINATIONS[category.toLowerCase()] : null;
  const filteredTours = currentCategoryData ? currentCategoryData.tours : [];

  // If tourId parameter exists in the URL, grab that specific tour item for detail view
  const singleTourDetail = tourId && filteredTours.length > 0 
    ? filteredTours.find((t: any) => t.id === parseInt(tourId)) 
    : null;

  const getCategoryTitle = () => {
    switch (category?.toLowerCase()) {
      case 'aswan': return 'Aswan Tours & Day Trips';
      case 'luxor': return 'Luxor Excursions & Packages';
      case 'cairo': return 'Cairo & Pyramids Packages';
      case 'abu-simbel': return 'Abu Simbel Sacred Excursions';
      case 'historical-wonders': return 'Historical Wonders & Long Packages';
      default: return 'Egypt Special Tours';
    }
  };

  const openBookingModal = (e: React.MouseEvent, tour: any) => {
    e.stopPropagation(); // Prevents navigating into details when clicking book now directly
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const updateCounter = (field: 'adults' | 'childrenUnder6' | 'children6To12', amount: number) => {
    setFormData(prev => {
      const newVal = Math.max(0, prev[field] + amount);
      if (field === 'adults') return { ...prev, adults: Math.max(1, newVal) };
      return { ...prev, [field]: newVal };
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      setErrorMsg('You must agree to the privacy policy to submit.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tourTitle: selectedTour?.title || singleTourDetail?.title || 'Day Tour Package',
          category: 'Day Tour Package'
        })
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setSuccessMsg('Your booking request was submitted successfully! We will contact you shortly.');
        setFormData({
          name: '', email: '', phone: '', countryCode: '+1', date: '',
          adults: 1, childrenUnder6: 0, children6To12: 0, message: '', agreed: false
        });
      } else {
        setErrorMsg(resData.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the server. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  // --- RENDERING CONDITIONAL DETAIL VIEW IF TOUR ID LOGGED ---
  if (singleTourDetail) {
    return (
      <div className="bg-slate-50 min-h-screen pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to={`/destination/${category}`} className="inline-flex items-center gap-2 text-[#004d33] font-medium hover:text-[#d4af37] transition-colors mb-6">
            <ChevronLeft size={20} /> Back to {currentCategoryData?.title || 'All Trips'}
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Main Full Banner */}
            <div className="h-96 w-full relative">
              <img src={singleTourDetail.images[0]} alt={singleTourDetail.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{singleTourDetail.title}</h1>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Highlights Text */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Overview & Highlights</h3>
                <p className="text-slate-700 leading-relaxed text-base italic">"{singleTourDetail.highlights}"</p>
              </div>

              {/* Grid Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <h4 className="text-sm font-bold text-[#004d33] uppercase tracking-wider mb-4">What's Included</h4>
                  <ul className="space-y-2.5">
                    {singleTourDetail.inclusions.map((inc: string, i: number) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                        <CheckCircle size={16} className="text-[#004d33] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50/30 p-6 rounded-2xl border border-rose-100/50">
                  <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-4">What's Excluded</h4>
                  <ul className="space-y-2.5">
                    {singleTourDetail.exclusions.map((exc: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Itinerary Section Timeline */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Itinerary Timeline</h4>
                <div className="relative border-l-2 border-slate-100 ml-4 pl-6 space-y-6">
                  {singleTourDetail.itinerary.map((step: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white bg-[#004d33] shadow-sm"></div>
                      <span className="text-xs font-bold text-[#d4af37] tracking-wider block">
                        {step.day ? `${step.day} • ${step.time}` : step.time}
                      </span>
                      <h5 className="text-base font-bold text-slate-900 mb-1">{step.event}</h5>
                      {step.detail && <p className="text-sm text-slate-500">{step.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Rates and Action Call Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Prices Tier Starting From</span>
                  <span className="text-2xl font-black text-[#004d33]">{singleTourDetail.prices[1]?.price || singleTourDetail.prices[0]?.price} <span className="text-xs font-medium text-slate-500">/ per person</span></span>
                </div>
                <button type="button" onClick={(e) => openBookingModal(e, singleTourDetail)} className="w-full sm:w-auto bg-[#004d33] hover:bg-[#003322] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-center tracking-wide">
                  Book Request Now
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Box Caller Shared structure */}
        {isBookingOpen && selectedTour && renderBookingModalForm()}
      </div>
    );
  }

  // --- GRID LIST VIEW RENDERING (DEFAULT IF JUST LOOKING AT SECTION CITY) ---
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[#004d33] font-medium hover:text-[#d4af37] transition-colors">
            <ChevronLeft size={20} /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{getCategoryTitle()}</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
          {currentCategoryData && (
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-sm leading-relaxed italic">
              {currentCategoryData.quote}
            </p>
          )}
        </div>

        {/* Tours Grid View Box Layer */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border">
            <p className="text-slate-500 text-lg">No packages available in this category currently.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour: any, i: number) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex"
              >
                <Link 
                  to={`/destination/${category}/${tour.id}`}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer w-full"
                >
                  {/* Tour Image Layer */}
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {/* ❌ تم حذف الـ div الخاص بأيقونة الساعة والـ Duration بالكامل من هنا ليصبح التصميم نظيف ومطابق لطلبك */}
                  </div>

                  {/* Card Content Layer structure */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px] group-hover:text-[#004d33] transition-colors">{tour.title}</h3>
                    <p className="text-slate-500 text-xs line-clamp-3 mb-4 flex-grow leading-relaxed">{tour.highlights}</p>
                    
                    {/* Inclusions Bullet Layout Preview */}
                    <div className="mb-6">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Package Features</h4>
                      <ul className="space-y-1.5">
                        {tour.inclusions.slice(0, 3).map((inc: string, index: number) => (
                          <li key={index} className="text-xs text-slate-600 flex items-center gap-1.5">
                            <CheckCircle size={12} className="text-[#004d33] shrink-0" />
                            <span className="truncate">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Action Area */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium uppercase">Price From</span>
                        <span className="text-base font-extrabold text-[#004d33]">
                          {tour.prices[1]?.price ? `${tour.prices[1].price}` : `${tour.prices[0]?.price || 'N/A'}`}
                        </span>
                      </div>
                      <button 
                        type="button" 
                        onClick={(e) => openBookingModal(e, tour)} 
                        className="bg-[#004d33] hover:bg-[#003322] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal Call Shared validation layout */}
      {isBookingOpen && selectedTour && renderBookingModalForm()}
    </div>
  );

  // --- HOISTED SHARED MODAL FORM METHOD TO AVOID REPETITION IN CODE ---
  function renderBookingModalForm() {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
          
          <div className="bg-[#004d33] text-white px-6 py-4 flex justify-between items-center shrink-0">
            <div>
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">Booking Request</span>
              <h3 className="text-lg font-bold truncate max-w-[400px] sm:max-w-md">{selectedTour?.title || singleTourDetail?.title}</h3>
            </div>
            <button type="button" onClick={() => setIsBookingOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleBookingSubmit} className="p-6 overflow-y-auto space-y-5">
            {successMsg && <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-sm">{successMsg}</div>}
            {errorMsg && <div className="p-4 bg-rose-50 text-rose-800 rounded-xl border border-rose-200 text-sm">{errorMsg}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Phone Number</label>
                <div className="flex gap-2">
                  <input type="text" name="countryCode" required value={formData.countryCode} onChange={handleInputChange} className="w-20 px-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm text-center" placeholder="+1" />
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="123 456 789" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Desired Travel Date</label>
                <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Users size={14}/> Number of Travelers</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2.5 rounded-xl border flex flex-col justify-between items-center">
                  <span className="text-xs font-semibold text-slate-600 block mb-1">Adults</span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateCounter('adults', -1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">-</button>
                    <span className="font-bold text-sm">{formData.adults}</span>
                    <button type="button" onClick={() => updateCounter('adults', 1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">+</button>
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border flex flex-col justify-between items-center">
                  <span className="text-xs font-semibold text-slate-600 block mb-1">Kids (0-6)</span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateCounter('childrenUnder6', -1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">-</button>
                    <span className="font-bold text-sm">{formData.childrenUnder6}</span>
                    <button type="button" onClick={() => updateCounter('childrenUnder6', 1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">+</button>
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border flex flex-col justify-between items-center">
                  <span className="text-xs font-semibold text-slate-600 block mb-1">Kids (6-12)</span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateCounter('children6To12', -1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">-</button>
                    <span className="font-bold text-sm">{formData.children6To12}</span>
                    <button type="button" onClick={() => updateCounter('children6To12', 1)} className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><MessageSquare size={14}/> Special Requests / Notes</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="Any details or preferences..."></textarea>
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input type="checkbox" id="agreed" checked={formData.agreed} onChange={handleCheckboxChange} className="mt-1 accent-[#004d33]" />
              <label htmlFor="agreed" className="text-xs text-slate-500 leading-normal">
                I agree to the terms of booking, privacy policy, and confirm that all data typed above is correct.
              </label>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#004d33] hover:bg-[#003322] disabled:bg-slate-300 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md text-sm tracking-wide">
              {loading ? 'Sending Request...' : 'Confirm & Request Booking'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}