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
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de conhecer melhor os serviços da MORE SISTEMS.", "_blank");
  };
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Sobre Nós</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4 text-center">
            Conheça a MORE SISTEMS
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialistas em ar-condicionado com compromisso em oferecer o melhor atendimento e soluções para seu conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cool-blue mb-4">
              Nossa História
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">A MOORE SISTEMS nasceu da paixão por proporcionar conforto térmico com qualidade e confiança. Com mais de 5 anos de experiência, nossa equipe especializada atende residências e empresas com soluções personalizadas em climatização.</p>
            
            <p className="text-muted-foreground leading-relaxed">
              Nosso compromisso vai além da instalação: oferecemos um relacionamento duradouro, 
              com manutenção preventiva e suporte técnico para garantir que seu ar-condicionado 
              funcione sempre com máxima eficiência.
            </p>

            {/* Differentials */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cool-blue">Nossos Diferenciais:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {differentials.map((differential, index) => <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{differential}</span>
                  </div>)}
              </div>
            </div>

            <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => <Card key={index} className="bg-gradient-card shadow-card border-0 text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cool-blue mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <Card key={index} className="bg-gradient-card shadow-card border-0 text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-cool-blue">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default About;