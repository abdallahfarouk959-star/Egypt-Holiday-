import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { CONTACT_INFO } from "../constants";
import LogoImg from "../assets/Logo.png";
import SquareLogo from "../assets/SquareLogo.png";

import Visa from "../assets/Payments/visa.svg"; // VERCEL FIX
import Mastercard from "../assets/Payments/mastercard.svg";
import Discover from "../assets/Payments/discover.svg";
import ApplePay from "../assets/Payments/apple-pay.svg";

const PAYMENT_METHODS = [
  { name: "Visa", url: Visa },
  { name: "Mastercard", url: Mastercard },
  { name: "Discover", url: Discover },
  { name: "Apple Pay", url: ApplePay },
  {
    name: "Google Pay",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
  },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-emerald-50/80 border-t border-emerald-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={LogoImg}
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-emerald leading-none uppercase">
                  Egypt Holiday
                </h3>
                <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">
                  Aswan
                </p>
              </div>
            </div>
            <div className="flex gap-4 ml-1">
              <a
                href={CONTACT_INFO.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={18}
                  className="text-emerald-700/60 hover:text-blue-600 transition-colors"
                />
              </a>
              <a
                href={CONTACT_INFO.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={18}
                  className="text-emerald-700/60 hover:text-pink-600 transition-colors"
                />
              </a>
              <a
                href="https://www.tiktok.com/@egypt.holiday7?_r=1&_t=ZS-95vZE9glxH2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <SiTiktok
                  size={18}
                  className="text-emerald-700/60 hover:text-black transition-colors"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-semibold text-emerald-800">
                Travel With Confidence
              </p>
              <a
                href="https://ised-isde.canada.ca/cbr-rec/en/search/results?search=%7BEgypt%20Holiday%20Aswan%20ltd%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-800/60 hover:text-emerald-600 transition-colors underline decoration-dotted"
              >
                Canada's Business Registries
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-6 xl:mt-0">
            <div className="flex items-center gap-2">
              <img
                src={SquareLogo}
                alt="Square"
                className="h-5 w-auto grayscale opacity-70"
              />
              <span className="text-[11px] font-bold text-emerald-800/50 tracking-wide">
                Payments Are Processed Securely By Square
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
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
        <div className="pt-8 border-t border-emerald-200/60 flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="text-center xl:text-left">
            <p className="text-xs text-emerald-800/60 mb-1">
              {t("footer.copyright")}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-emerald-800/70 font-medium">
            <Link
              to="/policies#privacy"
              className="hover:text-emerald-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/policies#terms"
              className="hover:text-emerald-700 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              to="/policies#cancellation"
              className="hover:text-emerald-700 transition-colors"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
