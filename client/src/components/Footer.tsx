import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Nondiscrimination Policy", href: "/legal/nondiscrimination" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Accessibility Statement", href: "/legal/accessibility" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-navy mb-4">Yeshiva Tiferes Torah</h3>
            <p className="text-muted-foreground max-w-sm">
              Helping every boy uncover the greatness within him and develop into a productive ben Torah.
            </p>
          </div>
          <div className="md:text-right">
            <nav className="flex flex-col md:items-end space-y-3">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-navy hover:underline transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {currentYear} Yeshiva Tiferes Torah. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
