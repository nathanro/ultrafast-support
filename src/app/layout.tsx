import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "UltraFast Support - WordPress Care & IT Services",
  description:
    "Professional WordPress maintenance and AI-powered IT services. Keep your site fast, secure, and ahead of the curve.",
  openGraph: {
    title: "UltraFast Support",
    description: "WordPress Care & AI-Powered IT Services",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
