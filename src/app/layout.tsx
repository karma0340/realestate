import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Portal",
  description: "Your premier destination for premium real estate listings.",
};

import Header from "@/components/layout/Header";
import SocialSidebar from "@/components/layout/SocialSidebar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="font-sans min-h-full flex flex-col bg-white text-slate-800 selection:bg-primary selection:text-white">
        <AuthProvider>
          <SocialSidebar />
          <Header />
          <main className="flex-grow pt-24 xl:pl-20">{children}</main>
          <div className="xl:pl-20">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
