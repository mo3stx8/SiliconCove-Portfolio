'use client';

import { useLocale, useMessages, t } from '@/lib/i18n';
import { Mail, MapPin } from 'lucide-react';

const footerLinks = ['about', 'services', 'products', 'team', 'careers', 'contact'] as const;

export default function Footer() {
  const locale = useLocale();
  const messages = useMessages();
  const prefix = `/${locale}`;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href={prefix} className="inline-block mb-4">
              <img src="/logo-trans.png" alt="SiliconCove" className="h-16 w-auto" />
            </a>
            <p className="text-steel-light text-lg mt-4 max-w-md">{t(messages, 'footer.tagline')}</p>
            <div className="flex items-center gap-6 mt-6">
              <a href="mailto:info@siliconcove.com" className="flex items-center gap-2 text-steel-light hover:text-electric transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@siliconcove.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-steel-light hover:text-electric transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Yemen</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t(messages, 'footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {footerLinks.map((key) => (
                <li key={key}>
                  <a
                    href={`${prefix}/${key}/`}
                    className="text-steel-light hover:text-electric transition-colors text-sm"
                  >
                    {t(messages, `nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t(messages, 'footer.connect')}</h3>
            <ul className="space-y-3 text-sm text-steel-light">
              <li>
                <a href="https://twitter.com/siliconcove" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/siliconcove" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/siliconcove" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-8 text-center text-steel-light text-sm">
          <p>&copy; {new Date().getFullYear()} SiliconCove. {t(messages, 'footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
