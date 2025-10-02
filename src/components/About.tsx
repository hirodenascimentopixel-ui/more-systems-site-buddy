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
  return <section id="about" className="py-[20px]">
      
    </section>;
};
export default About;