import { Gift, FileText, Calendar, Droplets } from "lucide-react";

/**
 * Bonus Section
 * Design: Minimalismo Moderno
 * - Cards com ícones para cada bônus
 * - Destaque visual com fundo diferente
 * - Tipografia clara e hierárquica
 */
export default function Bonus() {
  const bonuses = [
    {
      icon: FileText,
      title: "Guia de Compras Inteligente",
      description:
        "Um checklist prático para levar ao supermercado, ajudando a escolher os melhores ingredientes da estação, economizar dinheiro e garantir que nada falte. Inclui lista de substituições para ingredientes caros ou difíceis de encontrar.",
    },
    {
      icon: Calendar,
      title: "Planner Semanal de Montagem",
      description:
        "Um template organizador para planejar quais receitas serão feitas em cada dia da semana. Visualize sua rotina alimentar, evite desperdício de alimentos e garanta variedade nutricional sem esforço mental.",
    },
    {
      icon: Droplets,
      title: "Ebook Complementar - 10 Molhos Artesanais Low Carb",
      description:
        "Receitas extras de molhos gourmet que podem ser usados não apenas nas saladas, mas também em carnes e outros acompanhamentos, elevando o sabor das refeições sem sair da dieta.",
    },
  ];

  return (
    <section id="bonus" className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-[#2D5016]" />
            <span
              className="text-sm font-bold text-[#2D5016] uppercase tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bônus Exclusivos
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Você Recebe Tudo Isso Também
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Três bônus exclusivos para potencializar seus resultados
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, idx) => {
            const Icon = bonus.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-gray-50 rounded-lg p-8 border border-green-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#2D5016] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {bonus.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {bonus.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bonus Image */}
        <div className="mt-12">
          <img
            src="/images/bonus-section.jpg"
            alt="Bônus exclusivos do ebook"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
