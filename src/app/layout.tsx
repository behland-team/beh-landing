import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Layout/Header";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/Components/Layout/Footer";


export const metadata: Metadata = {
  title: "Behland-بهلند",
  description: "learning and experimenting with Finance, AI, and Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
