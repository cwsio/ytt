import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Nondiscrimination Policy", href: "/legal/nondiscrimination" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Accessibility Statement", href: "/legal/accessibility" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="py-12 bg-[#0c1420]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-white/40 text-xs tracking-wide">
            © {currentYear} Yeshiva Tiferes Torah
          </p>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white/40 text-xs uppercase tracking-[0.15em] hover:text-white/70 transition-colors duration-300"
                data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
