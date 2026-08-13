import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopUtilityBar } from './components/layout/TopUtilityBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsentBanner } from './components/ui/CookieConsentBanner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Sponsors from './pages/Sponsors';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import RefundPolicy from './pages/RefundPolicy';

// Scroll to top helper component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-warm-base text-warm-charcoal font-sans antialiased">
        <TopUtilityBar />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/get-involved/volunteer" element={<GetInvolved />} />
            <Route path="/get-involved/careers" element={<GetInvolved />} />
            <Route path="/get-involved/partner" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsentBanner />
      </div>
    </Router>
  );
}

export default App;
