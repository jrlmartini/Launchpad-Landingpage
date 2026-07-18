import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso garante aprovação?",
    answer: "Não — e desconfie de quem garantir. O que o curso faz é subir muito o nível da sua proposta: enquadramento certo, evidências que convencem, plano que fecha e orçamento que você consegue defender.",
  },
  {
    question: "Funciona para qualquer área de deep tech?",
    answer: "Sim. O conteúdo técnico muda, mas a lógica de avaliação e a engenharia do projeto permanecem.",
  },
  {
    question: "Estou no começo (TRL baixo). Vale?",
    answer: "Vale — talvez até mais. É no começo que se perde tempo com o edital errado, e é onde escolher bem o instrumento faz mais diferença.",
  },
  {
    question: "E se eu não for bom de escrita?",
    answer: 'Você não precisa ser "bom de texto". Precisa ser claro, objetivo e defensável — e isso se constrói com estrutura, não com talento. O curso te dá a estrutura e os templates.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface/50 border border-stroke/50 rounded-2xl px-6 data-[state=open]:border-cta/30 transition-colors"
              >
                <AccordionTrigger 
                  className="py-5 text-left font-display font-semibold text-lg text-text hover:no-underline hover:text-cta transition-colors"
                  data-testid={`faq-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-text-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
