import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVICES, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/servicos")({
  head: () =>
    pageHead(
      "/servicos",
      "Serviços de Engenharia Elétrica B2B no Paraná | Eleva Matriz",
      "Projetos elétricos industriais e comerciais, laudo NR-10, SPDA (para-raios) e energia solar no Paraná. Sem jargão técnico, com ART e orçamento ágil no WhatsApp."
    ),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Soluções Corporativas · {REGION}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Serviços de engenharia elétrica explicados de forma simples
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nunca contratou esse tipo de serviço ou tem dúvidas sobre exigências de fiscalização? Sem problema. Abaixo explicamos em detalhes o que é cada serviço, quem precisa dele e quais benefícios reais sua empresa ganha.
          </p>
        </div>

        {/* PILLS DE NAVEGAÇÃO RÁPIDA */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-highlight hover:text-highlight"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* BLOCOS DETALHADOS DE SERVIÇOS */}
      <div className="container-site space-y-10 pb-16">
        {SERVICES.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-t`}
            className="reveal scroll-mt-28 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-highlight md:text-4xl">0{i + 1}</span>
                <div>
                  <span className="inline-block rounded-md bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground mb-1">
                    {s.badge}
                  </span>
                  <h2 id={`${s.slug}-t`} className="text-2xl font-extrabold text-foreground md:text-3xl">
                    {s.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-background px-3 py-1.5 rounded-full border border-border">
                <ShieldCheck className="h-4 w-4 text-highlight" />
                <span>Emissão de ART inclusa</span>
              </div>
            </div>

            <dl className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-6">
                <dt className="text-xs font-bold uppercase tracking-wider text-highlight">01. O que é</dt>
                <dd className="mt-3 text-sm text-foreground leading-relaxed">{s.what}</dd>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6">
                <dt className="text-xs font-bold uppercase tracking-wider text-highlight">02. Para quem é</dt>
                <dd className="mt-3 text-sm text-foreground leading-relaxed">{s.who}</dd>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6">
                <dt className="text-xs font-bold uppercase tracking-wider text-highlight">03. O que você ganha</dt>
                <dd className="mt-3 text-sm font-medium text-primary leading-relaxed">{s.gain}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-highlight" />
                <span>Atendimento presencial em todo o Paraná</span>
              </div>

              <a
                href={waLink(`Olá! Vim pelo site da Eleva Matriz e gostaria de conversar sobre ${s.title} para a minha empresa.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-highlight text-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Falar sobre {s.title.toLowerCase()} no WhatsApp
              </a>
            </div>
          </section>
        ))}
      </div>

      <FinalCTA />
    </>
  );
}
