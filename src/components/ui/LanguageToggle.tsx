
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border p-1">
      <Globe size={16} className="text-slate-500 ml-2" />
      <button
        onClick={() => setLanguage('fa')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'fa'
            ? 'bg-amber-500 text-white'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        فارسی
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-amber-500 text-white'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
