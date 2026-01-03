import { AlertCircle, Lightbulb } from "lucide-react";

/**
 * Problem & Solution Section
 * Design: Minimalismo Moderno
 * - Contraste entre problema (vermelho/alerta) e solução (verde)
 * - Layout assimétrico
 * - Tipografia clara e hierárquica
 */
export default function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                O Problema
              </h2>
              <p className="text-lg text-gray-600">
                Você já tentou comer saudável e travou por causa disso?
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Chega no meio da semana e você não tem nada pronto",
                "A salada fica murcha e aguada",
                "Você perde tempo picando tudo todo dia",
                "A fome bate e você vai no mais fácil: lanche, delivery, besteira",
              ].map((problema, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{problema}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 pl-6 py-4">
              <p className="text-gray-900 font-bold">
                O problema não é falta de força de vontade.
              </p>
              <p className="text-gray-700 mt-2">É falta de sistema.</p>
            </div>
          </div>

          {/* Solução */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                A Solução
              </h2>
              <p className="text-lg text-gray-600">
                Com esse e-book, você vai montar um "sistema de marmita leve":
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", text: "Escolhe 2 ou 3 receitas" },
                { step: "2", text: "Faz as proteínas e corta os vegetais" },
                { step: "3", text: "Monta em potes (em camadas)" },
                { step: "4", text: "Pega e sai — almoço e/ou jantar resolvidos" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#2D5016] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {item.step}
                  </div>
                  <p className="text-gray-700 font-medium mt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-[#2D5016] pl-6 py-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-bold">
                    Você gasta pouco tempo e colhe resultado a semana inteira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
