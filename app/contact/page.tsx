import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Contact LandCom Information Technology Solutions Provider at its Abu Dhabi office for enquiries about its documented IT services and solutions.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${COMPANY_INFO.name}`,
    description: 'Contact LandCom Information Technology Solutions Provider at its Abu Dhabi office for enquiries about its documented IT services and solutions.',
    url: `${COMPANY_INFO.domain}/contact`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Us | ${COMPANY_INFO.name}`,
    description: 'Contact LandCom Information Technology Solutions Provider at its Abu Dhabi office for enquiries about its documented IT services and solutions.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
