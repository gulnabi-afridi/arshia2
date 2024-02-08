import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from './component/TranslationsProvider';
import Navibar from './component/Shared/Navibar';
import Footer from './component/Shared/Footer';
import Hero from './component/LandingPage/Hero';
import VerifiedReviews from './component/LandingPage/VerifiedReviews';
import ImportReviews from './component/LandingPage/ImportReviews';
import ServicesOffer from './component/LandingPage/ServicesOffer';
import InNutShell from './component/LandingPage/InNutShell';

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ['landingPage', 'common'];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Navibar />
        <Hero />
        <VerifiedReviews />
        <ImportReviews />
        <ServicesOffer />
        <InNutShell />
        {/* <Footer /> */}
      </main>
    </TranslationsProvider>
  );
}
