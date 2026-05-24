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
  cvUrl: "",
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
    company: "PT Indosat Tbk",
    role: "B2B Presales Engineer",
    period: "2024 — Present",
    location: "Jakarta, ID",
    type: "Full-time",
    summary: "Lead technical and commercial assessment for enterprise ICT and connectivity opportunities — translating client problems into architectures, BOQs, and proposals that close.",
    responsibilities: [
      "Run discovery sessions with enterprise clients across mining, banking, retail, and government verticals.",
      "Design solution architectures spanning connectivity, managed services, IoT, and cloud.",
      "Author technical proposals, BOQs, and RFP responses; defend designs in client tech-clarification.",
      "Collaborate with account managers, product, and engineering to land deals on margin.",
    ],
    impact: [
      { v: "IDR 2B+", k: "revenue supported in first 5 months" },
      { v: "20+", k: "enterprise projects assessed" },
    ],
  },
  {
    id: "iotera",
    company: "PT Iotera Sinergi Digital",
    role: "Project Manager, IoT & Digital Solutions",
    period: "2023 — 2024",
    location: "Jakarta, ID",
    type: "Full-time",
    summary: "Owned the IoT delivery portfolio end-to-end — from kickoff to handover — across enterprise clients deploying field connectivity, sensors, and dashboards.",
    responsibilities: [
      "Managed 13+ IoT projects in parallel for Pegadaian, Telkomsel, Pertamina, BPODT, and KPP Mining (Astra).",
      "Coordinated hardware vendors, field engineers, software teams, and client PMOs on tight timelines.",
      "Built delivery dashboards, risk registers, and stakeholder reports; ran weekly governance reviews.",
      "Bridged commercial scope and engineering feasibility — protecting margin while keeping clients happy.",
    ],
    impact: [
      { v: "13", k: "concurrent IoT deployments" },
      { v: "5+", k: "enterprise & SOE clients" },
    ],
  },
  {
    id: "erajaya",
    company: "PT Erajaya Swasembada",
    role: "B2B Associate Product Manager",
    period: "2023",
    location: "Jakarta, ID",
    type: "Full-time",
    summary: "Shaped B2B digital products serving Erajaya's enterprise channel — turning sales-team workflow pain into roadmap items engineering could ship.",
    responsibilities: [
      "Translated B2B sales workflows into PRDs, wireframes, and acceptance criteria.",
      "Ran sprint planning and prioritisation with engineering and design counterparts.",
      "Owned the data view on adoption — defined funnels, tracked KPIs in Metabase.",
    ],
    impact: [
      { v: "Multiple", k: "feature releases shipped under Agile/Scrum" },
    ],
  },
  {
    id: "aladin",
    company: "Bank Aladin Syariah",
    role: "Product Manager Intern",
    period: "2022",
    location: "Jakarta, ID",
    type: "Internship",
    summary: "Embedded with the mobile banking product team — scoped, prototyped, and helped ship customer-facing features inside a regulated digital bank.",
    responsibilities: [
      "Researched and prototyped donation features inside the Aladin mobile banking app.",
      "Wrote PRDs, mapped user flows, and partnered with design and engineering on delivery.",
      "Participated in compliance and risk reviews specific to Islamic banking products.",
    ],
    impact: [
      { v: "Donation", k: "feature scoped and prototyped to delivery" },
    ],
  },
  {
    id: "tbi",
    company: "Tower Bersama Infrastructure",
    role: "IT Project Management Officer Intern",
    period: "2021",
    location: "Jakarta, ID",
    type: "Internship",
    summary: "Sat inside the IT PMO of one of Indonesia's largest tower operators — supporting portfolio governance and contributing one internal security tool of my own.",
    responsibilities: [
      "Tracked timelines, RAID logs, and status reporting across IT initiatives.",
      "Designed and implemented an internal brute-force prevention system for staff portals.",
      "Coordinated with infra, security, and application teams on rollout.",
    ],
    impact: [
      { v: "1", k: "internal security tool shipped end-to-end" },
    ],
  },
];

