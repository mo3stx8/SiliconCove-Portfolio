import ServicesPage from '@/components/ServicesPage';

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}
