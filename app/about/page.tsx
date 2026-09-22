import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { AboutClient } from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Learn about LandCom Information Technology Solutions Provider, established in 2007 in Abu Dhabi with 100% UAE ownership and management.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/about`,
  },
  openGraph: {
    title: `About Us | ${COMPANY_INFO.name}`,
    description: 'Learn about LandCom Information Technology Solutions Provider, established in 2007 in Abu Dhabi with 100% UAE ownership and management.',
    url: `${COMPANY_INFO.domain}/about`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${COMPANY_INFO.name}`,
    description: 'Learn about LandCom Information Technology Solutions Provider, established in 2007 in Abu Dhabi with 100% UAE ownership and management.',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
