import { Metadata } from "next";

const siteUrl = "https://agenciavoxx.com.br";

export const metadata: Metadata = {
  title: "Portfólio e Projetos",
  description:
    "Cases e projetos reais da Agência Voxx: branding, gestão de redes sociais, campanhas de tráfego pago, identidade visual e produção de conteúdo. Veja como transformamos marcas em Itapetininga SP e região.",
  keywords: [
    "portfólio agência de marketing Itapetininga",
    "cases de marketing digital",
    "projetos de branding SP",
    "resultados de gestão de redes sociais",
    "campanhas de tráfego pago cases",
    "identidade visual criada em Itapetininga",
    "exemplos de marketing para empresas",
    "trabalhos agência Voxx",
    "cases de comunicação 360",
    "portfólio agência digital interior SP",
  ],
  openGraph: {
    type: "website",
    title: "Portfólio | Projetos Reais da Agência Voxx",
    description:
      "Cases de branding, redes sociais, tráfego pago e identidade visual. Resultados mensuráveis para marcas de diferentes segmentos.",
    url: `${siteUrl}/projetos`,
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Portfólio Agência Voxx" }],
  },
  alternates: { canonical: `${siteUrl}/projetos` },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Projetos", item: `${siteUrl}/projetos` },
  ],
};

const jsonLdPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/projetos/#webpage`,
  url: `${siteUrl}/projetos`,
  name: "Portfólio de Projetos — Agência Voxx",
  description:
    "Cases reais de branding, gestão de redes sociais, tráfego pago e identidade visual da Agência Voxx em Itapetininga SP.",
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${siteUrl}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Projetos", item: `${siteUrl}/projetos` },
    ],
  },
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }}
      />
      {children}
    </>
  );
}
