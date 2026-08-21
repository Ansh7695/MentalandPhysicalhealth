import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

export const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('aura_cookie_consent');
    if (!savedConsent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissWithAnimation = (callback) => {
    setIsClosing(true);
    setTimeout(() => {
      setVisible(false);
      setIsClosing(false);
      if (callback) callback();
    }, 400);
  };

  const handleAcceptAll = () => {
    dismissWithAnimation(() => {
      localStorage.setItem('aura_cookie_consent', JSON.stringify({ essential: true, analytics: true, marketing: true, timestamp: Date.now() }));
    });
  };

  const handleRejectNonEssential = () => {
    dismissWithAnimation(() => {
      localStorage.setItem('aura_cookie_consent', JSON.stringify({ essential: true, analytics: false, marketing: false, timestamp: Date.now() }));
    });
  };

  const handleSavePreferences = () => {
    localStorage.setItem('aura_cookie_consent', JSON.stringify({ ...preferences, essential: true, timestamp: Date.now() }));
    setPreferencesOpen(false);
    dismissWithAnimation();
  };

  if (!visible) return null;

  return (
    <>
      <div
        className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-40 transition-all duration-400 ease-in-out ${
          isClosing
            ? 'opacity-0 translate-y-6 pointer-events-none'
            : 'opacity-100 translate-y-0 animate-in slide-in-from-bottom-5 duration-500'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-warm-border shadow-modal text-warm-charcoal space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-tint flex items-center justify-center text-brand-teal flex-shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-warm-charcoal">Privacy & Cookie Notice</h4>
            </div>
            <button
              onClick={handleRejectNonEssential}
              className="text-warm-muted hover:text-warm-charcoal p-1 rounded-lg hover:bg-warm-base transition-colors"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-warm-muted leading-relaxed">
            We use essential cookies to ensure secure donation triage and helpline functionality. Read our{' '}
            <Link to="/privacy-policy" className="text-brand-teal font-semibold hover:underline">
              Privacy Policy
            </Link>.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAcceptAll}
              className="text-xs py-2 px-3.5 flex-1 justify-center"
            >
              Accept All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectNonEssential}
              className="text-xs py-2 px-3 flex-1 justify-center border-warm-border text-warm-charcoal"
            >
              Reject Non-Essential
            </Button>
            <button
              onClick={() => setPreferencesOpen(true)}
              className="p-2 rounded-xl text-warm-muted hover:text-brand-teal hover:bg-warm-base text-xs font-semibold flex items-center gap-1 transition-colors"
              aria-label="Customize cookie settings"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Preferences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      <Modal isOpen={preferencesOpen} onClose={() => setPreferencesOpen(false)} title="Cookie Preferences">
        <div className="space-y-4 text-xs">
          <p className="text-warm-muted leading-relaxed">
            Customize which cookies you allow Neelima Charitable Trust to store during your visit. Essential cookies are required for site security and donation processing.
          </p>

          <div className="space-y-3">
            {/* Essential */}
            <div className="p-3.5 bg-warm-base rounded-xl border border-warm-border flex items-center justify-between">
              <div>
                <strong className="block text-warm-charcoal text-sm">Essential Cookies (Always Active)</strong>
                <span className="text-warm-muted text-[11px]">Required for 80G tax receipt security and helpline forms.</span>
              </div>
              <span className="px-2.5 py-1 bg-brand-tint text-brand-teal font-bold text-[10px] rounded-full">
                Required
              </span>
            </div>

            {/* Analytics */}
            <div className="p-3.5 bg-white rounded-xl border border-warm-border flex items-center justify-between">
              <div>
                <strong className="block text-warm-charcoal text-sm">Analytics & Field Reach</strong>
                <span className="text-warm-muted text-[11px]">Helps us measure which health programs receive donor interest.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 text-brand-teal rounded focus:ring-brand-teal cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="p-3.5 bg-white rounded-xl border border-warm-border flex items-center justify-between">
              <div>
                <strong className="block text-warm-charcoal text-sm">Outreach & Communications</strong>
                <span className="text-warm-muted text-[11px]">Allows tailored campaign updates for donors.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-4 h-4 text-brand-teal rounded focus:ring-brand-teal cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-3 flex gap-3">
            <Button variant="primary" size="md" onClick={handleSavePreferences} className="w-full justify-center">
              Save Preferences
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CookieConsentBanner;
