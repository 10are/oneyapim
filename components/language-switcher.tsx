'use client';

import { useLanguage } from '@/contexts/language-context';
import { Globe } from 'lucide-react';
import { Locale } from '@/lib/translations';

const languages = [
  { code: 'tr' as Locale, name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
  { code: 'de' as Locale, name: 'Deutsch', flag: '🇩🇪' }
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative group">
      <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white h-10 px-3 gap-2">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 dark:bg-black/95 border border-gray-300 dark:border-white/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md ${
              locale === language.code ? 'bg-gray-100 dark:bg-white/10' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}
