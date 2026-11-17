import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ismirti Bohara | Applied AI & CSIT",
  description: "BSc CSIT student at Padma Kanya Multiple Campus exploring applied AI, machine learning, and thoughtful software.",
  metadataBase: new URL("https://ismirtibohara.github.io"),
  openGraph: {
    title: "Ismirti Bohara | Applied AI & CSIT",
    description: "Projects, learning, and creative work by Ismirti Bohara.",
    url: "https://ismirtibohara.github.io/ismirti-portfolio/",
    siteName: "Ismirti Bohara",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f2923",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
