import { ThemeProvider } from "@/app/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./custom.css";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s — Marcello Silvestri",
    default: "Marcello Silvestri",
  },
  description: "Marcello Silvestri's website. Marcello is a part-time CTO with a background as a full stack web developer and digital marketer.",
  alternates: {
    canonical: process.env.SITE_URL,
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const PostHogPageView = dynamic(() => import("./components/postHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <PHProvider>
        <body className="antialiased tracking-tighter font-sans text-slate-900 dark:text-slate-50 bg-white dark:bg-slate-900 flex flex-col min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <PostHogPageView />
            {children}
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
