/* Data — single source of truth for all portfolio content */

const PROFILE = {
  name: "Fadly Ahmad Firdausy",
  initials: "FA",
  location: "Jakarta, Indonesia",
  title: "B2B Presales Engineer · Product Manager · IoT Solutions",
  positioning: "B2B Presales Engineer, Product Manager, and IoT Solutions professional who bridges technical solution design, commercial strategy, and cross-functional product delivery.",
  valueProp: "I help enterprise teams turn technical challenges into scalable ICT, connectivity, IoT, and digital product solutions.",
  email: "fadlyahmadfirdausy@gmail.com",
  linkedin: "linkedin.com/in/fadlyahmadfirdausy",
  cvUrl: "Fadly_Ahmad_Firdausy_CV.pdf",
  photo: "fadly-headshot.png",
};

const METRICS = [
  { value: "IDR 2B+", label: "Revenue supported", note: "First 5 months at Indosat" },
  { value: "20+", label: "Enterprise ICT projects", note: "Technical & commercial assessments" },
  { value: "13", label: "IoT projects managed", note: "Pegadaian, Pertamina, Astra, +" },
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
    summary: "Lead technical and commercial assessment for enterprise ICT and connectivity opportunities — turning client problems into winning architectures, BOQs, and proposals. Contributed IDR 2B+ in revenue within the first 5 months across 20+ enterprise projects.",
    responsibilities: [
      "Authored end-to-end technical proposals and high-level designs for marquee clients: MRT Jakarta, LRT, Danone, Bluebird, Bank Mayapada, and KBIJ — covering managed services, connectivity, and enterprise ICT portfolios.",
      "Spearheaded assessment of technical and pricing aspects for ICT and connectivity across 20+ projects, ensuring alignment with client requirements, technical feasibility, and business objectives.",
      "Designed solution architectures spanning connectivity, managed services, IoT, and enterprise ICT — then stood up in front of client architects to defend the design in tech-clarification sessions.",
      "Collaborated cross-functionally with sales, product, pricing, procurement, and vendor teams to structure competitive, value-based solutions.",
    ],
    impact: [
      { v: "IDR 2B+", k: "revenue supported in first 5 months" },
      { v: "20+", k: "enterprise opportunities assessed across mining, FSI, retail, and public sector" },
      { v: "6+", k: "marquee client proposals authored: MRT Jakarta, LRT, Danone, Bluebird, Bank Mayapada, KBIJ" },
    ],
  },
  {
    id: "iotera",
    company: "PT Iotera Sinergi Digital",
    role: "Project Manager, IoT & Digital Solutions",
    period: "Sep 2023 — Sep 2025",
    location: "Bandung, ID",
    type: "Full-time",
    summary: "Owned the IoT delivery portfolio end-to-end — from kickoff to handover — across enterprise clients deploying field connectivity, sensors, and dashboards. Drove a 20% boost in delivery efficiency by restructuring cross-functional workflows.",
    responsibilities: [
      "Concurrently managed a portfolio of 13 IoT projects (5 delivered, 3 recurring, 5 ongoing) for Pegadaian, Telkomsel, Pertamina, BPODT, and KPP Mining by Astra Group.",
      "Led ideation and conception for each client engagement — translating complex operational challenges into scalable IoT architectures and winning proposals.",
      "Drove a 20% boost in delivery efficiency by leading a cross-functional team restructure and standardising end-to-end workflows from ideation through client handover.",
      "Built delivery dashboards, risk registers, and stakeholder reports; ran weekly governance reviews with client PMOs.",
    ],
    impact: [
      { v: "13", k: "concurrent IoT deployments (5 delivered, 3 recurring, 5 ongoing)" },
      { v: "20%", k: "boost in delivery efficiency via cross-functional team restructure" },
      { v: "5+", k: "enterprise & SOE clients: Pegadaian, Pertamina, Astra, BPODT, Telkomsel" },
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
    id: "indosat-presales",
    tag: "Enterprise ICT",
    title: "Enterprise ICT & Connectivity Presales",
    company: "PT Indosat Tbk",
    period: "Sep 2025 — Present",
    headline: "Turning 20+ enterprise opportunities into IDR 2B+ booked revenue in 5 months.",
    problem: "Enterprise clients arrive with mixed asks — connectivity, managed services, IoT, cloud — and need a partner who can translate ambiguous business problems into a defensible technical design and a commercially sound proposal, fast.",
    role: "B2B Presales Engineer owning technical discovery, solution architecture, BOQ, and proposal authoring; collaborating with account managers on commercial strategy.",
    approach: [
      "Structured discovery framework — business outcome → technical requirements → constraints — applied across every opportunity.",
      "Reusable solution patterns for the most common archetypes (multi-site connectivity, hybrid cloud edge, IoT-enabled assets).",
      "Tight feedback loop with product and engineering to validate feasibility before commitment.",
      "Tech-clarification rehearsals so the team defends design choices confidently in front of client architects.",
    ],
    impact: [
      "IDR 2B+ revenue supported in first 5 months across 20+ enterprise projects.",
      "Authored proposals for MRT Jakarta, LRT, Danone, Bluebird, Bank Mayapada, and KBIJ.",
      "Win-rate uplift on opportunities where presales was engaged early in the cycle.",
    ],
    tools: ["Solution Architecture", "Enterprise ICT", "BOQ", "Technical Proposals", "Value-based Selling", "Core Network"],
  },
  {
    id: "iotera-portfolio",
    tag: "IoT Delivery",
    title: "IoT Project Portfolio Management",
    company: "PT Iotera Sinergi Digital",
    period: "Sep 2023 — Sep 2025",
    headline: "Delivering 13 concurrent IoT projects for SOE-grade clients — with a 20% efficiency lift.",
    problem: "An IoT systems integrator running 13 parallel deployments — hardware, connectivity, software, field ops — for clients (Pegadaian, Pertamina, Astra, BPODT, Telkomsel) who don't tolerate slippage.",
    role: "Project Manager owning end-to-end delivery, governance, vendor coordination, and client communication across the portfolio.",
    approach: [
      "Per-project RAID registers and a portfolio-level heatmap so escalations surface before they break the schedule.",
      "Standardised kickoff, UAT, and handover playbooks — repeatable across clients.",
      "Tight vendor management cadence; weekly governance reviews with client PMOs.",
      "Led a cross-functional team restructure that drove a 20% boost in delivery efficiency.",
    ],
    impact: [
      "13+ IoT projects delivered in parallel for blue-chip enterprise and SOE clients.",
      "20% boost in delivery efficiency via cross-functional team restructure.",
      "Repeatable governance model adopted across the delivery org.",
    ],
    tools: ["IoT Architecture", "Connectivity", "Managed Services", "Jira", "ClickUp", "Stakeholder Management"],
  },
  {
    id: "competitions",
    tag: "Product Competitions",
    title: "Hack The Product — Three National Podiums",
    company: "JULO · Mekari · RedDoorz",
    period: "Sep 2022 — Feb 2023",
    headline: "Top-3 finishes against national product talent — three different industries, one product muscle.",
    problem: "Each Hack The Product challenge dropped a real business problem from the host company — fintech credit, SaaS payroll, hospitality — and gave teams a tight window to ship a credible PRD, prototype, and pitch.",
    role: "Product lead — framing the problem, owning the case, building the deck, fronting the pitch.",
    approach: [
      "Stakeholder & user mapping inside the first hours — no time for misaligned scope.",
      "Hypothesis-driven prioritisation: one north-star metric, one MVP slice, one sequence.",
      "Visual storytelling tuned to the judging panel (commercial + product + design).",
      "Live Q&A prep — anticipated 80% of likely judge questions ahead of pitch.",
    ],
    impact: [
      "2nd place — Hack The Product × JULO: gamified loyalty dashboard projected +68% online activity, +22% social sharing.",
      "2nd place — Hack The Product × Mekari: 2 flagship Mekari Flex products with projected ~IDR 5T/year revenue.",
      "3rd place — Hack The Product × RedDoorz: 3 B2B app features projected +30% owner retention, -20% violations in 3 months.",
    ],
    tools: ["Product Strategy", "PRD", "Pitching", "Data-driven Decision Making", "Wireframing"],
  },
];

