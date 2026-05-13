import { Metadata } from "next";

const siteUrl = "https://agenciavoxx.com.br";

export const metadata: Metadata = {
  title: "Serviços de Marketing Digital",
  description:
    "Gestão de redes sociais, identidade visual e branding, tráfego pago (Google Ads e Meta Ads), produção de fotos e vídeos, planejamento estratégico de conteúdo e assessoria de imprensa. Marketing 360° para sua empresa crescer em Itapetininga SP e região.",
  keywords: [
    "serviços de marketing digital Itapetininga",
    "gestão de redes sociais para empresas",
    "criação de identidade visual SP",
    "tráfego pago Google Ads Meta Ads",
    "produção de conteúdo para Instagram",
    "assessoria de imprensa Itapetininga",
    "planejamento estratégico de marketing",
    "branding para empresas SP",
    "produção de vídeo para redes sociais",
    "gerenciamento de Instagram empresa",
    "agência de tráfego pago interior SP",
    "quanto custa gestão de redes sociais",
    "pacote de marketing digital para empresa",
  ],
  openGraph: {
    type: "website",
    title: "Serviços de Marketing Digital | Agência Voxx Itapetininga SP",
    description:
      "Soluções completas: gestão de redes sociais, branding, Google Ads, Meta Ads, produção de conteúdo e assessoria de imprensa. Tudo integrado para crescimento real.",
    url: `${siteUrl}/servicos`,
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Serviços Agência Voxx" }],
  },
  alternates: { canonical: `${siteUrl}/servicos` },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Serviços", item: `${siteUrl}/servicos` },
  ],
};

const jsonLdServicesPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/servicos/#webpage`,
  url: `${siteUrl}/servicos`,
  name: "Serviços de Marketing Digital — Agência Voxx",
  description:
    "Gestão de redes sociais, identidade visual, tráfego pago, produção de conteúdo e assessoria de imprensa em Itapetininga SP.",
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${siteUrl}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${siteUrl}/servicos` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Gestão de Redes Sociais", url: `${siteUrl}/servicos` },
      { "@type": "ListItem", position: 2, name: "Identidade Visual & Branding", url: `${siteUrl}/servicos` },
      { "@type": "ListItem", position: 3, name: "Tráfego Pago — Google Ads e Meta Ads", url: `${siteUrl}/servicos` },
      { "@type": "ListItem", position: 4, name: "Produção de Fotos e Vídeos", url: `${siteUrl}/servicos` },
      { "@type": "ListItem", position: 5, name: "Planejamento Estratégico de Conteúdo", url: `${siteUrl}/servicos` },
      { "@type": "ListItem", position: 6, name: "Assessoria de Imprensa", url: `${siteUrl}/servicos` },
    ],
  },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServicesPage) }}
      />
      {children}
    </>
  );
}
