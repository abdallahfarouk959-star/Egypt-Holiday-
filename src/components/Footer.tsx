import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import LogoImg from "../assets/Logo.png";
import SquareLogo from "../assets/SquareLogo.png";

import Visa from "../assets/Payments/Visa.svg";
import Discover from "../assets/Payments/discover.svg";

const PAYMENT_METHODS = [
  { name: "Visa", url: Visa },
  { name: "Mastercard", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "American Express", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" },
  { name: "Discover", url: Discover },
  { name: "Apple Pay", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
  { name: "Google Pay", url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-emerald-50/80 border-t border-emerald-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={LogoImg} alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-emerald leading-none uppercase">Egypt Holiday</h3>
                <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">Aswan</p>
              </div>
            </div>
            <div className="flex gap-4 ml-1">
              <a href={CONTACT_INFO.FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Facebook size={18} className="text-emerald-700/60 hover:text-blue-600 transition-colors" />
              </a>
              <a href={CONTACT_INFO.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="text-emerald-700/60 hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-emerald-800/70 font-medium">
            <Link to="/policies#privacy" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
            <Link to="/policies#terms" className="hover:text-emerald-700 transition-colors">Terms of Use</Link>
            <Link to="/policies#cancellation" className="hover:text-emerald-700 transition-colors">Cancellation Policy</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-200/60 flex flex-col xl:flex-row items-center justify-between gap-8">
          
          <div className="text-center xl:text-left">
            <p className="text-xs text-emerald-800/60 mb-1">{t("footer.copyright")}</p>
            <a
              href="https://ised-isde.canada.ca/cbr-rec/en/search/results?search=%7BEgypt%20Holiday%20Aswan%20ltd%7D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-emerald-800/60 hover:text-emerald-600 transition-colors underline decoration-dotted"
            >
              Verified Canadian Business Registry
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center xl:justify-end gap-4 sm:gap-6 mt-6 xl:mt-0">
            
            <div className="flex items-center gap-2">
              <img src={SquareLogo} alt="Square" className="h-5 w-auto grayscale opacity-70" />
              <span className="text-[11px] font-bold text-emerald-800/50 tracking-wide">Payments Are Processed Securely By Square</span>
            </div>
            
            <div className="hidden sm:block w-px h-5 bg-emerald-200"></div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {PAYMENT_METHODS.map((method) => (
                <img
                  key={method.name}
                  src={method.url} 
                  alt={method.name}
                  title={method.name}
                  className="h-6 sm:h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;