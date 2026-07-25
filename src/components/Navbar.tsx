'use client';

import { useLocale, useMessages, t } from '@/lib/i18n';
import { usePathname, useBasePath } from '@/lib/hooks';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = ['home', 'about', 'services', 'products', 'team', 'careers', 'contact'] as const;

export default function Navbar() {
  const locale = useLocale();
  const messages = useMessages();
  const pathname = usePathname();
  const basePath = useBasePath();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const prefix = `${basePath}/${locale}`;

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(new RegExp(`^${basePath}\\/[^/]+`), '') || '/';
    window.location.href = `${basePath}/${newLocale}${pathWithoutLocale}`;
  };

  const isActive = (key: string) => {
    if (!pathname) return false;
    if (pathname === basePath || pathname === `${basePath}/`) return key === 'home';
    if (key === 'home') return pathname === `${basePath}/en/` || pathname === `${basePath}/ar/` || pathname === `${basePath}/en` || pathname === `${basePath}/ar`;
    return pathname.includes(`/${key}`);
  };

  const linkClass = (key: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive(key)
        ? 'text-electric bg-electric/10'
        : 'text-navy hover:text-electric hover:bg-gray-100'
    }`;

  const mobileLinkClass = (key: string) =>
    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive(key)
        ? 'text-electric bg-electric/10'
        : 'text-navy hover:text-electric hover:bg-gray-100'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href={prefix} className="flex items-center gap-2">
            <img src={`${basePath}/logo-old.png`} alt="SiliconCove" className="h-14 lg:h-16 w-auto" />
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
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-navy hover:bg-gray-100 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {locale === 'en' ? 'EN' : 'AR'}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 animate-fade-in">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${locale === 'en' ? 'text-electric font-semibold' : 'text-navy'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ar')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${locale === 'ar' ? 'text-electric font-semibold' : 'text-navy'}`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-gray-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
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
