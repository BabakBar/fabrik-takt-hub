
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo */}
            <img
              src="/favicon-original.png"
              alt="FabrikTakt logo"
              className="w-10 h-10 drop-shadow-lg group-hover:drop-shadow-amber-500/25 transition-shadow rounded-lg"
            />
            {/* Brand Name */}
            <span className="text-xl font-bold text-white">FabrikTakt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              {t('nav.features')}
            </Link>
            <Link to="/technology" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Technology
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Contact
            </Link>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              {t('nav.pricing')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Button className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
              Get Started →
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
          <div className="md:hidden border-t border-white/10 bg-slate-800/95 backdrop-blur-md p-4 mt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </Link>
              <Link 
                to="/technology" 
                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/case-studies" 
                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                Get Started →
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
