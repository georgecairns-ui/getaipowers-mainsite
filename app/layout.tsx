import type { Metadata } from "next";
import { Zilla_Slab, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-zilla",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get AI Powers - We get people off the computer",
  description:
    "Businesses don't grow through a screen. They grow through relationships. Claude does the admin. You do the relationships. UK-based Claude training, coaching and implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${zilla.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <SmoothScroll>
          <Nav />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
