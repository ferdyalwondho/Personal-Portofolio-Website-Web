export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
};

export const services: Service[] = [
  {
    id: "web-app",
    number: "01",
    title: "Web App Development",
    description:
      "Full-stack delivery using Laravel + Next.JS + PostgreSQL. From requirement to deployment. Best fit for internal tools, ERP companions, and operational dashboards.",
    iconName: "Code2",
  },
  {
    id: "erp-integration",
    number: "02",
    title: "ERP & Platform Integration",
    description:
      "Microsoft Dynamics 365 F&O operation, AX migrations, EPM/CRM rollouts. Connecting platforms, fixing the gaps, owning the data flow.",
    iconName: "Layers",
  },
  {
    id: "telecom-pmo",
    number: "03",
    title: "Telecom Project & PMO",
    description:
      "Microwave, VSAT, and FTTH project delivery — from regional rollout to nationwide PMO governance. Vendor coordination, ATP, and reporting.",
    iconName: "Radio",
  },
];
