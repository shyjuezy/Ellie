import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-primary text-primary-foreground py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Art Professional. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
