/* Data — single source of truth for all portfolio content */

const PROFILE = {
  name: "Fadly Ahmad Firdausy",
  initials: "FA",
  location: "Jakarta, Indonesia",
  title: "Presales Engineer · Product & Project Manager · Enterprise Solutions & IoT",
  positioning: "Enterprise technology professional bridging presales engineering and product/project management — turning complex requirements into scalable, commercially sound solutions across connectivity, IoT, device management, and data center.",
  valueProp: "I work across the full arc of an enterprise deal — discovering the client's problem, designing the technical solution, and delivering it through to sign-off.",
  email: "fadlyahmadfirdausy@gmail.com",
  phone: "+62-811-808-5045",
  linkedin: "linkedin.com/in/fadlyahmadfirdausy",
  cvUrl: "Fadly_Ahmad_Firdausy_CV.pdf",
  photo: "fadly-headshot.png",
};

const METRICS = [
  { value: "IDR 15B+", label: "Enterprise solutions portfolio", note: "Multi-account presales, Indosat" },
  { value: "20+", label: "Enterprise opportunities", note: "Connectivity, IoT, MDM, data center" },
  { value: "13", label: "IoT projects delivered", note: "Sole PM — Astra, BSI, Pegadaian, +" },
  { value: "3×", label: "National product wins", note: "Hack The Product circuit" },
];

