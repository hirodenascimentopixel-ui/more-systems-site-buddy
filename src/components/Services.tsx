import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Settings, Shield, Building, Home, CheckCircle } from "lucide-react";
const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const services = [{
    icon: Settings,
    title: "Instalação de Ar-Condicionado",
    description: "Instalação completa de sistemas split, multi-split e centrais para residências e empresas.",
    features: ["Análise técnica do ambiente", "Instalação elétrica completa", "Testes de funcionamento", "Garantia de 1 ano"],
    type: "installation"
  }, {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Limpeza, higienização e manutenção regular para manter seu ar-condicionado sempre funcionando.",
    features: ["Limpeza dos filtros", "Higienização completa", "Verificação do gás refrigerante", "Relatório técnico"],
    type: "maintenance"
  }, {
    icon: Shield,
    title: "Manutenção Corretiva",
    description: "Reparo e conserto de equipamentos com diagnóstico preciso e peças originais.",
    features: ["Diagnóstico gratuito", "Peças originais", "Atendimento rápido", "Garantia dos serviços"],
    type: "repair"
  }, {
    icon: Building,
    title: "Projetos Empresariais",
    description: "Soluções completas de climatização para escritórios, lojas e estabelecimentos comerciais.",
    features: ["Projeto personalizado", "Sistema centralizado", "Controle inteligente", "Suporte técnico"],
    type: "commercial"
  }];
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
  return;
};
export default Services;