import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from './components/Navbar';
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  );
}
