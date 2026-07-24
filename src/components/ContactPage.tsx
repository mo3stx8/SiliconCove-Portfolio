'use client';

import { useMessages, t } from '@/lib/i18n';
import { Mail, MapPin, Send, Paperclip, X } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const messages = useMessages();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError('');

    try {
      const formData = new FormData(formRef.current);
      if (file) {
        formData.append('attachment', file);
      }

      const response = await fetch('https://formly.email/submit', {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        if (response.ok) {
          setSubmitted(true);
          return;
        }
        throw new Error('Invalid response');
      }

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
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
                <a href="mailto:mostafasa7754@gmail.com" className="text-electric hover:underline">
                  mostafasa7754@gmail.com
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
                  <input type="hidden" name="access_key" value="830602bae8da4873bda763ac7521914e" />
                  <input type="hidden" name="subject" value="New Contact Form Submission" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.name')}</label>
                      <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.email')}</label>
                      <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.company')}</label>
                      <input name="company" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.subject')}</label>
                      <input name="subject_field" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.message')}</label>
                    <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-navy resize-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">{t(messages, 'contact.form.attachment')}</label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg border border-dashed border-gray-300 hover:border-electric cursor-pointer transition-colors">
                        <Paperclip className="w-5 h-5 text-steel" />
                        <span className="text-sm text-steel">
                          {file ? file.name : t(messages, 'contact.form.attachmentHint')}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                      </label>
                      {file && (
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
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
