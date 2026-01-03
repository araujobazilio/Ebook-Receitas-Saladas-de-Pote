import { BookOpen, Utensils, RotateCcw } from "lucide-react";

/**
 * Ebook Content Section
 * Design: Minimalismo Moderno
 * - Cards com ícones e descrições
 * - Layout em grid
 * - Tipografia clara
 */
export default function EbookContent() {
  const contentItems = [
    {
      icon: BookOpen,
      title: "Guia de Montagem em Camadas",
      description:
        "Ordem correta para não murchar, mantendo cada ingrediente no lugar ideal",
    },
    {
      icon: Utensils,
      title: "Como Escolher o Pote Ideal",
      description:
        "Vedação, transporte e conservação — tudo que você precisa saber",
    },
    {
      icon: RotateCcw,
      title: "Dicas de Conservação",
      description:
        "Quanto tempo dura e como não estragar — receitas com proteína animal e vegetal",
    },
  ];

  return (
    <section id="beneficios" className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Dentro do E-book Você Vai Encontrar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para dominar a arte das saladas no pote
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#2D5016] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 50 Receitas Highlight */}
        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-12">
          <h3
            className="text-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            50 Receitas Completas, Separadas em:
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Proteína Animal */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-[#2D5016]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                25 com Proteína Animal
              </h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Frango",
                  "Atum",
                  "Ovos",
                  "Carne",
                  "Salmão",
                  "Camarão",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D5016] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Proteína Vegetal */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-[#2D5016]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                25 com Proteína Vegetal
              </h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Grão-de-bico",
                  "Lentilha",
                  "Tofu",
                  "Edamame",
                  "Cogumelos",
                  "Nozes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D5016] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cada Receita Inclui */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h4
              className="text-lg font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Cada Receita Vem Com:
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "✅ Ingredientes",
                "✅ Molho",
                "✅ Montagem Passo a Passo",
                "✅ Comentário de Sabor",
              ].map((item, idx) => (
                <div key={idx} className="text-gray-700 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
