
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-slate-700">FabrikTakt</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.features')}
            </a>
            <a href="#solution" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#examples" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.examples')}
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.pricing')}
            </a>
          </nav>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
