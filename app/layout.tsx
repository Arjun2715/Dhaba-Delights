import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhaba Delight",
  description: "Delicious and Autentic Indian Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row justify-center ">
        <div className="w-[1200px]">
           <Header/>
        {children}
        
        </div>
       
        </body>
    </html>
  );
}
