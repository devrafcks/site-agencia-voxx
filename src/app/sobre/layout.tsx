import { Metadata } from "next";

const siteUrl = "https://agenciavoxx.com.br";

export const metadata: Metadata = {
  title: "Sobre a Agência Voxx",
  description:
    "Conheça a Voxx Comunicação 360 — agência de marketing digital fundada em 2019 em Itapetininga SP. Time especializado em branding, redes sociais, tráfego pago e comunicação estratégica para empresas que querem crescer.",
  keywords: [
    "sobre a Agência Voxx",
    "quem somos Voxx",
    "Voxx Comunicação 360 Itapetininga",
    "agência de marketing fundada 2019",
    "equipe de marketing digital SP",
    "história da Agência Voxx",
    "empresa de comunicação Itapetininga",
    "valores agência de marketing",
    "parceria em marketing digital",
  ],
  openGraph: {
    type: "website",
    title: "Sobre a Agência Voxx | Comunicação 360° em Itapetininga SP",
    description:
      "Conheça quem está por trás das estratégias. Fundada em 2019, a Voxx une design, marketing e tecnologia para crescer marcas de verdade.",
    url: `${siteUrl}/sobre`,
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Sobre a Agência Voxx" }],
  },
  alternates: { canonical: `${siteUrl}/sobre` },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Sobre", item: `${siteUrl}/sobre` },
  ],
};

const jsonLdAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/sobre/#webpage`,
  url: `${siteUrl}/sobre`,
  name: "Sobre a Agência Voxx — Comunicação 360°",
  description:
    "Conheça a história, os valores e a equipe da Voxx Comunicação 360, agência de marketing digital em Itapetininga SP desde 2019.",
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Sobre", item: `${siteUrl}/sobre` },
    ],
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAboutPage) }}
      />
      {children}
    </>
  );
}
