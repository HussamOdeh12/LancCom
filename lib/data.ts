export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  overview: string;
  overviewAr: string;
  features: string[];
  featuresAr: string[];
  approach: string;
  approachAr: string;
  documentedExperience?: {
    organization: string;
    organizationAr: string;
    scope: string;
    scopeAr: string;
    location?: string;
    locationAr?: string;
  };
  relatedServiceSlugs: string[];
  icon: string;
  metaTitle: string;
  metaDescription: string;
}

export interface DocumentedClient {
  id: string;
  organization: string;
  organizationAr: string;
  scope: string;
  scopeAr: string;
  location?: string;
  locationAr?: string;
  relatedServiceSlug?: string;
  relatedServiceName?: string;
  relatedServiceNameAr?: string;
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
    fullAddressAr: 'جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38، أبوظبي، الإمارات العربية المتحدة',
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
  mission: {
    en: 'To deliver advanced integrated software solutions in an easily implemented way while coordinating resources, information, and activities within one holistic system.',
    ar: 'تقديم حلول برمجية متقدمة ومتكاملة بطريقة ميسرة للتنفيذ مع تنسيق الموارد والمعلومات والأنشطة ضمن نظام كلي متكامل.',
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
    slug: 'erp-systems',
    title: 'ERP System',
    titleAr: 'نظام تخطيط موارد المؤسسة',
    tagline: 'Enterprise resource planning tailored to your business',
    taglineAr: 'تخطيط موارد المؤسسة مصمم خصيصاً ليناسب أعمالكم',
    description: 'Enterprise resource planning solutions tailored and implemented to align with organizational business requirements.',
    descriptionAr: 'حلول تخطيط موارد المؤسسات المصممة والمنفذة بما يلائم متطلبات الأعمال.',
    overview: 'LandCom delivers Enterprise Resource Planning (ERP) systems tailored to organizational business needs, coordinating resources, information, and core activities.',
    overviewAr: 'تقدم لاند كوم أنظمة تخطيط موارد المؤسسات (ERP) المصممة خصيصاً لتناسب احتياجات الأعمال وتنسيق الموارد والمعلومات والأنشطة.',
    icon: 'Database',
    features: [
      'Enterprise resource planning tailored to business',
      'Integrated business solution implementation',
      'Resource and operational activity coordination'
    ],
    featuresAr: [
      'تخطيط موارد المؤسسة مصمم خصيصاً للأعمال',
      'تنفيذ وتطبيق حلول الأعمال المتكاملة',
      'تنسيق الموارد والأنشطة التشغيلية'
    ],
    approach: 'We operate as strategic consultants to understand client needs and deploy integrated ERP solutions tailored to business requirements.',
    approachAr: 'نعمل كمستشارين استراتيجيين لفهم احتياجات العملاء وتقديم حلول ERP متكاملة ومصممة للأعمال.',
    documentedExperience: {
      organization: 'SARI Oil Field Services',
      organizationAr: 'ساري لخدمات حقول النفط',
      scope: 'ERP System Implementation',
      scopeAr: 'تنفيذ وتطبيق نظام تخطيط موارد المؤسسة (ERP)'
    },
    relatedServiceSlugs: ['ecommerce-web', 'managed-it-services'],
    metaTitle: 'ERP Systems | LandCom Abu Dhabi',
    metaDescription: 'Enterprise resource planning tailored to your business by LandCom in Abu Dhabi. Documented experience in ERP implementations.',
  },
  {
    id: 'mobility-solutions',
    slug: 'mobility-solutions',
    title: 'Mobility Solutions',
    titleAr: 'حلول التطبيقات المتنقلة',
    tagline: 'iOS, Android & cross-platform mobile applications',
    taglineAr: 'تطبيقات الهواتف الذكية لأنظمة iOS وAndroid والمنصات المشتركة',
    description: 'Design, development, and deployment of iOS, Android, and cross-platform mobile applications.',
    descriptionAr: 'تصميم وتطوير وتطبيق تطبيقات الهواتف الذكية لأنظمة iOS وAndroid والمنصات المشتركة.',
    overview: 'LandCom develops mobile applications across iOS, Android, and cross-platform environments to support organizational and user requirements.',
    overviewAr: 'تطور لاند كوم تطبيقات الهواتف الذكية لأنظمة iOS وAndroid والمنصات المشتركة لتلبية متطلبات المؤسسات والمستخدمين.',
    icon: 'Smartphone',
    features: [
      'iOS mobile applications',
      'Android mobile applications',
      'Cross-platform mobile applications'
    ],
    featuresAr: [
      'تطبيقات الهواتف الذكية لنظام iOS',
      'تطبيقات الهواتف الذكية لنظام Android',
      'تطبيقات الهواتف الذكية عبر المنصات المشتركة'
    ],
    approach: 'We understand client needs to develop and deploy tailored mobile applications across leading mobile platforms.',
    approachAr: 'نعمل على فهم احتياجات العملاء لتطوير وتطبيق تطبيقات متنقلة مخصصة عبر مختلف المنصات.',
    documentedExperience: {
      organization: 'Al Ain City Municipality',
      organizationAr: 'بلدية مدينة العين',
      scope: 'iPhone, Android & BlackBerry Mobile Applications',
      scopeAr: 'تطبيقات الهواتف الذكية (iPhone وAndroid وBlackBerry)'
    },
    relatedServiceSlugs: ['ecommerce-web', 'tracking-systems'],
    metaTitle: 'Mobility Solutions | LandCom Abu Dhabi',
    metaDescription: 'iOS, Android & cross-platform mobile applications developed by LandCom in Abu Dhabi. Documented municipal mobile projects.',
  },
  {
    id: 'it-resources-networking',
    slug: 'it-resources-networking',
    title: 'IT Resources & Networking',
    titleAr: 'موارد تقنية المعلومات والشبكات',
    tagline: 'Hardware supply, network design and infrastructure',
    taglineAr: 'توريد العتاد وتصميم وبناء شبكات وتقنيات البنية التحتية',
    description: 'Hardware supply, network design, and technical infrastructure provisioning for organizations.',
    descriptionAr: 'توريد العتاد والأجهزة، وتصميم الشبكات، وتوفير البنية التحتية التقنية للمؤسسات.',
    overview: 'LandCom provides hardware supply, structured network design, and technical infrastructure solutions for corporate and institutional environments.',
    overviewAr: 'توفر لاند كوم خدمات توريد الأجهزة والعتاد، وتصميم الشبكات، وحلول البنية التحتية التقنية للمؤسسات.',
    icon: 'Network',
    features: [
      'Hardware supply and equipment provisioning',
      'Network design and architecture',
      'IT infrastructure solutions'
    ],
    featuresAr: [
      'توريد الأجهزة ومعدات تقنية المعلومات',
      'تصميم وتخطيط بنية الشبكات',
      'حلول البنية التحتية لتقنية المعلومات'
    ],
    approach: 'We deliver integrated IT resources and networking infrastructure tailored to client operational environments.',
    approachAr: 'نقدم حلولاً متكاملة لتوريد الأجهزة والشبكات بما يلائم البيئة التشغيلية للعميل.',
    documentedExperience: {
      organization: 'Al Gharbia Hospitals',
      organizationAr: 'مستشفيات الغربية',
      scope: 'Supply of IT Items & Infrastructure',
      scopeAr: 'توريد مستلزمات وتجهيزات تقنية المعلومات والبنية التحتية'
    },
    relatedServiceSlugs: ['security-solutions', 'managed-it-services'],
    metaTitle: 'IT Resources & Networking | LandCom Abu Dhabi',
    metaDescription: 'Hardware supply, network design and infrastructure services by LandCom in Abu Dhabi. Documented healthcare infrastructure supply.',
  },
  {
    id: 'security-solutions',
    slug: 'security-solutions',
    title: 'Security Solutions',
    titleAr: 'الحلول الأمنية',
    tagline: 'Access control, CCTV and cybersecurity systems',
    taglineAr: 'أنظمة التحكم بالدخول، المراقبة التلفزيونية CCTV والحماية السيبرانية',
    description: 'Access control, CCTV surveillance installations, and cybersecurity systems for organizations.',
    descriptionAr: 'أنظمة التحكم بالدخول، والمراقبة التلفزيونية (CCTV)، وأنظمة الحماية السيبرانية للمؤسسات.',
    overview: 'LandCom provides access control systems, CCTV video surveillance, and cybersecurity solutions to safeguard organizational operations.',
    overviewAr: 'تقدم لاند كوم أنظمة التحكم بالدخول، وكاميرات المراقبة التلفزيونية CCTV، وحلول الحماية السيبرانية لحماية العمليات المؤسسية.',
    icon: 'ShieldCheck',
    features: [
      'Access control systems',
      'CCTV video surveillance systems',
      'Cybersecurity systems'
    ],
    featuresAr: [
      'أنظمة التحكم بالدخول',
      'أنظمة المراقبة التلفزيونية CCTV',
      'أنظمة الحماية السيبرانية'
    ],
    approach: 'We deliver integrated security solutions covering physical access, video surveillance, and cybersecurity.',
    approachAr: 'نقدم حلولاً أمنية متكاملة تشمل التحكم بالدخول والمراقبة التلفزيونية والحماية السيبرانية.',
    relatedServiceSlugs: ['it-resources-networking', 'tracking-systems'],
    metaTitle: 'Security Solutions | LandCom Abu Dhabi',
    metaDescription: 'Access control, CCTV and cybersecurity systems designed and installed by LandCom in Abu Dhabi, UAE.',
  },
  {
    id: 'tracking-systems',
    slug: 'tracking-systems',
    title: 'Tracking Systems',
    titleAr: 'أنظمة التتبع',
    tagline: 'GPS fleet tracking and asset management',
    taglineAr: 'أنظمة تتبع الأساطيل عبر GPS وإدارة الأصول',
    description: 'GPS fleet tracking and asset management solutions for organizations.',
    descriptionAr: 'حلول تتبع الأساطيل عبر نظام (GPS) وإدارة الأصول للمؤسسات.',
    overview: 'LandCom implements GPS fleet tracking and asset management systems to enable organizations to monitor vehicles and assets.',
    overviewAr: 'تنفذ لاند كوم أنظمة تتبع الأساطيل عبر GPS وإدارة الأصول لتمكين المؤسسات من مراقبة المركبات والأصول.',
    icon: 'Navigation',
    features: [
      'GPS fleet tracking systems',
      'Asset management and tracking',
      'Vehicle tracking solutions'
    ],
    featuresAr: [
      'أنظمة تتبع الأساطيل عبر GPS',
      'إدارة وتتبع الأصول',
      'حلول تتبع المركبات'
    ],
    approach: 'We deploy GPS tracking and asset management solutions tailored to organizational vehicle and asset requirements.',
    approachAr: 'نوفر حلول تتبع الأساطيل وإدارة الأصول بما يتوافق مع متطلبات المؤسسة.',
    relatedServiceSlugs: ['rfid-solutions', 'mobility-solutions'],
    metaTitle: 'Tracking Systems | LandCom Abu Dhabi',
    metaDescription: 'GPS fleet tracking and asset management systems by LandCom in Abu Dhabi, UAE. Real-time location monitoring and reporting.',
  },
  {
    id: 'rfid-solutions',
    slug: 'rfid-solutions',
    title: 'RFID Solutions',
    titleAr: 'حلول تحديد الهوية بموجات الراديو',
    tagline: 'Radio-frequency identification for inventory & assets',
    taglineAr: 'تقنية تحديد الهوية بموجات الراديو لإدارة المخزون والأصول',
    description: 'Radio-frequency identification (RFID) solutions for inventory and asset management.',
    descriptionAr: 'حلول تحديد الهوية بموجات الراديو (RFID) لإدارة المخزون وتتبع الأصول.',
    overview: 'LandCom delivers RFID solutions designed for organizational inventory management and asset tracking.',
    overviewAr: 'تقدم لاند كوم حلول تحديد الهوية بموجات الراديو (RFID) لإدارة المخزون وتتبع الأصول في المؤسسات.',
    icon: 'Radio',
    features: [
      'RFID for inventory management',
      'RFID for asset management',
      'Radio-frequency identification solutions'
    ],
    featuresAr: [
      'تقنية RFID لإدارة المخزون',
      'تقنية RFID لإدارة الأصول',
      'حلول تحديد الهوية بموجات الراديو'
    ],
    approach: 'We implement RFID technology tailored to inventory and asset management requirements.',
    approachAr: 'نقدم حلول تقنية RFID المخصصة لتلبية متطلبات إدارة المخزون والأصول.',
    relatedServiceSlugs: ['tracking-systems', 'erp-systems'],
    metaTitle: 'RFID Solutions | LandCom Abu Dhabi',
    metaDescription: 'Radio-frequency identification (RFID) for inventory and asset management by LandCom in Abu Dhabi, UAE.',
  },
  {
    id: 'ecommerce-web',
    slug: 'ecommerce-web',
    title: 'E-Commerce & Web',
    titleAr: 'التجارة الإلكترونية وحلول الويب',
    tagline: 'Custom websites, portals and digital commerce',
    taglineAr: 'مواقع إلكترونية مخصصة، بوابات رقمية ومنصات تجارة إلكترونية',
    description: 'Custom corporate websites, organizational portals, and digital commerce solutions.',
    descriptionAr: 'مواقع إلكترونية مخصصة، وبوابات رقمية، وحلول التجارة الإلكترونية للمؤسسات.',
    overview: 'LandCom develops custom websites, corporate web portals, and digital commerce solutions tailored to business requirements.',
    overviewAr: 'تطور لاند كوم مواقع إلكترونية مخصصة وبوابات ويب ومنصات تجارة إلكترونية تلائم متطلبات الأعمال.',
    icon: 'Globe',
    features: [
      'Custom websites',
      'Corporate and institutional portals',
      'Digital commerce solutions'
    ],
    featuresAr: [
      'مواقع إلكترونية مخصصة',
      'بوابات إلكترونية ومؤسسية',
      'حلول التجارة الرقمية'
    ],
    approach: 'We build tailored websites, web portals, and e-commerce platforms designed for client business needs.',
    approachAr: 'نعمل على تطوير مواقع إلكترونية وبوابات رقمية وحلول تجارة إلكترونية تلبي احتياجات أعمال العملاء.',
    documentedExperience: {
      organization: 'IL Forno Restaurant Group',
      organizationAr: 'مجموعة مطاعم إل فورنو',
      scope: 'Web Development & E-Commerce',
      scopeAr: 'تطوير الموقع الإلكتروني ومنصة التجارة الرقمية'
    },
    relatedServiceSlugs: ['erp-systems', 'mobility-solutions'],
    metaTitle: 'E-Commerce & Web Solutions | LandCom Abu Dhabi',
    metaDescription: 'Custom websites, portals and digital commerce platforms developed by LandCom in Abu Dhabi. Documented enterprise web projects.',
  },
  {
    id: 'it-managed-services',
    slug: 'managed-it-services',
    title: 'IT Managed Services',
    titleAr: 'خدمات تقنية المعلومات المُدارة',
    tagline: 'End-to-end IT operations and helpdesk support',
    taglineAr: 'إدارة متكاملة للعمليات التقنية ودعم مكاتب المساعدة الفنية',
    description: 'End-to-end IT operations management, technical staffing, and helpdesk support.',
    descriptionAr: 'إدارة متكاملة لعمليات تقنية المعلومات، وتوفير الكوادر الفنية، ودعم مكاتب المساعدة.',
    overview: 'LandCom provides end-to-end IT operations management and helpdesk support, with documented capability deploying 32+ IT staff on major projects.',
    overviewAr: 'تقدم لاند كوم خدمات إدارة عمليات تقنية المعلومات ودعم مكاتب المساعدة، مع قدرة موثقة في توفير 32+ كادراً تقنياً في مشاريع كبرى.',
    icon: 'Headset',
    features: [
      'End-to-end IT operations',
      'Helpdesk and technical support',
      'Technical staffing (32+ IT staff deployed in key projects)'
    ],
    featuresAr: [
      'إدارة متكاملة لعمليات تقنية المعلومات',
      'دعم مكاتب المساعدة والدعم الفني',
      'توفير الكوادر التقنية (32+ كادراً متخصصاً في مشاريع رئيسية)'
    ],
    approach: 'We provide strategic IT managed services and technical support teams tailored to organizational operations.',
    approachAr: 'نوفر خدمات مدارة لتقنية المعلومات وفرق دعم فني مخصصة لمساندة العمليات المؤسسية.',
    documentedExperience: {
      organization: 'Khalifa Bin Zayed Al Nahyan Foundation',
      organizationAr: 'مؤسسة خليفة بن زايد آل نهيان للأعمال الإنسانية',
      scope: 'IT Managed Services (32 staff) & Food Distribution System UAE-wide',
      scopeAr: 'خدمات تقنية المعلومات المدارة (فريق من 32 كادراً) ونظام توزيع المواد الغذائية على مستوى الدولة'
    },
    relatedServiceSlugs: ['it-resources-networking', 'erp-systems'],
    metaTitle: 'IT Managed Services | LandCom Abu Dhabi',
    metaDescription: 'End-to-end IT operations management, technical staffing and helpdesk support by LandCom in Abu Dhabi. Documented major foundation projects.',
  }
];

