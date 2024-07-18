import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Soares",
  description: "🚀Apaixonado pelo desenvolvimento web, sou formado em TI pelo Instituto Federal de Educação Ciência e Tecnologia da Bahia (IFBA), antigo CEFET. Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da minha zona de conforto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
