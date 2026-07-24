'use client';

import { useLocale, useMessages, t } from '@/lib/i18n';
import { Laptop, TrendingUp, Globe, Lightbulb, ArrowRight } from 'lucide-react';

const perkKeys = ['remote', 'growth', 'impact', 'culture'] as const;
const perkIcons = [Laptop, TrendingUp, Globe, Lightbulb];

export default function CareersPage() {
  const locale = useLocale();
  const messages = useMessages();
  const prefix = `/${locale}`;

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5 dark:from-[#0f172a] dark:via-[#0f172a] dark:to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'careers.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'careers.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'careers.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t(messages, 'careers.perks.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perkKeys.map((key, i) => {
              const Icon = perkIcons[i];
              return (
                <div key={key} className="card group text-center">
                  <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-electric transition-all duration-300">
                    <Icon className="w-8 h-8 text-electric group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(messages, `careers.perks.${key}.title`)}
                  </h3>
                  <p className="text-steel dark:text-gray-400 text-sm">{t(messages, `careers.perks.${key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t(messages, 'careers.positions.title')}</h2>
          </div>
          <div className="card max-w-2xl mx-auto text-center py-12">
            <p className="text-lg text-steel dark:text-gray-400 leading-relaxed">{t(messages, 'careers.positions.comingSoon')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">{t(messages, 'careers.ctaTitle')}</h2>
          <p className="section-desc mt-4 mx-auto">{t(messages, 'careers.ctaDesc')}</p>
          <a href={`${prefix}/contact/`} className="btn-primary mt-8">
            {t(messages, 'careers.ctaButton')}
            <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180 mr-2' : 'ml-2'}`} />
          </a>
        </div>
      </section>
    </>
  );
}
