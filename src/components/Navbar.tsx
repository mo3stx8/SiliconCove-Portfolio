'use client';

import { useLocale, useMessages, t } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

const navLinks = ['home', 'about', 'services', 'products', 'team', 'careers', 'contact'] as const;

export default function Navbar() {
  const locale = useLocale();
  const messages = useMessages();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setPathname(window.location.pathname);
  }, []);

  const prefix = `/${locale}`;

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const isActive = (key: string) => {
    if (!pathname) return false;
    if (pathname === '/') return key === 'home';
    if (key === 'home') return pathname === '/en/' || pathname === '/ar/';
    return pathname.includes(`/${key}`);
  };

  const linkClass = (key: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive(key)
        ? 'text-electric bg-electric/10'
        : 'text-navy dark:text-gray-300 hover:text-electric hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  const mobileLinkClass = (key: string) =>
    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive(key)
        ? 'text-electric bg-electric/10'
        : 'text-navy dark:text-gray-300 hover:text-electric hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href={prefix} className="flex items-center gap-2">
            <img src="/logo.png" alt="SiliconCove" className="h-14 lg:h-16 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((key) => {
              const href = key === 'home' ? prefix : `${prefix}/${key}/`;
              return (
                <a key={key} href={href} className={linkClass(key)}>
                  {t(messages, `nav.${key}`)}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-navy dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-navy dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {locale === 'en' ? 'EN' : 'AR'}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-1 animate-fade-in">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${locale === 'en' ? 'text-electric font-semibold' : 'text-navy dark:text-gray-300'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ar')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${locale === 'ar' ? 'text-electric font-semibold' : 'text-navy dark:text-gray-300'}`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0f172a] border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((key) => {
              const href = key === 'home' ? prefix : `${prefix}/${key}/`;
              return (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={mobileLinkClass(key)}
                >
                  {t(messages, `nav.${key}`)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
