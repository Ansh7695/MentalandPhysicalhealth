import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Heart, Menu, X, HeartPulse, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MobileDrawer } from './MobileDrawer';
import clsx from 'clsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [getInvolvedDropdownOpen, setGetInvolvedDropdownOpen] = useState(false);
  const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setGetInvolvedDropdownOpen(false);
    setImpactDropdownOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b',
          isScrolled ? 'py-2.5 shadow-soft border-warm-border' : 'py-4 border-transparent'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-soft group-hover:bg-brand-teal-dark transition-colors">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-warm-charcoal tracking-tight leading-none group-hover:text-brand-teal transition-colors">
                Aura <span className="text-brand-teal">Foundation</span>
              </span>
              <span className="text-[10px] font-semibold text-warm-muted tracking-wider uppercase mt-0.5">
                Physical + Mental NGO
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items - De-congested & Spacious Layout */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={clsx(
                'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                isActive('/') ? 'text-brand-teal bg-brand-tint' : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
              )}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={clsx(
                  'px-3 py-2 text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-1',
                  location.pathname.startsWith('/about')
                    ? 'text-brand-teal bg-brand-tint'
                    : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
                )}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About Us</span>
                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-200', aboutDropdownOpen && 'rotate-180')} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-60 py-2 bg-white rounded-xl shadow-lift border border-warm-border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Our Story & Timeline
                  </Link>
                  <Link
                    to="/about#founders-note"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Founder's Note
                  </Link>
                  <Link
                    to="/about#team"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Our Team & Advisors
                  </Link>
                  <Link
                    to="/about#legal"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors border-t border-warm-border/50 mt-1 pt-2"
                  >
                    Registration & Legal (12A/80G)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/programs"
              className={clsx(
                'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                location.pathname.startsWith('/programs') ? 'text-brand-teal bg-brand-tint' : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
              )}
            >
              Programs
            </Link>

            {/* Get Involved Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGetInvolvedDropdownOpen(true)}
              onMouseLeave={() => setGetInvolvedDropdownOpen(false)}
            >
              <button
                className={clsx(
                  'px-3 py-2 text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-1',
                  location.pathname.startsWith('/get-involved')
                    ? 'text-brand-teal bg-brand-tint'
                    : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
                )}
                aria-expanded={getInvolvedDropdownOpen}
              >
                <span>Get Involved</span>
                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-200', getInvolvedDropdownOpen && 'rotate-180')} />
              </button>

              {getInvolvedDropdownOpen && (
                <div className="absolute top-full left-0 w-60 py-2 bg-white rounded-xl shadow-lift border border-warm-border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/get-involved/volunteer"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Volunteer Opportunities
                  </Link>
                  <Link
                    to="/get-involved/careers"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Careers & Open Positions
                  </Link>
                  <Link
                    to="/get-involved/partner"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors border-t border-warm-border/50 mt-1 pt-2"
                  >
                    Corporate CSR Partnerships
                  </Link>
                </div>
              )}
            </div>

            {/* Impact & Media Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setImpactDropdownOpen(true)}
              onMouseLeave={() => setImpactDropdownOpen(false)}
            >
              <button
                className={clsx(
                  'px-3 py-2 text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-1',
                  isActive('/stories') || isActive('/gallery') || isActive('/blog') || isActive('/events') || isActive('/sponsors')
                    ? 'text-brand-teal bg-brand-tint'
                    : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
                )}
                aria-expanded={impactDropdownOpen}
              >
                <span>Impact & Media</span>
                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-200', impactDropdownOpen && 'rotate-180')} />
              </button>

              {impactDropdownOpen && (
                <div className="absolute top-full left-0 w-64 py-2 bg-white rounded-xl shadow-lift border border-warm-border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/stories"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Beneficiary Impact Stories
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Photo & Video Gallery
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Health & Mind Blog
                  </Link>
                  <Link
                    to="/events"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Medical Camps & Events
                  </Link>
                  <Link
                    to="/sponsors"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors border-t border-warm-border/50 mt-1 pt-2"
                  >
                    Sponsors & Corporate Partners
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={clsx(
                'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                isActive('/contact') ? 'text-brand-teal bg-brand-tint' : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: ISOLATED CORAL DONATE NOW BUTTON */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              to="/donate"
              variant="coral"
              size="md"
              icon={Heart}
              className="hidden sm:inline-flex shadow-md hover:shadow-lg text-sm px-5 py-2.5"
            >
              Donate Now
            </Button>

            {/* Mobile Actions: Persistent Mobile Donate + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/donate"
                variant="coral"
                size="sm"
                icon={Heart}
                className="sm:hidden text-xs py-1.5 px-3"
              >
                Donate
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-warm-charcoal hover:bg-warm-base border border-warm-border focus:outline-none"
                aria-label="Toggle Navigation Drawer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Slide-In Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
