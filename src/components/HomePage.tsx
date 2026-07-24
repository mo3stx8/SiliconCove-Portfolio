'use client';

import { useMessages, t } from '@/lib/i18n';
import { ArrowRight, Shield, Zap, Code2, Globe, BarChart3, Users, CheckCircle } from 'lucide-react';

export default function HomePage({ locale }: { locale: string }) {
  const messages = useMessages();
  const prefix = `/${locale}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-electric/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              {t(messages, 'hero.badge')}
            </span>

            <h1 className="animate-fade-up opacity-0 animate-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight flex items-center gap-4 flex-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
              <img src="/logo.png" alt="SiliconCove" className="h-14 md:h-16 lg:h-20 w-auto shrink-0" />
              <span>
                {t(messages, 'hero.title')}{' '}
                <span className="gradient-text">{t(messages, 'hero.titleHighlight')}</span>
              </span>
            </h1>

            <p className="animate-fade-up opacity-0 animate-delay-200 text-lg md:text-xl text-steel mt-6 max-w-xl leading-relaxed">
              {t(messages, 'hero.description')}
            </p>

            <div className="animate-fade-up opacity-0 animate-delay-300 flex flex-wrap gap-4 mt-8">
              <a href={`${prefix}/contact/`} className="btn-primary">
                {t(messages, 'hero.cta')}
                <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180 mr-2' : 'ml-2'}`} />
              </a>
              <a href={`${prefix}/services/`} className="btn-secondary">
                {t(messages, 'hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3+', label: t(messages, 'home.stats.years') },
              { number: '50+', label: t(messages, 'home.stats.clients') },
              { number: '100+', label: t(messages, 'home.stats.projects') },
              { number: '99.9%', label: t(messages, 'home.stats.uptime') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-electric" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </div>
                <div className="text-steel-light mt-2 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">{t(messages, 'home.servicesLabel')}</span>
            <h2 className="section-title mt-4">{t(messages, 'home.servicesTitle')}</h2>
            <p className="section-desc mt-4 mx-auto">{t(messages, 'home.servicesDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: t(messages, 'services.items.customDev.title'), desc: t(messages, 'services.items.customDev.desc') },
              { icon: Globe, title: t(messages, 'services.items.webDev.title'), desc: t(messages, 'services.items.webDev.desc') },
              { icon: Zap, title: t(messages, 'services.items.mobileDev.title'), desc: t(messages, 'services.items.mobileDev.desc') },
              { icon: BarChart3, title: t(messages, 'services.items.saas.title'), desc: t(messages, 'services.items.saas.desc') },
              { icon: Shield, title: t(messages, 'services.items.cloudDevOps.title'), desc: t(messages, 'services.items.cloudDevOps.desc') },
              { icon: Users, title: t(messages, 'services.items.consulting.title'), desc: t(messages, 'services.items.consulting.desc') },
            ].map((service) => (
              <div key={service.title} className="card group">
                <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7 text-electric group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-steel leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">{t(messages, 'about.values.title')}</span>
            <h2 className="section-title mt-4">{t(messages, 'about.promise.text')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: t(messages, 'about.values.reliability.title'), desc: t(messages, 'about.values.reliability.desc') },
              { icon: CheckCircle, title: t(messages, 'about.values.quality.title'), desc: t(messages, 'about.values.quality.desc') },
              { icon: Zap, title: t(messages, 'about.values.innovation.title'), desc: t(messages, 'about.values.innovation.desc') },
            ].map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-electric" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="text-steel">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {t(messages, 'home.ctaTitle')}
            </h2>
            <p className="text-steel-light text-lg max-w-2xl mx-auto mb-8">
              {t(messages, 'home.ctaDesc')}
            </p>
            <a
              href={`${prefix}/contact/`}
              className="inline-flex items-center justify-center px-8 py-4 bg-electric text-white font-semibold rounded-lg transition-all duration-300 hover:bg-electric-light hover:shadow-lg hover:shadow-electric/25 hover:-translate-y-0.5"
            >
              {t(messages, 'home.ctaButton')}
              <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180 mr-2' : 'ml-2'}`} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
