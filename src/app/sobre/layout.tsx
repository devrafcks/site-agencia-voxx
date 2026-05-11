import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Voxx Comunicação 360 — agência criativa fundada em 2019 em Itapetininga, SP, especializada em soluções estratégicas de marketing e comunicação.",
  openGraph: {
    title: "Sobre a Agência Voxx | Comunicação 360°",
    description:
      "Agência 360° parceira do seu crescimento. Design, marketing e tecnologia integrados para resultados reais.",
  },
  alternates: { canonical: "https://agenciavoxx.com.br/sobre" },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
