import EmailForm from "./EmailForm";

/**
 * Newsletter Section
 * Design: Minimalismo Moderno
 * - Seção para capturar emails
 * - Posicionada antes do CTA final
 */
export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container max-w-2xl">
        <div className="text-center space-y-6">
          <h3
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Receba Dicas Exclusivas
          </h3>
          <p className="text-lg text-gray-600">
            Inscreva-se para receber receitas extras, dicas de conservação e
            ofertas especiais direto no seu email.
          </p>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
