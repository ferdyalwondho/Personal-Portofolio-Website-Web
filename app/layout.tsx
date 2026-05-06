import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ferdy-alwondho.my.id"
  ),
  title: "Ferdy Alwondho — Head of IT Apps & Integration",
  description:
    "Head of IT Apps & Integration with 13+ years across project management, PMO, telecom infrastructure, ERP migrations, and full-stack web development. Based in Jakarta, Indonesia.",
  keywords: [
    "Ferdy Alwondho",
    "Head of IT",
    "IT Integration",
    "Project Manager",
    "PMO",
    "Dynamics 365",
    "ERP",
    "Laravel",
    "Next.js",
    "Telecom",
    "Jakarta",
  ],
  authors: [{ name: "Ferdy Alwondho", url: "https://ferdy-alwondho.my.id" }],
  openGraph: {
    title: "Ferdy Alwondho — Head of IT Apps & Integration",
    description:
      "13+ years across PM, PMO, telecom rollouts, ERP migrations, and full-stack app delivery. Based in Jakarta, working globally.",
    url: "https://ferdy-alwondho.my.id",
    siteName: "Ferdy Alwondho Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ferdy Alwondho Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdy Alwondho — Head of IT Apps & Integration",
    description:
      "13+ years across PM, PMO, telecom rollouts, ERP migrations, and full-stack app delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ferdy-alwondho.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
