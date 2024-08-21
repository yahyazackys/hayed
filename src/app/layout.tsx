import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import WhatsappButton from "./components/WhatsappButton";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayed Consulting",
  description: "Hayed Consulting",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo-icon.png" className="w-full" />
      <body className={`${raleway.className} bg-white`}>
        <AuthProvider>{children}</AuthProvider>
        <WhatsappButton />
      </body>
    </html>
  );
}
