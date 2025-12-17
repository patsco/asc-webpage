import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    id: "home",
    label: "Hem"
  }, {
    id: "services",
    label: "Tjänster"
  }, {
    id: "om-mig",
    label: "Om mig"
  }, {
    id: "contact",
    label: "Kontakt"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection("home")} className="text-xl text-foreground hover:text-primary transition-colors font-semibold">Abiir Scott Rossi - utbildningsingenjör</button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary">
                {item.label}
              </Button>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className="w-full justify-start text-foreground hover:text-primary">
                {item.label}
              </Button>)}
          </div>
        </div>}
    </nav>;
};
export default Navigation;