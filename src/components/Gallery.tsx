import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, CheckCircle } from "lucide-react";

const Gallery = () => {
  const projects = [
    {
      title: "Instalação Residencial - Apartamento T3",
      location: "Lisboa",
      type: "Residencial",
      description: "Sistema multi-split com 3 unidades internas",
      tags: ["Multi-Split", "Daikin", "3 Ambientes"]
    },
    {
      title: "Climatização Comercial - Escritório",
      location: "Porto",
      type: "Comercial",
      description: "Sistema VRF para climatização de 200m²",
      tags: ["VRF", "Mitsubishi", "Open Space"]
    },
    {
      title: "Manutenção Preventiva - Condomínio",
      location: "Coimbra",
      type: "Manutenção",
      description: "Manutenção de 12 unidades split",
      tags: ["Preventiva", "Condomínio", "12 Unidades"]
    },
    {
      title: "Instalação Residencial - Moradia",
      location: "Braga",
      type: "Residencial",
      description: "Sistema split inverter em 4 quartos",
      tags: ["Split Inverter", "Samsung", "4 Ambientes"]
    },
    {
      title: "Projeto Empresarial - Loja",
      location: "Faro",
      type: "Comercial",
      description: "Climatização completa de loja de 150m²",
      tags: ["Comercial", "LG", "Cassete"]
    },
    {
      title: "Instalação Residencial - Apartamento T2",
      location: "Setúbal",
      type: "Residencial",
      description: "Sistema split com bomba de calor",
      tags: ["Inverter", "Bomba Calor", "2 Ambientes"]
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <Image className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">Nossos Trabalhos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            Projetos Realizados
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos de instalação e manutenção em toda Portugal
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cool-blue/20 to-deep-blue/20">
                  <Image className="w-16 h-16 text-white/40" />
                </div>
                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-cool-blue hover:bg-white">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="pt-6">
                {/* Title and Location */}
                <h3 className="text-lg font-bold text-cool-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-light-blue text-cool-blue px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Completion Badge */}
                <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                  <CheckCircle className="w-4 h-4 text-success-green" />
                  <span className="text-xs text-success-green font-medium">Projeto Concluído</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Trabalhamos com as principais marcas: Daikin, Mitsubishi, LG, Samsung, Fujitsu e mais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;