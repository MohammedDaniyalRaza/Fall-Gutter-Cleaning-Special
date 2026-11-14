import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ElevationRail } from './components/layout/ElevationRail';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/layout/Preloader';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SITE } from './data/site';
import { useLenis } from './hooks/useLenis';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoaderFallback() {
  return (
    <div className="min-h-screen bg-[#F6F4F0] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#0F1F3D]/20 border-t-[#F26A1B] animate-spin" />
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#6B7686]">
          Loading
        </span>
      </div>
    </div>
  );
}

function AppShell() {
  useLenis();
  const location = useLocation();
  const [promoDismissed, setPromoDismissed] = useState(false);

  const showPromoBar = SITE.promo.active && !promoDismissed;

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4F0] text-[#0F1F3D]">
      <Preloader />
      <ScrollToTop />
      <Navbar
        promoVisible={showPromoBar}
        onDismissPromo={() => setPromoDismissed(true)}
      />
      <ElevationRail />

      <main className={`flex-1 transition-[padding] duration-200 ${showPromoBar ? 'pt-[45px]' : ''}`}>
        <Suspense fallback={<RouteLoaderFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
