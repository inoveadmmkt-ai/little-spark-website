import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SERVICES, pageHead, waLink } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/servicos")({
  head: () => pageHead("/servicos", "Serviços de Engenharia Elétrica para Empresas | Eleva Matriz",
    "Projetos elétricos, laudo NR-10, SPDA (para-raios), energia solar e manutenção elétrica para empresas no Paraná. Explicação simples e orçamento pelo WhatsApp."),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Serviços</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Serviços de engenharia elétrica explicados de um jeito simples</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Nunca contratou esse tipo de serviço? Sem problema. Veja abaixo o que cada um é, para quem serve e o que você ganha.</p>
      </section>
      <div className="container-site space-y-6 pb-10">
        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-t`} className="reveal scroll-mt-24 rounded-3xl border bg-card p-8 md:p-12">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-extrabold text-highlight">0{i + 1}</span>
              <h2 id={`${s.slug}-t`} className="text-2xl font-extrabold md:text-3xl">{s.title}</h2>
            </div>
            <dl className="mt-8 grid gap-8 md:grid-cols-3">
              {[["O que é", s.what], ["Para quem é", s.who], ["O que você ganha", s.gain]].map(([t, d]) => (
                <div key={t}><dt className="font-bold text-primary">{t}</dt><dd className="mt-2 text-muted-foreground">{d}</dd></div>
              ))}
            </dl>
            <a href={waLink(`Olá! Vim pelo site da Eleva Matriz e gostaria de saber mais sobre ${s.title}.`)} target="_blank" rel="noopener" className="btn btn-highlight mt-8">
              <MessageCircle className="h-5 w-5" aria-hidden /> Falar sobre {s.title.toLowerCase()}
            </a>
          </section>
        ))}
      </div>
      <FinalCTA />
    </>
  );
}
