import type { Metadata } from "next";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisvu.dev"),
  title: "Christopher Vu",
  description: "Personal website of Christopher Vu.",
  openGraph: {
    title: "Christopher Vu",
    description: "Personal website of Christopher Vu.",
    url: "/",
    siteName: "Christopher Vu",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Christopher Vu" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Vu",
    description: "Personal website of Christopher Vu.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
