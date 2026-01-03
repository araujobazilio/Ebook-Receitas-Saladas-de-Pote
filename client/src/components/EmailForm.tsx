import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Email Form Component
 * Design: Minimalismo Moderno
 * - Formulário simples e direto
 * - Integração com serviço de email
 * - Feedback visual ao enviar
 */
export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio - em produção, integrar com seu serviço de email
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setLoading(false);

      // Resetar após 3 segundos
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
        <p className="text-green-900 font-semibold">
          Obrigado! Verifique seu email para confirmar a inscrição.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 bg-white border-gray-300"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-[#2D5016] hover:bg-[#1B3A0B] text-white font-semibold md:w-auto"
        >
          {loading ? "Enviando..." : "Receber Atualizações"}
        </Button>
      </div>
      <p className="text-xs text-gray-600">
        Sem spam. Apenas dicas e receitas exclusivas.
      </p>
    </form>
  );
}
