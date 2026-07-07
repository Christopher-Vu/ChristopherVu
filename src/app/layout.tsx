import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Vu",
  description: "Personal website of Christopher Vu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
