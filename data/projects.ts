export type Project = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  gradient: string;
  iconName: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "wms-next-g",
    title: "WMS Next-G",
    period: "Feb 2025 – Jun 2025",
    role: "PM & PO · Full-stack Developer",
    description:
      "Built a Warehouse Management System from scratch using Laravel, Next.JS, and PostgreSQL. End-to-end ownership from requirement to deployment.",
    tags: ["Laravel", "Next.JS", "PostgreSQL", "PM/PO"],
    gradient: "from-lime-500/20 to-emerald-700/20",
    iconName: "Package",
  },
  {
    id: "pm-tools-v2",
    title: "PM Tools & PO Management V2",
    period: "Jun 2024 – Dec 2024",
    role: "PM & PO · Full-stack Developer",
    description:
      "Upgraded internal project & purchase order management platform. Full lifecycle ownership — from redesign to rollout.",
    tags: ["Laravel", "Next.JS", "Internal Platform"],
    gradient: "from-blue-500/20 to-cyan-700/20",
    iconName: "LayoutDashboard",
  },
  {
    id: "d365-migration",
    title: "AX 2012 → Dynamics 365 FO Migration",
    period: "Oct 2023 – Feb 2024",
    role: "Project Lead · ERP Consultant",
    description:
      "Led full ERP migration from AX 2012 to Dynamics 365 F&O including data migration, module configuration, and UAT sign-off.",
    tags: ["ERP", "Microsoft D365", "Migration"],
    gradient: "from-violet-500/20 to-purple-700/20",
    iconName: "Database",
  },
  {
    id: "xl-nationwide-upgrade",
    title: "XL Axiata Nationwide Upgrade",
    period: "Jan 2022 – Jan 2023",
    role: "PMO · Program Manager",
    description:
      "PMO for two consecutive nationwide microwave upgrade programs (H1 & H2) spanning hundreds of sites across Indonesia.",
    tags: ["PMO", "Microwave", "Nationwide"],
    gradient: "from-orange-500/20 to-red-700/20",
    iconName: "Radio",
  },
  {
    id: "xl-east-rollout",
    title: "XL New Site Rollout — East Region",
    period: "Sep 2020 – May 2021",
    role: "Regional Project Manager",
    description:
      "Regional PM for new site rollout across East Java, Sulawesi, Bali, and Nusa Tenggara. Coordinated vendors, ATP, and reporting.",
    tags: ["Project Management", "Rollout", "Multi-province"],
    gradient: "from-amber-500/20 to-yellow-700/20",
    iconName: "MapPin",
  },
  {
    id: "epm-cinemaxx",
    title: "Microsoft Project Online (EPM) Deployment",
    period: "Jan 2016 – Aug 2016",
    role: "Junior Consultant",
    description:
      "Supported full EPM deployment for PT Cinemaxx Global Pasifik, including system configuration, data migration, and end-user training.",
    tags: ["EPM", "Microsoft", "Consulting"],
    gradient: "from-rose-500/20 to-pink-700/20",
    iconName: "FolderKanban",
  },
];
