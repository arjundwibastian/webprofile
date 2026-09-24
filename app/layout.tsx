import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Dwi Bastian | Backend Engineer",
  description: "Arjun Dwi Bastian's backend engineering portfolio: Go, PostgreSQL, REST APIs, gRPC, and hands-on IT systems experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