const CASES = [
  {
    id: "indosat-presales",
    tag: "Enterprise ICT",
    title: "Enterprise ICT & Connectivity Presales",
    company: "PT Indosat Tbk",
    period: "2024 — Present",
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
      "IDR 2B+ revenue supported in first 5 months.",
      "20+ enterprise opportunities assessed across mining, FSI, retail, and public sector.",
      "Win-rate uplift on opportunities where presales was engaged early in the cycle.",
    ],
    tools: ["Solution Architecture", "Enterprise ICT", "BOQ", "Technical Proposals", "Value-based Selling"],
  },
  {
    id: "iotera-portfolio",
    tag: "IoT Delivery",
    title: "IoT Project Portfolio Management",
    company: "PT Iotera Sinergi Digital",
    period: "2023 — 2024",
    headline: "Delivering 13 concurrent IoT projects for SOE-grade clients without dropping a date.",
    problem: "An IoT systems integrator running 13 parallel deployments — hardware, connectivity, software, field ops — for clients (Pegadaian, Pertamina, Astra, BPODT, Telkomsel) who don't tolerate slippage.",
    role: "Project Manager owning end-to-end delivery, governance, vendor coordination, and client communication across the portfolio.",
    approach: [
      "Per-project RAID registers and a portfolio-level heatmap so escalations surface before they break the schedule.",
      "Standardised kickoff, UAT, and handover playbooks — repeatable across clients.",
      "Tight vendor management cadence; weekly governance reviews with client PMOs.",
      "Engineering-PM bridge — pulling field issues back into product backlog instead of patching site-by-site.",
    ],
    impact: [
      "13+ IoT projects delivered in parallel for blue-chip enterprise clients.",
      "Repeatable governance model adopted across the delivery org.",
      "Improved cross-functional alignment between commercial, engineering, and field ops.",
    ],
    tools: ["IoT Architecture", "Connectivity", "Managed Services", "Jira", "ClickUp", "Stakeholder Management"],
  },
  {
    id: "aladin-donations",
    tag: "Fintech Product",
    title: "Mobile Banking Donation Features",
    company: "Bank Aladin Syariah",
    period: "2022",
    headline: "Designing a donation experience inside a regulated Islamic digital bank.",
    problem: "Bank Aladin wanted to deepen retention on its mobile app with a values-aligned feature — donations to vetted partners — that satisfied product, UX, and Shariah-compliance constraints at the same time.",
    role: "Product Manager Intern — research, PRD, flow design, sprint coordination with engineering and design.",
    approach: [
      "User research with target segments to understand donation motivations and friction.",
      "Mapped end-to-end flow: discovery → confirmation → receipt → repeat-give nudge.",
      "PRD and acceptance criteria reviewed with engineering, design, and compliance counterparts.",
      "Wireframes and prototype iterations in Figma before any engineering effort spent.",
    ],
    impact: [
      "Feature scoped, prototyped, and progressed into delivery within the internship.",
      "Demonstrated PM craft inside a regulated Islamic banking environment.",
    ],
    tools: ["PRD", "Wireframing", "Figma", "Agile/Scrum", "User Research"],
  },
  {
    id: "tbi-bruteforce",
    tag: "Security Tooling",
    title: "Brute-force Prevention Internal System",
    company: "Tower Bersama Infrastructure",
    period: "2021",
    headline: "Shipping an internal security tool from inside an IT PMO internship.",
    problem: "TBI internal portals were exposed to repeated automated login attempts; the IT team needed a lightweight, deployable safeguard without re-architecting the auth stack.",
    role: "IT PMO Intern — proposed the project, designed the approach, implemented and rolled out with security and app teams.",
    approach: [
      "Threat modelling against current login flows.",
      "Rate-limiting + lockout logic with auditable event logging.",
      "Iterative rollout with monitoring and rollback plan.",
      "Coordination with application owners so adoption was painless.",
    ],
    impact: [
      "End-to-end security tool delivered as an intern.",
      "Reduced exposure to credential-stuffing patterns on internal portals.",
    ],
    tools: ["Network Security Fundamentals", "IT Project Management", "Internal Tooling"],
  },
  {
    id: "competitions",
    tag: "Product Competitions",
    title: "Hack The Product — Three National Podiums",
    company: "JULO · Mekari · RedDoorz",
    period: "2022 — 2023",
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
      "2nd place — Hack The Product × JULO.",
      "2nd place — Hack The Product × Mekari.",
      "3rd place — Hack The Product × RedDoorz.",
    ],
    tools: ["Product Strategy", "PRD", "Pitching", "Data-driven Decision Making"],
  },
];

const SKILLS = [
  {
    group: "Presales & Sales",
    items: ["B2B Presales", "Solution Architecture", "Technical Proposals", "Value-based Selling", "Enterprise ICT"],
  },
  {
    group: "Product Management",
    items: ["Product Roadmap", "PRD", "Wireframing", "Agile / Scrum", "Sprint Planning", "Data-driven Decision Making"],
  },
  {
    group: "Project Management",
    items: ["IoT Solutions", "Cross-functional Leadership", "Stakeholder Management", "Connectivity", "Managed Services"],
  },
  {
    group: "Tools",
    items: ["Jira", "ClickUp", "Figma", "Metabase", "Google Sheets"],
  },
  {
    group: "Technical",
    items: ["Network Security Fundamentals", "Computer Vision", "IoT Architecture"],
  },
];

const RECOGNITION = [
  {
    place: "2nd Place",
    event: "Hack The Product × JULO",
    note: "National product competition — fintech credit case.",
    year: "2023",
  },
  {
    place: "2nd Place",
    event: "Hack The Product × Mekari",
    note: "National product competition — SaaS payroll case.",
    year: "2023",
  },
  {
    place: "3rd Place",
    event: "Hack The Product × RedDoorz",
    note: "National product competition — hospitality case.",
    year: "2022",
  },
];

const EDUCATION = [
  {
    kind: "Degree",
    title: "B.Eng. Computer Engineering",
    org: "Universitas Indonesia",
    period: "Cum Laude · GPA 3.66 / 4.00",
    note: "Thesis: Real-time face-mask detection using YOLOv6 deep learning.",
  },
  {
    kind: "Certification",
    title: "Product Management — Certification of Competency",
    org: "Apiary Academy",
    period: "",
    note: "Applied product fundamentals — discovery, PRD, prioritisation, delivery.",
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
