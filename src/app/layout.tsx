import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seoKeywords } from "@/config/keywords";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Banquet Hall - Premium Event Venue",
  description: "Book your perfect event at Royal Banquet Hall. Elegant venue for weddings, corporate events, and celebrations.",
  keywords: seoKeywords,
  authors: [{ name: "Royal Banquet Hall" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://royalbanquethall.com",
    siteName: "Royal Banquet Hall",
    title: "SLV Banquet HallS - Premium Event Venue",
    description: "Book your perfect event at Royal Banquet Hall. Elegant venue for weddings, corporate events, and celebrations.",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 630,
        alt: "Royal Banquet Hall",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Banquet Hall - Premium Event Venue",
    description: "Book your perfect event at Royal Banquet Hall.",
    images: ["https://royalbanquethall.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
