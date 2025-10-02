import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-ac-installation.jpg";
const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.", "_blank");
  };
  const handleCallClick = () => {
    window.open("tel:+5511999999999", "_blank");
  };
  const features = [{
    icon: CheckCircle,
    text: "Técnicos certificados"
  }, {
    icon: Clock,
    text: "Atendimento rápido"
  }, {
    icon: Award,
    text: "Garantia de qualidade"
  }];
  return <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Instalação profissional de ar-condicionado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-cool-blue" />
                <span className="text-sm font-medium text-cool-blue">Empresa especializada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cool-blue leading-tight text-center">
                MOORE SISTEMS
                <br />
                Ar-condicionado com qualidade
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Instalação e manutenção de ar-condicionado para residências e empresas. 
                Atendimento especializado com garantia e confiança.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="w-5 h-5 text-success-green" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            

            {/* Trust indicators */}
            
          </div>

          {/* Right side - additional visual space for larger screens */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>;
};
export default Hero;