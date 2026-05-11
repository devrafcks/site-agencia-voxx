import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Gestão de redes sociais, identidade visual, produção de conteúdo, tráfego pago, planejamento estratégico e assessoria de imprensa. Comunicação 360° para a sua marca.",
  openGraph: {
    title: "Serviços | Agência Voxx Comunicação 360°",
    description:
      "Soluções completas de comunicação e marketing para crescimento real: redes sociais, branding, tráfego pago, fotos, vídeos e imprensa.",
  },
  alternates: { canonical: "https://agenciavoxx.com.br/servicos" },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
