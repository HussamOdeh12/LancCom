import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { CredentialsClient } from '@/components/credentials/CredentialsClient';

export const metadata: Metadata = {
  title: `Company Credentials & Licence | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Official Abu Dhabi Economic Licence details, registration numbers, and licensed activities of LandCom Information Technology Solutions Provider.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/credentials`,
  },
  openGraph: {
    title: `Company Credentials & Licence | ${COMPANY_INFO.name}`,
    description: 'Official Abu Dhabi Economic Licence details, registration numbers, and licensed activities of LandCom Information Technology Solutions Provider.',
    url: `${COMPANY_INFO.domain}/credentials`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Company Credentials & Licence | ${COMPANY_INFO.name}`,
    description: 'Official Abu Dhabi Economic Licence details, registration numbers, and licensed activities of LandCom Information Technology Solutions Provider.',
  },
};

export default function CredentialsPage() {
  return <CredentialsClient />;
}
