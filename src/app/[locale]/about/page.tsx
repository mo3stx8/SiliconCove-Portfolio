import AboutPage from '@/components/AboutPage';

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
