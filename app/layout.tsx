import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industrial Lead Generation for Manufacturers | Operations Pipeline",
  description:
    "Structured, conservative lead generation support for manufacturing teams. Focused on qualified RFQs, predictable inquiries, and the right buyer contacts.",
  openGraph: {
    title: "Industrial Lead Generation for Manufacturers",
    description:
      "Support for operations, engineering, and procurement teams that need consistent, qualified inbound manufacturing inquiries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
