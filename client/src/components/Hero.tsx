import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Hero Section
 * Design: Minimalismo Moderno
 * - Headline ousada em Poppins Bold
 * - Subheadline clara e persuasiva
 * - Imagem profissional de saladas
 * - CTA primário destacado
 */
export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                50 Saladas no Pote Low Carb
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                A forma mais fácil de comer limpo a semana toda — sem perder
                tempo e sem passar fome.
              </p>
            </div>

            {/* Subheadline com destaque */}
            <div className="bg-gray-50 border-l-4 border-[#2D5016] pl-6 py-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Em <strong>1 hora</strong> você deixa <strong>5 a 7 refeições</strong> prontas,
                bonitas, crocantes e com gosto de comida de verdade.
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Sem salada murcha. Sem marmita triste. Sem "dieta sofrida".
              </p>
            </div>

            {/* Promessas */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  25 receitas com proteína animal
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  25 receitas com proteína vegetal
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Montagem em camadas + dicas de conservação
                </span>
              </div>
            </div>

            {/* CTA Primário */}
            <Button
              size="lg"
              className="bg-[#2D5016] hover:bg-[#1B3A0B] text-white font-bold text-lg h-14 w-full md:w-auto px-8 transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                window.location.href = "https://pay.kiwify.com.br/sjOd6yS";
              }}
            >
              Quero as 50 Receitas Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Garantia */}
            <p className="text-sm text-gray-600">
              ✅ <strong>Garantia incondicional</strong> — Se não gostar, é só
              pedir reembolso na plataforma.
            </p>
          </div>

          {/* Imagem */}
          <div className="relative">
            <img
              src="/images/hero-salada-pote.jpg"
              alt="Saladas no pote low carb profissionais"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-sm font-semibold text-gray-900">
                Método de camadas resolve o maior vilão:
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Umidade + tempo = salada murcha. Com a ordem certa, o molho
                fica isolado e a salada se mantém muito melhor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
