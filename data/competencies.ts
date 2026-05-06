export type Competency = {
  id: string;
  title: string;
  iconName: string;
  items: string[];
};

export const competencies: Competency[] = [
  {
    id: "telecom",
    title: "Telecom & Network Engineering",
    iconName: "Radio",
    items: [
      "Microwave Transmission",
      "VSAT",
      "FTTH / Fiber",
      "XGS-PON / PPPoE",
      "Carrier-Grade Networks",
      "Network Rollout & ATP",
    ],
  },
  {
    id: "software",
    title: "Software & Platform Development",
    iconName: "Code2",
    items: [
      "PHP · Laravel",
      "Next.JS · React · TypeScript",
      "PostgreSQL · MySQL",
      "REST API",
      "Git",
      "Power BI & Data Visualization",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Systems & PM",
    iconName: "Layers",
    items: [
      "Microsoft Dynamics 365 F&O",
      "Microsoft Project Online (EPM)",
      "Microsoft Dynamics CRM",
      "ERP Integration",
      "PMO Governance",
      "Stakeholder Management",
    ],
  },
];
