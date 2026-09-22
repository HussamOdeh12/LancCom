import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

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
      identifier: [
        {
          '@type': 'PropertyValue',
          name: 'ADED Commercial Licence',
          value: 'CN-1006129'
        },
        {
          '@type': 'PropertyValue',
          name: 'ADCCI Membership',
          value: '228768'
        },
        {
          '@type': 'PropertyValue',
          name: 'Unified Registration Number',
          value: '101-2021-100028641'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, P.O. Box 58571',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        postalCode: '58571',
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
      '@type': 'Service',
      '@id': 'https://landcom.ae/#service',
      name: 'Information Technology Solutions',
      serviceType: 'Information Technology Solutions',
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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined' && window.fetch) {
                  var _origFetch = window.fetch;
                  var _currentFetch = function() {
                    return _origFetch.apply(window, arguments);
                  };
                  try {
                    Object.defineProperty(window, 'fetch', {
                      get: function() { return _currentFetch; },
                      set: function(val) { _currentFetch = val; },
                      configurable: true,
                      enumerable: true
                    });
                  } catch (e) {}
                }
                var theme = localStorage.getItem('landcom_theme_pref');
                var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'light' || (!theme && !supportDark)) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans selection:bg-cyan-500 selection:text-slate-950" suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