const EXPERIENCE = [
  {
    id: "indosat",
    company: "PT Indosat Tbk (Indosat Ooredoo Hutchison)",
    role: "B2B Presales Engineer — Enterprise Solutions",
    period: "Sep 2025 — Present",
    location: "Jakarta, ID",
    type: "Full-time",
    summary: "Own enterprise solution deals end-to-end across a multi-account presales portfolio — connectivity, IoT/M2M, device management (MDM), data center, and chatbot — for rail, aviation, manufacturing, and finance clients. Shaped an IDR 15B+ enterprise solutions portfolio across 20+ opportunities.",
    responsibilities: [
      "Author the full presales deliverable stack — solution designs (MLD), technical proposals, BoQs, business cases, HLDs, POC checklists, and multi-vendor assessments — for marquee clients: MRT Jakarta, LRT, Danone, Bluebird, Bank Mayapada, and KBIJ.",
      "Design solution architectures spanning connectivity, managed services, IoT/M2M, device management (MDM), and data center — then defend the design in tech-clarification sessions with client architects.",
      "Run multi-vendor MDM assessments and device-bundling proposals (iPad and laptop fleets with managed services) for enterprise mobility programs.",
      "Collaborate cross-functionally with sales, product, pricing, procurement, and vendor teams to structure competitive, value-based solutions.",
    ],
    impact: [
      { v: "IDR 15B+", k: "multi-account enterprise solutions portfolio shaped" },
      { v: "20+", k: "enterprise opportunities across rail, aviation, manufacturing, finance" },
      { v: "6+", k: "marquee client proposals: MRT Jakarta, LRT, Danone, Bluebird, Bank Mayapada, KBIJ" },
    ],
  },
  {
    id: "iotera",
    company: "PT Iotera Sinergi Digital",
    role: "Project Manager, IoT & Digital Solutions",
    period: "Sep 2023 — Sep 2025",
    location: "Bandung, ID",
    type: "Full-time",
    summary: "Sole project manager (reporting directly to the CEO) owning a 13-project IoT portfolio end-to-end — from discovery to sign-off — for SOE-grade clients. Restructured the cross-functional workflow to lift delivery efficiency ~20%.",
    responsibilities: [
      "Sole project manager, reporting directly to the CEO — independently owned a portfolio of 13 IoT projects (5 delivered, 3 recurring, 5 ongoing) for KPP/Pama (Astra), BSI, Pegadaian, Pertamina, and Telkomsel.",
      "Led solution ideation and technical proposals — translating ambiguous operational problems into scalable IoT architectures (RFID smart-vault and smart-cabinet, fatigue-check chamber, nationwide cashless vending).",
      "Owned rollout and integration management — RFID and QRIS payment integration, vendor coordination, SIT/UAT, and BAST sign-off.",
      "Restructured the cross-functional delivery workflow, lifting delivery efficiency ~20%; ran governance reviews with client stakeholders.",
    ],
    impact: [
      { v: "13", k: "concurrent IoT projects as sole PM (5 delivered, 3 recurring, 5 ongoing)" },
      { v: "~20%", k: "delivery efficiency lift via workflow restructure" },
      { v: "5+", k: "SOE-grade clients: Astra/KPP, BSI, Pegadaian, Pertamina, Telkomsel" },
    ],
  },
  {
    id: "erajaya",
    company: "PT Erajaya Swasembada",
    role: "B2B Associate Product Manager",
    period: "May 2023 — Sep 2023",
    location: "Jakarta, ID",
    type: "Full-time",
    summary: "Shaped B2B digital products serving Erajaya's enterprise channel — turning sales-team workflow pain into roadmap items engineering could ship.",
    responsibilities: [
      "Managed 3 B2B products end-to-end — produced PRDs and wireframes, ran sprint grooming and planning, and consolidated multi-stakeholder feedback into a prioritised product roadmap.",
      "Led the product development process including grooming and sprint planning, collaborating tightly with engineering and design counterparts.",
      "Communicated with multiple stakeholders to synthesise insights, surface innovation opportunities, and prioritise problems worth solving.",
    ],
    impact: [
      { v: "3", k: "B2B products with full lifecycle ownership — PRD, wireframe, sprint planning" },
    ],
  },
  {
    id: "aladin",
    company: "Bank Aladin Syariah",
    role: "Product Manager Intern",
    period: "Oct 2022 — Jan 2023",
    location: "Jakarta, ID",
    type: "Internship",
    summary: "Embedded with the mobile banking product team — scoped, prototyped, and helped ship customer-facing features inside a regulated Islamic digital bank.",
    responsibilities: [
      "Led the development and launch of 2 new donation features for the Aladin mobile banking app — contributing to a 15% uplift in user retention.",
      "Gathered and analysed data using Metabase from each product to inform ongoing development, resulting in a 50% increase in active users and a 25% increase in retention rates in 2022.",
      "Monitored key metrics including MAU, retention rates, and CSAT scores to evaluate the platform's monthly performance.",
      "Wrote PRDs, mapped user flows, and partnered with design and engineering on delivery under Shariah-compliance constraints.",
    ],
    impact: [
      { v: "15%", k: "uplift in user retention from 2 donation features launched" },
      { v: "50%", k: "growth in active users tracked via Metabase (MAU, retention, CSAT)" },
    ],
  },
  {
    id: "tbi",
    company: "Tower Bersama Infrastructure",
    role: "IT Project Management Officer Intern",
    period: "Feb 2022 — Jul 2022",
    location: "Jakarta, ID",
    type: "Internship",
    summary: "Sat inside the IT PMO of one of Indonesia's largest tower operators — supporting portfolio governance and delivering one internal security tool end-to-end.",
    responsibilities: [
      "Led a dev + QA team (Full-Stack Developer and Quality Assurance) to deliver an internal brute-force prevention system on schedule.",
      "Tracked project timelines, RAID logs, and status reporting across IT initiatives using ClickUp, Jira, and Google Sheets.",
      "Applied SDLC, Agile, and Waterfall methodologies in a regulated infrastructure environment.",
    ],
    impact: [
      { v: "1", k: "internal security tool shipped end-to-end on schedule" },
    ],
  },
];

