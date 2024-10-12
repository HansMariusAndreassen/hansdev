import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Hans Marius Andreassen",
  description: "A developers portfolio",
  metadataBase: new URL("https://hansmarius.dev"),
  openGraph: {
    title: "Hans Marius Andreassen",
    description: "A developers portfolio",
    url: "https://hansmarius.dev",
    siteName: "hansmarius.dev",
    images: [
      {
        url: "/portrait.jpeg",
        width: 600,
        height: 315,
        alt: "Portrait of Hans Marius Andreassen",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hansmarius.dev",
    description: "A portfolio of Hans Marius Andreassen",
    images: ["/portrait.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-48x48.png"
          type="image/png"
          sizes="48x48"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
