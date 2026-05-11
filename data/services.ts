export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
};

export const services: Service[] = [
  {
    id: "web-erp",
    number: "01",
    title: "Web & Enterprise Apps",
    description:
      "Full-stack delivery (Laravel + Next.JS + PostgreSQL) and enterprise platform integration — Dynamics 365 F&O, AX migrations, EPM/CRM. From requirement to deployment, internal tools to data flows.",
    iconName: "Code2",
  },
  {
    id: "telecom-pmo",
    number: "02",
    title: "Telecom Project & PMO",
    description:
      "Microwave, VSAT, and FTTH project delivery — from regional rollout to nationwide PMO governance. Vendor coordination, ATP, and reporting.",
    iconName: "Radio",
  },
  {
    id: "construction-coordination",
    number: "03",
    title: "Residential Construction Consulting",
    description:
      "End-to-end coordination for home builds — budgeting, material sourcing, contractor work, and timeline tracking. Backed by hands-on experience taking a home build from the ground up — procurement, contractor coordination, and delivery, start to finish.",
    iconName: "Home",
  },
  {
    id: "solar-pv-battery",
    number: "04",
    title: "Solar PV & Battery Systems",
    description:
      "End-to-end solar for homes and workplaces — needs assessment, system sizing (PV + battery), site survey, ROI analysis, and installation. Built on an Electrical Engineering background, with systems designed around real usage and realistic payback.",
    iconName: "Sun",
  },
];
