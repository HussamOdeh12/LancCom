import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { ServicesClient } from '@/components/services/ServicesClient';

export const metadata: Metadata = {
  title: `IT Services & Solutions | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Eight specialized technical solution disciplines including ERP Systems, Mobility, IT Infrastructure, Security, RFID, Fleet Tracking, E-Commerce, and IT Managed Services.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/services`,
  },
  openGraph: {
    title: `IT Services & Solutions | ${COMPANY_INFO.name}`,
    description: 'Eight specialized technical solution disciplines including ERP Systems, Mobility, IT Infrastructure, Security, RFID, Fleet Tracking, E-Commerce, and IT Managed Services in Abu Dhabi, UAE.',
    url: `${COMPANY_INFO.domain}/services`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `IT Services & Solutions | ${COMPANY_INFO.name}`,
    description: 'Eight specialized technical solution disciplines including ERP Systems, Mobility, IT Infrastructure, Security, RFID, Fleet Tracking, E-Commerce, and IT Managed Services in Abu Dhabi.',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
