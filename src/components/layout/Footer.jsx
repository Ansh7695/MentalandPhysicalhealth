import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, PhoneCall, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { orgInfo } from '../../data/orgInfo';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../ui/SocialIcons';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-warm-charcoal text-warm-base pt-16 pb-8 border-t border-warm-charcoal/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-warm-charcoal/60">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-soft">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Neelima <span className="text-brand-teal-light">Charitable Trust</span>
              </span>
            </Link>

            <p className="text-warm-border/80 text-sm leading-relaxed max-w-sm mt-1">
              A registered non-profit dedicated to making quality physical healthcare, crisis tele-counseling, and community resilience accessible to every individual across urban and rural India.
            </p>

            {/* Registration Trust Box */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-warm-border/90 flex flex-col gap-1 max-w-sm mt-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Non-Profit NGO</span>
              </div>
              <p>80G Reg: <strong className="text-white">{orgInfo.legal.section80G.split(' ')[0]}</strong> (50% Tax Exemption)</p>
              <p>12A Reg: <strong className="text-white">{orgInfo.legal.section12A}</strong> | FCRA: <strong className="text-white">{orgInfo.legal.fcraNo.split(' ')[0]}</strong></p>
            </div>

            {/* Primary Social Icons Hub */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={orgInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 text-warm-border hover:text-white hover:bg-brand-teal hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={orgInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 text-warm-border hover:text-white hover:bg-brand-teal hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={orgInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 text-warm-border hover:text-white hover:bg-brand-teal hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={orgInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 text-warm-border hover:text-white hover:bg-brand-teal hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href={orgInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 text-warm-border hover:text-white hover:bg-brand-teal hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-white text-base tracking-wide uppercase text-xs text-brand-teal-light mb-1">
              Navigation
            </h4>
            <Link to="/" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Home</Link>
            <Link to="/about" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">About Our Story</Link>
            <Link to="/programs" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Physical & Mental Programs</Link>
            <Link to="/get-involved/volunteer" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Volunteer Opportunities</Link>
            <Link to="/get-involved/careers" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Careers & Openings</Link>
            <Link to="/get-involved/partner" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">CSR Partnerships</Link>
            <Link to="/donate" className="text-coral-accent font-bold hover:text-coral-hover transition-colors">Donate Now</Link>
          </div>

          {/* Col 3: Impact & News */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-white text-base tracking-wide uppercase text-xs text-brand-teal-light mb-1">
              Resources & Impact
            </h4>
            <Link to="/stories" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Beneficiary Stories</Link>
            <Link to="/blog" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Health & Mind Blog</Link>
            <Link to="/events" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Medical Camps & Events</Link>
            <Link to="/gallery" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Photo & Video Gallery</Link>
            <Link to="/sponsors" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Sponsors & Partners</Link>
            <Link to="/contact" className="text-warm-border/80 hover:text-brand-teal-light transition-colors">Contact & Helpline</Link>
          </div>

          {/* Col 4: Newsletter & Contact Quick info */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-bold text-white text-base tracking-wide uppercase text-xs text-brand-teal-light mb-1">
              Stay Connected
            </h4>
            <p className="text-xs text-warm-border/80 leading-relaxed">
              Subscribe to our monthly newsletter for field updates, health tips, and audit reports.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>Thank you! You are subscribed to our monthly updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-warm-border/60 text-xs focus:outline-none focus:border-brand-teal-light"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-teal text-white font-semibold text-xs hover:bg-brand-teal-dark transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-warm-border/70 flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <PhoneCall className="w-3.5 h-3.5" /> 24/7 Helpline: {orgInfo.helpline.number}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-teal-light" /> {orgInfo.contact.address.city}, {orgInfo.contact.address.state}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Links & Warm Closing */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-border/60">
          <div>
            © {new Date().getFullYear()} {orgInfo.name}. All rights reserved. Registered under Indian Trust Act 1882.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund & Cancellation Policy</Link>
          </div>
          <div className="text-emerald-400 font-medium flex items-center gap-1">
            <span>Made with care for every mind & body</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
