import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import MobileMenu from "@/Components/Layout/MobileMenu";
// import Footer from "@/Components/MainPage/FAQF/Footer";


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
        <NextIntlClientProvider>
            <>
                <MobileMenu />
                {children}
            </>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
