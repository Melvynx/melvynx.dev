import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="motion-safe:scroll-smooth">
      <body
        className={clsx(
          GeistSans.className,
          GeistMono.variable,
          "bg-white text-neutral-900 antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
