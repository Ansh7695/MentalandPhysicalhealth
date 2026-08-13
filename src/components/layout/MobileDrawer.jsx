import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ChevronDown, PhoneCall, ShieldCheck, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { orgInfo } from '../../data/orgInfo';
import clsx from 'clsx';

export const MobileDrawer = ({ isOpen, onClose }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-warm-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-In Content Drawer */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header inside drawer */}
          <div className="p-5 border-b border-warm-border flex items-center justify-between bg-warm-base/50">
            <span className="font-extrabold text-lg text-warm-charcoal">
              Aura <span className="text-brand-teal">Foundation</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-warm-muted hover:bg-warm-border/50"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Persistent Donate Callout inside Mobile Drawer */}
          <div className="p-4 bg-coral-light/60 border-b border-coral-accent/20">
            <Button
              to="/donate"
              variant="coral"
              size="md"
              icon={Heart}
              className="w-full justify-center"
              onClick={onClose}
            >
              Donate Now (50% 80G Tax Benefit)
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 flex flex-col gap-1">
            <Link
              to="/"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname === '/' ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Home
            </Link>

            {/* About Accordion */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-warm-charcoal hover:bg-warm-base"
              >
                <span>About Us</span>
                <ChevronDown className={clsx('w-5 h-5 transition-transform duration-200', aboutOpen && 'rotate-180 text-brand-teal')} />
              </button>
              {aboutOpen && (
                <div className="pl-6 pr-2 py-1 flex flex-col gap-1 text-sm">
                  <Link to="/about" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Our Story & Timeline
                  </Link>
                  <Link to="/about#founders-note" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Founder's Note
                  </Link>
                  <Link to="/about#team" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Our Team & Advisors
                  </Link>
                  <Link to="/about#legal" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Registration & Legal (12A/80G)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/programs"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname.startsWith('/programs') ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Our Programs
            </Link>

            {/* Get Involved Accordion */}
            <div>
              <button
                onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-warm-charcoal hover:bg-warm-base"
              >
                <span>Get Involved</span>
                <ChevronDown className={clsx('w-5 h-5 transition-transform duration-200', getInvolvedOpen && 'rotate-180 text-brand-teal')} />
              </button>
              {getInvolvedOpen && (
                <div className="pl-6 pr-2 py-1 flex flex-col gap-1 text-sm">
                  <Link to="/get-involved/volunteer" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Volunteer with Us
                  </Link>
                  <Link to="/get-involved/careers" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Careers & Open Positions
                  </Link>
                  <Link to="/get-involved/partner" onClick={onClose} className="py-2 px-3 rounded-lg text-warm-muted font-medium hover:text-brand-teal">
                    Corporate CSR & Partners
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname.startsWith('/blog') ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Blog & Articles
            </Link>

            <Link
              to="/events"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname.startsWith('/events') ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Events & Camps
            </Link>

            <Link
              to="/gallery"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname === '/gallery' ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Photo Gallery
            </Link>

            <Link
              to="/stories"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname === '/stories' ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Impact Stories
            </Link>

            <Link
              to="/sponsors"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname === '/sponsors' ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Sponsors & Partners
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className={clsx(
                'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                location.pathname === '/contact' ? 'bg-brand-tint text-brand-teal' : 'text-warm-charcoal hover:bg-warm-base'
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer info inside drawer */}
        <div className="p-5 border-t border-warm-border bg-warm-base/60 text-xs text-warm-muted">
          <a
            href={`tel:${orgInfo.helpline.number.replace(/-/g, '')}`}
            className="flex items-center gap-2 text-emerald-700 font-bold mb-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Helpline: {orgInfo.helpline.number}</span>
          </a>
          <p>80G Reg: {orgInfo.legal.section80G.split(' ')[0]}</p>
        </div>
      </div>
    </div>
  );
};
