import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ Section
 * Design: Minimalismo Moderno
 * - Accordion para economizar espaço
 * - Perguntas que travam compra
 * - Respostas claras e diretas
 */
export default function FAQ() {
  const faqs = [
    {
      question: "Preciso cozinhar todo dia?",
      answer:
        "Não. A ideia é preparar em lote e montar 5–7 potes de uma vez. Você dedica algumas horas no fim de semana e tem refeições prontas para toda a semana.",
    },
    {
      question: "Quanto tempo dura na geladeira?",
      answer:
        "Depende dos ingredientes. Você aprende isso no e-book. Em geral, receitas com proteína animal duram menos que as só vegetais. Receitas com proteína animal: 2-3 dias. Receitas vegetais: até 5-6 dias.",
    },
    {
      question: "Dá pra adaptar?",
      answer:
        "Sim. Você pode trocar folhas, molhos e vegetais conforme gosto. O método de camadas funciona com qualquer combinação de ingredientes.",
    },
    {
      question: "Preciso de pote específico?",
      answer:
        "Ideal é pote alto e com vedação boa, mas você pode começar com o que tem. O importante é que o pote feche bem para evitar vazamentos.",
    },
    {
      question: "É low carb mesmo?",
      answer:
        "Sim. O foco é em vegetais, folhas, proteínas e gorduras boas. Todas as 50 receitas foram desenvolvidas com baixo teor de carboidratos.",
    },
    {
      question: "Como recebo o e-book?",
      answer:
        "Após a compra, você recebe acesso imediato ao e-book em PDF + os 3 bônus exclusivos. Tudo é entregue por email em segundos.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-20 md:py-32">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas antes de comprar
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger
                className="text-left hover:text-[#2D5016] transition-colors py-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
