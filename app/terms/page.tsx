import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { TermsClient } from '@/components/legal/TermsClient';

export const metadata: Metadata = {
  title: `Terms of Use | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Terms of Use for LandCom Information Technology Solutions Provider official website in Abu Dhabi, UAE.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/terms`,
  },
  openGraph: {
    title: `Terms of Use | ${COMPANY_INFO.name}`,
    description: 'Terms of Use for LandCom Information Technology Solutions Provider official website in Abu Dhabi, UAE.',
    url: `${COMPANY_INFO.domain}/terms`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Terms of Use | ${COMPANY_INFO.name}`,
    description: 'Terms of Use for LandCom Information Technology Solutions Provider official website in Abu Dhabi, UAE.',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
