import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, XCircle, Info } from 'lucide-react';
import { POLICIES_CONTENT } from '../data/toursData';

export const PoliciesPage: React.FC = () => {
  const location = useLocation();

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
  }, [location.hash]);

  const sections = [
    { id: 'privacy', icon: Shield, ...POLICIES_CONTENT.privacy },
    { id: 'terms', icon: FileText, ...POLICIES_CONTENT.terms },
    { id: 'cancellation', icon: XCircle, ...POLICIES_CONTENT.cancellation },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Policies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Transparency and fairness across all our services. Please review our guidelines for bookings, privacy, and cancellations.
          </motion.p>
        </div>
      </section>

      {/* Policies Navigation */}
      <section className="sticky top-24 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-sm font-bold text-gray-500 hover:text-brand-emerald uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <section.icon size={16} />
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-32">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-48"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-emerald/5 rounded-2xl flex items-center justify-center text-brand-emerald">
                  <section.icon size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-brand-emerald">{section.title}</h2>
                  <div className="h-1 w-12 bg-brand-gold mt-2 rounded-full"></div>
                </div>
              </div>

              <div className="prose prose-emerald max-w-none">
                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
                  {section.content.split('\n').map((line, i) => {
                    if (!line.trim()) return <br key={i} />;
                    
                    // Header-like lines (starting with numbers or just being bold titles)
                    if (line.match(/^\d+\./) || line.match(/^[A-Z][a-z]+ & [A-Z][a-z]+/) || line.match(/^[A-Z][A-Za-z ]+$/)) {
                      return (
                        <h3 key={i} className="text-lg font-bold text-emerald-800 mt-8 mb-4 first:mt-0">
                          {line}
                        </h3>
                      );
                    }
                    
                    // Bullet points
                    if (line.trim().startsWith('-')) {
                      return (
                        <div key={i} className="flex items-start gap-3 mb-2 pl-4">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed">{line.trim().substring(1).trim()}</p>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>

              {index < sections.length - 1 && (
                <div className="mt-32 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>

      {/* Contact Support CTA */}
      <section className="py-24 bg-gray-50 mt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-8">
            <Info size={32} className="text-emerald-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Need help understanding our policies?</h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our team is here to help you with any questions you might have regarding your booking, privacy, or cancellation terms.
          </p>
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('Reservation@egyptholidayaswan.com')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-emerald transition-all shadow-lg shadow-brand-gold/20 uppercase tracking-widest text-xs"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};
