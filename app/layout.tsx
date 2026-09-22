import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://landcom.ae'),
  title: 'LandCom Information Technology | IT Solutions Provider Abu Dhabi, UAE',
  description: 'LAND.COM Information Technology Solutions Provider in Abu Dhabi, UAE. Developing and implementing business solutions in Abu Dhabi since 2007.',
  keywords: [
    'LandCom Information Technology',
    'IT Solutions Abu Dhabi',
    'ERP System Abu Dhabi',
    'Mobility Solutions UAE',
    'IT Resources Networking Abu Dhabi',
    'Security Solutions Abu Dhabi',
    'Tracking Systems UAE',
    'RFID Solutions UAE',
    'E-Commerce Web Abu Dhabi',
    'IT Managed Services Abu Dhabi'
  ],
  authors: [{ name: 'LAND.COM Information Technology Solutions Provider' }],
  creator: 'LandCom Information Technology',
  publisher: 'LandCom Information Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LandCom Information Technology | IT Solutions Provider Abu Dhabi, UAE',
    description: 'LAND.COM Information Technology Solutions Provider. Operating as strategic consultants delivering integrated IT solutions in Abu Dhabi since 2007.',
    url: 'https://landcom.ae',
    siteName: 'LandCom Information Technology',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LandCom Information Technology | IT Solutions Provider Abu Dhabi',
    description: 'Developing and implementing business solutions in Abu Dhabi since 2007.',
  },
  robots: {
    index: true,
    follow: true,
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
      legalName: 'LAND.COM Information Technology Solutions Provider',
      alternateName: 'LandCom Information Technology',
      url: 'https://landcom.ae',
      foundingDate: '2007-05-09',
      description: 'Developing and implementing complex business solutions in Abu Dhabi since 2007. Operating as strategic consultants who understand client needs and deliver integrated solutions.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, P.O. Box 58571',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+971-2-884-8213',
        faxNumber: '+971-2-884-8214',
        email: 'Info@landcom.ae',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar']
      }
    },
    {
      '@type': 'ITService',
      '@id': 'https://landcom.ae/#service',
      name: 'Information Technology Solutions & Services',
      provider: {
        '@id': 'https://landcom.ae/#organization'
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'LandCom Core Services Catalog',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ERP System',
              description: 'Enterprise resource planning tailored to your business'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobility Solutions',
              description: 'iOS, Android & cross-platform mobile applications'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Resources & Networking',
              description: 'Hardware supply, network design and infrastructure'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Security Solutions',
              description: 'Access control, CCTV and cybersecurity systems'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tracking Systems',
              description: 'GPS fleet tracking and asset management'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'RFID Solutions',
              description: 'Radio-frequency identification for inventory & assets'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce & Web',
              description: 'Custom websites, portals and digital commerce'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Managed Services',
              description: 'End-to-end IT operations and helpdesk support'
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
