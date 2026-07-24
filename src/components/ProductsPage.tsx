'use client';

import { useMessages, t } from '@/lib/i18n';
import { Ship, Package, FileText, Shield, Bell, BarChart3 } from 'lucide-react';

const featureKeys = ['vesselManagement', 'cargoTracking', 'permits', 'rbac', 'notifications', 'reporting'] as const;
const featureIcons = [Ship, Package, FileText, Shield, Bell, BarChart3];

export default function ProductsPage() {
  const messages = useMessages();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'products.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'products.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'products.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 lg:p-16 text-white">
            <span className="text-electric font-semibold text-sm tracking-widest uppercase mb-4 block">Flagship Product</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t(messages, 'products.manarah.title')}
            </h2>
            <p className="text-steel-light text-xl mb-4 max-w-3xl">{t(messages, 'products.manarah.subtitle')}</p>
            <p className="text-steel-light max-w-3xl leading-relaxed">{t(messages, 'products.manarah.desc')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Platform Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureKeys.map((key, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={key} className="card group">
                  <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 text-electric group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(messages, `products.manarah.features.${key}.title`)}
                  </h3>
                  <p className="text-steel leading-relaxed">{t(messages, `products.manarah.features.${key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
