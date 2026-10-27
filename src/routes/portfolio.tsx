import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CheckCircle2, Filter } from "lucide-react";
import { PROJECTS, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageHead(
      "/portfolio",
      "Portfólio de Engenharia Elétrica B2B | Eleva Matriz Paraná",
      "Confira projetos elétricos, laudos NR-10, SPDA e energia solar entregues pela Eleva Matriz para indústrias, comércios e galpões no Paraná."
    ),
  component: Portfolio,
});

const SECTORS = ["Todos", "Indústria", "Logística", "Comércio", "Saúde", "Agronegócio", "Corporativo"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.sector === filter);

  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Cases & Projetos · {REGION}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Projetos reais que deixaram empresas mais seguras e econômicas
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Conheça alguns dos desafios elétricos que solucionamos para empresas paranaenses: desde adequações de carga industrial e laudos de bombeiros até usinas solares comerciais.
          </p>
        </div>

        {/* FILTROS POR SEGMENTO */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
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

      {/* GRADE DE PROJETOS */}
      <div className="container-site grid gap-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.client}
            className="reveal flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-highlight/40 hover:shadow-lg"
          >
            <div>
              {/* PLACEHOLDER DE FOTO */}
              <div className="img-slot flex aspect-[16/10] flex-col items-center justify-center border-b border-border p-4 text-center text-xs font-semibold text-muted-foreground">
                <span className="font-bold text-foreground/80">[Foto do Projeto · {p.sector}]</span>
                <span className="mt-1 text-[11px] text-muted-foreground">Espaço sinalizado para foto do cliente / obra</span>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block rounded-md bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                    {p.sector}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">{p.tag}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground">{p.client}</h2>

                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div className="rounded-xl bg-background border border-border p-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">O Desafio</dt>
                    <dd className="mt-1 text-foreground">{p.challenge}</dd>
                  </div>

                  <div className="rounded-xl bg-background border border-border p-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-highlight">A Solução Eleva Matriz</dt>
                    <dd className="mt-1 text-foreground">{p.solution}</dd>
                  </div>

                  <div className="rounded-xl bg-accent/40 border border-primary/10 p-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary">Resultado Conquistado</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p.result}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="border-t border-border p-6 pt-4 bg-background/50">
              <a
                href={waLink(`Olá! Vi o case de ${p.sector} no site da Eleva Matriz e gostaria de um projeto similar para a minha empresa.`)}
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-2 text-xs font-bold text-primary hover:text-highlight py-2"
              >
                <MessageCircle className="h-4 w-4" /> Solicitar solução semelhante
              </a>
            </div>
          </article>
        ))}
      </div>

      <FinalCTA />
    </>
  );
}
