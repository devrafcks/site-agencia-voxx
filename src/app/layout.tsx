import type { Metadata } from "next";
import { Besley, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "Agência Voxx | Marketing Digital 360° em Itapetininga SP",
    template: "%s | Agência Voxx",
  },
  description:
    "Agência de marketing digital 360° em Itapetininga SP. Gestão de redes sociais, identidade visual, tráfego pago (Google Ads e Meta Ads), produção de conteúdo e assessoria de imprensa. Resultados reais para sua empresa.",
  keywords: [
    "agência de marketing digital Itapetininga",
    "agência de marketing Itapetininga SP",
    "marketing digital Itapetininga",
    "gestão de redes sociais Itapetininga",
    "tráfego pago Itapetininga",
    "Google Ads Itapetininga",
    "Meta Ads Itapetininga",
    "identidade visual Itapetininga",
    "branding Itapetininga",
    "agência de publicidade Itapetininga",
    "criação de logotipo Itapetininga",
    "produção de conteúdo para redes sociais",
    "assessoria de imprensa Itapetininga",
    "marketing 360 São Paulo",
    "agência digital interior SP",
    "comunicação empresarial Itapetininga",
    "Voxx Comunicação 360",
    "Agência Voxx",
    "marketing para pequenas empresas SP",
    "crescimento de marca digital",
  ],
  authors: [{ name: "Voxx Comunicação 360", url: siteUrl }],
  creator: "Voxx Comunicação 360",
  publisher: "Voxx Comunicação 360",
  verification: {
    google: "zqJqfKXjjy3I84lh1srpXjfly3d64RkfXBUUW4pj-eQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Agência Voxx",
    title: "Agência Voxx | Marketing Digital 360° em Itapetininga SP",
    description:
      "Agência 360° especializada em gestão de redes sociais, identidade visual, tráfego pago, produção de conteúdo e assessoria de imprensa. Resultados reais para sua empresa.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Agência Voxx — Marketing Digital 360°",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Voxx | Marketing Digital 360° em Itapetininga SP",
    description:
      "Gestão de redes sociais, tráfego pago, branding e identidade visual. Itapetininga, SP.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": `${siteUrl}/#organization`,
  name: "Voxx Comunicação 360",
  alternateName: "Agência Voxx",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo-white.png`,
    width: 300,
    height: 60,
  },
  image: `${siteUrl}/android-chrome-512x512.png`,
  description:
    "Agência de marketing digital 360° em Itapetininga SP, especializada em gestão de redes sociais, identidade visual, tráfego pago, produção de conteúdo e assessoria de imprensa.",
  telephone: "+55-15-99727-3323",
  email: "contato@agenciavoxx.com.br",
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
  areaServed: [
    { "@type": "City", name: "Itapetininga" },
    { "@type": "State", name: "São Paulo" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Marketing Digital e Comunicação",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestão de Redes Sociais", url: `${siteUrl}/servicos` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Identidade Visual & Branding", url: `${siteUrl}/servicos` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tráfego Pago — Google Ads e Meta Ads", url: `${siteUrl}/servicos` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Produção de Fotos e Vídeos", url: `${siteUrl}/servicos` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planejamento Estratégico de Conteúdo", url: `${siteUrl}/servicos` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assessoria de Imprensa", url: `${siteUrl}/servicos` } },
    ],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Agência Voxx",
  url: siteUrl,
  description: "Agência de marketing digital 360° em Itapetininga SP.",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/projetos?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdSiteNav = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Navegação Principal — Agência Voxx",
  itemListElement: [
    { "@type": "SiteLinksSearchBox", url: siteUrl },
    { "@type": "ListItem", position: 1, name: "Início", url: siteUrl },
    { "@type": "ListItem", position: 2, name: "Serviços", url: `${siteUrl}/servicos` },
    { "@type": "ListItem", position: 3, name: "Sobre", url: `${siteUrl}/sobre` },
    { "@type": "ListItem", position: 4, name: "Projetos", url: `${siteUrl}/projetos` },
    { "@type": "ListItem", position: 5, name: "Contato", url: `${siteUrl}/contato` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${besley.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSiteNav) }}
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
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
