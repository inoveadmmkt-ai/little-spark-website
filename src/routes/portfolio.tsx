import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS, pageHead } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead("/portfolio", "Portfólio de Projetos Elétricos | Eleva Matriz Engenharia",
    "Veja projetos elétricos, laudos e instalações realizados pela Eleva Matriz para empresas no Paraná: desafios e resultados."),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Portfólio</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Projetos que deixaram empresas mais seguras</h1>
      </section>
      <div className="container-site grid gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.client} className="reveal overflow-hidden rounded-2xl border bg-card">
            <div className="img-slot grid aspect-[4/3] place-items-center text-sm font-semibold text-muted-foreground">[Foto do projeto]</div>
            <div className="p-6">
              <p className="eyebrow">{p.sector}</p>
              <h2 className="mt-2 text-xl font-bold">{p.client}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="font-bold">Desafio</dt><dd className="text-muted-foreground">{p.challenge}</dd></div>
                <div><dt className="font-bold">Resultado</dt><dd className="text-muted-foreground">{p.result}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <FinalCTA />
    </>
  );
}
