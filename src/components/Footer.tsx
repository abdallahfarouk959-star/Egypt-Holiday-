import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, ChevronRight, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import LogoImg from "../assets/Logo.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={LogoImg}
                  alt="Egypt Holiday Aswan Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-emerald tracking-tight leading-none uppercase">
                  Egypt Holiday
                </h3>
                <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">
                  Aswan
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-8 max-w-xs leading-relaxed">
              Celebrating 20 years of crafting premium travel experiences
              across the heart of Egypt.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
                />
              </a>
              <a
                href={CONTACT_INFO.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={20}
                  className="text-gray-400 hover:text-pink-600 cursor-pointer transition-colors"
                />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-emerald-900">
              {t("footer.destinations")}
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  to="/tours/cairo"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Cairo
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/luxor"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Luxor
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/aswan"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Aswan
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/abu-simbel"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Abu Simbel
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-widest mb-8 text-emerald-900">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <Phone
                  size={14}
                  className="text-brand-emerald mt-1 shrink-0"
                />
                <div>
                  <a
                    href={`tel:${CONTACT_INFO.PHONE_EGYPT}`}
                    className="block hover:text-emerald-600 transition-colors"
                  >
                    EG: {CONTACT_INFO.PHONE_EGYPT}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.PHONE_CANADA}`}
                    className="block hover:text-emerald-600 transition-colors"
                  >
                    CA: {CONTACT_INFO.PHONE_CANADA}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-emerald shrink-0" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_INFO.EMAIL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-brand-emerald mt-1 shrink-0"
                />
                <div className="space-y-2">
                  <p className="leading-tight text-[11px]">
                    <span className="font-bold text-emerald-800">Egypt:</span>{" "}
                    {CONTACT_INFO.ADDRESS_EGYPT}
                  </p>
                  <p className="leading-tight text-[11px]">
                    <span className="font-bold text-emerald-800">
                      Canada:
                    </span>{" "}
                    {CONTACT_INFO.ADDRESS_CANADA}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">{t("footer.copyright")}</p>
            <a
              href="https://ised-isde.canada.ca/cbr-rec/en/search/results?search=%7BEgypt%20Holiday%20Aswan%20ltd%7D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-400 hover:text-emerald-600 transition-colors underline decoration-dotted"
            >
              Verified Canadian Business Registry
            </a>
          </div>
          <div className="flex gap-8 text-xs text-gray-400">
            <Link
              to="/policies#privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/policies#terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              to="/policies#cancellation"
              className="hover:text-gray-900 transition-colors"
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
