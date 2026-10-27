import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => pageHead("/privacidade", "Política de Privacidade | Eleva Matriz Engenharia",
    "Saiba como a Eleva Matriz Engenharia coleta, usa e protege seus dados pessoais, conforme a LGPD."),
  component: Privacidade,
});

function Privacidade() {
  return (
    <article className="container-site max-w-3xl py-16 md:py-24">
      <h1 className="text-4xl font-extrabold">Política de privacidade</h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground">
        <p>[Texto provisório — revisar com assessoria jurídica.]</p>
        <h2 className="text-2xl font-bold text-foreground">Quais dados coletamos</h2>
        <p>Nome, e-mail, WhatsApp, empresa e mensagem que você informa nos formulários.</p>
        <h2 className="text-2xl font-bold text-foreground">Para que usamos</h2>
        <p>Apenas para responder seu contato, enviar o material solicitado e apresentar nossos serviços. Não vendemos seus dados.</p>
        <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
        <p>Usamos somente cookies essenciais para o funcionamento do site.</p>
        <h2 className="text-2xl font-bold text-foreground">Seus direitos</h2>
        <p>Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail {EMAIL}.</p>
      </div>
    </article>
  );
}