export const SERVICES = CORE_SERVICES;

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return CORE_SERVICES.find((s) => s.slug === slug || s.id === slug);
}

export function getAllServiceSlugs(): string[] {
  return CORE_SERVICES.map((s) => s.slug);
}

export const DOCUMENTED_EXPERIENCE: DocumentedClient[] = [
  {
    id: 'exp-sca',
    organization: 'Securities & Commodities Authority',
    organizationAr: 'هيئة الأوراق المالية والسلع',
    scope: 'Technical Support & IT Resourcing',
    scopeAr: 'الدعم الفني وتوفير الكوادر التقنية المتخصصة'
  },
  {
    id: 'exp-kf',
    organization: 'Khalifa Bin Zayed Al Nahyan Foundation',
    organizationAr: 'مؤسسة خليفة بن زايد آل نهيان للأعمال الإنسانية',
    scope: 'IT Managed Services (32 staff) & Food Distribution System UAE-wide',
    scopeAr: 'خدمات تقنية المعلومات المدارة (فريق من 32 كادراً) ونظام توزيع المواد الغذائية على مستوى الدولة',
    relatedServiceSlug: 'managed-it-services',
    relatedServiceName: 'IT Managed Services',
    relatedServiceNameAr: 'خدمات تقنية المعلومات المدارة'
  },
  {
    id: 'exp-alain-muni',
    organization: 'Al Ain City Municipality',
    organizationAr: 'بلدية مدينة العين',
    scope: 'iPhone, Android & BlackBerry Mobile Applications',
    scopeAr: 'تطبيقات الهواتف الذكية (iPhone وAndroid وBlackBerry)',
    relatedServiceSlug: 'mobility-solutions',
    relatedServiceName: 'Mobility Solutions',
    relatedServiceNameAr: 'حلول التطبيقات المتنقلة'
  },
  {
    id: 'exp-algharbia',
    organization: 'Al Gharbia Hospitals',
    organizationAr: 'مستشفيات الغربية',
    scope: 'Supply of IT Items & Infrastructure',
    scopeAr: 'توريد مستلزمات وتجهيزات تقنية المعلومات والبنية التحتية',
    relatedServiceSlug: 'it-resources-networking',
    relatedServiceName: 'IT Resources & Networking',
    relatedServiceNameAr: 'موارد تقنية المعلومات والشبكات'
  },
  {
    id: 'exp-sari',
    organization: 'SARI Oil Field Services',
    organizationAr: 'ساري لخدمات حقول النفط',
    scope: 'ERP System Implementation',
    scopeAr: 'تنفيذ وتطبيق نظام تخطيط موارد المؤسسة (ERP)',
    relatedServiceSlug: 'erp-systems',
    relatedServiceName: 'ERP System',
    relatedServiceNameAr: 'نظام تخطيط موارد المؤسسة'
  },
  {
    id: 'exp-ilforno',
    organization: 'IL Forno Restaurant Group',
    organizationAr: 'مجموعة مطاعم إل فورنو',
    scope: 'Web Development & E-Commerce',
    scopeAr: 'تطوير الموقع الإلكتروني وتطبيقات التجارة الرقمية',
    relatedServiceSlug: 'ecommerce-web',
    relatedServiceName: 'E-Commerce & Web',
    relatedServiceNameAr: 'التجارة الإلكترونية وحلول الويب'
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

