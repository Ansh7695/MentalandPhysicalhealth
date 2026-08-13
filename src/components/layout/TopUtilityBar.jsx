import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';
import { orgInfo } from '../../data/orgInfo';
import { Container } from '../ui/Container';
import { InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../ui/SocialIcons';

export const TopUtilityBar = () => {
  return (
    <div className="bg-warm-charcoal text-warm-base text-xs font-medium border-b border-warm-charcoal/30 py-2">
      <Container className="flex items-center justify-between">
        {/* Left: Helpline Triage Contact */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${orgInfo.helpline.number.replace(/-/g, '')}`}
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
            <span>Helpline: <strong className="underline tracking-wide">{orgInfo.helpline.number}</strong></span>
          </a>
          <a
            href={`mailto:${orgInfo.contact.email}`}
            className="hidden md:flex items-center gap-1.5 text-warm-border hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-teal-light" />
            <span>{orgInfo.contact.email}</span>
          </a>
        </div>

        {/* Right: Social Icons Quick Hub */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-warm-muted text-[11px]">Follow our story:</span>
          <div className="flex items-center gap-2.5">
            <a
              href={orgInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-border/70 hover:text-rose-400 transition-colors p-1"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={orgInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-border/70 hover:text-blue-400 transition-colors p-1"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={orgInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-border/70 hover:text-sky-400 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={orgInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-border/70 hover:text-slate-200 transition-colors p-1"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={orgInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-border/70 hover:text-red-400 transition-colors p-1"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
