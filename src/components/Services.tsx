import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Settings, 
  Shield, 
  Building, 
  Home, 
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const services = [
    {
      icon: Settings,
      title: "Instalação de Ar-Condicionado",
      description: "Instalação completa de sistemas split, multi-split e centrais para residências e empresas.",
      features: [
        "Análise técnica do ambiente",
        "Instalação elétrica completa", 
        "Testes de funcionamento",
        "Garantia de 1 ano"
      ],
      type: "installation"
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Limpeza, higienização e manutenção regular para manter seu ar-condicionado sempre funcionando.",
      features: [
        "Limpeza dos filtros",
        "Higienização completa",
        "Verificação do gás refrigerante",
        "Relatório técnico"
      ],
      type: "maintenance"
    },
    {
      icon: Shield,
      title: "Manutenção Corretiva",
      description: "Reparo e conserto de equipamentos com diagnóstico preciso e peças originais.",
      features: [
        "Diagnóstico gratuito",
        "Peças originais",
        "Atendimento rápido",
        "Garantia dos serviços"
      ],
      type: "repair"
    },
    {
      icon: Building,
      title: "Projetos Empresariais",
      description: "Soluções completas de climatização para escritórios, lojas e estabelecimentos comerciais.",
      features: [
        "Projeto personalizado",
        "Sistema centralizado",
        "Controle inteligente",
        "Suporte técnico"
      ],
      type: "commercial"
    }
  ];

  const handleWhatsAppClick = (serviceType: string) => {
    const messages = {
      installation: "Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.",
      maintenance: "Olá! Gostaria de agendar uma manutenção preventiva do meu ar-condicionado.",
      repair: "Olá! Preciso de manutenção corretiva no meu ar-condicionado.",
      commercial: "Olá! Gostaria de um orçamento para climatização empresarial."
    };
    
    const message = messages[serviceType as keyof typeof messages] || messages.installation;
    window.open(`https://wa.me/351933778388?text=${encodeURIComponent(message)}`, "_blank");
  };

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-professional-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Settings className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            Soluções Completas em Ar-Condicionado
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços especializados com qualidade garantida para manter seu ambiente sempre no clima ideal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border-0 group">
              <CardHeader className="text-center pb-4">
                <div 
                  className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() => toggleService(index)}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-cool-blue mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {expandedService === index && (
                <CardContent className="space-y-6 animate-fade-in">
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full hover:border-cool-blue hover:text-cool-blue"
                    onClick={() => handleWhatsAppClick(service.type)}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-cool-blue mb-4">
              Precisa de atendimento especializado?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nossa equipe técnica está pronta para atender sua necessidade com agilidade e qualidade garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handleWhatsAppClick('installation')}
                className="text-lg px-8 py-6 bg-white text-cool-blue hover:bg-gray-50"
              >
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
              >
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;