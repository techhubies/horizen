import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const IbmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "300"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern  banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${IbmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
