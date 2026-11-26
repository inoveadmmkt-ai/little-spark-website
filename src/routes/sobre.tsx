import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, CheckCircle2, Clock, Award, Lightbulb, Scale, Network, Handshake, Users2, ArrowRight, XCircle } from "lucide-react";
import { pageHead, REGION, waLink, TEAM, MISSION, VISION, CORE_VALUES, COMPARISON } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";
import { ProcessFlow } from "@/components/site/InteractiveFeatures";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead(
      "/sobre",
      "Sobre a Eleva Matriz | Infraestrutura de Redes e Engenharia Elétrica",
      "Conheça a história, a missão, a visão e a equipe técnica da Eleva Matriz. Alta performance em cabeamento estruturado e engenharia elétrica no Paraná e Sul do Brasil."
    ),
  component: Sobre,
});

const VALUE_ICONS = [
  HeartHandshake, // Respeito
  CheckCircle2,   // Compromisso com Resultado
  Clock,          // Pontualidade
  Award,          // Excelência Técnica
  Lightbulb,      // Inovação
  Scale,          // Ética
  Network,        // Visão do Todo
  Handshake,      // Confiança
  Users2,         // Valorização das Pessoas
];

function Sobre() {
  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Quem Somos</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Elevando o nível de performance em redes e engenharia elétrica.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Nascemos no Paraná para conectar empresas a soluções definitivas: unindo alta tecnologia em cabeamento estruturado e redes de fibra óptica ao rigor técnico da engenharia elétrica.
        </p>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              A <strong>Eleva Matriz</strong> atua como parceira estratégica de empresas, indústrias, cooperativas, hospitais, condomínios e residências de alto padrão que dependem de infraestrutura crítica de dados e energia com máxima estabilidade e segurança.
            </p>
            <p>
              Comunicação instável, cabos sem certificação e instalações elétricas sobrecarregadas geram prejuízos diários e riscos graves. Por isso, aliamos precisão de instrumentos calibrados, homologação técnica e atendimento humanizado.
            </p>
            <p>
              Nossa equipe multidisciplinar reúne <strong>Beatriz Costa</strong> (Marketing & Comunicação), <strong>Danielli Marin</strong> (Administração & RH), <strong>David Costa</strong> (Head Comercial) e o <strong>Eng. Thiago Marin Barbosa</strong> (Engenharia & Projetos com CREA-PR), garantindo suporte completo do planejamento à entrega final.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl border border-border bg-card/60 backdrop-blur shadow-xl">
            {TEAM.map((m) => (
              <div key={m.name} className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/70 bg-background flex flex-col shadow-sm">
                <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={m.photo}
                    alt={`${m.name} - ${m.role} na Eleva Matriz`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-2.5 text-center border-t border-border/60 bg-card">
                  <p className="text-xs sm:text-sm font-bold text-foreground truncate">{m.name}</p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-highlight mt-0.5 truncate">{m.role.split('&')[0].trim()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES OFICIAIS */}
      <section className="border-y border-border bg-card py-12 md:py-20">
        <div className="container-site">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            {/* MISSÃO E VISÃO */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-10">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-background p-5 sm:p-8 shadow-sm">
                <span className="eyebrow">Nosso Propósito</span>
                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-foreground">Missão</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {MISSION}
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-highlight/30 bg-accent/20 p-5 sm:p-8 shadow-sm">
                <span className="eyebrow text-highlight">Onde Queremos Chegar</span>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-foreground">Visão de Futuro</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {VISION}
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-background p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-highlight shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">Responsabilidade Técnica CREA-PR</h4>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Engenheiro habilitado e acervo técnico com ART em 100% dos projetos executados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 VALORES OFICIAIS */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Pilares Fundamentais</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground mb-4 sm:mb-6">Valores da Eleva</h2>
              
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {CORE_VALUES.map((val, idx) => {
                  const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
                  return (
                    <div key={val.title} className="flex flex-col rounded-2xl border border-border bg-background p-4 sm:p-5 hover:border-highlight/40 transition-colors shadow-sm">
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg bg-highlight/15 text-highlight">
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" aria-hidden />
                        </div>
                        <h4 className="font-bold text-foreground text-xs sm:text-sm">{val.title}</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-1">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MÉTODO ELEVA MATRIZ (INFOGRÁFICO INTERATIVO) */}
      <section className="container-site py-12 md:py-20" aria-labelledby="metodo-titulo">
        <ProcessFlow />
      </section>

      {/* COMPARATIVO: ENGENHARIA TRADICIONAL VS ELEVA MATRIZ */}
      <section className="py-12 md:py-20 bg-card/40 border-y border-border" aria-labelledby="comparativo-titulo">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Transparência & Rigor</p>
            <h2 id="comparativo-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              Como a Eleva Matriz se diferencia do mercado tradicional
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Eliminamos intermediários e burocracia para você tomar decisões de infraestrutura com clareza e respaldo técnico.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border bg-muted/40 p-4 font-bold text-sm text-foreground">
              <div>Critério de Avaliação</div>
              <div className="hidden md:flex items-center gap-1.5 text-muted-foreground">
                <XCircle className="h-4 w-4 text-destructive/70" /> Mercado Tradicional
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4 text-highlight" /> Padrão Eleva Matriz
              </div>
            </div>

            <div className="divide-y divide-border">
              {COMPARISON.map((c) => (
                <div key={c.criterion} className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 items-center">
                  <div className="font-bold text-foreground text-sm md:text-base">
                    {c.criterion}
                  </div>
                  <div className="rounded-xl bg-background border border-border p-3 text-xs md:text-sm text-muted-foreground md:border-0 md:bg-transparent md:p-0">
                    <span className="md:hidden font-bold text-destructive block mb-1">Mercado Tradicional:</span>
                    {c.traditional}
                  </div>
                  <div className="rounded-xl bg-accent/30 border border-primary/10 p-3 text-xs md:text-sm font-medium text-foreground md:border-0 md:bg-transparent md:p-0">
                    <span className="md:hidden font-bold text-primary block mb-1">Eleva Matriz:</span>
                    <span className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                      <span>{c.eleva}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUEM FAZ ACONTECER (EQUIPE) */}
      <section className="container-site py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Equipe Multidisciplinar</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold md:text-4xl text-foreground">Quem faz acontecer</h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground">
            Profissionais dedicados a entregar soluções personalizadas com excelência, clareza e compromisso com o resultado.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="reveal group rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-5 shadow-sm hover:border-highlight/40 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="overflow-hidden rounded-2xl border border-border/70 mb-4 aspect-[4/5] bg-muted shadow-sm">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.role} na Eleva Matriz`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-highlight">{member.role}</span>
                <h3 className="mt-1.5 text-lg font-bold text-foreground">{member.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-5 border-t border-border pt-4 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={waLink(`Olá! Gostaria de conversar com ${member.name} da equipe da Eleva Matriz.`, member.channel)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-highlight transition-colors"
                >
                  Falar com {member.name.split(' ')[0]} <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                  {member.phoneDisplay}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <FinalCTA />
    </>
  );
}
