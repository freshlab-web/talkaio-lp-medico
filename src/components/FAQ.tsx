
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "É seguro usar automação no consultório odontológico?",
      answer: "Sim, a Talkaio segue as boas práticas de LGPD e garante segurança na comunicação com o paciente."
    },
    {
      question: "A plataforma funciona mesmo fora do horário comercial?",
      answer: "Sim. O atendimento automatizado é 24/7. Você não perde nenhum contato."
    },
    {
      question: "Minha especialidade é muito específica. Posso personalizar as mensagens?",
      answer: "Claro. Você configura com a nossa equipe exatamente o que será respondido, com o tom ideal."
    },
    {
      question: "Quanto tempo leva para implantar?",
      answer: "A ativação é rápida. Em até 48h após o cadastro, seu atendimento automatizado pode estar funcionando."
    },
    {
      question: "A Talkaio substitui completamente minha recepção?",
      answer: "Não, a Talkaio complementa o trabalho da sua equipe, automatizando tarefas repetitivas e permitindo que sua recepção foque em atividades mais importantes."
    },
    {
      question: "É possível integrar com meu sistema atual de agendamento?",
      answer: "Sim, a Talkaio oferece integrações com os principais sistemas de agendamento do mercado. Durante a implementação, nossa equipe técnica vai configurar tudo para você."
    }
  ];

  return (
    <section className="bg-talkaio-gray section-padding" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas principais dúvidas sobre a Talkaio e como podemos ajudar seu consultório
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
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
