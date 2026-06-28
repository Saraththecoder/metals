import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CTAStrip from './components/CTAStrip';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';

// Lazy Loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ThankYou = React.lazy(() => import('./pages/ThankYou'));

// Premium Fallback Loading Component
const PageLoader = () => (
  <div className="min-h-[70vh] w-full flex flex-col items-center justify-center space-y-4">
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-steel animate-spin" />
      <div className="w-6 h-6 rounded-full border-r-2 border-l-2 border-ore animate-[spin_1s_linear_infinite_reverse]" />
    </div>
    <span className="font-body text-xs font-semibold text-chrome-muted tracking-widest uppercase">
      GK Metals & Minerals
    </span>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          {showSplash && <SplashScreen finishLoading={() => setShowSplash(false)} />}
        </AnimatePresence>
        
        <div className="flex flex-col min-h-screen bg-navy text-chrome-muted font-body">
          {/* Global Header Navigation */}
          <Navbar />
          
          {/* Sticky Quick Contact Stack */}
          <CTAStrip />

          {/* Main Routing Container */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
              </Routes>
            </Suspense>
          </main>

          {/* Corporate Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