const CASES = [
  {
    id: "dcfc",
    featured: true,
    tag: "IoT · Mining Safety",
    title: "DCFC — Digital Fatigue Check Chamber",
    company: "KPP / PAMA (Astra Group)",
    period: "Iotera · 2023—2025",
    headline: "IoT-powered fitness screening that certifies heavy-equipment operators FIT before every shift.",
    problem: "Heavy-equipment operators must be physically fit before a mining shift — a safety-critical gate that needed to be objective, fast, and auditable.",
    role: "End-to-end owner — discovery → technical proposal → delivery.",
    solution: "A fitness-screening chamber where an Android tablet orchestrates a tensimeter (blood pressure), oximeter, and face-recognition + temperature detection to certify each operator FIT before shift.",
    approach: [
      "Defined the pre-shift fitness gate with the mining safety team.",
      "Integrated medical sensors and facial recognition into a single tablet-orchestrated flow.",
      "Delivered and commissioned the chamber live on-site.",
    ],
    impact: [
      "Delivered as a multi-year engagement, live since end-2023.",
      "A standout example of IoT applied to workforce safety.",
    ],
    tools: ["Android Tablet App", "Medical Sensors", "Facial Recognition", "Temperature Sensing", "IoT Data Capture"],
  },
  {
    id: "bsi-smartvault",
    featured: true,
    tag: "RFID · Banking",
    title: "SmartVault — RFID Gold-Asset Vault",
    company: "Bank Syariah Indonesia",
    period: "Iotera · 2023—2025",
    headline: "Auditable, real-time RFID control over gold-financing assets, integrated with the bank's core.",
    problem: "Secure and track gold-financing assets in branch vaults with auditable, real-time control linked to the bank's records.",
    role: "End-to-end owner — authored all technical documentation (named author of the system user manual); ran delivery, SIT, and BAST sign-off.",
    solution: "An RFID smart-vault integrated with BSI's NOS core — linking gold-credit records to RFID tags, with role-based teller/approver workflows, guest-book access control, and a management web app.",
    approach: [
      "Authored the full technical documentation and system user manual.",
      "Integrated RFID tagging and scanning with the NOS core system.",
      "Ran SIT and BAST sign-off for the branch pilot.",
    ],
    impact: [
      "Delivered as a pilot at the BSI Asia Afrika (Bandung) site.",
      "Designed for expansion to additional branches.",
    ],
    tools: ["RFID Tagging & Scanning", "Web Application", "Core Integration (NOS)", "Role-based Access"],
  },
  {
    id: "smartvending",
    featured: true,
    tag: "IoT · Payments",
    title: "SmartVending — Nationwide Cashless IoT Platform",
    company: "Nestlé · Octo by CIMB · arcades",
    period: "Iotera · 2023—2025",
    headline: "5,000 unattended machines brought online with telemetry and QRIS cashless payments.",
    problem: "Bring telemetry and cashless payment to a large, heterogeneous fleet of unattended machines across the country.",
    role: "Project manager for deployment and integration.",
    solution: "Managed deployment and integration of a 5,000-unit IoT cashless-payment platform — IoT modules reporting to a central dashboard, each device type custom-configured (chair-massage, vending, arcade, coin-laundry) and wired to a QRIS payment gateway.",
    approach: [
      "Coordinated tech teams across a different configuration per client and device type.",
      "Integrated IoT modules with a central monitoring dashboard.",
      "Wired each device class to the QRIS payment gateway.",
    ],
    impact: [
      "5,000 units deployed nationwide on a recurring revenue model.",
    ],
    tools: ["IoT Hardware Modules", "Monitoring Dashboard", "QRIS Payment Gateway", "Integration Management"],
  },
  {
    id: "lrt-emagic",
    featured: true,
    tag: "IoT · Connectivity",
    title: "LRT Jakarta eMagic — Managed IoT Connectivity",
    company: "PT LRT Jakarta",
    period: "Indosat · 2025—Present",
    headline: "Managed cellular IoT connectivity for light-rail vehicles — built from scratch and retained on recompete.",
    problem: "Light-rail vehicles need reliable, centrally managed IoT connectivity with monitoring — and a partner who can stand it up and keep it running.",
    role: "End-to-end owner — technical proposal and business case; solution co-designed with the M2M product team.",
    solution: "A managed-service IoT connectivity solution over cellular M2M (Jasper), with centralized monitoring across the LRV fleet.",
    approach: [
      "Mapped connectivity and monitoring requirements across the LRV fleet.",
      "Co-designed the managed M2M solution with the product team.",
      "Authored the technical proposal and business case end-to-end.",
    ],
    impact: [
      "Won the initial contract, then retained it on the re-tender renewal.",
      "A solution built from scratch and proven durable on recompete.",
    ],
    tools: ["Cellular M2M / Jasper", "Managed Connectivity", "IoT Monitoring", "Technical Proposal"],
  },
  {
    id: "sucofindo-mdm",
    featured: true,
    tag: "MDM · Enterprise Mobility",
    title: "Sucofindo — Integrated Mobile + Device + MDM",
    company: "PT Sucofindo",
    period: "Indosat · 2025—Present",
    headline: "One managed program unifying mobile, devices, and cross-OS management for a large workforce.",
    problem: "Consolidate mobile, devices, and device management for a large workforce under a single managed program.",
    role: "Solution architect and proposal owner.",
    solution: "An integrated 24-month solution — shared-quota corporate mobile (pooled, single-invoice data), iPhone and laptop lease-to-own with managed services, and a cross-OS MDM managing both the iPhone and laptop fleets (one user, multiple devices).",
    approach: [
      "Designed pooled 'Flex Mobile' shared-quota connectivity.",
      "Structured iPhone and laptop lease-to-own with managed services.",
      "Architected a cross-platform MDM for multi-OS, one-user-multi-device.",
    ],
    impact: [
      "Full integrated solution architected and proposed for a large workforce.",
    ],
    tools: ["Pooled Mobile Data", "Device Lifecycle / Leasing", "Cross-platform MDM", "Managed Services"],
  },
  {
    id: "pegadaian-smartcabinet",
    featured: true,
    tag: "RFID · Asset Security",
    title: "SmartCabinet — RFID Gold-Asset Locker",
    company: "Pegadaian",
    period: "Iotera · 2023—2025",
    headline: "Self-reconciling RFID lockers with real-time stock-take for high-value gold assets.",
    problem: "Secure and continuously reconcile high-value gold assets at branch level with minimal manual effort.",
    role: "End-to-end owner — tech docs → delivery → sign-off.",
    solution: "An RFID secure gold-asset locker integrated with Pegadaian's internal app — per-item RFID tagging, an RFID-scanning locker, and a top-mounted screen showing real-time stock-take (opname) per locker.",
    approach: [
      "Designed per-item RFID tagging and locker scanning.",
      "Integrated the locker with Pegadaian's internal app.",
      "Delivered with a real-time opname display.",
    ],
    impact: [
      "Delivered at Pegadaian Pungkur (Bandung) — 6 cabinets live.",
      "Designed for further expansion.",
    ],
    tools: ["RFID Tagging & Scanning", "Locker Hardware", "Internal-app Integration", "Real-time Inventory"],
  },
];

