import { Link } from "wouter";
import { useState, useEffect } from "react";

/**
 * Header Component - Apple Style
 * Minimalist navigation with clean, simple design
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <span className="font-semibold text-lg text-foreground">
              Portfolio
            </span>
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#about">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </Link>
          <Link href="/#projects">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
          </Link>
          <Link href="/#skills">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
          </Link>
          <Link href="/#contact">
            <a className="text-sm text-accent hover:opacity-80 transition-opacity font-medium">
              Contact
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
