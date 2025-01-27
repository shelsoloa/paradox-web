import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Paradox Intimates",
  description: "Paradox Intimates",
};

const nowFont = localFont({
  src: "./Now-Regular.otf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nowFont.className}>
      <body
        style={{
          backgroundImage: `url(/bg7.JPG)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
