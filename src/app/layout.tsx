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
  verification: {
    google: "jEB4iUD-CW9yF3F49k2TEc2ZtGdy_g0cau7hFJjlRL8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://slvbanquethalls.com",
    siteName: "SLV Banquet Halls",
    title: "SLV Banquet Halls - Premium Event Venue",
    description: "Book your perfect event at SLV Banquet Halls. Elegant venue for weddings, corporate events, and celebrations.",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 630,
        alt: "SLV Banquet Halls",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLV Banquet Halls - Premium Event Venue",
    description: "Book your perfect event at SLV Banquet Halls.",
    images: ["http://slvbanquethalls.com/og-image.jpg"],
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
