import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Shield, CheckCircle, Target, Eye, Heart } from "lucide-react";
const About = () => {
  const stats = [{
    icon: Users,
    value: "500+",
    label: "Clientes Atendidos"
  }, {
    icon: Award,
    value: "5",
    label: "Anos de Experiência"
  }, {
    icon: Clock,
    value: "24h",
    label: "Suporte Técnico"
  }, {
    icon: Shield,
    value: "100%",
    label: "Garantia"
  }];
  const values = [{
    icon: Target,
    title: "Missão",
    description: "Proporcionar conforto térmico com soluções em ar-condicionado de alta qualidade, atendimento personalizado e técnicos especializados."
  }, {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em climatização residencial e empresarial, reconhecida pela excelência técnica e satisfação total dos clientes."
  }, {
    icon: Heart,
    title: "Valores",
    description: "Qualidade, confiança, transparência e comprometimento com o bem-estar e satisfação de nossos clientes."
  }];
  const differentials = ["Técnicos certificados e experientes", "Atendimento personalizado e ágil", "Peças originais e equipamentos de qualidade", "Orçamento transparente sem surpresas", "Garantia em todos os serviços", "Suporte técnico pós-instalação"];
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/351933778388?text=Olá! Gostaria de conhecer melhor os serviços da MORE SYSTEMS.", "_blank");
  };
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Sobre Nós</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            MORE SYSTEMS - Referência em Climatização
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde 2015 garantindo o conforto térmico das famílias portuguesas com excelência e dedicação
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-cool-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cool-blue mb-3 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials */}
        <Card className="bg-gradient-hero shadow-card border-0">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold text-cool-blue mb-8 text-center">
              Nossos Diferenciais
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                  <span className="text-foreground">{differential}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default About;