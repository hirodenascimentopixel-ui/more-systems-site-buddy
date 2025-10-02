import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Lisboa",
      rating: 5,
      text: "Excelente serviço! A equipe foi muito profissional e o ar-condicionado ficou perfeito. Recomendo muito a MORE SYSTEMS!",
      service: "Instalação Residencial"
    },
    {
      name: "João Santos",
      location: "Porto",
      rating: 5,
      text: "Manutenção impecável! Chegaram no horário, fizeram uma limpeza completa e o aparelho está funcionando como novo.",
      service: "Manutenção Preventiva"
    },
    {
      name: "Ana Costa",
      location: "Coimbra",
      rating: 5,
      text: "Atendimento rápido e eficiente. Resolveram o problema do meu ar-condicionado no mesmo dia. Muito satisfeita!",
      service: "Manutenção Corretiva"
    },
    {
      name: "Pedro Oliveira",
      location: "Braga",
      rating: 5,
      text: "Fizeram a climatização completa da minha empresa. Projeto bem elaborado e execução perfeita. Equipe muito competente!",
      service: "Projeto Empresarial"
    },
    {
      name: "Sofia Rodrigues",
      location: "Faro",
      rating: 5,
      text: "Preço justo, trabalho de qualidade e garantia. Já indiquei para vários amigos e todos ficaram satisfeitos!",
      service: "Instalação Residencial"
    },
    {
      name: "Carlos Ferreira",
      location: "Setúbal",
      rating: 5,
      text: "Profissionais muito atenciosos e experientes. Explicaram tudo detalhadamente e deixaram o local impecável.",
      service: "Instalação Multi-Split"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-professional-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-cool-blue/20 mb-4" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Service Type */}
                <div className="mb-4 pb-4 border-b">
                  <span className="text-xs text-cool-blue bg-light-blue px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-cool-blue">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;