"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ParallaxProvider>
        <body>
          <Toaster />
          {children}
        </body>
      </ParallaxProvider>
    </html>
  );
}