const SKILLS = [
  {
    group: "Presales & Solutions",
    items: ["B2B Presales", "Solution Architecture", "Technical Proposals", "Solution Design (MLD)", "BoQ & Business Case", "Multi-vendor Assessment", "Value-based Selling", "Enterprise ICT"],
  },
  {
    group: "Device & IoT Solutions",
    items: ["IoT / M2M", "MDM / Device Management", "RFID & Payment (QRIS) Integration", "Device Bundling", "Data Center", "Managed Services"],
  },
  {
    group: "Product Management",
    items: ["Product Roadmap", "PRD Writing", "Wireframing", "Agile / Scrum", "Sprint Planning", "User Research", "Data-driven Prioritisation", "Feature Lifecycle Management"],
  },
  {
    group: "Project & Delivery",
    items: ["IoT Project Delivery", "Rollout & Integration Management", "Cross-functional Leadership", "Stakeholder Management", "RAID Management", "Vendor Coordination", "Governance & Reporting", "Portfolio Management"],
  },
  {
    group: "Network & Connectivity",
    items: ["LTE / 4G / 5G", "Enterprise WAN", "MPLS & VPN", "IoT Connectivity", "Managed Services", "Core Network Fundamentals", "Internet & Broadband Services"],
  },
  {
    group: "AI & Engineering",
    items: ["AI-assisted Workflows", "Prompt Engineering", "Computer Vision (YOLOv5)", "LLM Integration", "Deep Learning", "Network Security Fundamentals"],
  },
  {
    group: "Tools",
    items: ["Jira", "ClickUp", "Figma", "Cisco CCW / ISE estimator", "Google Sheets"],
  },
  {
    group: "Data & Analytics",
    items: ["Metabase Dashboards", "KPI Tracking (MAU · Retention · CSAT)", "Data-driven Prioritisation", "Requirement Analysis", "Reporting & RAID Logs", "Google Analytics"],
  },
];

