import type { Metadata } from "next";
import { Archivo_Black, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// TODO: Replace Archivo Black with "Agressive" display font once font files are licensed and available.
const archivoblack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nocheck.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: "NoCheck — Enterprise Payment Platform",
  description:
    "Replace paper checks with instant digital disbursements. Trusted by Aflac, AT&T, and leading institutions to move billions securely, instantly, and at scale.",
  keywords: [
    "digital payments",
    "enterprise payment platform",
    "check replacement",
    "ACH payments",
    "FedNow",
    "payment disbursement",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nocheck.com",
    siteName: "NoCheck",
    title: "NoCheck — Enterprise Payment Platform",
    description:
      "Replace paper checks with instant digital disbursements. Trusted by Aflac, AT&T, and leading institutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoCheck — Enterprise Payment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoCheck — Enterprise Payment Platform",
    description:
      "Replace paper checks with instant digital disbursements. Trusted by Aflac, AT&T, and leading institutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoblack.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
