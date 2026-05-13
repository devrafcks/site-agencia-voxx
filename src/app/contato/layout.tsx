import { Metadata } from "next";

const siteUrl = "https://agenciavoxx.com.br";

export const metadata: Metadata = {
  title: "Fale com a Agência Voxx",
  description:
    "Entre em contato com a Agência Voxx e solicite um orçamento. Atendemos empresas em Itapetininga SP e região com soluções de marketing digital 360°. Resposta em até 24h úteis.",
  keywords: [
    "contato agência de marketing Itapetininga",
    "orçamento marketing digital SP",
    "contratar agência de marketing Itapetininga",
    "falar com agência de publicidade",
    "solicitar orçamento gestão redes sociais",
    "orçamento tráfego pago Google Ads",
    "contratar branding Itapetininga",
    "agência de marketing próxima a mim",
    "telefone agência Voxx",
  ],
  openGraph: {
    type: "website",
    title: "Contato | Solicite um Orçamento — Agência Voxx Itapetininga SP",
    description:
      "Fale com a equipe da Voxx e descubra como podemos transformar a presença digital da sua marca. Resposta rápida, atendimento personalizado.",
    url: `${siteUrl}/contato`,
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Contato Agência Voxx" }],
  },
  alternates: { canonical: `${siteUrl}/contato` },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Contato", item: `${siteUrl}/contato` },
  ],
};

const jsonLdContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contato/#webpage`,
  url: `${siteUrl}/contato`,
  name: "Contato — Agência Voxx",
  description: "Entre em contato com a Agência Voxx para orçamentos e parcerias em marketing digital.",
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contato", item: `${siteUrl}/contato` },
    ],
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContactPage) }}
      />
      {children}
    </>
  );
}
