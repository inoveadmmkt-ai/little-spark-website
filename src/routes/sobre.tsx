import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/sobre")({
  head: () => pageHead("/sobre", "Sobre a Eleva Matriz | Engenharia Elétrica no Paraná",
    "Conheça a história, a missão e a equipe da Eleva Matriz Engenharia, especialista em engenharia elétrica para empresas no Paraná."),
  component: Sobre,
});

const VALUES = [
  ["Transparência", "Explicamos tudo com clareza: o que será feito, quanto custa e por quê."],
  ["Segurança em primeiro lugar", "Nenhum atalho que coloque pessoas ou o seu negócio em risco."],
  ["Proximidade", "Atendimento humano, de quem conhece a sua realidade."],
  ["Compromisso", "Prazo combinado é prazo cumprido."],
];

function Sobre() {
  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Sobre nós</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Engenharia feita de perto, por gente que se importa</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>A Eleva Matriz nasceu [ano de fundação] da vontade de oferecer às empresas uma engenharia elétrica séria, mas sem complicação.</p>
            <p>Percebemos que muitos empresários tinham dúvidas sobre laudos, projetos e normas, e não encontravam alguém que explicasse de forma simples. Foi aí que decidimos fazer diferente.</p>
            <p>Hoje atendemos empresas em todo o estado, sempre com o mesmo cuidado do primeiro cliente. [Ajustar com a história real da fundadora]</p>
          </div>
          <div className="img-slot grid aspect-[4/3] place-items-center rounded-3xl text-sm font-semibold text-muted-foreground">[Foto da equipe ou da fundadora]</div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div><h2 className="text-3xl font-extrabold">Nossa missão</h2>
            <p className="mt-4 text-lg text-muted-foreground">Levar segurança e eficiência elétrica para as empresas, com atendimento próximo e explicações que qualquer pessoa entende.</p></div>
          <div><h2 className="text-3xl font-extrabold">Nossos valores</h2>
            <dl className="mt-4 space-y-4">
              {VALUES.map(([t, d]) => <div key={t}><dt className="font-bold">{t}</dt><dd className="text-muted-foreground">{d}</dd></div>)}
            </dl></div>
        </div>
      </section>

      <section className="container-site py-20">
        <h2 className="text-3xl font-extrabold">Quem faz acontecer</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="reveal">
              <div className="img-slot grid aspect-square place-items-center rounded-2xl text-sm font-semibold text-muted-foreground">[Foto]</div>
              <h3 className="mt-4 text-lg font-bold">[Nome do integrante]</h3>
              <p className="text-muted-foreground">[Cargo / formação]</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
