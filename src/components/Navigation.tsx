"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-8">
      {/* Burger Menu Button */}
      <button
        className="md:hidden absolute right-4 top-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-primary transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Navigation Menu */}
      <ul
        className={`
          md:flex md:justify-center md:space-x-8
          ${isMenuOpen ? "flex" : "hidden"}
          flex-col md:flex-row
          absolute md:relative
          left-0 right-0 top-16 md:top-0
          bg-background/90 md:bg-transparent
          py-4 md:py-0
          space-y-4 md:space-y-0
          text-center
        `}
      >
        <li>
          <Link
            href="/#about"
            className="text-primary hover:text-primary/80 transition-colors block py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#education"
            className="text-primary hover:text-primary/80 transition-colors block py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            href="/#experience"
            className="text-primary hover:text-primary/80 transition-colors block py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="text-primary hover:text-primary/80 transition-colors block py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="text-primary hover:text-primary/80 transition-colors block py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
