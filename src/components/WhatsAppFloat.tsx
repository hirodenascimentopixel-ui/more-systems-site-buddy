import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre serviços de ar-condicionado.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-dark-gray text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-dark-gray"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;