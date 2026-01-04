import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

/**
 * Final CTA Section
 * Design: Minimalismo Moderno
 * - Seção de conversão final
 * - Destaque em verde natural
 * - Elementos de confiança e garantia
 */
export default function FinalCTA() {
  return (
    <section id="cta" className="bg-[#2D5016] text-white py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Você não precisa de dieta perfeita.
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
            Você precisa de um jeito fácil de não sair do trilho.
          </p>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 my-8">
            <p className="text-lg leading-relaxed">
              Se abrir a geladeira e já tiver uma refeição pronta, bonita e
              gostosa... metade da batalha tá vencida.
            </p>
          </div>

          {/* What You Get */}
          <div className="space-y-4 text-left max-w-2xl mx-auto my-8">
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Você recebe:
            </h3>
            {[
              "50 receitas completas (25 animal + 25 vegetal)",
              "Guia de montagem em camadas",
              "Dicas de conservação e transporte",
              "3 bônus exclusivos",
              "Acesso imediato após a compra",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://pay.kiwify.com.br/sjOd6yS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#2D5016] hover:bg-green-50 font-bold text-lg h-16 px-10 rounded-md transition-all duration-300 hover:shadow-xl"
          >
            Quero as 50 Receitas Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 text-green-100 text-sm">
            <Shield className="w-4 h-4" />
            <span>
              <strong>Garantia incondicional</strong> — Se não gostar, é só
              pedir reembolso.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
