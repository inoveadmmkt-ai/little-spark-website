import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CheckCircle2, Filter, ShieldCheck, Sparkles } from "lucide-react";
import { PROJECTS, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageHead(
      "/portfolio",
      "Portfólio de Projetos | Cabeamento Estruturado, Óptico e Elétrica",
      "Conheça os projetos executados pela Eleva Matriz e seu Responsável Técnico (CREA-PR): indústrias, cooperativas, hospitais, agências de crédito e universidades no Paraná e Sul do Brasil."
    ),
  component: Portfolio,
});

const SECTORS = [
  "Todos",
  "Indústria",
  "Cooperativas",
  "Saúde",
  "Agronegócio",
  "Educação",
  "Condomínios",
  "Comércio",
  "Corporativo",
] as const;

function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.sector === filter);

  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Projetos Executados & Acervo Técnico</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Projetos reais em grandes indústrias, cooperativas e hospitais
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Confira as soluções de alta complexidade entregues em infraestrutura de cabeamento estruturado, anéis de fibra óptica de até 50 Gb/s, segurança CFTV IP e instalações elétricas corporativas.
          </p>
        </div>

        {/* NOTA DE RESPONSABILIDADE TÉCNICA E CREDIBILIDADE */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border border-highlight/30 bg-accent/20 p-5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-highlight text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-semibold">Responsabilidade Técnica Comprovada no CREA-PR:</strong>{" "}
            A maioria dos projetos listados abaixo foram executados pelo Engenheiro Responsável Técnico <strong>Thiago Marin Barbosa</strong>, com responsabilidades técnicas e ARTs devidamente registradas no CREA-PR, consolidando o acervo de excelência da <strong>Eleva Matriz Engenharia</strong>.
          </div>
        </div>

        {/* MÉTRICAS EXPRESSIVAS DO ACERVO */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <span className="text-3xl font-extrabold text-highlight md:text-4xl">+7.500</span>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">Pontos de rede certificados</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <span className="text-3xl font-extrabold text-highlight md:text-4xl">+15.000m</span>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">Cabos ópticos lançados</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <span className="text-3xl font-extrabold text-highlight md:text-4xl">40+</span>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">Agências bancárias atendidas</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <span className="text-3xl font-extrabold text-highlight md:text-4xl">100%</span>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">Com conformidade e ART</p>
          </div>
        </div>

        {/* FILTROS POR SEGMENTO */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground mr-2">
            <Filter className="h-4 w-4" /> Filtrar por segmento:
          </span>
          {SECTORS.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                filter === s
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-foreground hover:border-highlight"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* GRADE DE PROJETOS REAIS */}
      <div className="container-site grid gap-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.client}
            className="reveal flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-highlight/40 hover:shadow-lg"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-block rounded-md bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                  {p.sector}
                </span>
                <span className="text-xs font-semibold text-highlight line-clamp-1">{p.tag}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground leading-snug">{p.client}</h2>

              <dl className="mt-5 space-y-3.5 text-sm leading-relaxed">
                <div className="rounded-xl bg-background border border-border p-3.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">O Desafio</dt>
                  <dd className="mt-1 text-xs text-foreground leading-relaxed">{p.challenge}</dd>
                </div>

                <div className="rounded-xl bg-background border border-border p-3.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-highlight">A Solução Executada</dt>
                  <dd className="mt-1 text-xs text-foreground leading-relaxed">{p.solution}</dd>
                </div>

                <div className="rounded-xl bg-accent/40 border border-primary/10 p-3.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-primary">Resultado Alcançado</dt>
                  <dd className="mt-1 text-xs font-semibold text-foreground leading-relaxed">{p.result}</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-border bg-card/60 p-5">
              <a
                href={waLink(`Olá! Vi o projeto da Eleva Matriz em "${p.client}" e gostaria de solicitar uma proposta técnica similar para minha empresa.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-outline w-full text-xs font-bold justify-center"
              >
                <MessageCircle className="h-4 w-4" /> Solicitar Proposta Similar
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* CHAMADA FINAL */}
      <FinalCTA
        title="Sua empresa com a mesma excelência técnica dos maiores do Paraná"
        desc="Fale diretamente com nossa equipe técnica para dimensionar a melhor infraestrutura de rede, CFTV ou projeto elétrico para o seu negócio."
      />
    </>
  );
}
