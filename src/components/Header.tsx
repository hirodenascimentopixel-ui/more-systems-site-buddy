import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: "Início",
    href: "#home"
  }, {
    name: "Sobre",
    href: "#about"
  }, {
    name: "Serviços",
    href: "#services"
  }, {
    name: "Orçamento",
    href: "#quote"
  }, {
    name: "Contato",
    href: "#contact"
  }];
  const handleWhatsAppClick = () => {
    window.open("htts://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para ar-condicionado.", "_blank");
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-gray">MORE SISTEMS</h1>
              <p className="text-xs text-muted-foreground">Ar-condicionado</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <Button variant="hero" onClick={handleWhatsAppClick}>
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden transition-all duration-300 ease-in-out overflow-hidden", isMenuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0")}>
          <nav className="flex flex-col space-y-4 pt-4 border-t">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>)}
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <Button variant="hero" onClick={handleWhatsAppClick} className="w-full">
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;