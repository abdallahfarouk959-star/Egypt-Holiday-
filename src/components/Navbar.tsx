import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import i18n from "i18next";
import { ChevronDown, ChevronRight, Menu, X, Globe } from "lucide-react";
import { TOURS, NILE_CRUISE, POLICIES, NavItem } from "../data/toursData";
import LogoImg from "../assets/Logo.png";

const MobileNavItem: React.FC<{
  item: NavItem;
  depth?: number;
  closeMenu: () => void;
}> = ({ item, depth = 0, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className={`${depth === 0 ? "border-b border-gray-100" : ""}`}>
      <div className="flex items-center justify-between py-3">
        {hasSubItems ? (
          <span
            className={`text-gray-800 ${depth === 0 ? "text-lg font-medium" : "text-sm font-medium"}`}
          >
            {item.name}
          </span>
        ) : (
          <Link
            to={item.link}
            onClick={closeMenu}
            className={`text-gray-800 ${depth === 0 ? "text-lg font-medium" : "text-sm"}`}
          >
            {item.name}
          </Link>
        )}

        {hasSubItems && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {hasSubItems && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 border-l-2 border-emerald-100 mb-2"
          >
            <div className="pb-2 space-y-1">
              {item.subItems?.map((sub) => (
                <MobileNavItem
                  key={sub.name}
                  item={sub}
                  depth={depth + 1}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubDropdown = ({ items }: { items: NavItem[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute left-full top-0 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 min-w-[320px] z-[60]"
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.link}
          className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors border-b border-gray-50 last:border-0"
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
};

const Dropdown = ({
  title,
  items,
  activeDropdown,
  setActiveDropdown,
}: {
  title: string;
  items: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (title: string | null) => void;
}) => {
  const isOpen = activeDropdown === title;
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setActiveDropdown(title)}
      onMouseLeave={() => {
        setActiveDropdown(null);
        setActiveSubItem(null);
      }}
    >
      <button className="flex items-center gap-1 py-4 text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors cursor-pointer capitalize">
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full bg-white border border-gray-100 shadow-xl rounded-lg py-2 min-w-[240px] z-50"
          >
            {items.map((item) => (
              <div
                key={item.name}
                className="relative group/sub"
                onMouseEnter={() =>
                  item.subItems && setActiveSubItem(item.name)
                }
                onMouseLeave={() => setActiveSubItem(null)}
              >
                <Link
                  to={item.link}
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {item.name}
                  {item.subItems && (
                    <ChevronRight className="w-3 h-3 text-gray-400 group-hover/sub:text-emerald-600" />
                  )}
                </Link>

                {item.subItems && activeSubItem === item.name && (
                  <SubDropdown items={item.subItems} />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLanguage = i18n.language === "fr" ? "French" : "English";
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img
              src={LogoImg}
              alt="Egypt Holiday Aswan Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif font-bold text-xl text-brand-emerald tracking-tight leading-none uppercase">
              Egypt Holiday
            </h1>
            <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">
              Aswan
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#about-us"
            className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors"
          >
            About
          </Link>

          <Dropdown
            title={"Tours"}
            items={TOURS}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <Dropdown
            title={"Nile cruise"}
            items={NILE_CRUISE}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <Link
            to="/#contact-us"
            className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold hover:border-emerald-500 transition-colors bg-gray-50/50"
            >
              <Globe size={14} className="text-emerald-600" />
              {currentLanguage}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl py-1 z-[110] min-w-[120px]"
                >
                  {[
                    { name: "English", code: "en" },
                    { name: "French", code: "fr" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-emerald-50 transition-colors ${i18n.language === lang.code ? "text-emerald-600 font-bold" : "text-gray-600"}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 space-y-1">
              <MobileNavItem
                item={{ name: "Home", link: "/" }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                item={{ name: "About Us", link: "/#about-us" }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                item={{ name: "Tours", link: "#", subItems: TOURS }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                item={{
                  name: "Nile cruise",
                  link: "#",
                  subItems: NILE_CRUISE,
                }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                item={{ name: "Policies", link: "#", subItems: POLICIES }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                item={{ name: "Contact Us", link: "/#contact-us" }}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
