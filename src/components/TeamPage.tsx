'use client';

import { useMessages, t } from '@/lib/i18n';
import { Code2, Server} from 'lucide-react';

const members = [
  { key: 'mostafa', icon: Code2 },
  { key: 'mohammed', icon: Server },
  // { key: 'abdullah', icon: Shield },
];

export default function TeamPage() {
  const messages = useMessages();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'team.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'team.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'team.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {members.map(({ key, icon: Icon }) => (
              <div key={key} className="card group text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric to-navy-light flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t(messages, `team.members.${key}.name`)}
                </h3>
                <p className="text-electric font-semibold mb-4">{t(messages, `team.members.${key}.role`)}</p>
                <p className="text-steel leading-relaxed">{t(messages, `team.members.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
