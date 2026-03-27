'use client';

import { useLanguage } from '@/lib/language-context';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-full border border-indigo-200 bg-white/95 p-1 shadow-lg backdrop-blur">
      <Globe className="ml-2 h-4 w-4 text-indigo-600" />
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-slate-600 hover:bg-indigo-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'es'
            ? 'bg-indigo-600 text-white'
            : 'text-slate-600 hover:bg-indigo-50'
        }`}
      >
        ES
      </button>
    </div>
  );
}
