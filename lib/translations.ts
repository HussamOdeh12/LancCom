export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Translations {
  topbar: {
    location: string;
    phone: string;
    email: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    experience: string;
    credentials: string;
    contact: string;
    contactCta: string;
    searchPlaceholder: string;
    searchAria: string;
    tagline: string;
  };
  hero: {
    locationBadge: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    description: string;
    exploreServices: string;
    contactUs: string;
    stats: {
      established: string;
      establishedLabel: string;
      ownership: string;
      ownershipLabel: string;
      experience: string;
      experienceLabel: string;
      staff: string;
      staffLabel: string;
    };
  };
  credentials: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    licenseDetails: string;
    licenceNo: string;
    unifiedRegNo: string;
    unifiedLicNo: string;
    membershipNo: string;
    legalForm: string;
    issueDate: string;
    expiryDate: string;
    activitiesTitle: string;
    activitiesDesc: string;
  };
  aboutSection: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    paragraph1: string;
    paragraph2: string;
    readMore: string;
    points: {
      consultants: string;
      experience: string;
      presence: string;
    };
  };
  aboutPage: {
    title: string;
    subtitle: string;
    overviewTitle: string;
    overviewText1: string;
    overviewText2: string;
    strategicTitle: string;
    strategicText: string;
    ownershipTitle: string;
    ownershipText: string;
  };
  services: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    viewService: string;
    allServices: string;
    scopeTitle: string;
  };
  whyLandcom: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  experience: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    supportedOrganizations: string;
    organization: string;
    scopeOfWork: string;
    location: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    hqTitle: string;
    address: string;
    addressVal: string;
    telephone: string;
    fax: string;
    email: string;
    poBox: string;
    poBoxVal: string;
    formTitle: string;
    formDesc: string;
    fullName: string;
    emailAddress: string;
    phoneNum: string;
    organization: string;
    selectedService: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    licenceNotice: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  common: {
    language: string;
    arabic: string;
    english: string;
    close: string;
    search: string;
    viewDetails: string;
    getInTouch: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    topbar: {
      location: 'Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38',
      phone: '+971 2 884 8213',
      email: 'Info@landcom.ae',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      experience: 'Experience',
      credentials: 'Credentials',
      contact: 'Contact',
      contactCta: 'Contact Us',
      searchPlaceholder: 'Search services, credentials, or experience...',
      searchAria: 'Search dialog',
      tagline: 'Information Technology Solutions Provider',
    },
    hero: {
      locationBadge: 'Abu Dhabi, UAE • Established 2007',
      headlinePart1: 'Information Technology',
      headlineAccent: 'Solutions Provider',
      headlinePart2: 'in Abu Dhabi',
      description: 'Developing and implementing business solutions in Abu Dhabi since 2007. Operating as strategic consultants who understand client needs and deliver integrated IT solutions.',
      exploreServices: 'Explore Services',
      contactUs: 'Discuss Your Requirements',
      stats: {
        established: '2007',
        establishedLabel: 'Established in Abu Dhabi',
        ownership: '100%',
        ownershipLabel: 'UAE Nationally Owned',
        experience: '19+ Years',
        experienceLabel: 'Complex Solutions Experience',
        staff: '32+',
        staffLabel: 'IT Staff Deployed in Key Projects',
      },
    },
    credentials: {
      sectionTag: 'Official Credentials',
      sectionTitle: 'Licensing & Corporate Information',
      sectionDesc: 'Officially registered establishment licensed under the Abu Dhabi Department of Economic Development.',
      licenseDetails: 'Abu Dhabi Economic Licence Details',
      licenceNo: 'Licence No.',
      unifiedRegNo: 'Unified Registration No.',
      unifiedLicNo: 'Unified Licence No.',
      membershipNo: 'ADCCI Membership',
      legalForm: 'Legal Form',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      activitiesTitle: 'Six Licensed Economic Activities',
      activitiesDesc: 'Authorized commercial and technical activities in Abu Dhabi:',
    },
    aboutSection: {
      sectionTag: 'About LandCom',
      sectionTitle: 'Strategic Consultants & Solution Providers',
      sectionDesc: 'Land.com Solution Provider has been developing and implementing complex business solutions in Abu Dhabi since 2007.',
      paragraph1: 'We operate as strategic consultants who understand client needs and deliver integrated solutions across enterprise applications, hardware, mobility, security, and managed services.',
      paragraph2: 'Headquartered on Muroor Road on Abu Dhabi Island, LandCom is a 100% UAE-owned establishment managed by UAE nationals with over 19 years of continuous operational heritage.',
      readMore: 'Read Full Profile',
      points: {
        consultants: 'Strategic IT consultancy and integrated implementations',
        experience: '19+ years experience delivering for government and enterprise clients',
        presence: 'Permanent Abu Dhabi Island presence with top UAE national management',
      },
    },
    aboutPage: {
      title: 'About LandCom Information Technology',
      subtitle: 'Solutions Provider in Abu Dhabi since 2007',
      overviewTitle: 'Corporate Profile',
      overviewText1: 'Land.com Solution Provider has been developing and implementing complex business solutions in Abu Dhabi since 2007. Operating as strategic consultants who understand client needs and deliver integrated solutions.',
      overviewText2: 'With over 19 years of dedicated experience, LandCom provides organizations with end-to-end technical capabilities spanning enterprise software, mobility, tracking, RFID, networking, and managed IT services.',
      strategicTitle: 'Strategic Consultation Model',
      strategicText: 'Rather than offering generic off-the-shelf packages, LandCom acts as an integrated strategic partner, analyzing specific operational challenges and deploying tailored technology solutions that meet institutional standards.',
      ownershipTitle: '100% UAE Ownership',
      ownershipText: 'LandCom is a 100% UAE-owned establishment with top management led by UAE nationals, dedicated to supporting national entities and commercial enterprises throughout the United Arab Emirates.',
    },
    services: {
      sectionTag: 'Our Capabilities',
      sectionTitle: 'Eight Core Services & Solutions',
      sectionDesc: 'Comprehensive, structured IT services and technology solutions documented in LandCom’s official portfolio.',
      viewService: 'View Service Details',
      allServices: 'All Services',
      scopeTitle: 'Core Scope & Capabilities',
    },
    whyLandcom: {
      sectionTag: 'Why LandCom',
      sectionTitle: 'Built on Experience & Local Presence',
      sectionDesc: 'Key reasons why leading government foundations, municipal authorities, and businesses rely on LandCom.',
    },
    experience: {
      sectionTag: 'Selected Experience',
      sectionTitle: 'Organizations We’ve Supported',
      sectionDesc: 'Documented organizational experience delivering IT solutions, infrastructure, applications, and managed staffing.',
      supportedOrganizations: 'Documented Clients & Scope',
      organization: 'Organization',
      scopeOfWork: 'Delivered Scope of Work',
      location: 'Location',
    },
    contact: {
      sectionTag: 'Get in Touch',
      sectionTitle: 'Contact Our Abu Dhabi Office',
      sectionDesc: 'Reach out to our team to discuss your project requirements or inquire about our services.',
      hqTitle: 'Headquarters & Official Information',
      address: 'Office Address',
      addressVal: 'Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, Abu Dhabi, UAE',
      telephone: 'Telephone',
      fax: 'Fax',
      email: 'Email',
      poBox: 'P.O. Box',
      poBoxVal: '58571, Abu Dhabi, UAE',
      formTitle: 'Send an Inquiry',
      formDesc: 'Submit your requirements and our team will get in touch with you.',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      phoneNum: 'Phone Number',
      organization: 'Organization / Company',
      selectedService: 'Relevant Service',
      message: 'Message / Project Details',
      messagePlaceholder: 'Please describe your requirements...',
      submit: 'Submit Message',
      submitting: 'Submitting...',
      successTitle: 'Thank you for contacting LandCom',
      successDesc: 'Your inquiry has been received. Our team will review your message and contact you promptly.',
    },
    footer: {
      description: 'LAND.COM Information Technology Solutions Provider. Developing and implementing business solutions in Abu Dhabi since 2007.',
      quickLinks: 'Navigation',
      servicesTitle: 'Eight Core Services',
      contactTitle: 'Official Contact',
      licenceNotice: 'Abu Dhabi Economic Licence No. CN-1006129 • Establishment',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    common: {
      language: 'Language',
      arabic: 'العربية',
      english: 'English',
      close: 'Close',
      search: 'Search',
      viewDetails: 'View Details',
      getInTouch: 'Get in Touch',
    },
  },
  ar: {
    topbar: {
      location: 'جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38',
      phone: '+971 2 884 8213',
      email: 'Info@landcom.ae',
    },
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'الخدمات',
      experience: 'الخبرات',
      credentials: 'البيانات الرسمية',
      contact: 'اتصل بنا',
      contactCta: 'تواصل معنا',
      searchPlaceholder: 'ابحث في الخدمات، والبيانات الرسمية، والخبرات...',
      searchAria: 'نافذة البحث',
      tagline: 'مزود حلول تقنية المعلومات',
    },
    hero: {
      locationBadge: 'أبوظبي، الإمارات • تأسست عام 2007',
      headlinePart1: 'مزود حلول',
      headlineAccent: 'تقنية المعلومات',
      headlinePart2: 'في أبوظبي',
      description: 'تطوير وتنفيذ حلول الأعمال المعقدة في أبوظبي منذ عام 2007. نعمل كمستشارين استراتيجيين يفهمون احتياجات العميل ويقدمون حلولاً تقنية متكاملة.',
      exploreServices: 'استعراض الخدمات',
      contactUs: 'ناقش متطلباتك معنا',
      stats: {
        established: '2007',
        establishedLabel: 'تأسست في أبوظبي',
        ownership: '100%',
        ownershipLabel: 'ملكية وطنية إماراتية بالكامل',
        experience: '19+ عاماً',
        experienceLabel: 'خبرة في حلول الأعمال المعقدة',
        staff: '32+',
        staffLabel: 'كادر تقني متخصص تم نشره بالمشاريع',
      },
    },
    credentials: {
      sectionTag: 'البيانات الرسمية',
      sectionTitle: 'الترخيص والمعلومات المؤسسية',
      sectionDesc: 'منشأة رسمية مرخصة من دائرة التنمية الاقتصادية في أبوظبي.',
      licenseDetails: 'بيانات الرخصة الاقتصادية - أبوظبي',
      licenceNo: 'رقم الرخصة',
      unifiedRegNo: 'الرقم الموحد للمنشأة',
      unifiedLicNo: 'رقم الرخصة الموحد',
      membershipNo: 'عضوية غرفة أبوظبي',
      legalForm: 'الشكل القانوني',
      issueDate: 'تاريخ الإصدار',
      expiryDate: 'تاريخ الانتهاء',
      activitiesTitle: 'الأنشطة الاقتصادية الستة المرخصة',
      activitiesDesc: 'الأنشطة التجارية والتقنية المعتمدة رسمياً في إمارة أبوظبي:',
    },
    aboutSection: {
      sectionTag: 'عن لاند كوم',
      sectionTitle: 'مستشارون استراتيجيون ومزودو حلول متكاملة',
      sectionDesc: 'تعمل لاند كوم في تطوير وتنفيذ حلول الأعمال المعقدة في أبوظبي منذ عام 2007.',
      paragraph1: 'نعمل كمستشارين استراتيجيين يفهمون احتياجات العملاء ويقدمون حلولاً متكاملة تشمل تطبيقات المؤسسات، والعتاد والشبكات، والتطبيقات الذكية، والأنظمة الأمنية، والخدمات المدارة.',
      paragraph2: 'يقع مقرنا الرئيسي في طريق المرور بجزيرة أبوظبي، وهي منشأة وطنية بنسبة 100% بإدارة كفاءات وطنية إماراتية وبسجل يمتد لأكثر من 19 عاماً من الخبرة المتواصلة.',
      readMore: 'الملف المؤسسي الكامل',
      points: {
        consultants: 'استشارات تقنية استراتيجية وتنفيذ حلول مخصصة',
        experience: 'خبرة تمتد لأكثر من 19 عاماً في دعم المؤسسات الحكومية والشركات',
        presence: 'مقر دائم بجزيرة أبوظبي تحت إدارة وطنية إماراتية',
      },
    },
    aboutPage: {
      title: 'عن لاند كوم لتقنية المعلومات',
      subtitle: 'مزود حلول الأعمال والتقنية في أبوظبي منذ 2007',
      overviewTitle: 'الملف المؤسسي',
      overviewText1: 'تعمل شركة لاند كوم كمزود حلول في تطوير وتنفيذ حلول الأعمال المعقدة في أبوظبي منذ عام 2007، بصفتها مستشاراً استراتيجياً يفهم متطلبات العميل ويقدم حلولاً متكاملة.',
      overviewText2: 'مع أكثر من 19 عاماً من الخبرة المتخصصة، توفر لاند كوم قدرات تقنية شاملة تغطي أنظمة إدارة الموارد، وحلول الأجهزة الذكية، والتتبع، وحلول RFID، والشبكات، والخدمات التقنية المدارة.',
      strategicTitle: 'نموذج الاستشارات الاستراتيجية',
      strategicText: 'بدلاً من تقديم حزم جاهزة غير مخصصة، تعمل لاند كوم كشريك استراتيجي يحلل التحديات التشغيلية وينفذ حلولاً تقنية مصممة لتتوافق مع المعايير المؤسسية.',
      ownershipTitle: 'ملكية وطنية 100%',
      ownershipText: 'لاند كوم هي منشأة إماراتية بنسبة 100%، وتقود إدارتها العليا كوادر وطنية إماراتية، مكرسة جهودها لدعم الجهات الحكومية والشركات في دولة الإمارات العربية المتحدة.',
    },
    services: {
      sectionTag: 'إمكانياتنا التقنية',
      sectionTitle: 'الخدمات الثمانية الأساسية',
      sectionDesc: 'خدمات وحلول تقنية شاملة وموثقة رسمياً في الملف التعريفي للشركة.',
      viewService: 'تفاصيل الخدمة',
      allServices: 'كافة الخدمات',
      scopeTitle: 'نطاق العمل والإمكانيات',
    },
    whyLandcom: {
      sectionTag: 'لماذا لاند كوم',
      sectionTitle: 'مرتكزات الخبرة والوجود المحلي',
      sectionDesc: 'أسباب اختيار المؤسسات الحكومية والشركات الرائدة لشركة لاند كوم.',
    },
    experience: {
      sectionTag: 'الخبرات المختارة',
      sectionTitle: 'المؤسسات والجهات التي قدمنا لها الدعم',
      sectionDesc: 'سجل موثق بالجهات والمؤسسات التي تم تقديم حلول تقنية المعلومات والبنية التحتية والكوادر لها.',
      supportedOrganizations: 'الجهات ونطاق العمل الموثق',
      organization: 'الجهة / المؤسسة',
      scopeOfWork: 'نطاق العمل المنفذ',
      location: 'الموقع',
    },
    contact: {
      sectionTag: 'تواصل معنا',
      sectionTitle: 'تواصل مع مكتبنا في أبوظبي',
      sectionDesc: 'تواصل مع فريقنا لمناقشة متطلبات مشروعكم أو الاستفسار عن خدماتنا.',
      hqTitle: 'المقر الرئيسي والبيانات الرسمية',
      address: 'عنوان المكتب',
      addressVal: 'جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38، أبوظبي، الإمارات',
      telephone: 'الهاتف',
      fax: 'الفاكس',
      email: 'البريد الإلكتروني',
      poBox: 'صندوق البريد',
      poBoxVal: '58571، أبوظبي، الإمارات',
      formTitle: 'إرسال استفسار',
      formDesc: 'يرجى تزويدنا بمتطلباتكم وسيقوم فريقنا بالتواصل معكم.',
      fullName: 'الاسم الكامل',
      emailAddress: 'البريد الإلكتروني',
      phoneNum: 'رقم الهاتف',
      organization: 'المؤسسة / الشركة',
      selectedService: 'الخدمة المطلوبة',
      message: 'الرسالة / تفاصيل المتطلبات',
      messagePlaceholder: 'يرجى كتابة تفاصيل متطلباتكم...',
      submit: 'إرسال الرسالة',
      submitting: 'جاري الإرسال...',
      successTitle: 'شكراً لتواصلكم مع لاند كوم',
      successDesc: 'تم استلام استفساركم بنجاح. سيقوم فريقنا بمراجعة الرسالة والتواصل معكم في أقرب وقت.',
    },
    footer: {
      description: 'مزود حلول تقنية المعلومات لاند كوم. تطوير وتنفيذ حلول الأعمال في أبوظبي منذ عام 2007.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'الخدمات الثمانية الأساسية',
      contactTitle: 'بيانات الاتصال الرسمية',
      licenceNotice: 'رخصة أبوظبي الاقتصادية رقم CN-1006129 • منشأة فردية',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
    common: {
      language: 'اللغة',
      arabic: 'العربية',
      english: 'English',
      close: 'إغلاق',
      search: 'بحث',
      viewDetails: 'عرض التفاصيل',
      getInTouch: 'تواصل معنا',
    },
  },
};
