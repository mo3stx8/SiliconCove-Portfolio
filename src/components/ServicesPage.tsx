'use client';

import { useMessages, t } from '@/lib/i18n';
import { Code2, Globe, Zap, BarChart3, Shield, Users, ArrowRight } from 'lucide-react';

const serviceKeys = ['customDev', 'webDev', 'mobileDev', 'saas', 'cloudDevOps', 'consulting'] as const;
const icons = [Code2, Globe, Zap, BarChart3, Shield, Users];

export default function ServicesPage({ locale }: { locale: string }) {
  const messages = useMessages();
  const prefix = `/${locale}`;

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5 dark:from-[#0f172a] dark:via-[#0f172a] dark:to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'services.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'services.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'services.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key, i) => {
              const Icon = icons[i];
              return (
                <div key={key} className="card group">
                  <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 text-electric group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(messages, `services.items.${key}.title`)}
                  </h3>
                  <p className="text-steel dark:text-gray-400 leading-relaxed">{t(messages, `services.items.${key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">{t(messages, 'services.ctaTitle')}</h2>
          <p className="section-desc mt-4 mx-auto">{t(messages, 'services.ctaDesc')}</p>
          <a href={`${prefix}/contact/`} className="btn-primary mt-8">
            {t(messages, 'services.ctaButton')}
            <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180 mr-2' : 'ml-2'}`} />
          </a>
        </div>
      </section>
    </>
  );
}
