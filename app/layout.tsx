import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Ismirti Bohara | Applied AI & CSIT",
  description:
    "BSc CSIT student at Padma Kanya Multiple Campus exploring applied AI, machine learning, and thoughtful software.",
  metadataBase: new URL("https://ismirtibohara.github.io"),
  openGraph: {
    title: "Ismirti Bohara | Applied AI & CSIT",
    description: "Projects, learning, and creative work by Ismirti Bohara.",
    url: "https://ismirtibohara.github.io/ismirti-portfolio/",
    siteName: "Ismirti Bohara",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ismirti Bohara | Applied AI & CSIT",
    description: "Projects, learning, and creative work by Ismirti Bohara.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#2f2923" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}