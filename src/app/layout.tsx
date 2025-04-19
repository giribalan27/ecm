import type { Metadata } from "next";
import {DM_Sans} from "next/font/google"
import "./globals.css";
import React from "react";

const dmSans = DM_Sans({
  subsets : ['latin']
})
export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Host you own store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
