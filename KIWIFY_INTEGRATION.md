# Integração com Kiwify
## Guia de Configuração - 50 Saladas no Pote Low Carb

---

## 📋 Pré-requisitos

1. Conta criada em [Kiwify](https://kiwify.com.br)
2. Seu produto (ebook) já cadastrado na plataforma
3. Link de afiliado ou link direto do produto

---

## 🔗 Integrando o Link do Kiwify

### Opção 1: Botão CTA Principal

O botão "Quero as 50 Receitas Agora" está localizado em:
- **Arquivo:** `client/src/components/Hero.tsx`
- **Arquivo:** `client/src/components/FinalCTA.tsx`

**Para integrar:**

1. Abra o arquivo `client/src/components/Hero.tsx`
2. Localize o componente `Button` com o texto "Quero as 50 Receitas Agora"
3. Adicione o atributo `onClick` com o redirecionamento:

```tsx
<Button
  size="lg"
  className="bg-[#2D5016] hover:bg-[#1B3A0B] text-white font-bold text-lg h-14 w-full md:w-auto px-8 transition-all duration-300 hover:shadow-lg"
  onClick={() => window.location.href = "https://kiwify.com.br/seu-link-aqui"}
>
  Quero as 50 Receitas Agora
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
```

4. Substitua `https://kiwify.com.br/seu-link-aqui` pelo seu link real do Kiwify

### Opção 2: Usando Elemento Âncora

Você pode também usar um elemento `<a>` simples:

```tsx
<a 
  href="https://kiwify.com.br/seu-link-aqui" 
  className="inline-block bg-[#2D5016] hover:bg-[#1B3A0B] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
>
  Quero as 50 Receitas Agora
</a>
```

---

## 📧 Integração com Formulário de Email

### Opção 1: Integração com Mailchimp

**Arquivo:** `client/src/components/EmailForm.tsx`

1. Crie uma conta em [Mailchimp](https://mailchimp.com)
2. Configure uma lista de contatos
3. Obtenha seu `FORM_ACTION` e `FORM_ID`
4. Substitua o `handleSubmit` no arquivo:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://seu-mailchimp-url.us1.list-manage.com/subscribe/post", {
      method: "POST",
      body: new URLSearchParams({
        u: "SEU_USER_ID",
        id: "SEU_LIST_ID",
        EMAIL: email,
      }),
    });

    setSubmitted(true);
    setEmail("");
  } catch (error) {
    console.error("Erro ao inscrever:", error);
  } finally {
    setLoading(false);
  }
};
```

### Opção 2: Integração com Brevo (ex-Sendinblue)

1. Crie uma conta em [Brevo](https://www.brevo.com)
2. Configure um formulário de inscrição
3. Obtenha seu `FORM_ID`
4. Adicione o script no `client/index.html`:

```html
<script src="https://sibforms.com/forms/end-form/build/main.js"></script>
```

---

## 🎯 Locais onde Adicionar Links do Kiwify

| Componente | Arquivo | Descrição |
|---|---|---|
| Hero CTA | `Hero.tsx` | Botão principal na seção hero |
| Final CTA | `FinalCTA.tsx` | Botão de conversão final |
| Header CTA | `Header.tsx` | Botão no header (opcional) |

---

## 📊 Rastreamento de Conversões

### Google Analytics

Adicione o código de rastreamento no `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Pixel do Kiwify

Solicite o pixel de rastreamento do Kiwify e adicione no `client/index.html`:

```html
<!-- Pixel Kiwify -->
<script>
  // Código do pixel fornecido pelo Kiwify
</script>
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_KIWIFY_LINK=https://kiwify.com.br/seu-link-aqui
VITE_MAILCHIMP_ACTION=https://seu-mailchimp-url.us1.list-manage.com/subscribe/post
VITE_MAILCHIMP_USER_ID=seu_user_id
VITE_MAILCHIMP_LIST_ID=seu_list_id
```

Depois, use as variáveis nos componentes:

```tsx
onClick={() => window.location.href = import.meta.env.VITE_KIWIFY_LINK}
```

---

## ✅ Checklist de Integração

- [ ] Link do Kiwify obtido
- [ ] Botões CTA atualizados com o link
- [ ] Formulário de email integrado
- [ ] Google Analytics configurado
- [ ] Pixel do Kiwify adicionado
- [ ] Variáveis de ambiente configuradas
- [ ] Testado em desktop e mobile
- [ ] Redirecionamento funcionando corretamente
- [ ] Conversões sendo rastreadas

---

## 🧪 Teste Antes de Publicar

1. Clique em todos os botões CTA e verifique se redirecionam para o Kiwify
2. Teste o formulário de email em desktop e mobile
3. Verifique se as conversões aparecem no Kiwify
4. Teste em diferentes navegadores

---

## 📞 Suporte

- **Kiwify:** https://kiwify.com.br/suporte
- **Mailchimp:** https://mailchimp.com/support
- **Brevo:** https://www.brevo.com/support

---

**Integração concluída! Agora sua página está pronta para vender.** 🚀
