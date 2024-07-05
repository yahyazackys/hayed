import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayed Consulting",
  description: "Hayed Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo-white.png" className="object-cover" />
      <body className={`${raleway.className} bg-white`}>{children}</body>
    </html>
  );
}
