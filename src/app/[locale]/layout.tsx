import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex' });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex-arabic' });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === 'ar' ? arMessages : enMessages;
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = locale === 'ar' ? 'ar' : 'en';
  const messages = validLocale === 'ar' ? arMessages : enMessages;
  const dir = validLocale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={validLocale} dir={dir} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${ibmPlex.variable} ${ibmPlexArabic.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider locale={validLocale} messages={messages}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
