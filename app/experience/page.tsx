import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/data';
import { ExperienceClient } from '@/components/experience/ExperienceClient';

export const metadata: Metadata = {
  title: `Selected Experience | ${COMPANY_INFO.shortName} Abu Dhabi`,
  description: 'Factual summary of LandCom’s documented technology engagements with organizations in Abu Dhabi and the UAE.',
  alternates: {
    canonical: `${COMPANY_INFO.domain}/experience`,
  },
  openGraph: {
    title: `Selected Experience | ${COMPANY_INFO.name}`,
    description: 'Factual summary of LandCom’s documented technology engagements with organizations in Abu Dhabi and the UAE.',
    url: `${COMPANY_INFO.domain}/experience`,
    siteName: COMPANY_INFO.name,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Selected Experience | ${COMPANY_INFO.name}`,
    description: 'Factual summary of LandCom’s documented technology engagements with organizations in Abu Dhabi and the UAE.',
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
