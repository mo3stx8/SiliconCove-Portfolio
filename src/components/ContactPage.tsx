'use client';

import { useMessages, t } from '@/lib/i18n';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const messages = useMessages();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        { publicKey: 'YOUR_PUBLIC_KEY' }
      );
      setSubmitted(true);
    } catch {
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-surface via-white to-electric/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{t(messages, 'contact.label')}</span>
          <h1 className="section-title mt-4">{t(messages, 'contact.title')}</h1>
          <p className="section-desc mt-6">{t(messages, 'contact.description')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="card">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-electric" />
                </div>
                <h3 className="font-bold text-navy mb-2">{t(messages, 'contact.info.email')}</h3>
                <a href="mailto:info@siliconcove.com" className="text-electric hover:underline">
                  info@siliconcove.com
                </a>
              </div>
              <div className="card">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-electric" />
                </div>
                <h3 className="font-bold text-navy mb-2">{t(messages, 'contact.info.location')}</h3>
                <p className="text-steel">{t(messages, 'contact.info.locationValue')}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xl text-navy font-semibold">{t(messages, 'contact.success')}</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="card space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.name')}</label>
                      <input name="from_name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.email')}</label>
                      <input name="from_email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.company')}</label>
                      <input name="company" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.subject')}</label>
                      <input name="subject" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.message')}</label>
                    <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy resize-none" />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send className="w-5 h-5 mr-2" />
                    {sending ? t(messages, 'contact.form.sending') : t(messages, 'contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
