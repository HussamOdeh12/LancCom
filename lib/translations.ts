export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Translations {
  topbar: {
    location: string;
    hours: string;
    supportNoc: string;
    callUs: string;
    emailUs: string;
  };
  nav: {
    home: string;
    services: string;
    architectures: string;
    industries: string;
    caseStudies: string;
    estimator: string;
    contact: string;
    requestConsultation: string;
    searchPlaceholder: string;
    searchAria: string;
    tagline: string;
    nesaSiraBadge: string;
    requestCustomBoq: string;
  };
  hero: {
    accreditationPill: string;
    alignedBadge: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    description: string;
    requestProposal: string;
    estimatorBtn: string;
    telemetryTitle: string;
    telemetrySubtitle: string;
    tabs: {
      network: string;
      security: string;
      cloud: string;
    };
    metrics: {
      sdwanLatency: string;
      packetLoss: string;
      zeroTrustStatus: string;
      threatsBlocked: string;
      cloudRto: string;
      cloudRpo: string;
      uptimeSla: string;
      liveStatus: string;
    };
    trustBadges: {
      abuDhabiWarehousing: string;
      certifiedEngineers: string;
      rapidDispatch: string;
      isoCertified: string;
    };
  };
  services: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    exploreBlueprint: string;
    requestBoq: string;
    deliverables: string;
    oemVendors: string;
    slaResponse: string;
    complianceTag: string;
  };
  architectures: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    edgeLayer: string;
    computeLayer: string;
    storageLayer: string;
    securityLayer: string;
    complianceLayer: string;
    viewSpecs: string;
  };
  whyUs: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  industries: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  estimator: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    step1: string;
    step2: string;
    step3: string;
    usersCount: string;
    industryLabel: string;
    selectComponents: string;
    estimatedSummary: string;
    turnaroundTime: string;
    requestFormalProposal: string;
  };
  caseStudies: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    readCaseStudy: string;
    metricsAchieved: string;
  };
  partners: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    allAlliances: string;
  };
  testimonials: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    auditedAndCertified: string;
  };
  faq: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  consultation: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    hqTitle: string;
    hqSubtitle: string;
    physicalLocation: string;
    directTelephone: string;
    tendersRfp: string;
    operatingHours: string;
    criticalDispatch: string;
    activeStatus: string;
    formTitle: string;
    confidentialNda: string;
    fullName: string;
    corporateEmail: string;
    mobileNumber: string;
    organization: string;
    targetSolution: string;
    expectedTimeline: string;
    projectDetails: string;
    projectDetailsPlaceholder: string;
    ndaCheckbox: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    refCode: string;
    responseWindow: string;
    assignedTeam: string;
    submitAnother: string;
  };
  footer: {
    companyDesc: string;
    headquarters: string;
    quickLinks: string;
    solutionPillars: string;
    legalCompliance: string;
    isoStandards: string;
    emergencyNoc: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
    securityStandards: string;
  };
  common: {
    language: string;
    arabic: string;
    english: string;
    switchLanguage: string;
    learnMore: string;
    close: string;
    search: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    topbar: {
      location: 'Abu Dhabi, United Arab Emirates',
      hours: 'Mon-Fri: 8:00 AM – 5:30 PM (GST)',
      supportNoc: '24/7 Enterprise NOC Active',
      callUs: '+971 2 674 8890',
      emailUs: 'info@landcom.ae',
    },
    nav: {
      home: 'Home',
      services: 'Services & Solutions',
      architectures: 'Architectures',
      industries: 'Industries',
      caseStudies: 'Case Studies',
      estimator: 'Scope Estimator',
      contact: 'Contact',
      requestConsultation: 'Request Consultation',
      searchPlaceholder: 'Search enterprise services, specs, and architectures...',
      searchAria: 'Open Search Modal',
      tagline: 'Abu Dhabi Enterprise Systems Integrator',
      nesaSiraBadge: 'NESA & SIRA/MCC Certified Implementations',
      requestCustomBoq: 'Request Custom BOQ',
    },
    hero: {
      accreditationPill: 'Abu Dhabi, UAE • Enterprise Systems Integrator',
      alignedBadge: 'NESA & SIRA/MCC Aligned',
      headlinePart1: 'Architecting',
      headlineAccent: 'Resilient IT Infrastructure',
      headlinePart2: '& Advanced Systems for UAE Enterprises',
      description: 'From hyperconverged data centers and zero-trust cybersecurity to structured cabling (ELV) and 24/7 managed NOC operations — we engineer mission-critical digital systems for government, energy, and corporate leaders across the UAE.',
      requestProposal: 'Request Technical Proposal',
      estimatorBtn: 'Scope Estimator Tool',
      telemetryTitle: 'Enterprise Telemetry & Operations Center',
      telemetrySubtitle: 'Live Abu Dhabi Core Node Telemetry',
      tabs: {
        network: 'SD-WAN Core',
        security: 'Zero-Trust SOC',
        cloud: 'Hybrid Sovereign',
      },
      metrics: {
        sdwanLatency: 'Core Latency',
        packetLoss: 'Packet Loss',
        zeroTrustStatus: 'Defense Posture',
        threatsBlocked: 'Threats Blocked / 24h',
        cloudRto: 'Failover RTO',
        cloudRpo: 'Target RPO',
        uptimeSla: 'SLA Availability',
        liveStatus: 'Active & Monitored',
      },
      trustBadges: {
        abuDhabiWarehousing: 'Abu Dhabi Warehousing & Spares Depot',
        certifiedEngineers: '100% Certified On-Site Engineers',
        rapidDispatch: '< 2-Hour Critical Dispatch SLA',
        isoCertified: 'ISO 9001 & ISO 27001 Certified',
      },
    },
    services: {
      sectionTag: 'Core Systems Integration Capabilities',
      sectionTitle: 'Turnkey Enterprise IT Solutions & Infrastructure',
      sectionDesc: 'Engineered for maximum resilience, sovereign compliance, and strict UAE regulatory standards.',
      exploreBlueprint: 'Explore Technical Blueprint',
      requestBoq: 'Request BOQ & Scope',
      deliverables: 'Key Deliverables & Specifications',
      oemVendors: 'Certified Technology Alliances',
      slaResponse: 'Guaranteed On-Site SLA',
      complianceTag: 'Compliance Standards',
    },
    architectures: {
      sectionTag: 'Interactive Reference Architectures',
      sectionTitle: 'Enterprise IT Topology & Defense Blueprints',
      sectionDesc: 'Explore how LandCom designs zero-trust security layers, multi-cloud redundancy, and low-voltage structured cabling grids for UAE facilities.',
      edgeLayer: 'Perimeter & Edge SD-WAN',
      computeLayer: 'HCI Compute & Virtualization',
      storageLayer: 'All-Flash SAN & Immutable Backup',
      securityLayer: 'Zero-Trust & SIEM / SOC Defense',
      complianceLayer: 'UAE Regulatory & Sovereign Governance',
      viewSpecs: 'View Layer Architecture Specs',
    },
    whyUs: {
      sectionTag: 'Strategic Advantage',
      sectionTitle: 'Why UAE Enterprises & Government Entities Rely on LandCom',
      sectionDesc: 'Combining local Abu Dhabi technical mastery with world-class OEM partnerships to eliminate downtime and project delays.',
    },
    industries: {
      sectionTag: 'Sector Solutions',
      sectionTitle: 'Tailored Architectures for Strategic UAE Industries',
      sectionDesc: 'Custom-engineered IT infrastructure adhering to industry-specific regulatory mandates across the Emirates.',
    },
    estimator: {
      sectionTag: 'Instant Architecture & Cost Scoping',
      sectionTitle: 'Interactive Project Scope & BOQ Estimator',
      sectionDesc: 'Configure your enterprise footprint to receive recommended architectural stacks, BOQ frameworks, and deployment timelines.',
      step1: '1. Select Organization Scale & Users',
      step2: '2. Choose Strategic Industry Focus',
      step3: '3. Select Infrastructure Modules',
      usersCount: 'Concurrent Enterprise Users',
      industryLabel: 'Industry Regulatory Framework',
      selectComponents: 'Required Technology Stacks',
      estimatedSummary: 'Estimated Solution Architecture Summary',
      turnaroundTime: 'Estimated Turnaround',
      requestFormalProposal: 'Generate & Submit Formal BOQ Request',
    },
    caseStudies: {
      sectionTag: 'Verified UAE Deliveries',
      sectionTitle: 'Enterprise Deployments & Modernization Projects',
      sectionDesc: 'Real-world case studies showcasing mission-critical infrastructure deployed across Abu Dhabi and UAE.',
      readCaseStudy: 'Explore Architecture Case Study',
      metricsAchieved: 'Key Verified Outcomes',
    },
    partners: {
      sectionTag: 'Global OEM Technology Alliances',
      sectionTitle: 'Direct Tier-1 Partnerships & OEM Certifications',
      sectionDesc: 'We partner directly with leading global hardware and cybersecurity leaders to guarantee genuine manufacturer warranties, rapid parts replacement, and direct engineering escalation.',
      allAlliances: 'All Technology Alliances',
    },
    testimonials: {
      sectionTag: 'Compliance & Verified Trust',
      sectionTitle: 'Certified Quality & Proven UAE Client Satisfaction',
      sectionDesc: 'Delivering according to audited global quality standards and strict UAE regulatory frameworks.',
      auditedAndCertified: 'Audited & Certified',
    },
    faq: {
      sectionTag: 'Frequently Asked Questions',
      sectionTitle: 'Enterprise Solutions & UAE Delivery FAQs',
      sectionDesc: 'Key insights into our Abu Dhabi operations, compliance standards, and service level agreements.',
    },
    consultation: {
      sectionTag: 'Direct Enterprise Engagement',
      sectionTitle: 'Consult with Our Abu Dhabi Technical Advisory Team',
      sectionDesc: 'Whether preparing a government tender, planning a data center migration, or requesting an on-site ELV audit, our certified engineers are ready to assist.',
      hqTitle: 'Abu Dhabi Headquarters',
      hqSubtitle: 'Official UAE IT Systems Integrator',
      physicalLocation: 'Physical Location',
      directTelephone: 'Direct Telephone',
      tendersRfp: 'Tenders & RFPs',
      operatingHours: 'Operating Hours',
      criticalDispatch: '24/7 Critical NOC Dispatch',
      activeStatus: 'Active',
      formTitle: 'Submit Technical RFP or Project Scope',
      confidentialNda: 'Confidential UAE NDA Protected',
      fullName: 'Full Name',
      corporateEmail: 'Corporate Email',
      mobileNumber: 'Mobile Number (UAE)',
      organization: 'Organization / Entity',
      targetSolution: 'Target Solution Domain',
      expectedTimeline: 'Expected Timeline',
      projectDetails: 'Project Scope Details / Requirements',
      projectDetailsPlaceholder: 'Describe facility size, user count, required hardware brands (e.g. Cisco/Dell/Fortinet), or specific compliance requirements (NESA/SIRA)...',
      ndaCheckbox: 'Request bilateral mutual Non-Disclosure Agreement (NDA)',
      submitBtn: 'Submit Technical RFP',
      submittingBtn: 'Transmitting RFP...',
      successTitle: 'Consultation Request Confirmed',
      successDesc: 'Your technical brief has been logged in our Abu Dhabi engineering dispatch queue.',
      refCode: 'Reference',
      responseWindow: 'Response Window: Guaranteed < 2 Business Hours',
      assignedTeam: 'Assigned Team: Abu Dhabi Solution Architecture Division',
      submitAnother: 'Submit Another Inquiry',
    },
    footer: {
      companyDesc: 'Abu Dhabi’s premier enterprise IT solutions provider and systems integrator. Designing, building, securing, and maintaining mission-critical digital infrastructure for government, financial, healthcare, energy, and corporate clients across the UAE.',
      headquarters: 'Abu Dhabi Headquarters',
      quickLinks: 'Quick Navigation',
      solutionPillars: 'Enterprise Solutions',
      legalCompliance: 'Compliance & Accreditations',
      isoStandards: 'ISO 9001:2015 & ISO/IEC 27001:2022 Certified',
      emergencyNoc: '24/7 Critical Response NOC Hotline: +971 50 891 2340',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      securityStandards: 'Sovereign Security Framework',
    },
    common: {
      language: 'Language',
      arabic: 'العربية',
      english: 'English',
      switchLanguage: 'تغيير اللغة إلى العربية',
      learnMore: 'Learn More',
      close: 'Close',
      search: 'Search',
    },
  },
  ar: {
    topbar: {
      location: 'أبوظبي، الإمارات العربية المتحدة',
      hours: 'الإثنين - الجمعة: 8:00 ص – 5:30 م (بتوقيت الخليج)',
      supportNoc: 'مركز عمليات الشبكة (NOC) يعمل على مدار الساعة 24/7',
      callUs: '+971 2 674 8890',
      emailUs: 'info@landcom.ae',
    },
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات والحلول',
      architectures: 'الهندسة المعمارية',
      industries: 'القطاعات الاستراتيجية',
      caseStudies: 'دراسات الحالة',
      estimator: 'حاسبة النطاق وتكلفة المشاريع',
      contact: 'اتصل بنا',
      requestConsultation: 'طلب استشارة هندسية',
      searchPlaceholder: 'ابحث في حلول تقنية المعلومات، المواصفات والأنظمة...',
      searchAria: 'فتح نافذة البحث',
      tagline: 'مزود حلول وتكامل أنظمة تكنولوجيا المعلومات في أبوظبي',
      nesaSiraBadge: 'حلول معتمدة ومطابقة لمعايير NESA و SIRA/MCC',
      requestCustomBoq: 'طلب جدول كميات مخصص (BOQ)',
    },
    hero: {
      accreditationPill: 'أبوظبي، الإمارات • تكامل الأنظمة المؤسسية',
      alignedBadge: 'مطابق لمعايير NESA و SIRA/MCC',
      headlinePart1: 'تصميم وبناء',
      headlineAccent: 'بنية تحتية رقمية فائقة المرونة',
      headlinePart2: 'وأنظمة متقدمة لمؤسسات دولة الإمارات',
      description: 'من مراكز البيانات فائقة التقارب والأمن السيبراني بنموذج الثقة الصفرية إلى أنظمة التيار الخفيف (ELV) وشبكات الألياف وعمليات الدعم الفني على مدار الساعة 24/7 — نهندس حلولاً تقنية حيوية للجهات الحكومية وقطاعات الطاقة والأعمال في الإمارات.',
      requestProposal: 'طلب عرض فني وتجاري',
      estimatorBtn: 'أداة تقدير نطاق المشروع',
      telemetryTitle: 'مركز المراقبة والعمليات المؤسسية',
      telemetrySubtitle: 'مؤشرات الأداء المباشرة من مركز شبكة أبوظبي',
      tabs: {
        network: 'شبكة SD-WAN الأساسية',
        security: 'مركز عمليات الأمن (SOC)',
        cloud: 'السحابة الهجينة السيادية',
      },
      metrics: {
        sdwanLatency: 'زمن الاستجابة',
        packetLoss: 'فقدان الحزم',
        zeroTrustStatus: 'حالة الجدار الأمني',
        threatsBlocked: 'التهديدات المحجوبة / 24 س',
        cloudRto: 'زمن التعافي (RTO)',
        cloudRpo: 'نقطة التعافي (RPO)',
        uptimeSla: 'مستوى التوافر (SLA)',
        liveStatus: 'نشط ويخضع للمراقبة',
      },
      trustBadges: {
        abuDhabiWarehousing: 'مستودعات وقطع غيار محلية في أبوظبي',
        certifiedEngineers: 'مهندسون معتمدون 100% في الموقع',
        rapidDispatch: 'استجابة ميدانية طارئة خلال أقل من ساعتين',
        isoCertified: 'معتمد وفقاً لـ ISO 9001 و ISO 27001',
      },
    },
    services: {
      sectionTag: 'قدرات تكامل الأنظمة المتكاملة',
      sectionTitle: 'حلول تكنولوجيا المعلومات المتكاملة والبنية التحتية المؤسسية',
      sectionDesc: 'مصممة لتحقيق أقصى درجات الاستمرارية والامتثال للتشريعات السيادية والمعايير التنظيمية لدولة الإمارات.',
      exploreBlueprint: 'استعراض المخطط المعماري الفني',
      requestBoq: 'طلب جدول الكميات وتفاصيل النطاق',
      deliverables: 'المخرجات والمواصفات الفنية الرئيسية',
      oemVendors: 'الشركاء والتحالفات التكنولوجية المعتمدة',
      slaResponse: 'اتفاقية مستوى الخدمة المضمونة',
      complianceTag: 'المعايير التنظيمية والامتثال',
    },
    architectures: {
      sectionTag: 'المخططات المعمارية التفاعلية',
      sectionTitle: 'هندسة الشبكات والأنظمة الدفاعية المؤسسية',
      sectionDesc: 'اكتشف كيف تصمم لاند كوم طبقات أمان الثقة الصفرية، ومرونة السحابة الهجينة، وتمديدات كابلات التيار الخفيف الذكية للمنشآت في الإمارات.',
      edgeLayer: 'طبقة الحافة ومحيط SD-WAN',
      computeLayer: 'الحوسبة فائقة التقارب (HCI) والبيئات الافتراضية',
      storageLayer: 'مصفوفات التخزين الفلاشية والنسخ الاحتياطي غير القابل للتعديل',
      securityLayer: 'أمن الثقة الصفرية ومراقبة SIEM / SOC',
      complianceLayer: 'الحوكمة السيادية والامتثال لمعايير دولة الإمارات',
      viewSpecs: 'عرض مواصفات الطبقة المعمارية',
    },
    whyUs: {
      sectionTag: 'الميزة الاستراتيجية',
      sectionTitle: 'لماذا تعتمد المؤسسات والجهات الحكومية في الإمارات على لاند كوم',
      sectionDesc: 'نجمع بين الخبرة الهندسية المحلية في أبوظبي وأرقى الشراكات العالمية مع كبرى الشركات المصنعة لضمان استمرارية الأعمال.',
    },
    industries: {
      sectionTag: 'الحلول القطاعية المتخصصة',
      sectionTitle: 'بنى تحتية مخصصة للقطاعات الحيوية في دولة الإمارات',
      sectionDesc: 'تصميم وهندسة بنى تحتية متقدمة تلبي بدقة المتطلبات التشريعية والتنظيمية لكل قطاع في الدولة.',
    },
    estimator: {
      sectionTag: 'التقدير الفوري للتكلفة والنطاق الهندسي',
      sectionTitle: 'حاسبة النطاق وجدول الكميات (BOQ) التفاعلية',
      sectionDesc: 'حدد حجم منشأتك ومتطلباتك للحصول على توصيات معمارية فورية، وجداول كميات تقديرية، وجدول زمني للإنجاز.',
      step1: '1. حدد حجم المنشأة وعدد المستخدمين',
      step2: '2. اختر القطاع التنظيمي المتخصص',
      step3: '3. اختر الحزم والأنظمة المطلوبة',
      usersCount: 'عدد المستخدمين المتزامنين',
      industryLabel: 'الإطار التنظيمي للقطاع',
      selectComponents: 'الأنظمة والتقنيات المطلوبة',
      estimatedSummary: 'ملخص الهيكل المعماري المقترح',
      turnaroundTime: 'المدة المقدرة للتنفيذ',
      requestFormalProposal: 'إرسال واستخراج طلب جدول الكميات الرسمي',
    },
    caseStudies: {
      sectionTag: 'مشاريع منفذة وموثقة في الإمارات',
      sectionTitle: 'إنجازات البنية التحتية ومشاريع التحول الرقمي',
      sectionDesc: 'دراسات حالة واقعية توضح تنفيذ بنى تحتية حيوية لمؤسسات رائدة في أبوظبي ومختلف إمارات الدولة.',
      readCaseStudy: 'عرض دراسة الحالة الهندسية',
      metricsAchieved: 'النتائج المحققة والموثقة',
    },
    partners: {
      sectionTag: 'التحالفات والشراكات التكنولوجية العالمية',
      sectionTitle: 'شراكات المستوى الأول (Tier-1) واعتمادات المصنعين المباشرة',
      sectionDesc: 'شراكات مباشرة مع عمالقة التقنية والأمن السيبراني لضمان الضمانات الأصلية للمصنع، وسرعة توفير قطع الغيار، والتصعيد الهندسي المباشر.',
      allAlliances: 'جميع الشركاء التكنولوجيين',
    },
    testimonials: {
      sectionTag: 'الامتثال والاعتماد الموثوق',
      sectionTitle: 'جودة معتمدة ورضا معتمد من كبرى مؤسسات الإمارات',
      sectionDesc: 'التزام كامل بأرقى معايير الجودة العالمية المدققة واللوائح التنظيمية الإماراتية الصارمة.',
      auditedAndCertified: 'مدقق ومعتمد رسمياً',
    },
    faq: {
      sectionTag: 'الأسئلة الشائعة',
      sectionTitle: 'الأسئلة المتكررة حول الحلول والتنفيذ في أبوظبي',
      sectionDesc: 'إجابات شاملة حول عملياتنا في أبوظبي، ومعايير الامتثال، واتفاقيات مستوى الخدمة (SLA).',
    },
    consultation: {
      sectionTag: 'التواصل المباشر مع خبراء الأنظمة',
      sectionTitle: 'استشر الفريق الهندسي والاستشاري في أبوظبي',
      sectionDesc: 'سواء كنت بصدد إعداد مناقصة حكومية، أو تخطيط نقل مركز بيانات، أو تدقيق أنظمة التيار الخفيف، مهندسونا المعتمدون جاهزون لمساعدتك.',
      hqTitle: 'المقر الرئيسي في أبوظبي',
      hqSubtitle: 'مزود رسمي ومعتمد لحلول وتكامل الأنظمة في الإمارات',
      physicalLocation: 'الموقع الجغرافي',
      directTelephone: 'الهاتف المباشر',
      tendersRfp: 'المناقصات وطلبات العروض (RFP)',
      operatingHours: 'ساعات العمل الرسمية',
      criticalDispatch: 'طوارئ مركز العمليات (NOC) على مدار 24/7',
      activeStatus: 'نشط',
      formTitle: 'تقديم طلب عرض فني أو نطاق مشروع',
      confidentialNda: 'محمي باتفاقية سرية المعلومات (NDA) الإماراتية',
      fullName: 'الاسم الكامل',
      corporateEmail: 'البريد الإلكتروني للعمل',
      mobileNumber: 'رقم الهاتف المتحرك (الإمارات)',
      organization: 'المؤسسة / الجهة',
      targetSolution: 'مجال الحلول المطلوب',
      expectedTimeline: 'الجدول الزمني المتوقع',
      projectDetails: 'تفاصيل ومتطلبات نطاق المشروع',
      projectDetailsPlaceholder: 'وضح مساحة المنشأة، عدد المستخدمين، العلامات التجارية المفضلة (مثل Cisco/Dell/Fortinet)، أو متطلبات امتثال معينة (NESA/SIRA)...',
      ndaCheckbox: 'طلب توقيع اتفاقية عدم إفصاح متبادلة لحفظ السرية (NDA)',
      submitBtn: 'إرسال طلب العرض الفني (RFP)',
      submittingBtn: 'جاري إرسال الطلب...',
      successTitle: 'تم استلام طلب الاستشارة بنجاح',
      successDesc: 'تم تسجيل متطلباتكم الفنية في نظام التوزيع الهندسي في أبوظبي.',
      refCode: 'الرقم المرجعي',
      responseWindow: 'نافذة الرد: مضمونة خلال أقل من ساعتي عمل',
      assignedTeam: 'الفريق المختص: قسم استشارات وتصميم الحلول بأبوظبي',
      submitAnother: 'تقديم استفسار آخر',
    },
    footer: {
      companyDesc: 'المزود الرائد في أبوظبي لحلول وتكامل أنظمة تكنولوجيا المعلومات. نقوم بتصميم وبناء وحماية وصيانة البنى التحتية الرقمية الحيوية للجهات الحكومية والمؤسسات المالية والرعاية الصحية والطاقة في جميع أنحاء الإمارات.',
      headquarters: 'المقر الرئيسي بأبوظبي',
      quickLinks: 'روابط سريعة',
      solutionPillars: 'محاور الحلول المؤسسية',
      legalCompliance: 'الامتثال والاعتمادات',
      isoStandards: 'معتمد وفقاً لـ ISO 9001:2015 و ISO/IEC 27001:2022',
      emergencyNoc: 'الخط الساخن لمركز الاستجابة الطارئة 24/7: +971 50 891 2340',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsConditions: 'الشروط والأحكام',
      securityStandards: 'إطار الأمن السيادي',
    },
    common: {
      language: 'اللغة',
      arabic: 'العربية',
      english: 'English',
      switchLanguage: 'Switch to English',
      learnMore: 'المزيد من التفاصيل',
      close: 'إغلاق',
      search: 'بحث',
    },
  },
};
