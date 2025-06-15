
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-slate-700">FabrikTakt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.features')}
            </Link>
            <Link to="/technology" className="text-slate-600 hover:text-slate-800 transition-colors">
              Technology
            </Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-800 transition-colors">
              Case Studies
            </Link>
            <a href="#pricing" className="text-slate-600 hover:text-slate-800 transition-colors">
              {t('nav.pricing')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Button className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600">
              Get Free Audit
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className="text-sm font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </Link>
              <Link 
                to="/technology" 
                className="text-sm font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/case-studies" 
                className="text-sm font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Get Free Audit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
