import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LgiMorales | Produção Audiovisual & Estratégia Digital",
    template: "%s | LgiMorales",
  },
  description:
    "Produção audiovisual, estratégia digital e posicionamento de marca para empreendedores e profissionais liberais. Transforme sua presença online.",
  keywords: [
    "produção audiovisual",
    "estratégia digital",
    "posicionamento de marca",
    "fotografia",
    "vídeo",
    "gestão de redes sociais",
    "branding",
    "identidade visual",
  ],
  authors: [{ name: "LgiMorales" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LgiMorales",
    title: "LgiMorales | Produção Audiovisual & Estratégia Digital",
    description:
      "Transforme sua presença online com produção audiovisual profissional e estratégia digital sob medida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
