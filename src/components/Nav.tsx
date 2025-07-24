import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated order to match the actual layout in Main.tsx
  const navComponents = [
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative z-50 w-full">
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#top"
              className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="heading-gradient">David Nagarpowers</span>
            </a>
          </div>

          {/* Desktop Navigation - Glass Morphism Style */}
          <div className="hidden md:block">
            <div className="glass-card rounded-full px-6 py-2 border">
              <div className="flex items-center space-x-1">
                {navComponents.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-accent/20 hover:backdrop-blur-sm relative overflow-hidden"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-card p-2 rounded-lg hover:bg-accent/30 transition-all duration-300 border"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out",
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          )}
        >
          <div className="glass-card mx-4 rounded-xl border shadow-xl shadow-primary/10">
            <div className="p-4">
              <div className="flex flex-col space-y-1">
                {navComponents.map((item) => (
                  <button
                    key={item.name}
                    className="nav-link text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-accent/20 transition-all duration-300 border border-transparent hover:border-border/30"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
