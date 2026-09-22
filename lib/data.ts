export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface DocumentedClient {
  id: string;
  organization: string;
  scope: string;
  location: string;
}

export interface LicensedActivity {
  id: number;
  title: string;
  titleAr: string;
}

export const COMPANY_INFO = {
  name: 'LAND.COM Information Technology Solutions Provider',
  shortName: 'LandCom Information Technology',
  tradeName: 'Land.com Solution Provider',
  legalForm: 'Establishment',
  establishedYear: '2007',
  establishedDate: '09 May 2007',
  yearsExperience: '19+',
  ownership: '100% UAE Owned',
  topManagement: 'UAE Nationals',
  deployedStaff: '32+ IT Staff Deployed',
  domain: 'https://landcom.ae',
  headquarters: {
    island: 'Abu Dhabi Island',
    street: 'Muroor Road',
    floor: 'Floor 3',
    office: 'Office 37–38',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    fullAddress: 'Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, Abu Dhabi, UAE',
    poBox: '58571, Abu Dhabi, UAE',
  },
  contact: {
    telephone: '+971 2 884 8213',
    fax: '+971 2 884 8214',
    primaryEmail: 'Info@landcom.ae',
    additionalEmail: 'mustasharpro@gmail.com',
    website: 'www.landcom.ae',
  },
  license: {
    authority: 'Abu Dhabi Department of Economic Development',
    licenseName: 'Abu Dhabi Economic Licence',
    licenseNumber: 'CN-1006129',
    unifiedRegistrationNumber: '101-2021-100028641',
    unifiedLicenseNumber: '501-2007-100051614',
    adcciMembership: '228768',
    legalForm: 'Establishment',
    establishmentDate: '09 May 2007',
    issueDate: '27 November 2025',
    expiryDate: '26 November 2026',
  },
  positioning: 'Land.com Solution Provider has been developing and implementing complex business solutions in Abu Dhabi since 2007. We operate as strategic consultants who understand client needs and deliver integrated solutions.',
};

export const LICENSED_ACTIVITIES: LicensedActivity[] = [
  {
    id: 1,
    title: 'Research & Development — Smart Systems',
    titleAr: 'البحوث والتطوير في مجال الأنظمة الذكية',
  },
  {
    id: 2,
    title: 'Computer Systems & Software Design',
    titleAr: 'تصميم نظم الحاسب الآلي والبرمجيات',
  },
  {
    id: 3,
    title: 'Development & Innovation in Computer Systems',
    titleAr: 'التطوير والابتكار في نظم الحاسب الآلي',
  },
  {
    id: 4,
    title: 'Administrative Consultancy & Studies',
    titleAr: 'الاستشارات والدراسات الإدارية',
  },
  {
    id: 5,
    title: 'Advertisement Material Distribution',
    titleAr: 'توزيع المواد الإعلانية',
  },
  {
    id: 6,
    title: 'IT Network Services',
    titleAr: 'خدمات شبكات تقنية المعلومات',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'erp-system',
    slug: 'erp-system',
    title: 'ERP System',
    tagline: 'Enterprise resource planning tailored to your business',
    description: 'Customized enterprise resource planning solutions designed and implemented to streamline organizational operations, financial workflows, and business processes.',
    icon: 'Database',
    features: [
      'Tailored business workflow automation',
      'Integrated enterprise resource management',
      'Operational and administrative reporting',
      'System deployment and user orientation'
    ]
  },
  {
    id: 'mobility-solutions',
    slug: 'mobility-solutions',
    title: 'Mobility Solutions',
    tagline: 'iOS, Android & cross-platform mobile applications',
    description: 'Design, development, and deployment of native and cross-platform mobile applications for smartphones and mobile platforms.',
    icon: 'Smartphone',
    features: [
      'iOS and Android mobile application development',
      'Cross-platform mobile solution engineering',
      'User interface and experience design',
      'Secure back-end integration and maintenance'
    ]
  },
  {
    id: 'it-resources-networking',
    slug: 'it-resources-networking',
    title: 'IT Resources & Networking',
    tagline: 'Hardware supply, network design and infrastructure',
    description: 'Professional supply of IT equipment, structured network architecture design, and technical hardware infrastructure deployment.',
    icon: 'Network',
    features: [
      'IT hardware supply and equipment provisioning',
      'Network architecture and cabling design',
      'Network infrastructure setup and configuration',
      'On-site technical implementation'
    ]
  },
  {
    id: 'security-solutions',
    slug: 'security-solutions',
    title: 'Security Solutions',
    tagline: 'Access control, CCTV and cybersecurity systems',
    description: 'Physical and digital security installations including biometric access control, CCTV video surveillance, and cybersecurity protection.',
    icon: 'ShieldCheck',
    features: [
      'Biometric and card access control systems',
      'CCTV video surveillance setups',
      'Cybersecurity and network defense configurations',
      'Security systems installation and integration'
    ]
  },
  {
    id: 'tracking-systems',
    slug: 'tracking-systems',
    title: 'Tracking Systems',
    tagline: 'GPS fleet tracking and asset management',
    description: 'GPS-enabled tracking solutions and vehicle fleet management systems providing real-time location monitoring and asset visibility.',
    icon: 'Navigation',
    features: [
      'GPS fleet tracking systems',
      'Real-time vehicle and asset monitoring',
      'Route and operational reporting',
      'Hardware and tracking software integration'
    ]
  },
  {
    id: 'rfid-solutions',
    slug: 'rfid-solutions',
    title: 'RFID Solutions',
    tagline: 'Radio-frequency identification for inventory & assets',
    description: 'Radio-frequency identification implementations for automated inventory tracking, asset management, and identification systems.',
    icon: 'Radio',
    features: [
      'RFID asset and inventory tracking',
      'RFID tag and reader integration',
      'Stock control and identification automation',
      'Integration with organizational systems'
    ]
  },
  {
    id: 'ecommerce-web',
    slug: 'ecommerce-web',
    title: 'E-Commerce & Web',
    tagline: 'Custom websites, portals and digital commerce',
    description: 'Custom corporate websites, organizational web portals, and digital commerce platforms built for business operations.',
    icon: 'Globe',
    features: [
      'Custom website design and development',
      'Corporate portals and content systems',
      'Digital commerce platforms',
      'Web application maintenance and support'
    ]
  },
  {
    id: 'it-managed-services',
    slug: 'it-managed-services',
    title: 'IT Managed Services',
    tagline: 'End-to-end IT operations and helpdesk support',
    description: 'End-to-end IT operations management, technical resourcing, and helpdesk support services for organizations.',
    icon: 'Headset',
    features: [
      'End-to-end IT operations support',
      'Dedicated technical staffing and resourcing',
      'Helpdesk and operational assistance',
      'Ongoing systems support and maintenance'
    ]
  }
];

