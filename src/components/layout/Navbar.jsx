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
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-40 w-full transition-all duration-300 bg-[#FAF8F5] border-b border-warm-border',
          isScrolled ? 'py-2 shadow-xs' : 'py-3.5'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0">
            <div className={clsx('rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-soft transition-all duration-300', isScrolled ? 'w-8 h-8' : 'w-9 h-9')}>
              <HeartPulse className={clsx('transition-all duration-300', isScrolled ? 'w-4 h-4' : 'w-5 h-5')} />
            </div>
            <div className="flex flex-col">
              <span className={clsx('font-extrabold text-warm-charcoal tracking-tight leading-none group-hover:text-brand-teal transition-all duration-300', isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl')}>
                Neelima <span className="text-brand-teal">Charitable Trust</span>
              </span>
              <span className="text-[10px] font-semibold text-warm-muted tracking-wider uppercase mt-0.5">
                Health & Wellness NGO
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (6-7 top level items: Home | About ▾ | Programs | Get Involved ▾ | Blog | Events | Contact) */}
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

            {/* About ▾ */}
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
                <span>About</span>
                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-200', aboutDropdownOpen && 'rotate-180')} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-56 py-2 bg-white rounded-xl shadow-lift border border-warm-border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Our Story & Mission
                  </Link>
                  <Link
                    to="/about#team"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  >
                    Team & Board
                  </Link>
                  <Link
                    to="/about/founders-note"
                    className="block px-4 py-2.5 text-xs font-semibold text-brand-teal font-bold hover:bg-brand-tint transition-colors"
                  >
                    Founder's Note ➔
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

            {/* Get Involved ▾ */}
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
                    Join Our Team (Careers)
                  </Link>
                  <Link
                    to="/get-involved/partner"
                    className="block px-4 py-2.5 text-xs font-semibold text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors border-t border-warm-border/50 mt-1 pt-2"
                  >
                    Partner with Us (CSR)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={clsx(
                'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                isActive('/blog') ? 'text-brand-teal bg-brand-tint' : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
              )}
            >
              Blog
            </Link>

            <Link
              to="/events"
              className={clsx(
                'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                isActive('/events') ? 'text-brand-teal bg-brand-tint' : 'text-warm-charcoal hover:text-brand-teal hover:bg-warm-base'
              )}
            >
              Events
            </Link>

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

          {/* Right Action: ISOLATED SOLID CORAL DONATE NOW BUTTON */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              to="/donate"
              variant="coral"
              size="md"
              icon={Heart}
              className="hidden sm:inline-flex shadow-md hover:shadow-lg text-sm px-5 py-2.5 font-bold"
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
                className="sm:hidden text-xs py-1.5 px-3 font-bold"
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
