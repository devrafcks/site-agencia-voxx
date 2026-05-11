import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Portfólio da Agência Voxx: cases de branding, gestão de redes sociais, campanhas digitais e identidade visual para marcas de diversos segmentos.",
  openGraph: {
    title: "Portfólio | Agência Voxx Comunicação 360°",
    description:
      "Cases reais de crescimento: branding, redes sociais, campanhas e muito mais.",
  },
  alternates: { canonical: "https://agenciavoxx.com.br/projetos" },
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
