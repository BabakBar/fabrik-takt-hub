import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50",
      "bg-[--glass-bg] backdrop-blur-xl",
      "border-b border-[--glass-border]",
      "transition-all duration-300",
      isScrolled && "bg-[--bg-primary]/95 shadow-md"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/favicon-original.png"
              alt="FabrikTakt logo"
              className="w-10 h-10 drop-shadow-lg transition-shadow rounded-lg"
            />
            <span className="text-xl md:text-2xl font-bold font-orbitron">
              <span className="text-white">Fabrik</span>
              <span className="text-[--pulse-primary]">Takt</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm font-medium text-[--text-secondary] hover:text-[--pulse-primary] transition-colors px-3 py-2 rounded-md hover:bg-[--pulse-glow]"
            >
              {t('nav.services')}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[--text-secondary] hover:text-[--pulse-primary] transition-colors px-3 py-2 rounded-md hover:bg-[--pulse-glow]"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[--glass-border] bg-[--glass-bg] backdrop-blur-md p-4 mt-4 rounded-b-lg">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-sm font-medium text-[--text-secondary] hover:text-[--pulse-primary] transition-colors py-2 px-3 rounded-md hover:bg-[--pulse-glow]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-[--text-secondary] hover:text-[--pulse-primary] transition-colors py-2 px-3 rounded-md hover:bg-[--pulse-glow]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
