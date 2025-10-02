import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Instalação de Ar-Condicionado",
    "Manutenção Preventiva",
    "Manutenção Corretiva",
    "Projetos Empresariais",
    "Climatização Comercial",
    "Consultoria Técnica"
  ];

  const regions = [
    "Lisboa", "Porto", "Coimbra", "Braga", 
    "Faro", "Setúbal", "Aveiro", "Évora"
  ];

  const certifications = [
    "Técnicos Certificados",
    "Parceiro Daikin",
    "Parceiro Mitsubishi",
    "ISO 9001:2015"
  ];

  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">MORE SYSTEMS</h3>
                  <p className="text-sm text-gray-400">Ar-condicionado</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desde 2015 garantindo o conforto térmico das famílias portuguesas com excelência, qualidade e atendimento personalizado.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-semibold mb-4">Áreas de Atendimento</h4>
            <ul className="space-y-2">
              {regions.map((region, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {region}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              *Atendemos em todo Portugal
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <a 
                href="tel:+351933778388"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-cool-blue" />
                <div>
                  <p className="text-sm">+351 933 778 388</p>
                  <p className="text-xs text-gray-500">WhatsApp disponível</p>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-cool-blue" />
                <div>
                  <p className="text-sm">contato@moresystems.pt</p>
                  <p className="text-xs text-gray-500">Respondemos em 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-cool-blue" />
                <div>
                  <p className="text-sm">Portugal</p>
                  <p className="text-xs text-gray-500">Atendimento nacional</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-cool-blue" />
                <div>
                  <p className="text-sm">Seg - Sáb: 09h às 17h</p>
                  <p className="text-xs text-gray-500">Domingos: Fechado</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">Certificações</h4>
              <div className="space-y-1">
                {certifications.map((cert, index) => (
                  <p key={index} className="text-xs text-gray-400">{cert}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} MORE SYSTEMS. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;