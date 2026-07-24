'use client';

import { useMessages, t } from '@/lib/i18n';
import { Target, Eye, Shield, CheckCircle, Lock, Users, Zap, ArrowRight } from 'lucide-react';

export default function AboutPage({ locale }: { locale: string }) {
  const messages = useMessages();
  const prefix = `/${locale}`;

  const values = [
    { icon: Shield, key: 'reliability' },
    { icon: CheckCircle, key: 'quality' },
    { icon: Lock, key: 'security' },
    { icon: Users, key: 'professionalism' },
    { icon: Zap, key: 'innovation' },
  ];

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'about.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'about.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'about.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-electric" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {t(messages, 'about.mission.title')}
              </h3>
              <p className="text-steel leading-relaxed text-lg">{t(messages, 'about.mission.text')}</p>
            </div>
            <div className="card">
              <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-electric" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {t(messages, 'about.vision.title')}
              </h3>
              <p className="text-steel leading-relaxed text-lg">{t(messages, 'about.vision.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">{t(messages, 'about.values.title')}</span>
            <h2 className="section-title mt-4">{t(messages, 'about.values.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, key }) => (
              <div key={key} className="card group text-center">
                <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-electric transition-all duration-300">
                  <Icon className="w-8 h-8 text-electric group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t(messages, `about.values.${key}.title`)}
                </h3>
                <p className="text-steel">{t(messages, `about.values.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 lg:p-16">
            <span className="text-electric font-semibold text-sm tracking-widest uppercase mb-4 block">{t(messages, 'about.promise.title')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              {t(messages, 'about.promise.text')}
            </h2>
            <a href={`${prefix}/contact/`} className="btn-primary">
              {locale === 'en' ? 'Start a Conversation' : 'ابدأ المحادثة'}
              <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180 mr-2' : 'ml-2'}`} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
