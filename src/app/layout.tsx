import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Ron Galang - Technical Assesment",
  description: "Created using next.js for technical assessment",
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
