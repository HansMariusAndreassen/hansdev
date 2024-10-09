"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ParallaxProvider>
        <body>{children}</body>
      </ParallaxProvider>
    </html>
  );
}
