import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import type React from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meredith Hataway",
  description: "Portfolio website for a stage manager and production manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} min-h-screen`}>
        <header className="fixed w-full bg-background/90 backdrop-blur-xs z-50 transition-all duration-300 ease-in-out">
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className="bg-primary text-primary-foreground py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Meredith Eliana Hataway. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
