import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./components/Home";
import { DestinationPage } from "./components/DestinationPage";
import { PoliciesPage } from "./components/PoliciesPage";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { NileCruiseListPage } from "./components/NileCruiseListPage";
import { NileCruiseDetailPage } from "./components/NileCruiseDetailPage";
import { PaymentMethodsPage } from "./components/PaymentMethodsPage";

// --- Layout Wrapper ---

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {children}

      <Footer />

      <WhatsAppButton />
    </div>
  );
};
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours/:id" element={<DestinationPage />} />
          <Route path="/nile-cruise" element={<NileCruiseListPage />} />
          <Route
            path="/nile-cruise/:destId/:tourId"
            element={<NileCruiseDetailPage />}
          />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/payment-methods" element={<PaymentMethodsPage />} />
        </Routes>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
}
