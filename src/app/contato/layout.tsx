import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Agência Voxx. Solicite um orçamento e saiba como podemos fazer a sua marca crescer em Itapetininga e região.",
  openGraph: {
    title: "Contato | Agência Voxx Comunicação 360°",
    description:
      "Fale com a Voxx e dê o próximo passo no seu marketing. Atendemos Itapetininga e toda a região de SP.",
  },
  alternates: { canonical: "https://agenciavoxx.com.br/contato" },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
