import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Factory, Store, Warehouse, Building2, Home } from "lucide-react";
import { SERVICES, PERSONAS, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";
import { TopologyExplorer, RoiInfrastructureSimulator } from "@/components/site/InteractiveFeatures";

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
            className={`reveal scroll-mt-28 rounded-2xl sm:rounded-3xl border ${
              s.slug === "certificacao-redes"
                ? "border-highlight/50 bg-gradient-to-br from-card via-card to-highlight/5 shadow-md ring-1 ring-highlight/20"
                : "border-border bg-card shadow-sm"
            } p-4 sm:p-8 md:p-12 transition-all hover:shadow-md overflow-hidden`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-border pb-5 sm:pb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-highlight md:text-4xl">0{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-block rounded-md bg-accent px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-accent-foreground">
                      {s.badge}
                    </span>
                    {s.slug === "certificacao-redes" && (
                      <span className="inline-block rounded-md bg-highlight text-white px-2 py-0.5 text-[10px] sm:text-[11px] font-bold">
                        Diferencial Estratégico
                      </span>
                    )}
                  </div>
                  <h2 id={`${s.slug}-t`} className="text-xl sm:text-2xl font-extrabold text-foreground md:text-3xl">
                    {s.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-muted-foreground bg-background px-3 py-1.5 rounded-full border border-border">
                <ShieldCheck className="h-4 w-4 text-highlight shrink-0" />
                <span>Emissão de ART inclusa</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-border min-h-[200px] sm:min-h-[240px] bg-muted shadow-sm group">
                <img
                  src={s.photo || "/galeria/cabeamento_estruturado.jpg"}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-white border border-white/10">
                    {s.badge}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white bg-highlight/90 backdrop-blur-md px-2 py-0.5 rounded">
                    Padrão Executivo
                  </span>
                </div>
              </div>

              <dl className="lg:col-span-8 grid gap-3 sm:gap-4 sm:grid-cols-3">
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-4 sm:p-6">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-highlight">01. O que é</dt>
                    <dd className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground leading-relaxed">{s.what}</dd>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-4 sm:p-6">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-highlight">02. Para quem é</dt>
                    <dd className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground leading-relaxed">{s.who}</dd>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-4 sm:p-6">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-highlight">03. O que você ganha</dt>
                    <dd className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-primary leading-relaxed">{s.gain}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-5 sm:pt-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-highlight shrink-0" />
                <span>Atendimento presencial em todo o Paraná</span>
              </div>

              <a
                href={waLink(`Olá! Vim pelo site da Eleva Matriz e gostaria de conversar sobre ${s.title} para a minha empresa.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-highlight text-xs sm:text-sm w-full sm:w-auto text-center"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden /> Falar no WhatsApp sobre este serviço
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* SOLUÇÕES POR SEGMENTO (PERSONAS) */}
      <section className="border-t border-border bg-card/40 py-16 md:py-24" aria-labelledby="personas-titulo">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Atendimento Especializado</p>
            <h2 id="personas-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              Soluções sob medida para a realidade do seu setor
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Desenvolvemos pacotes de infraestrutura específicos para os gargalos e exigências de cada segmento de mercado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PERSONAS.map((p) => {
              const Icon =
                p.id === "industria"
                  ? Factory
                  : p.id === "cooperativas"
                  ? Store
                  : p.id === "saude"
                  ? Warehouse
                  : p.id === "residencial"
                  ? Home
                  : Building2;
              return (
                <div
                  key={p.id}
                  className="reveal flex flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-highlight/40 hover:shadow-md"
                >
                  <div>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-highlight/10 text-highlight mb-4">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-highlight">{p.target}</span>
                    <h3 className="mt-1.5 text-lg font-bold text-foreground">{p.title}</h3>

                    <div className="mt-4 space-y-2.5 text-xs leading-relaxed">
                      <div className="rounded-xl bg-background border border-border p-3">
                        <span className="font-bold text-muted-foreground block mb-0.5 text-[11px]">Maior desafio:</span>
                        <span className="text-foreground">{p.pain}</span>
                      </div>
                      <div className="rounded-xl bg-accent/30 border border-primary/10 p-3">
                        <span className="font-bold text-primary block mb-0.5 text-[11px]">Como resolvemos:</span>
                        <span className="text-foreground">{p.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border pt-3">
                    <p className="text-xs font-semibold text-primary">✓ {p.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIMULADOR INTERATIVO DE ROI & INFRAESTRUTURA */}
      <section className="container-site py-16 md:py-24" aria-labelledby="simulador-titulo">
        <RoiInfrastructureSimulator />
      </section>

      <FinalCTA />
    </>
  );
}
