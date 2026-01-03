import { Star } from "lucide-react";

/**
 * Testimonials Section
 * Design: Minimalismo Moderno
 * - Cards com depoimentos de clientes
 * - Avaliações em estrelas
 * - Foto do cliente (avatar)
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Nutricionista",
      text: "Recomendo este ebook para todos os meus pacientes que querem emagrecer sem sofrer. As receitas são práticas, deliciosas e realmente low carb. Meus clientes adoram!",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Carlos Mendes",
      role: "Empresário",
      text: "Finalmente consegui manter uma rotina alimentar saudável. Preparo as saladas no domingo e tenho refeições prontas a semana toda. Economizo dinheiro e tempo!",
      rating: 5,
      avatar: "CM",
    },
    {
      name: "Beatriz Costa",
      role: "Personal Trainer",
      text: "Meus alunos que seguem as receitas do ebook têm muito mais energia nos treinos. A combinação de proteína e vegetais é perfeita para quem quer ganhar massa magra.",
      rating: 5,
      avatar: "BC",
    },
    {
      name: "João Oliveira",
      role: "Médico",
      text: "Como médico, vejo muitos pacientes com dificuldade em manter dieta low carb. Este ebook torna o processo muito mais fácil e sustentável. Excelente recurso!",
      rating: 5,
      avatar: "JO",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            O Que Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram sua rotina alimentar
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-[#2D5016] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    className="font-bold text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p
              className="text-3xl font-bold text-[#2D5016]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              +2.500
            </p>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="space-y-2">
            <p
              className="text-3xl font-bold text-[#2D5016]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              4.9/5
            </p>
            <p className="text-gray-600">Avaliação Média</p>
          </div>
          <div className="space-y-2">
            <p
              className="text-3xl font-bold text-[#2D5016]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              98%
            </p>
            <p className="text-gray-600">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
