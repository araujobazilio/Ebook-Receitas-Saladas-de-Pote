import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

/**
 * Header Component
 * Design: Minimalismo Moderno
 * - Logo com ícone de folha e texto
 * - Navegação limpa
 * - CTA destacado em verde natural
 */
export default function Header() {
  const { trackCTAClick } = useFacebookPixel();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTAClick = () => {
    trackCTAClick('Header CTA - Quero as 50 Receitas');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#2D5016] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span
            className="font-bold text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Salada no Pote
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-gray-600 hover:text-[#2D5016] transition-colors text-sm font-medium"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("bonus")}
            className="text-gray-600 hover:text-[#2D5016] transition-colors text-sm font-medium"
          >
            Bônus
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-600 hover:text-[#2D5016] transition-colors text-sm font-medium"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <a
          href="https://pay.kiwify.com.br/sjOd6yS"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCTAClick}
          className="inline-flex items-center justify-center gap-2 bg-[#2D5016] hover:bg-[#1B3A0B] text-white font-semibold px-4 py-2 rounded-md transition-all duration-300"
        >
          Quero as 50 Receitas
        </a>
      </div>
    </header>
  );
}
