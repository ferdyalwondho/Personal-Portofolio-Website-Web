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
      "AppSheet & No-Code Solutions",
      "Google Looker & Data Studio",
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
  {
    id: "construction-renewables",
    title: "Construction & Renewable Energy",
    iconName: "Hammer",
    items: [
      "Residential Build Coordination",
      "Material Sourcing & Budgeting",
      "Contractor Coordination",
      "Solar PV Design & Sizing",
      "Battery Sizing & Integration",
      "Site Assessment & ROI Analysis",
    ],
  },
];
