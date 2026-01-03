import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import EbookContent from "@/components/EbookContent";
import Benefits from "@/components/Benefits";
import Bonus from "@/components/Bonus";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

/**
 * Home Page - Página de Vendas
 * Design: Minimalismo Moderno com Foco em Conteúdo
 *
 * Estrutura:
 * 1. Header - Navegação e CTA
 * 2. Hero - Headline e promessa
 * 3. Problem & Solution - Identificação de dor e solução
 * 4. Ebook Content - O que está dentro
 * 5. Benefits - Benefícios principais
 * 6. Bonus - 3 bônus exclusivos
 * 7. FAQ - Perguntas frequentes
 * 8. Final CTA - Chamada final à ação
 * 9. Footer - Rodapé com links
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <EbookContent />
        <Benefits />
        <Bonus />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
