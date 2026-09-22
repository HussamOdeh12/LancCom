import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { PrivacyClient } from '@/components/legal/PrivacyClient';

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Privacy Policy and data practices for LandCom Information Technology Solutions Provider website in Abu Dhabi, UAE.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy | ${COMPANY_INFO.name}`,
    description: 'Privacy Policy and data practices for LandCom Information Technology Solutions Provider website in Abu Dhabi, UAE.',
    url: `${COMPANY_INFO.domain}/privacy`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Privacy Policy | ${COMPANY_INFO.name}`,
    description: 'Privacy Policy and data practices for LandCom Information Technology Solutions Provider website in Abu Dhabi, UAE.',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
