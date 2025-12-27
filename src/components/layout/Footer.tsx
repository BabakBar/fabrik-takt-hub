import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0a0f1a] overflow-hidden">
      {/* Giant Watermark Logo */}
      <div className="relative py-16 md:py-24">
        <h2
          className="text-[15vw] md:text-[12vw] font-black tracking-tight leading-none text-center select-none"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          aria-hidden="true"
        >
          <span className="text-[#2a3a4d]">Fabrik</span>
          <span className="text-[#5a4a2a]">Takt</span>
        </h2>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12">
          <p className="text-white font-medium text-lg md:text-xl mb-2 tracking-wide">
            {t('footer.tagline')}
          </p>
          <a
            href="mailto:info@fabriktakt.com"
            className="text-[#e8a530] hover:text-[--pulse-primary] transition-colors font-medium"
          >
            info@fabriktakt.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} FabrikTakt. Made with{' '}
            <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://github.com/BabakBar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--pulse-primary] hover:text-white transition-colors"
            >
              Sia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
