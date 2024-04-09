import type { Metadata } from "next";
import "./globals.css";
import { fontBold, fontRegular } from "@/functions/font";

export const metadata: Metadata = {
  title: "Game das Virtudes",
  description: "Game das Virtudes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontBold.variable} ${fontRegular.variable} `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
