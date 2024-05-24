import type { Metadata } from "next";
import "./globals.css";
import { fontBold, fontRegular, fontSemiBold, fontLight } from "@/functions/font";
import { UserProvider } from "@/context/user-context";

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
      <body className={`${fontBold.variable} ${fontRegular.variable} ${fontSemiBold.variable} ${fontLight.variable}`}>
        <UserProvider>
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
