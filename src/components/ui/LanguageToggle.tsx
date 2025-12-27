
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg bg-slate-800 border border-white/10 shadow-xl">
          <button
            onClick={() => {
              setLanguage('de');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-t-lg ${
              language === 'de'
                ? 'bg-[--pulse-primary]/20 text-[--pulse-primary]'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Deutsch
          </button>
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'en'
                ? 'bg-[--pulse-primary]/20 text-[--pulse-primary]'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              setLanguage('fa');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-b-lg ${
              language === 'fa'
                ? 'bg-[--pulse-primary]/20 text-[--pulse-primary]'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            فارسی
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
