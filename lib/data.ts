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
    location: string;
    locationAr: string;
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
  location: string;
  locationAr: string;
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
    description: 'Customized enterprise resource planning solutions designed and implemented to streamline organizational operations, financial workflows, and business processes.',
    descriptionAr: 'حلول متخصصة لتخطيط موارد المؤسسات مصممة ومنفذة لتنسيق العمليات التشغيلية، والإجراءات الإدارية والمالية بدقة.',
    overview: 'LandCom designs and implements tailored Enterprise Resource Planning (ERP) systems built around the specific operational structure of each organization. Rather than imposing rigid structures, we coordinate resources, information, and daily business activities within one centralized, reliable platform.',
    overviewAr: 'تقوم لاند كوم بتصميم وتنفيذ أنظمة تخطيط موارد المؤسسات (ERP) المخصصة بما يتوافق مع الهيكل التشغيلي لكل مؤسسة، وتنسيق الموارد والمعلومات والأنشطة الإدارية ضمن نظام كلي متكامل ومترابط.',
    icon: 'Database',
    features: [
      'Tailored enterprise resource management',
      'Organizational workflow alignment',
      'Operational and administrative reporting',
      'System deployment and user orientation'
    ],
    featuresAr: [
      'إدارة متكاملة ومخصصة لموارد المؤسسة',
      'مواءمة تدفقات العمل والإجراءات التشغيلية',
      'إعداد التقارير الإدارية والتشغيلية الموحدة',
      'تنفيذ النظام وتهيئة المستخدمين وفرق العمل'
    ],
    approach: 'Our technical consultants evaluate organizational workflows in detail before deployment, ensuring seamless adaptation to institutional processes and operational requirements in Abu Dhabi.',
    approachAr: 'يقوم مستشارونا التقنيون بدراسة متطلبات وإجراءات العمل المؤسسي بدقة قبل التنفيذ، لضمان مواءمة النظام مع العمليات التشغيلية ومتطلبات المؤسسة في أبوظبي.',
    documentedExperience: {
      organization: 'SARI Oil Field Services',
      organizationAr: 'ساري لخدمات حقول النفط',
      scope: 'ERP System Implementation',
      scopeAr: 'تنفيذ وتطبيق نظام تخطيط موارد المؤسسة (ERP)',
      location: 'Abu Dhabi, UAE',
      locationAr: 'أبوظبي، الإمارات'
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
    description: 'Design, development, and deployment of native and cross-platform mobile applications for smartphones and mobile platforms.',
    descriptionAr: 'تصميم وتطوير ونشر تطبيقات الأجهزة الذكية الأصلية والمشتركة لتلبية احتياجات المؤسسات وخدمة المتعاملين.',
    overview: 'LandCom provides end-to-end mobile application engineering covering iOS, Android, and cross-platform technologies. We deliver functional, intuitive mobile interfaces backed by secure system integration to extend organizational capabilities directly to mobile users.',
    overviewAr: 'تقدم لاند كوم خدمات تطوير وتصميم تطبيقات الأجهزة الذكية لأنظمة iOS وAndroid والمنصات المتعددة، مع واجهات مستخدم سلسة وربط آمن مع الأنظمة الخلفية لتمكين المؤسسات من الوصول إلى مستخدميها بكفاءة.',
    icon: 'Smartphone',
    features: [
      'iOS mobile application development',
      'Android mobile application development',
      'Cross-platform mobile solution engineering',
      'User interface design and backend integration'
    ],
    featuresAr: [
      'تطوير تطبيقات الأجهزة الذكية لنظام iOS',
      'تطوير تطبيقات الأجهزة الذكية لنظام Android',
      'هندسة التطبيقات عبر المنصات المشتركة',
      'تصميم واجهات الاستخدام والربط مع الأنظمة الخلفية'
    ],
    approach: 'We prioritize performance, responsive interfaces, and rigorous testing across operating environments, delivering dependable mobile tools that serve governmental and commercial goals.',
    approachAr: 'نركز على استقرار الأداء، وسلاسة الواجهات، والاختبار الدقيق عبر مختلف البيئات والأجهزة، لتقديم تطبيقات موثوقة تلبي الأهداف الحكومية والتجارية.',
    documentedExperience: {
      organization: 'Al Ain City Municipality',
      organizationAr: 'بلدية مدينة العين',
      scope: 'iPhone, Android & BlackBerry Mobile Applications',
      scopeAr: 'تطوير تطبيقات الهواتف الذكية (iPhone وAndroid وBlackBerry)',
      location: 'Al Ain, UAE',
      locationAr: 'العين، الإمارات'
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
    description: 'Professional supply of IT equipment, structured network architecture design, and technical hardware infrastructure deployment.',
    descriptionAr: 'توريد أجهزة ومعدات تقنية المعلومات، وتصميم البنية التحتية للشبكات السلكية واللاسلكية، وتهيئة المنظومات التقنية.',
    overview: 'LandCom manages the procurement, supply, design, and physical implementation of enterprise IT equipment and structured network infrastructure. We ensure that facilities are equipped with stable, scalable networking foundations aligned with institutional requirements.',
    overviewAr: 'تتولى لاند كوم توريد وتصميم وتنفيذ تجهيزات تقنية المعلومات والبنى التحتية لشبكات الاتصال المؤسسية، مع ضمان تزويد المنشآت والمستشفيات والمؤسسات ببنية تحتية مستقرة وقابلة للتوسع.',
    icon: 'Network',
    features: [
      'IT hardware supply and equipment provisioning',
      'Network architecture and cabling design',
      'Network hardware setup and configuration',
      'On-site technical implementation and deployment'
    ],
    featuresAr: [
      'توريد وتأمين أجهزة ومعدات تقنية المعلومات',
      'تصميم وتخطيط البنية التحتية وكابلات الشبكات',
      'تركيب وضبط أجهزة وموزعات الشبكات',
      'التنفيذ الفني الميداني والتشغيل في الموقع'
    ],
    approach: 'Our technical teams deliver on-site deployment, rigorous network verification, and hardware integration designed to support institutional continuity.',
    approachAr: 'تعمل فرقنا الفنية الميدانية على تجهيز وتثبيت البنية التحتية واختبار الشبكات بدقة لضمان استمرارية وكفاءة العمليات المؤسسية.',
    documentedExperience: {
      organization: 'Al Gharbia Hospitals',
      organizationAr: 'مستشفيات الغربية',
      scope: 'Supply of IT Items & Infrastructure',
      scopeAr: 'توريد مستلزمات وتجهيزات تقنية المعلومات والبنية التحتية',
      location: 'Al Dhafra / Western Region, UAE',
      locationAr: 'منطقة الظفرة / المنطقة الغربية، الإمارات'
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
    description: 'Physical and digital security installations including biometric access control, CCTV video surveillance, and cybersecurity protection.',
    descriptionAr: 'تركيب وتكامل أنظمة الأمان المادي والرقمي بما في ذلك التحكم بالدخول، وكاميرات المراقبة التلفزيونية، وحلول الأمن الرقمي.',
    overview: 'LandCom provides integrated physical and digital security solutions designed to safeguard corporate facilities, data assets, and operational environments. From surveillance installations to access checkpoints, we establish cohesive security measures.',
    overviewAr: 'تقدم لاند كوم حلولاً أمنية متكاملة تشمل الأمان المادي والرقمي لحماية المنشآت والمرافق المؤسسية وبيانات الأعمال، عبر كاميرات المراقبة، وبوابات الدخول الذكية، وتأمين البيئة الرقمية.',
    icon: 'ShieldCheck',
    features: [
      'Access control systems and biometric checkpoints',
      'CCTV video surveillance setups',
      'Cybersecurity and network defense configurations',
      'Security systems integration and maintenance'
    ],
    featuresAr: [
      'أنظمة التحكم بالدخول والبوابات البيومترية الذكية',
      'أنظمة ودوائر المراقبة التلفزيونية (CCTV)',
      'تهيئة أنظمة الحماية الرقمية وأمن الشبكات',
      'تركيب وتكامل الأنظمة الأمنية وأعمال الصيانة'
    ],
    approach: 'We plan and install security infrastructure following thorough site assessments, ensuring optimal coverage, reliable recording, and controlled physical access.',
    approachAr: 'نقوم بتخطيط وتركيب الأنظمة الأمنية بعد دراسة تفصيلية للموقع لضمان التغطية المثلى، وجودة التسجيل، والتحكم المنضبط في نقاط الدخول.',
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
    description: 'GPS-enabled tracking solutions and vehicle fleet management systems providing real-time location monitoring and asset visibility.',
    descriptionAr: 'حلول التتبع المعتمدة على نظام تحديد المواقع العالمي (GPS) وإدارة أساطيل المركبات لمتابعة المواقع والأصول اللوجستية بدقة.',
    overview: 'LandCom implements GPS-based tracking systems that enable organizations to monitor vehicle fleets, transport assets, and logistical operations in real time. We combine tracking hardware with intuitive monitoring interfaces for reliable oversight.',
    overviewAr: 'توفر لاند كوم أنظمة تتبع متقدمة عبر نظام (GPS) تتيح للمؤسسات متابعة أساطيل السيارات والأصول المنقولة في الوقت الفعلي، مع توفير واجهات مراقبة وتقارير تشغيلية دقيقة.',
    icon: 'Navigation',
    features: [
      'GPS fleet tracking systems',
      'Real-time vehicle and mobile asset monitoring',
      'Route tracking and operational reporting',
      'Tracking hardware installation and setup'
    ],
    featuresAr: [
      'أنظمة تتبع أساطيل المركبات عبر GPS',
      'مراقبة فورية للمركبات والأصول المتنقلة',
      'تسجيل المسارات والتقارير التشغيلية اليومية',
      'تركيب وضبط أجهزة التتبع والبرمجيات المرتبطة'
    ],
    approach: 'We configure tracking solutions tailored to operational fleets, ensuring continuous telemetry, stable connectivity, and actionable location data.',
    approachAr: 'نقوم بتهيئة وتثبيت أجهزة التتبع لتلائم متطلبات الأساطيل التشغيلية، مع ضمان استقرار الاتصال ودقة بيانات الموقع والتقارير.',
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
    description: 'Radio-frequency identification implementations for automated inventory tracking, asset management, and identification systems.',
    descriptionAr: 'تطبيق أنظمة تحديد الهوية بموجات الراديو (RFID) لتتبع المخزون بدقة وأتمتة إدارة الأصول والتعريف التلقائي.',
    overview: 'LandCom deploys Radio-Frequency Identification (RFID) systems designed to automate stock taking, asset auditing, and physical item identification. We integrate RFID tags, readers, and management systems to eliminate manual tracking bottlenecks.',
    overviewAr: 'تقدم لاند كوم أنظمة تحديد الهوية بموجات الراديو (RFID) لأتمتة عمليات جرد المخزون، وتتبع الأصول الثابتة والمنقولة، والتعريف الآلي بالأصناف لتوفير الوقت والدقة في المتابعة.',
    icon: 'Radio',
    features: [
      'RFID asset and inventory tracking implementations',
      'RFID tag and reader hardware integration',
      'Stock control and identification automation',
      'System integration with organizational databases'
    ],
    featuresAr: [
      'تطبيق حلول RFID لتتبع المخزون والأصول المؤسسية',
      'تكامل الشرائح والملصقات وأجهزة القراءة الإلكترونية',
      'أتمتة جرد الأصناف والتعريف التلقائي بالمواد',
      'الربط مع قواعد البيانات والأنظمة الإدارية'
    ],
    approach: 'Our specialists evaluate physical facility layouts and item handling procedures to deploy the appropriate RFID tags and readers for high-accuracy reading.',
    approachAr: 'يقوم خبراؤنا بدراسة بيئة العمل وطبيعة المواد والأصول لاختيار وتثبيت القارئات والشرائح المناسبة لتحقيق أعلى درجات دقة القراءة.',
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
    description: 'Custom corporate websites, organizational web portals, and digital commerce platforms built for business operations.',
    descriptionAr: 'تصميم وتطوير المواقع المؤسسية المخصصة، والبوابات الرقمية، ومنصات التجارة الإلكترونية لخدمة العمليات التجارية.',
    overview: 'LandCom creates bespoke corporate web portals, institutional websites, and digital commerce systems. We focus on structured information architecture, responsive user interfaces, and dependable back-end functionality.',
    overviewAr: 'تطور لاند كوم بوابات الويب المؤسسية، والمواقع التفاعلية، ومنظومات التجارة الرقمية، مع التركيز على تنظيم المحتوى، وسرعة التصفح، والتكامل التقني المتين.',
    icon: 'Globe',
    features: [
      'Custom website design and development',
      'Corporate portals and content systems',
      'Digital commerce platforms and storefronts',
      'Web application maintenance and support'
    ],
    featuresAr: [
      'تصميم وتطوير المواقع المؤسسية المخصصة',
      'تطوير البوابات الرقمية وأنظمة إدارة المحتوى',
      'منصات التجارة الرقمية والخدمات التفاعلية',
      'الصيانة والدعم الفني المستمر لتطبيقات الويب'
    ],
    approach: 'We structure web interfaces around clarity, cross-device responsiveness, and seamless organizational branding.',
    approachAr: 'نحرص على بناء واجهات ويب واضحة ومتجاوبة مع مختلف الأجهزة والشاشات بما يعزز الحضور المؤسسي ويخدم العمليات بكفاءة.',
    documentedExperience: {
      organization: 'IL Forno Restaurant Group',
      organizationAr: 'مجموعة مطاعم إل فورنو',
      scope: 'Web Development & E-Commerce',
      scopeAr: 'تطوير الموقع الإلكتروني ومنصة التجارة الرقمية',
      location: 'UAE',
      locationAr: 'الإمارات'
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
    description: 'End-to-end IT operations management, technical resourcing, and helpdesk support services for organizations.',
    descriptionAr: 'إدارة شاملة لعمليات تقنية المعلومات، وتوفير الكوادر الفنية المتخصصة، وخدمات الدعم الفني ومكاتب المساعدة.',
    overview: 'LandCom delivers complete IT managed services, providing organizations with skilled technical personnel, dedicated helpdesk support, and ongoing IT operational management. We have a verified track record deploying up to 32+ IT personnel on major national projects.',
    overviewAr: 'تقدم لاند كوم خدمات تقنية المعلومات المدارة بالكامل، بما يشمل تزويد المؤسسات بالكوادر الفنية المتخصصة، ودعم مكاتب المساعدة، وإدارة العمليات التقنية اليومية، مع سجل موثق في نشر أكثر من 32 كادراً تقنياً في مشاريع وطنية كبرى.',
    icon: 'Headset',
    features: [
      'End-to-end IT operations management',
      'Dedicated technical staffing and project resourcing',
      'Helpdesk and operational technical support',
      'Ongoing systems support and maintenance'
    ],
    featuresAr: [
      'إدارة شاملة ومستمرة لعمليات تقنية المعلومات',
      'توفير الكوادر والفرق الفنية المتخصصة للمشاريع (32+ كادراً)',
      'دعم مكاتب المساعدة الفنية للمستخدمين',
      'أعمال الدعم الفني والصيانة المستمرة للأنظمة'
    ],
    approach: 'We assign dedicated, qualified IT professionals to oversee organizational systems, resolve daily technical inquiries, and ensure continuous operational readiness.',
    approachAr: 'نوفر كفاءات وكوادر تقنية مؤهلة للإشراف على الأنظمة ومتابعة متطلبات الدعم الفني اليومي وضمان استمرارية وكفاءة البيئة التشغيلية.',
    documentedExperience: {
      organization: 'Khalifa Bin Zayed Al Nahyan Foundation',
      organizationAr: 'مؤسسة خليفة بن زايد آل نهيان للأعمال الإنسانية',
      scope: 'IT Managed Services (32 staff) & Food Distribution System UAE-wide',
      scopeAr: 'خدمات تقنية المعلومات المدارة (فريق من 32 كادراً) ونظام توزيع المواد الغذائية على مستوى الدولة',
      location: 'UAE',
      locationAr: 'الإمارات'
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
    scopeAr: 'الدعم الفني وتوفير الكوادر التقنية المتخصصة',
    location: 'UAE',
    locationAr: 'دولة الإمارات',
    relatedServiceSlug: 'it-resources-networking',
    relatedServiceName: 'IT Resources & Networking',
    relatedServiceNameAr: 'موارد تقنية المعلومات والشبكات'
  },
  {
    id: 'exp-kf',
    organization: 'Khalifa Bin Zayed Al Nahyan Foundation',
    organizationAr: 'مؤسسة خليفة بن زايد آل نهيان للأعمال الإنسانية',
    scope: 'IT Managed Services (32 staff) & Food Distribution System UAE-wide',
    scopeAr: 'خدمات تقنية المعلومات المدارة (فريق من 32 كادراً) ونظام توزيع المواد الغذائية على مستوى الدولة',
    location: 'UAE',
    locationAr: 'دولة الإمارات',
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
    location: 'Al Ain, UAE',
    locationAr: 'العين، أبوظبي',
    relatedServiceSlug: 'mobility-solutions',
    relatedServiceName: 'Mobility Solutions',
    relatedServiceNameAr: 'حلول الأجهزة والتطبيقات الذكية'
  },
  {
    id: 'exp-algharbia',
    organization: 'Al Gharbia Hospitals',
    organizationAr: 'مستشفيات الغربية',
    scope: 'Supply of IT Items & Infrastructure',
    scopeAr: 'توريد مستلزمات وتجهيزات تقنية المعلومات والبنية التحتية',
    location: 'Al Dhafra / Western Region, UAE',
    locationAr: 'منطقة الظفرة / المنطقة الغربية',
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
    location: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
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
    location: 'UAE',
    locationAr: 'دولة الإمارات',
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

