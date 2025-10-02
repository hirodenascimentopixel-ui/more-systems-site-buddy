import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o prazo para instalação de ar-condicionado?",
      answer: "O prazo médio de instalação é de 1 a 3 dias úteis após a vistoria técnica, dependendo da complexidade do projeto. Para instalações simples de split, geralmente conseguimos realizar no mesmo dia do agendamento."
    },
    {
      question: "Vocês trabalham com quais marcas de ar-condicionado?",
      answer: "Trabalhamos com as principais marcas do mercado: Daikin, Mitsubishi, LG, Samsung, Fujitsu, Panasonic, entre outras. Todas são marcas reconhecidas pela qualidade e eficiência energética."
    },
    {
      question: "É necessário fazer manutenção preventiva? Com que frequência?",
      answer: "Sim, a manutenção preventiva é essencial para garantir o bom funcionamento e prolongar a vida útil do equipamento. Recomendamos realizar a manutenção a cada 6 meses, ou pelo menos 1 vez ao ano."
    },
    {
      question: "Qual a garantia oferecida nos serviços?",
      answer: "Oferecemos garantia de 1 ano em todos os nossos serviços de instalação e manutenção. Os equipamentos novos já vêm com a garantia do fabricante, que varia de 1 a 3 anos conforme a marca."
    },
    {
      question: "Como é feito o orçamento?",
      answer: "O orçamento é gratuito e sem compromisso. Após o contato inicial, agendamos uma vistoria técnica (quando necessário) para avaliar o ambiente e elaborar um orçamento detalhado com todas as especificações."
    },
    {
      question: "Vocês atendem em todo Portugal?",
      answer: "Sim, atendemos em toda Portugal. O prazo de atendimento pode variar conforme a localização. Entre em contato para verificar a disponibilidade na sua região."
    },
    {
      question: "O que inclui o serviço de manutenção preventiva?",
      answer: "A manutenção preventiva inclui: limpeza dos filtros, higienização das serpentinas, verificação do gás refrigerante, limpeza do dreno, verificação elétrica, teste de funcionamento e relatório técnico completo."
    },
    {
      question: "Quanto tempo dura um ar-condicionado?",
      answer: "Com manutenção adequada, um ar-condicionado pode durar de 10 a 15 anos. A vida útil depende da qualidade do equipamento, uso correto e manutenção regular."
    },
    {
      question: "Vocês removem e reinstalam ar-condicionado em mudanças?",
      answer: "Sim, oferecemos serviço de remoção, transporte e reinstalação de ar-condicionado para mudanças. O serviço inclui desmontagem cuidadosa, proteção adequada e reinstalação no novo local."
    },
    {
      question: "É possível parcelar o pagamento?",
      answer: "Sim, trabalhamos com diversas formas de pagamento e oferecemos opções de parcelamento. Entre em contato para conhecer as condições disponíveis."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-professional-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-light-blue px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-cool-blue" />
            <span className="text-sm font-medium text-cool-blue">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            Perguntas Frequentes
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre instalação, manutenção e garantias
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card shadow-card border-0 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-cool-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a 
            href="https://wa.me/351933778388?text=Olá! Tenho uma dúvida sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool-blue hover:text-deep-blue font-semibold underline"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;