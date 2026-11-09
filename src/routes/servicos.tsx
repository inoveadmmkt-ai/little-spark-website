import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVICES, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";
import { TopologyExplorer } from "@/components/site/InteractiveFeatures";

export const Route = createFileRoute("/servicos")({
  head: () =>
    pageHead(
      "/servicos",
      "Serviços e Especialidades Técnicas | Eleva Matriz Engenharia",
      "Infraestrutura de cabeamento estruturado Cat6/6A, redes ópticas de até 50 Gb/s, Wi-Fi corporativo, CFTV IP, energia solar e engenharia elétrica com ART no CREA-PR."
    ),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Soluções Corporativas Integradas · {REGION}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Infraestrutura de redes e engenharia elétrica com rigor técnico
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Do lançamento de fibra óptica de até 50 Gb/s ao projeto elétrico com ART no CREA-PR: cada especialidade é planejada para que as operações da sua empresa nunca fiquem paradas.
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

        {/* GARANTIA TÉCNICA E VALIDADE JURÍDICA */}
        <div className="mt-10 rounded-2xl border border-highlight/30 bg-accent/20 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-foreground">ART Obrigatória (CREA-PR)</p>
                <p className="text-xs text-muted-foreground mt-0.5">Assinatura de Engenheiro habilitado com valor legal.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-foreground">Analisadores Calibrados (RBC)</p>
                <p className="text-xs text-muted-foreground mt-0.5">Certificação com equipamento analisador e terrômetro rastreáveis.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-foreground">Aprovação Copel & Bombeiros</p>
                <p className="text-xs text-muted-foreground mt-0.5">Laudos prontos para auditorias, seguradoras e AVCB.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAIO-X INTERATIVO DA TOPOLOGIA */}
      <section className="container-site pb-12">
        <TopologyExplorer />
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
