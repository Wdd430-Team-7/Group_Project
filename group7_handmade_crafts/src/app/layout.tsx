
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A place for artists to showcase their work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    
   
  );
}
