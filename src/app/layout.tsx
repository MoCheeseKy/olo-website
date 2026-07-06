import type { Metadata } from "next";
import { Manrope, Geist_Mono, Poppins } from "next/font/google";
import { Header, Footer } from "@/layouts";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OLO Website",
  description: "OLO website built with Next.js and Tailwind CSS",
};

import LayoutWrapper from "@/components/_shared/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-black text-black dark:text-white">
        <LayoutWrapper header={<Header />} footer={<Footer />}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

