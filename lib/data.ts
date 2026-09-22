export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'infrastructure' | 'cybersecurity' | 'cloud' | 'elv' | 'networking' | 'managed';
  features: string[];
  technologies: string[];
  sla: string;
  deliverables: string[];
}

export interface IndustrySolution {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challengesSolved: string[];
  keySolutions: string[];
  compliance: string[];
  impactMetric: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  layers: {
    name: string;
    description: string;
    components: string[];
  }[];
  benefits: string[];
  complianceAlignment: string;
}

export const COMPANY_INFO = {
  name: 'LAND.COM Information Technology Solutions Provider',
  shortName: 'LandCom IT Solutions',
  legalName: 'LandCom Information Technology LLC',
  tagline: 'Empowering UAE Enterprises Through Resilient IT Infrastructure & Advanced Digital Systems',
  domain: 'https://landcom.ae',
  headquarters: {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    address: 'Electra Street, Al Markaziyah, P.O. Box 48291, Abu Dhabi, UAE',
    coords: '24.4924° N, 54.3643° E',
  },
  contact: {
    phone: '+971 2 674 8890',
    mobile: '+971 50 823 4412',
    email: 'info@landcom.ae',
    supportEmail: 'support@landcom.ae',
    salesEmail: 'rfp@landcom.ae',
    hours: 'Monday – Friday: 8:00 AM – 5:30 PM (GST) | 24/7/365 Emergency NOC',
  },
  metrics: [
    { label: 'Years of Excellence in UAE', value: '15+', highlight: 'Proven Delivery' },
    { label: 'Enterprise & Gov Projects', value: '250+', highlight: 'Across UAE' },
    { label: 'Certified IT Engineers', value: '45+', highlight: 'Vendor Certified' },
    { label: 'Network Uptime SLA', value: '99.99%', highlight: 'Guaranteed' },
  ],
  certifications: [
    { title: 'ISO 9001:2015', desc: 'Quality Management Systems' },
    { title: 'ISO 27001:2022', desc: 'Information Security Management' },
    { title: 'NESA & TDRA Compliant', desc: 'UAE Cyber Standards Ready' },
    { title: 'Abu Dhabi SIRA / MCC', desc: 'Certified Security Integrator' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'it-infrastructure',
    title: 'Enterprise IT Infrastructure & Systems',
    shortDesc: 'High-availability servers, hyperconverged infrastructure (HCI), enterprise storage, and business continuity architecture.',
    fullDesc: 'We architect, deploy, and modernize mission-critical computing environments tailored to high-density enterprise workloads, government standards, and multi-tenant virtualization.',
    icon: 'Server',
    category: 'infrastructure',
    features: [
      'Hyperconverged Infrastructure (HCI - Nutanix & VMware vSAN)',
      'Enterprise Tier-1 SAN/NAS Storage Arrays & Flash Arrays',
      'High-Density Blade & Rack Server Clusters (Dell PowerEdge / HPE ProLiant)',
      'Automated Disaster Recovery (DR) & Continuous Data Replication',
      'Virtualization Modernization & Workload Orchestration',
      'Data Center Power, Precision Cooling & Rack Management'
    ],
    technologies: ['Dell Technologies', 'HPE', 'VMware', 'Nutanix', 'Veeam', 'Pure Storage'],
    sla: '4-Hour Hardware Replacement / 24/7 Uptime Monitoring',
    deliverables: ['Architecture Blueprint', 'Capacity Sizing Report', 'Full Turnkey Deployment', 'Operational Runbook']
  },
  {
    id: 'cybersecurity-soc',
    title: 'Advanced Cybersecurity & SOC Defense',
    shortDesc: 'Zero-Trust network architecture, endpoint protection, next-gen firewalls, vulnerability management, and UAE NESA compliance.',
    fullDesc: 'Comprehensive defense-in-depth security solutions safeguarding enterprise assets against sophisticated threat actors, ransomware, and insider risks with 24/7 threat detection.',
    icon: 'ShieldCheck',
    category: 'cybersecurity',
    features: [
      'Next-Gen Firewalls (NGFW) & Unified Threat Management',
      'Zero-Trust Network Access (ZTNA) & Identity Governance',
      'Endpoint Detection & Response (EDR / XDR)',
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Email Security, DLP & Data Classification Policies',
      'UAE Information Assurance (NESA / ISR) Compliance Auditing'
    ],
    technologies: ['Fortinet', 'Palo Alto Networks', 'Sophos', 'CrowdStrike', 'Cisco Secure', 'Tenable'],
    sla: '< 15-Minute Incident Response Time for Severity-1 Threats',
    deliverables: ['Security Posture Assessment', 'Compliance Roadmap', 'Hardened Firewalls', 'SIEM Integration']
  },
  {
    id: 'cloud-datacenter',
    title: 'Cloud & Hybrid Data Center Solutions',
    shortDesc: 'Secure multi-cloud migration, private cloud virtualization, hybrid connectivity, and automated backup & disaster recovery.',
    fullDesc: 'Bridge on-premises resilience with the agility of modern cloud architectures while maintaining in-country UAE data sovereignty and stringent latency thresholds.',
    icon: 'Cloud',
    category: 'cloud',
    features: [
      'Hybrid Cloud Architecture & On-Premises Interconnects',
      'Microsoft Azure & AWS Enterprise Landing Zones',
      'In-Country UAE Data Center Private Hosting',
      'Cloud Migration & Legacy Application Modernization',
      'Cloud Backup, Archive & Immutable Ransomware Recovery',
      'FinOps Cloud Cost Optimization & Governance'
    ],
    technologies: ['Microsoft Azure', 'Amazon Web Services', 'VMware Cloud', 'Veeam Cloud', 'Commvault'],
    sla: '99.99% Cloud Service Availability SLA',
    deliverables: ['Cloud Readiness Audit', 'Migration Pipeline', 'Backup Verification Logs', 'Security Governance Baseline']
  },
  {
    id: 'elv-structured-cabling',
    title: 'Structured Cabling & ELV Systems',
    shortDesc: 'Certified Cat6A/Cat7 copper and fiber optic backbone cabling, IP CCTV surveillance, biometric access control, and smart BMS integration.',
    fullDesc: 'End-to-end Low Voltage (ELV) engineering for commercial towers, government facilities, hospitals, and industrial parks compliant with UAE Civil Defense and Abu Dhabi MCC/SIRA standards.',
    icon: 'Cable',
    category: 'elv',
    features: [
      'Structured Cabling Cat6/Cat6A/Cat7 & High-Speed Optical Fiber',
      'IP Video Surveillance (CCTV) with AI Analytics & MCC Compliance',
      'Biometric Access Control, Turnstiles & Time Attendance Systems',
      'Audio-Visual (AV) Boardroom Automation & Video Conferencing',
      'Public Address & Voice Alarm (PA/VA) Integration',
      'Building Management Systems (BMS) & IoT Environmental Sensors'
    ],
    technologies: ['CommScope', 'Schneider Electric', 'Hikvision', 'Axis Communications', 'Legrand', 'Crestron'],
    sla: '25-Year Manufacturer Warranty on Structured Cabling Infrastructure',
    deliverables: ['As-Built Drawings', 'OTDR / Fluke Test Certification', 'SIRA/MCC Regulatory Approval Handover', 'Training Manuals']
  },
  {
    id: 'networking-sdwan',
    title: 'Enterprise Networking & SD-WAN',
    shortDesc: 'Campus LAN/WAN switching, enterprise high-density Wi-Fi 6/7, SD-WAN optimization, and carrier-grade telecom integration.',
    fullDesc: 'Design and implementation of intelligent, high-throughput network fabrics engineered for seamless collaboration, zero packet loss, and robust perimeter segmentation.',
    icon: 'Network',
    category: 'networking',
    features: [
      'Core, Distribution & Access Layer Enterprise Switching',
      'Software-Defined WAN (SD-WAN) Multi-Branch Connectivity',
      'Enterprise High-Density Wi-Fi 6 / Wi-Fi 7 with Heatmap Surveys',
      'Network Access Control (NAC) & 802.1X Dynamic VLANs',
      'QoS Bandwidth Traffic Optimization for VoIP & Unified Comms',
      'Telecom Carrier Liaison (Etisalat by e& / du) Multi-Link Redundancy'
    ],
    technologies: ['Cisco Systems', 'HPE Aruba', 'Fortinet FortiGate', 'Ruckus', 'Juniper Networks'],
    sla: 'Sub-millisecond Local Switching Latency / Zero-Downtime Failover',
    deliverables: ['Predictive & Active RF Heatmap', 'Network Topology Schematics', 'VLAN / Routing Matrix', 'Configuration Backups']
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services & 24/7 NOC Support',
    shortDesc: 'Comprehensive Annual Maintenance Contracts (AMC), outsourced IT staffing, proactive infrastructure monitoring, and rapid on-site dispatch.',
    fullDesc: 'Your dedicated enterprise IT operations partner in Abu Dhabi. We manage your infrastructure proactively so your team can focus on core strategic business objectives.',
    icon: 'Headset',
    category: 'managed',
    features: [
      '24/7/365 Network Operations Center (NOC) Proactive Monitoring',
      'Custom Tiered SLA Annual Maintenance Contracts (AMC)',
      'Dedicated On-site Resident IT Engineers & Helpdesk Support',
      'Patch Management, Firmware Hardening & Health Audits',
      'IT Asset Lifecycle Management & Procurement Liaison',
      'Executive IT Director Virtual CIO (vCIO) Strategic Roadmaps'
    ],
    technologies: ['ManageEngine', 'SolarWinds', 'ServiceNow', 'Datto', 'Microsoft 365 Admin', 'Jira Service Management'],
    sla: 'Guaranteed 15-Minute Remote Response / 2-Hour Abu Dhabi On-Site Dispatch',
    deliverables: ['Monthly SLA Performance Report', 'Incident Root-Cause Analysis (RCA)', 'Quarterly Business Reviews', 'Asset Inventory Logs']
  }
];

export const ARCHITECTURES: ArchitectureBlueprint[] = [
  {
    id: 'zero-trust-security',
    title: 'UAE Zero-Trust Cyber Defense Architecture',
    subtitle: 'Comprehensive perimeter, identity, and data-layer security',
    description: 'Designed specifically to satisfy UAE NESA and regional government security frameworks, isolating mission-critical databases with microsegmentation and continuous telemetry.',
    layers: [
      {
        name: 'Perimeter & Edge Layer',
        description: 'Redundant HA Next-Gen Firewalls with SSL inspection, DDoS mitigation, and SD-WAN encrypted tunnels.',
        components: ['Dual Fortinet FortiGate HA', 'Palo Alto Threat Prevention', 'Cloudflare Edge Shield']
      },
      {
        name: 'Identity & Access Control',
        description: 'Context-aware MFA, Privileged Access Management (PAM), and strict 802.1X device validation.',
        components: ['Microsoft Entra ID P2', 'Cisco ISE', 'CyberArk PAM']
      },
      {
        name: 'Compute & Workload Isolation',
        description: 'Microsegmented virtual networks with host-based IPS and immutable continuous data snapshots.',
        components: ['VMware NSX-T', 'CrowdStrike Falcon XDR', 'Veeam Immutable Hardened Vault']
      }
    ],
    benefits: [
      'Eliminates lateral threat movement within internal network',
      'Full compliance with UAE NESA / TDRA audit mandates',
      'Real-time threat containment without user interruption'
    ],
    complianceAlignment: 'NESA IAS v2, ISO 27001:2022, UAE Federal Cyber Law'
  },
  {
    id: 'hybrid-cloud-dc',
    title: 'Resilient Hybrid Cloud & Data Center Blueprint',
    subtitle: 'In-country UAE private compute linked to scalable Azure/AWS cloud',
    description: 'High-availability hyperconverged cluster hosted in Abu Dhabi with synchronized disaster recovery to sovereign cloud instances.',
    layers: [
      {
        name: 'On-Premises High-Compute Core',
        description: 'All-Flash HCI nodes providing ultra-low latency transaction processing for ERP and databases.',
        components: ['Dell PowerEdge R760 Clusters', 'VMware vSphere 8 Enterprise Plus', 'Pure Storage FlashArray']
      },
      {
        name: 'Interconnect & Low-Latency Fabric',
        description: 'Dedicated redundant 100Gbps spine-leaf fabric with direct ExpressRoute / Direct Connect links.',
        components: ['Cisco Nexus 9300 Switches', 'Etisalat Dedicated MPLS / IP-VPN', 'Azure ExpressRoute']
      },
      {
        name: 'Sovereign Cloud & DR Tier',
        description: 'Automated orchestrator that fails over critical business workloads within 15 minutes RTO.',
        components: ['Microsoft Azure UAE North Region', 'Veeam Continuous Data Protection', 'Azure Site Recovery']
      }
    ],
    benefits: [
      'RPO < 5 seconds and RTO < 15 minutes for Tier-1 business systems',
      '100% adherence to UAE in-country data residency requirements',
      'Predictable operational expenditure with dynamic hybrid elasticity'
    ],
    complianceAlignment: 'UAE National Data Sovereignty Policy, ISO 22301 Business Continuity'
  },
  {
    id: 'smart-campus-elv',
    title: 'Intelligent Enterprise Campus & ELV Infrastructure',
    subtitle: 'Unified structural cabling, AI-driven CCTV, and BMS automation',
    description: 'High-density commercial building and campus ELV solution integrating physical security, environmental sensors, and multi-gigabit networking.',
    layers: [
      {
        name: 'Physical Cable & Fiber Backbone',
        description: 'OM4/OM5 fiber risers with Cat6A LSZH shielded horizontal distribution to all endpoints.',
        components: ['CommScope Systimax Cat6A', 'Corning Multimode Optical Risers', 'Schneider NetShelter Enclosures']
      },
      {
        name: 'Unified Security & Access Layer',
        description: 'Abu Dhabi MCC / SIRA approved 4K IP cameras with edge analytics, facial recognition, and ANPR.',
        components: ['Hikvision DeepinView AI Cameras', 'Axis Network Door Controllers', 'Speed Gate Turnstiles']
      },
      {
        name: 'Smart Building & Wi-Fi Fabric',
        description: 'Autonomous Wi-Fi 7 wireless network powering IoT smart lighting, climate, and occupancy sensors.',
        components: ['HPE Aruba CX & Wi-Fi 7 APs', 'BACnet / Modbus BMS Gateways', 'Crestron Room Scheduling']
      }
    ],
    benefits: [
      'Guaranteed 25-year structural cabling warranty and performance headroom',
      'Instant regulatory sign-off with Abu Dhabi civil security authorities',
      '35% reduction in facility energy consumption via smart BMS telemetry'
    ],
    complianceAlignment: 'Abu Dhabi MCC/SIRA Standards, Estidama Pearl Building Rating'
  }
];

export const INDUSTRIES: IndustrySolution[] = [
  {
    id: 'government',
    name: 'Government & Public Sector',
    icon: 'Landmark',
    tagline: 'Supporting UAE Vision 2031 with Sovereign, Secure IT Systems',
    description: 'High-security systems integration tailored for Abu Dhabi government entities, municipal authorities, and federal departments requiring strict compliance, encryption, and in-country hosting.',
    challengesSolved: [
      'Strict adherence to UAE NESA and ADDA data compliance frameworks',
      'Zero-tolerance policy for service outages across public portals',
      'Secure legacy system migration to sovereign cloud platforms'
    ],
    keySolutions: [
      'Air-gapped secure computing clusters and multi-level data classification',
      'High-security biometric access and MCC-certified perimeter surveillance',
      '24/7 dedicated government SLA with security-cleared on-site engineers'
    ],
    compliance: ['NESA Information Assurance', 'ADDA Security Standards', 'UAE Cyber Security Council'],
    impactMetric: '100% Audit Compliance on UAE Federal Standards'
  },
  {
    id: 'oil-and-gas',
    name: 'Energy, Oil & Gas',
    icon: 'Flame',
    tagline: 'Mission-Critical Reliability for Harsh Industrial & Offshore Environments',
    description: 'Industrial-grade networking, SCADA protection, ruggedized structured cabling, and satellite connectivity for upstream, midstream, and downstream energy operators in Abu Dhabi and Western Region.',
    challengesSolved: [
      'Securing operational technology (OT) and SCADA against external cyber intrusions',
      'Providing uninterrupted connectivity to remote desert and offshore rigs',
      'Extreme environmental conditions requiring ATEX/IECEx certified hardware'
    ],
    keySolutions: [
      'Industrial Ethernet & Ruggedized Fiber Optics for refineries',
      'OT Cybersecurity monitoring & air-gapped data diodes',
      'High-reliability satellite backup links with automated failover'
    ],
    compliance: ['IEC 62443 Industrial Cybersecurity', 'ADNOC Technical Specifications'],
    impactMetric: 'Zero Unplanned Network Outages Across Critical Sites'
  },
  {
    id: 'banking-finance',
    name: 'Banking, Financial Services & Insurance',
    icon: 'Building2',
    tagline: 'Ultra-Low Latency & Uncompromising Financial Data Integrity',
    description: 'High-throughput transactional networks, PCI-DSS certified server environments, and microsecond latency trading infrastructure for UAE financial institutions.',
    challengesSolved: [
      'Mitigating sophisticated financial fraud, phishing, and ransomware threats',
      'Maintaining sub-second latency for financial processing transactions',
      'Continuous audit readiness for Central Bank of UAE regulations'
    ],
    keySolutions: [
      'PCI-DSS compliant network segmentation and end-to-end encryption',
      'High-frequency trading network switches with zero packet drop',
      'Immutable continuous backup vaults for financial record ledger protection'
    ],
    compliance: ['CBUAE Regulatory Framework', 'PCI-DSS v4.0', 'ISO 27001'],
    impactMetric: '99.999% Core Transaction Processing Availability'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Centers',
    icon: 'Stethoscope',
    tagline: 'Connected Medical Infrastructure & Patient Data Confidentiality',
    description: 'HIPAA and ADHICS compliant network architecture for Abu Dhabi hospitals, clinics, and diagnostic labs, powering PACS medical imaging, telemedicine, and IoT patient monitors.',
    challengesSolved: [
      'Secure exchange of massive PACS diagnostic imaging files without lag',
      'Protection of Electronic Medical Records (EMR) under ADHICS guidelines',
      'High-density wireless connectivity for mobile nursing carts and IoT medical devices'
    ],
    keySolutions: [
      'Medical-grade isolated Wi-Fi networks with strict patient telemetry QoS',
      'High-speed multi-gigabit fiber backbones for rapid radiology transfers',
      'Secure biometric ward access control and infant anti-abduction systems'
    ],
    compliance: ['DoH Abu Dhabi / ADHICS Standard', 'NABIDH Integration', 'HIPAA'],
    impactMetric: '4x Faster Diagnostic Imaging Retrieval Rates'
  },
  {
    id: 'hospitality-real-estate',
    name: 'Commercial Real Estate & Luxury Hospitality',
    icon: 'Hotel',
    tagline: 'Seamless Guest Connectivity & Smart Building Automation',
    description: 'Complete ELV, audio-visual, high-density guest Wi-Fi, and smart energy management systems for premier luxury hotels, commercial towers, and mixed-use developments.',
    challengesSolved: [
      'Delivering flawless high-speed Wi-Fi across hundreds of rooms and conference spaces',
      'Integrating disparate building systems (HVAC, lighting, CCTV, access) into single BMS',
      'Managing guest entertainment and smart room automation with intuitive controls'
    ],
    keySolutions: [
      'High-density Wi-Fi 7 with captive portal & PMS integration',
      'Integrated IP CCTV, digital signage & ballroom audio-visual distribution',
      'Smart room energy management with automated occupancy setback'
    ],
    compliance: ['Abu Dhabi MCC/SIRA Regulations', 'Estidama Pearl Standards'],
    impactMetric: '98% Positive Guest Wi-Fi Satisfaction Ratings'
  },
  {
    id: 'education',
    name: 'Education & Academic Campuses',
    icon: 'GraduationCap',
    tagline: 'High-Capacity Digital Classrooms & Safe Campus Environments',
    description: 'Robust IT infrastructure for universities, colleges, and schools across the UAE, enabling hybrid learning, 1-to-1 device programs, and campus-wide perimeter safety.',
    challengesSolved: [
      'Handling sudden surges of thousands of concurrent student devices during exams',
      'Enforcing strict content filtering and cyber safety for minor students',
      'Connecting distributed campus buildings with high-speed fiber links'
    ],
    keySolutions: [
      'Campus-wide dense Wi-Fi with AI roaming and bandwidth throttling protection',
      'Next-Gen student safe-browsing firewall filters and cyberbullying monitors',
      'Smart interactive whiteboards, lecture capture & auditorium AV systems'
    ],
    compliance: ['ADEK Educational Guidelines', 'TDRA Internet Safety Standards'],
    impactMetric: '10,000+ Concurrent Student Devices Seamlessly Connected'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientType: 'Semi-Government Entity',
    industry: 'Public Infrastructure',
    location: 'Abu Dhabi, UAE',
    title: 'Turnkey Enterprise IT Infrastructure & Secure Hybrid Cloud Modernization',
    challenge: 'The client operated on aging on-premises server hardware nearing end-of-life with escalating maintenance costs, single points of failure, and vulnerability risks failing UAE security audits.',
    solution: 'LandCom architected and deployed a multi-node Nutanix Enterprise Cloud cluster combined with Fortinet HA Next-Gen Firewalls and synchronized Microsoft Azure UAE North disaster recovery replication.',
    results: [
      'Reduced server footprint by 65% while boosting compute performance by 3.8x',
      'Zero downtime migration executed over a scheduled 48-hour weekend window',
      '100% compliance achieved on Abu Dhabi Digital Authority (ADDA) cyber audit',
      'Decreased Annual Maintenance and power consumption costs by 42%'
    ],
    techStack: ['Nutanix HCI', 'Fortinet FortiGate', 'Microsoft Azure UAE', 'Veeam Backup']
  },
  {
    id: 'case-2',
    clientType: 'Commercial High-Rise Development',
    industry: 'Real Estate & Hospitality',
    location: 'Al Reem Island, Abu Dhabi',
    title: 'Complete ELV, Structured Cabling, & MCC-Approved CCTV Surveillance',
    challenge: 'A newly constructed 42-story commercial tower required a comprehensive ELV infrastructure package including structured cabling, 300+ CCTV camera network, access control, and SIRA/MCC certification within a strict 6-month deadline.',
    solution: 'LandCom designed and delivered a CommScope Cat6A shielded network backbone, 10G optical fiber risers, Hikvision DeepinView IP CCTV system, automated parking barrier systems, and secured immediate Abu Dhabi MCC regulatory sign-off.',
    results: [
      'Delivered 3,500+ Cat6A network drops with 100% OTDR and Fluke certification pass rate',
      'Completed full project 3 weeks ahead of scheduled tenant occupancy',
      'Achieved first-inspection regulatory sign-off from Abu Dhabi civil authorities',
      'Backed by 25-year manufacturer system performance warranty'
    ],
    techStack: ['CommScope Systimax', 'Hikvision AI Cameras', 'Schneider Electric', 'Axis Access Control']
  },
  {
    id: 'case-3',
    clientType: 'Multi-Branch Financial Group',
    industry: 'Banking & Financial Services',
    location: 'Abu Dhabi & Dubai, UAE',
    title: 'SD-WAN Interconnect & 24/7 Managed NOC Operations',
    challenge: 'The financial group struggled with latency spikes across 8 branch offices and frequent link degradations that impacted real-time teller transaction processing and customer service.',
    solution: 'LandCom deployed an enterprise Fortinet SD-WAN fabric bonding dual Etisalat and du business fiber lines with sub-second failover, backed by 24/7 proactive NOC monitoring and guaranteed 15-minute SLA.',
    results: [
      'Eliminated branch network outages with seamless sub-second automatic link failover',
      'Reduced branch telecom circuit expenditure by 35% through intelligent bandwidth routing',
      'Maintained 99.995% transaction uptime over 24 consecutive months of operation',
      'Proactively resolved 92% of network anomalies before end-users noticed'
    ],
    techStack: ['Fortinet SD-WAN', 'Cisco Catalyst 9000', 'ManageEngine OpManager', 'LandCom 24/7 NOC']
  }
];

export const PARTNERS = [
  { name: 'Cisco Systems', tier: 'Premier Certified Partner', category: 'Networking & Security' },
  { name: 'Microsoft', tier: 'Gold Cloud Solutions Partner', category: 'Cloud & Modern Work' },
  { name: 'Dell Technologies', tier: 'Titanium Solution Provider', category: 'Server, Storage & HCI' },
  { name: 'Fortinet', tier: 'Expert Partner', category: 'Cybersecurity & SD-WAN' },
  { name: 'HPE / Aruba Networks', tier: 'Silver Solution Partner', category: 'Wireless & Switching' },
  { name: 'Sophos', tier: 'Platinum Partner', category: 'Endpoint & Threat Defense' },
  { name: 'Hikvision', tier: 'Authorized Solution Partner', category: 'IP CCTV & Surveillance' },
  { name: 'CommScope', tier: 'Certified Systimax Installer', category: 'Structured Cabling' },
  { name: 'Schneider Electric', tier: 'Elite Data Center Partner', category: 'Power & Cooling' },
  { name: 'Veeam', tier: 'Gold Cloud & DR Partner', category: 'Backup & Recovery' },
  { name: 'VMware by Broadcom', tier: 'Enterprise Partner', category: 'Virtualization & Cloud' },
  { name: 'Axis Communications', tier: 'Authorized Security Partner', category: 'Access & Video' },
];

export const FAQS = [
  {
    question: 'Where is LandCom located and what geographical areas do you serve?',
    answer: 'LandCom Information Technology Solutions Provider is headquartered in Abu Dhabi, United Arab Emirates. We provide on-site engineering, project delivery, and 24/7 managed support across Abu Dhabi, Al Ain, Dubai, and all other Emirates in the UAE.'
  },
  {
    question: 'Are LandCom solutions compliant with UAE cybersecurity and government standards?',
    answer: 'Yes. Our architectures and implementations are strictly aligned with UAE Information Assurance (NESA) standards, Abu Dhabi Digital Authority (ADDA) frameworks, Abu Dhabi Monitoring and Control Centre (MCC/SIRA) regulations for surveillance, and in-country data residency mandates.'
  },
  {
    question: 'What types of Service Level Agreements (SLAs) does LandCom offer for Annual Maintenance Contracts (AMC)?',
    answer: 'We provide tiered AMCs ranging from standard business-hours coverage to critical 24/7/365 mission-critical support. Our standard emergency SLA guarantees a 15-minute remote response and on-site dispatch within 2 hours anywhere in Abu Dhabi and Dubai.'
  },
  {
    question: 'Can LandCom assist with end-to-end turnkey projects from consultancy to handover?',
    answer: 'Absolutely. We provide complete lifecycle services: initial requirements discovery, site surveys & RF heatmaps, Bill of Quantities (BOQ) preparation, procurement, staging, physical cabling & racking, software configuration, testing, authority approvals, and post-handover 24/7 managed support.'
  },
  {
    question: 'How do you ensure data sovereignty for cloud migrations in the UAE?',
    answer: 'We design hybrid and sovereign cloud architectures utilizing local UAE data centers (such as Microsoft Azure UAE North in Dubai / UAE Central in Abu Dhabi, or local private hosting providers), ensuring your organization’s sensitive information never leaves the borders of the UAE.'
  }
];
