import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    propertyType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.serviceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e tipo de serviço.",
        variant: "destructive"
      });
      return;
    }

    // Format WhatsApp message
    const message = `
*SOLICITAÇÃO DE ORÇAMENTO*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email || 'Não informado'}
*Serviço:* ${formData.serviceType}
*Tipo de propriedade:* ${formData.propertyType}
*Mensagem:* ${formData.message || 'Não informado'}

Favor entrar em contato para orçamento.
    `.trim();

    const whatsappUrl = `https://wa.me/351933778388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Orçamento enviado!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      propertyType: "",
      message: ""
    });
  };

  return (
    <section id="quote" className="py-20 bg-professional-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Orçamento Gratuito</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            Solicite seu Orçamento
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba rapidamente um orçamento personalizado para suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-hero text-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contato Direto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 opacity-80" />
                  <div>
                    <p className="font-medium">+351 933778388</p>
                    <p className="text-sm opacity-80">WhatsApp e chamadas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 opacity-80" />
                  <div>
                    <p className="font-medium">Portugal</p>
                    <p className="text-sm opacity-80">Atendemos toda a região</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 opacity-80" />
                  <div>
                    <p className="font-medium">Seg - Sáb: 09h às 17h</p>
                    <p className="text-sm opacity-80">Domingos: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cool-blue">Por que escolher a MORE SISTEMS?</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cool-blue rounded-full"></div>
                  <span>Orçamento gratuito e sem compromisso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cool-blue rounded-full"></div>
                  <span>Atendimento em até 24 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cool-blue rounded-full"></div>
                  <span>Técnicos certificados e experientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cool-blue rounded-full"></div>
                  <span>Garantia em todos os serviços</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-cool-blue">Formulário de Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label>Tipo de serviço *</Label>
                    <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instalacao">Instalação de Ar-Condicionado</SelectItem>
                        <SelectItem value="manutencao-preventiva">Manutenção Preventiva</SelectItem>
                        <SelectItem value="manutencao-corretiva">Manutenção Corretiva</SelectItem>
                        <SelectItem value="projeto-empresarial">Projeto Empresarial</SelectItem>
                        <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Type */}
                  <div className="space-y-3">
                    <Label>Tipo de propriedade</Label>
                    <RadioGroup 
                      onValueChange={(value) => handleInputChange("propertyType", value)}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="residencial" id="residencial" />
                        <Label htmlFor="residencial">Residencial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comercial" id="comercial" />
                        <Label htmlFor="comercial">Comercial</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva detalhes do projeto, dúvidas ou informações adicionais..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg py-6"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Enviar Orçamento via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar este formulário, você será redirecionado para o WhatsApp para finalizar o contato.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;