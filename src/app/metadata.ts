import { Metadata } from "next";
import { companyConfig } from "@/lib/company-config";

const siteConfig = {
  name: companyConfig.name,
  description: "Internet rápida e estável por um preço justo",
  url: companyConfig.website,
  cnpj: companyConfig.cnpj,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "internet",
    "fibra óptica",
    "banda larga",
    "internet rápida",
    "wifi",
    "internet residencial",
    "internet empresarial",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yellowinternet",
  },
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}; 