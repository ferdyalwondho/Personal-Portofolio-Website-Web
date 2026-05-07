export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    id: "head-it-apps",
    role: "Head of IT Apps & ERP",
    company: "PT Alita Praya Mitra",
    location: "Jakarta",
    period: "Jan 2023 – Present",
    current: true,
    description:
      "Leading the IT Application Department end-to-end. Built WMS Next-G and PM/PO Tools using Laravel + Next.JS + PostgreSQL. Operating Microsoft Dynamics 365 F&O. Led the AX 2012 → D365 FO migration. As a certified ISO 27001:2022 Internal Auditor, conducts ISMS audits, evaluates security controls, and ensures IT operations align with information security best practices.",
    highlights: ["Laravel", "Next.JS", "PostgreSQL", "Dynamics 365 F&O", "ISO 27001:2022"],
  },
  {
    id: "pmo-nationwide",
    role: "Project Management Officer — Nationwide",
    company: "PT Alita Praya Mitra",
    location: "Jakarta",
    period: "Apr 2021 – Jan 2023",
    current: false,
    description:
      "Drove project governance and reporting for nationwide XL Axiata network upgrade programs. Built dashboards on Google Workspace + Data Studio for delivery visibility.",
    highlights: ["PMO", "XL Axiata", "Google Looker Studio", "Power BI"],
  },
  {
    id: "regional-pm",
    role: "Regional Project Manager",
    company: "PT Alita Praya Mitra",
    location: "East Indonesia",
    period: "Jul 2020 – Apr 2021",
    current: false,
    description:
      "End-to-end execution of microwave transmission projects across East Java, Bali, NTB, Sulawesi, Maluku, and Papua.",
    highlights: ["Microwave", "Multi-province", "Project Delivery"],
  },
  {
    id: "project-coordinator",
    role: "Project Coordinator",
    company: "PT Alita Praya Mitra",
    location: "Sulawesi Region",
    period: "Dec 2016 – Jul 2020",
    current: false,
    description:
      "Coordinated microwave rollout across Sulawesi. Reviewed network plans (ERM/ECRF) with the design team. Ran ATP with customers and vendors.",
    highlights: ["Network Planning", "ATP", "Vendor Management"],
  },
  {
    id: "epm-crm-consultant",
    role: "EPM & CRM Junior Consultant",
    company: "Ignite Technology Pte Ltd",
    location: "Singapore / Jakarta",
    period: "May 2014 – Dec 2016",
    current: false,
    description:
      "Implemented Microsoft Project Online (EPM) and Dynamics CRM for clients including Cinemaxx Global Pasifik, NEC Asia Pacific, and Trimegah Securities.",
    highlights: ["MS Project Online", "Dynamics CRM", "Consulting"],
  },
  {
    id: "vsat-engineer",
    role: "VSAT Engineer",
    company: "PT Indo Pratama Teleglobal",
    location: "Nationwide",
    period: "Aug 2011 – Apr 2014",
    current: false,
    description:
      "Installed and maintained VSAT remote sites for the e-KTP and Rural BTS Indosat–INTI nationwide projects. Built monitoring tools using Cacti and WhatsUp Gold.",
    highlights: ["VSAT", "e-KTP", "Indosat", "Network Monitoring"],
  },
];
