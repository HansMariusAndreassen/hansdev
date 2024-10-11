"use client";

import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <SpotlightCursor /> */}
        <Toaster />
        {children}
      </body>
    </html>
  );
}
