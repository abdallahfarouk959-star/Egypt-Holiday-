import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import DestinationPage from "./components/DestinationPage"; 
import { PoliciesPage } from "./components/PoliciesPage";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { NileCruiseListPage } from "./components/NileCruiseListPage";
import { NileCruiseDetailPage } from "./components/NileCruiseDetailPage";
import { PaymentMethodsPage } from "./components/PaymentMethodsPage";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs"; 

// تأثير حركي بسيط وناعم جداً عند فتح أي صفحة (Fade in + Slide up خفيف)
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const PageTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // يتغير الـ key مع كل صفحة ليعيد تشغيل الترانسيشن فوراً
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      {/* تطبيق الترانسيشن على محتوى الصفحات بالكامل */}
      <PageTransitionWrapper>
        {children}
      </PageTransitionWrapper>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:category" element={<DestinationPage />} /> 
            <Route path="/destination/:category/:tourId" element={<DestinationPage />} />
            <Route path="/nile-cruise" element={<NileCruiseListPage />} />
            <Route path="/nile-cruise/:destId/:tourId" element={<NileCruiseDetailPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/payment-methods" element={<PaymentMethodsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
}