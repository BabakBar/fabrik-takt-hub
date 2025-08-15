
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Brutalist Typography Section */}
        <div className="py-12 text-center">
          <h2 className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-wider font-orbitron">
            <span className="text-[#005249]/20">Fabrik</span><span className="text-amber-400/20">Takt</span>
          </h2>
          <div className="mt-4 -translate-y-8">
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-2 font-orbitron">
              AI applications for operations
            </p>
            <p className="text-base text-amber-400 font-medium">
              info@fabriktakt.com
            </p>
          </div>
        </div>

        {/* Minimal Bottom */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-slate-400">
              © 2025 FabrikTakt. Made with ❤️ by Sia
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              <span className="text-slate-400">System Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;