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
  weight: ["700", "900"],
  variable: "--font-besley",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voxx | Agência de Comunicação",
  description: "Estratégia, criatividade e tecnologia integradas para gerar resultados reais para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${besley.variable} ${dmSans.variable}`}>
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