export const SERVICES = CORE_SERVICES;

export const DOCUMENTED_EXPERIENCE: DocumentedClient[] = [
  {
    id: 'exp-sca',
    organization: 'Securities & Commodities Authority',
    scope: 'Technical Support & IT Resourcing',
    location: 'UAE'
  },
  {
    id: 'exp-kf',
    organization: 'Khalifa Bin Zayed Al Nahyan Foundation',
    scope: 'IT Managed Services (32 staff) & Food Distribution System UAE-wide',
    location: 'UAE'
  },
  {
    id: 'exp-alain-muni',
    organization: 'Al Ain City Municipality',
    scope: 'iPhone, Android & BlackBerry Mobile Applications',
    location: 'Al Ain, UAE'
  },
  {
    id: 'exp-algharbia',
    organization: 'Al Gharbia Hospitals',
    scope: 'Supply of IT Items & Infrastructure',
    location: 'Al Dhafra / Western Region, UAE'
  },
  {
    id: 'exp-sari',
    organization: 'SARI Oil Field Services',
    scope: 'ERP System Implementation',
    location: 'Abu Dhabi, UAE'
  },
  {
    id: 'exp-ilforno',
    organization: 'IL Forno Restaurant Group',
    scope: 'Web Development & E-Commerce',
    location: 'UAE'
  }
];

export const WHY_LANDCOM = [
  {
    id: 'why-abudhabi',
    title: 'Abu Dhabi Based',
    titleAr: 'مقرنا في أبوظبي',
    description: 'Established in Abu Dhabi since 2007 with dedicated local presence on Muroor Road.',
    descriptionAr: 'تأسست في أبوظبي منذ عام 2007 مع وجود محلي دائم في طريق المرور.',
    icon: 'MapPin'
  },
  {
    id: 'why-team',
    title: 'Experienced Team',
    titleAr: 'فريق ذو خبرة',
    description: '19+ years of professional experience with 32+ IT staff deployed in key projects.',
    descriptionAr: 'أكثر من 19 عاماً من الخبرة المهنية مع نشر أكثر من 32 كادراً متخصصاً.',
    icon: 'Users'
  },
  {
    id: 'why-agile',
    title: 'Agile Delivery',
    titleAr: 'تنفيذ مرن ومتكامل',
    description: 'Operating as strategic consultants who understand client needs and deliver tailored solutions.',
    descriptionAr: 'نعمل كمستشارين استراتيجيين نفهم احتياجات العميل ونقدم حلولاً متكاملة.',
    icon: 'Zap'
  },
  {
    id: 'why-gov',
    title: 'Government Trust',
    titleAr: 'ثقة المؤسسات الحكومية',
    description: 'Proven track record of supporting prominent government authorities and national foundations.',
    descriptionAr: 'سجل حافل في دعم كبرى الهيئات والمؤسسات الحكومية والوطنية في دولة الإمارات.',
    icon: 'Building2'
  },
  {
    id: 'why-innovation',
    title: 'Innovation-Driven',
    titleAr: 'الابتكار والجودة',
    description: 'Committed to high-quality execution, smart systems R&D, and 7-star service standards.',
    descriptionAr: 'التزام بأعلى معايير الجودة والبحث والتطوير في الأنظمة الذكية ومعايير الخدمة المتميزة.',
    icon: 'Sparkles'
  }
];

export const COMPANY_CREDENTIALS = [
  {
    label: 'Established',
    labelAr: 'سنة التأسيس',
    value: '2007',
    description: '09 May 2007 in Abu Dhabi',
    descriptionAr: '9 مايو 2007 في أبوظبي'
  },
  {
    label: 'Ownership',
    labelAr: 'الملكية',
    value: '100%',
    description: 'UAE Owned / National Management',
    descriptionAr: 'ملكية إماراتية 100% وإدارة وطنية'
  },
  {
    label: 'Experience',
    labelAr: 'الخبرة الممتدة',
    value: '19+ Years',
    description: 'Developing Business Solutions in Abu Dhabi',
    descriptionAr: 'في تطوير وتنفيذ حلول الأعمال'
  },
  {
    label: 'Licensed Activities',
    labelAr: 'الأنشطة المرخصة',
    value: '6',
    description: 'Economic Activities in Abu Dhabi',
    descriptionAr: 'أنشطة اقتصادية مرخصة رسمياً'
  }
];
