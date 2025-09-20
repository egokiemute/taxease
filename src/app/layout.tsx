import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Container from "@/components/commons/Container";
import { Analytics } from "@vercel/analytics/next";

// ✅ Load DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Nigeria 2025 Tax Calculator | Estimate Your Income Tax & Net Pay",
  description:
    "Free Nigeria 2025 tax calculator. Instantly estimate your income tax, deductions, and net salary. Stay informed with the latest tax reform updates.",
  keywords: [
    "Nigeria tax calculator 2025",
    "Nigeria income tax",
    "Nigeria tax reform 2025",
    "salary calculator Nigeria",
    "net pay calculator Nigeria",
    "income deductions Nigeria",
  ],
  authors: [{ name: "Okiemute Egokiphovwen" }],
  creator: "SightStudio",
  publisher: "South Circle",
  openGraph: {
    title: "Nigeria 2025 Tax Calculator | Estimate Your Income Tax & Net Pay",
    description:
      "Easily calculate your income tax in Nigeria for 2025. Enter your salary and side income to see your estimated tax and take-home pay.",
    url: "https://southcircle.cc/", // replace with your real domain
    siteName: "Nigeria Tax Calculator",
    images: [
      {
        url: "https://southcircle.cc/", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Nigeria 2025 Tax Calculator",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria 2025 Tax Calculator | Estimate Your Income Tax & Net Pay",
    description:
      "Free Nigeria 2026 tax calculator to estimate your income tax, deductions, and net salary instantly.",
    images: ["https://southcircle.cc/"], // replace with your OG image
    creator: "@egokiemute", // replace with your Twitter handle
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
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Container>{children}</Container>
        <Analytics />
      </body>
    </html>
  );
}
