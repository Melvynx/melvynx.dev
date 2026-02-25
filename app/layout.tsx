import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { GeistPixelGrid } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melvyn Malherbe - Software Engineer",
  description: "Software engineer and entrepreneur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          GeistPixelGrid.variable,
          GeistSans.variable,
          GeistMono.variable,
          lora.variable,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
