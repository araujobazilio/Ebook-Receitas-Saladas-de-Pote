import { Leaf } from "lucide-react";

/**
 * Footer Component
 * Design: Minimalismo Moderno
 * - Informações de contato e links
 * - Branding consistente
 * - Espaçamento generoso
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Salada no Pote
              </span>
            </div>
            <p className="text-sm">
              50 receitas low carb para transformar sua rotina alimentar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Produto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  E-book
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-white transition-colors">
                  Bônus
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Suporte
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Siga-nos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; 2024 Salada no Pote. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