const RECOGNITION = [
  {
    place: "2nd Place",
    event: "Hack The Product × JULO",
    note: "Gamified loyalty dashboard projected +68% customer online activity and +22% social sharing. Created 'Beyond Loan' value proposition.",
    year: "Feb 2023",
    url: "HTP_JULO_Fadly.pdf",
  },
  {
    place: "2nd Place",
    event: "Hack The Product × Mekari",
    note: "Proposed 2 flagship Mekari Flex products with projected revenue of ~IDR 5T/year.",
    year: "Dec 2022",
    url: "HTP_Mekari_Fadly.pdf",
  },
  {
    place: "3rd Place",
    event: "Hack The Product × RedDoorz",
    note: "3 B2B app features projected to raise owner retention +30% and reduce violations -20% within 3 months.",
    year: "Sep 2022",
    url: "HTP_RedDoorz_Fadly.pdf",
  },
];

const CERTIFICATIONS = [
  {
    group: "Cisco",
    items: [
      "CCNA: Introduction to Networks",
      "CCNA: Switching, Routing & Wireless Essentials (v7)",
      "Black Belt — IoT Network & IoT Sales (Stage 1)",
      "Black Belt — Wireless Pre-Sales (Stages 1–3)",
      "Black Belt — SD-WAN Presales (Stage 1)",
      "Black Belt — Fire Jumper XDR Pre-Sales (Stage 2)",
      "Black Belt — Security Essentials (Stage 1)",
      "Introduction to Splunk",
    ],
  },
  {
    group: "Product & Business Analysis",
    items: [
      "Certification of Competency (Double-A) — Apiary Academy, 2022",
      "Introduction to Project Management with ClickUp — Coursera, 2022",
      "Business Analysis & Process Management — Coursera, 2022",
    ],
  },
];

const EDUCATION = [
  {
    kind: "Degree",
    title: "B.Eng. Computer Engineering",
    org: "Universitas Indonesia",
    period: "Cum Laude · GPA 3.66 / 4.00 · 2018–2022",
    note: "Thesis: Real-time face-mask detection using YOLOv5 — a 3-class, multi-object deep-learning model trained on a 4,900-image dataset for COVID-19 mask-compliance monitoring.",
  },
];

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

const ACCENT_OPTIONS = [
  { value: "#3B82F6", label: "Electric Blue" },
  { value: "#00B3FF", label: "Signal Cyan" },
  { value: "#7C5CFF", label: "Iris" },
  { value: "#F0A03E", label: "Ember" },
];

Object.assign(window, {
  PROFILE, METRICS, EXPERIENCE, CASES, SKILLS, RECOGNITION, CERTIFICATIONS, EDUCATION, NAV, ACCENT_OPTIONS,
});
