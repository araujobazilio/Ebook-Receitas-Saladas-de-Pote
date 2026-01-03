import { Flame } from "lucide-react";

/**
 * Benefits Section
 * Design: Minimalismo Moderno
 * - Grid de benefícios com ícones
 * - Tipografia clara
 * - Espaçamento generoso
 */
export default function Benefits() {
  const benefits = [
    "Comer low carb sem complicar",
    "Ter refeição pronta sem cozinhar todo dia",
    "Economizar dinheiro evitando delivery",
    "Controlar fome com refeições mais proteicas",
    "Variar sabores (não enjoar no 3º dia)",
    "Manter folhas crocantes (sem 'salada triste')",
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            O Que Você Vai Conseguir
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme sua rotina alimentar com praticidade e sabor
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 border border-gray-100 hover:border-[#2D5016] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <Flame className="w-6 h-6 text-[#2D5016] flex-shrink-0 mt-1" />
                <p
                  className="text-lg font-semibold text-gray-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
