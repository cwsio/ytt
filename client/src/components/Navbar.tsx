import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Parent Resources", href: "/parent-resources" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || isOpen 
          ? "bg-white py-5" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-between items-center">
        <Link 
          href="/" 
          className={cn(
            "font-serif text-lg md:text-xl tracking-tight transition-colors duration-300",
            scrolled || isOpen ? "text-[#0c1420]" : "text-white"
          )}
        >
          YTT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                scrolled 
                  ? "text-[#4a5568] hover:text-[#0c1420]" 
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-menu-toggle"
        >
          <span className={cn(
            "w-full h-[1px] transition-all duration-300 origin-left",
            scrolled || isOpen ? "bg-[#0c1420]" : "bg-white",
            isOpen && "rotate-45 translate-y-[1px]"
          )} />
          <span className={cn(
            "w-full h-[1px] transition-all duration-300",
            scrolled || isOpen ? "bg-[#0c1420]" : "bg-white",
            isOpen && "opacity-0"
          )} />
          <span className={cn(
            "w-full h-[1px] transition-all duration-300 origin-left",
            scrolled || isOpen ? "bg-[#0c1420]" : "bg-white",
            isOpen && "-rotate-45 -translate-y-[1px]"
          )} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white overflow-hidden transition-all duration-500 md:hidden",
        isOpen ? "max-h-64 border-b border-[#0c1420]/10" : "max-h-0"
      )}>
        <div className="px-8 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0c1420] text-lg font-serif"
              onClick={() => setIsOpen(false)}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
