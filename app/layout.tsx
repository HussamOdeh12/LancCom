import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://landcom.ae'),
  title: 'LandCom IT Solutions | Enterprise IT Systems Integrator Abu Dhabi, UAE',
  description: 'Enterprise IT Solutions Provider, Systems Integrator & Managed Services Partner in Abu Dhabi, UAE. Delivering IT Infrastructure, Cybersecurity, Cloud, ELV, and Networking.',
  keywords: [
    'IT Solutions Abu Dhabi',
    'Systems Integrator UAE',
    'Enterprise IT Infrastructure',
    'Cybersecurity Abu Dhabi',
    'Structured Cabling UAE',
    'ELV Systems Abu Dhabi',
    'CCTV SIRA MCC UAE',
    'Managed IT Services UAE',
    'Hybrid Cloud Abu Dhabi',
    'LandCom IT Solutions'
  ],
  authors: [{ name: 'LAND.COM Information Technology Solutions Provider' }],
  creator: 'LandCom Information Technology LLC',
  publisher: 'LandCom Information Technology LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LandCom IT Solutions | Enterprise IT Systems Integrator Abu Dhabi, UAE',
    description: 'Leading Abu Dhabi Systems Integrator delivering enterprise IT infrastructure, zero-trust cybersecurity, structured cabling (ELV), and 24/7 managed NOC services.',
    url: 'https://landcom.ae',
    siteName: 'LAND.COM IT Solutions',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LandCom IT Solutions | Enterprise IT Systems Integrator Abu Dhabi, UAE',
    description: 'Enterprise IT Solutions Provider & Systems Integrator in Abu Dhabi, UAE. High-availability compute, cybersecurity, cloud, ELV, and 24/7 NOC support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://landcom.ae',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://landcom.ae/#organization',
      name: 'LAND.COM Information Technology Solutions Provider',
      alternateName: 'LandCom IT Solutions',
      url: 'https://landcom.ae',
      logo: 'https://landcom.ae/icon.png',
      description: 'Enterprise IT Solutions Provider, Systems Integrator, and Managed IT Services Partner based in Abu Dhabi, UAE.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Electra Street, Al Markaziyah, P.O. Box 48291',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+971-2-674-8890',
        contactType: 'customer support',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar']
      }
    },
    {
      '@type': 'ITService',
      '@id': 'https://landcom.ae/#service',
      name: 'Enterprise IT Systems Integration & Managed IT Services',
      provider: {
        '@id': 'https://landcom.ae/#organization'
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Enterprise IT Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise IT Infrastructure & Systems'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Advanced Cybersecurity & SOC Defense'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Structured Cabling & ELV Low Current Systems'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud & Hybrid Data Center Solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise Networking & SD-WAN'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Managed IT Services & 24/7 NOC Support'
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-cyan-500 selection:text-slate-950" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

