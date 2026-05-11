import type { Metadata } from "next";
import { Besley, DM_Sans } from "next/font/google";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-besley",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://agenciavoxx.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agência Voxx | Comunicação 360° em Itapetininga SP",
    template: "%s | Agência Voxx",
  },
  description:
    "Agência 360° especializada em gestão de redes sociais, identidade visual, tráfego pago, produção de conteúdo e assessoria de imprensa. Itapetininga, São Paulo.",
  keywords: [
    "agência de marketing Itapetininga",
    "gestão de redes sociais",
    "comunicação 360",
    "identidade visual",
    "tráfego pago",
    "marketing digital SP",
    "branding Itapetininga",
    "agência de publicidade",
    "produção de conteúdo",
    "assessoria de imprensa",
    "Voxx Comunicação",
  ],
  authors: [{ name: "Voxx Comunicação 360" }],
  creator: "Voxx Comunicação 360",
  publisher: "Voxx Comunicação 360",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Agência Voxx",
    title: "Agência Voxx | Comunicação 360° em Itapetininga SP",
    description:
      "Agência 360° especializada em gestão de redes sociais, identidade visual, tráfego pago, produção de conteúdo e assessoria de imprensa.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Agência Voxx — Comunicação 360°",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Agência Voxx | Comunicação 360°",
    description:
      "Agência 360° especializada em gestão de redes sociais, identidade visual e tráfego pago. Itapetininga, SP.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Voxx Comunicação 360",
  alternateName: "Agência Voxx",
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  image: `${siteUrl}/android-chrome-512x512.png`,
  description:
    "Agência 360° especializada em comunicação estratégica, gestão de redes sociais, identidade visual, tráfego pago e assessoria de imprensa.",
  telephone: "+55-15-99727-3323",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Dom Joaquim, 307",
    addressLocality: "Itapetininga",
    addressRegion: "SP",
    postalCode: "18200-090",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5916,
    longitude: -48.0531,
  },
  sameAs: [
    "https://www.instagram.com/agenciavoxx/",
    "https://www.facebook.com/agenciavoxx",
    "https://www.linkedin.com/company/ag%C3%AAnciavoxx/",
  ],
  areaServed: {
    "@type": "State",
    name: "São Paulo",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Comunicação e Marketing",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestão de Redes Sociais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Identidade Visual & Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Produção de Fotos e Vídeos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planejamento Estratégico de Conteúdo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tráfego Pago & Métricas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assessoria de Imprensa" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${besley.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-dark antialiased">
        <LoadingScreen />
        <Navbar />
        <main id="seeb-content-wrapper" className="flex-1 flex flex-col relative">
          {children}
        </main>
        <Footer />
        <AccessibilityWidget />
        <WhatsAppButton />
      </body>
    </html>
  );
}