const SKILLS = [
  {
    group: "Presales & Enterprise Sales",
    items: ["B2B Presales", "Solution Architecture", "Technical Proposals", "BOQ Design", "RFP Responses", "Value-based Selling", "Enterprise ICT", "Tech Clarification Sessions"],
  },
  {
    group: "Product Management",
    items: ["Product Roadmap", "PRD Writing", "Wireframing", "Agile / Scrum", "Sprint Planning", "User Research", "Data-driven Prioritisation", "Feature Lifecycle Management"],
  },
  {
    group: "Project & Delivery",
    items: ["IoT Project Delivery", "Cross-functional Leadership", "Stakeholder Management", "RAID Management", "Vendor Coordination", "Governance & Reporting", "Portfolio Management"],
  },
  {
    group: "Network & Connectivity",
    items: ["LTE / 4G / 5G", "Enterprise WAN", "MPLS & VPN", "IoT Connectivity", "Managed Services", "Core Network Fundamentals", "Internet & Broadband Services"],
  },
  {
    group: "AI & Engineering",
    items: ["AI-assisted Workflows", "Prompt Engineering", "Computer Vision (YOLOv6)", "LLM Integration", "Deep Learning", "Network Security Fundamentals"],
  },
  {
    group: "Tools & Analytics",
    items: ["Jira", "ClickUp", "Figma", "Metabase", "Google Sheets", "Google Analytics"],
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

const EDUCATION = [
  {
    kind: "Degree",
    title: "B.Eng. Computer Engineering",
    org: "Universitas Indonesia",
    period: "Cum Laude · GPA 3.66 / 4.00",
    note: "Thesis: Real-time face-mask detection using YOLOv6 deep learning — applied computer vision to a public health use case.",
  },
  {
    kind: "Certification",
    title: "Product Management — Certification of Competency (Double A)",
    org: "Apiary Academy",
    period: "Nov 2022",
    note: "Applied product fundamentals — discovery, PRD, prioritisation, delivery. Solved a real case with Wilov (18,000+ MAU health app).",
  },
];

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "recognition", label: "Recognition" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const ACCENT_OPTIONS = [
  { value: "#3B82F6", label: "Electric Blue" },
  { value: "#00B3FF", label: "Signal Cyan" },
  { value: "#7C5CFF", label: "Iris" },
  { value: "#F0A03E", label: "Ember" },
];

Object.assign(window, {
  PROFILE, METRICS, EXPERIENCE, CASES, SKILLS, RECOGNITION, EDUCATION, NAV, ACCENT_OPTIONS,
});
