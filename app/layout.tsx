import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Periodic Table",
  description: "Easy Chem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/pngwing.com.png" />
        <link href="https://fonts.cdnfonts.com/css/ocr-a-std" rel="stylesheet" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
