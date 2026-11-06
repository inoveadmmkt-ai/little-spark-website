import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Users, Sparkles, Target, Award, ArrowRight } from "lucide-react";
import { pageHead, REGION, waLink, TEAM } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead(
      "/sobre",
      "Sobre a Eleva Matriz | Engenharia Elétrica B2B no Paraná",
      "Conheça a história, o propósito e a equipe técnica da Eleva Matriz Engenharia. Proximidade, transparência e segurança técnica para empresas em todo o Paraná."
    ),
  component: Sobre,
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Segurança e Responsabilidade",
    desc: "Nenhum atalho que coloque vidas, patrimônio ou a conformidade jurídica da sua empresa em risco.",
  },
  {
    icon: Users,
    title: "Proximidade e Atendimento Humano",
    desc: "Você conversa direto com quem entende e faz. Sem burocracia corporativa ou atendimento robotizado.",
  },
  {
    icon: Sparkles,
    title: "Transparência Total",
    desc: "Explicamos claramente o que precisa ser feito, o porquê de cada norma e apresentamos custos sem surpresas.",
  },
  {
    icon: Award,
    title: "Compromisso com Normas Técnicas",
    desc: "Projetos e laudos executados estritamente sob as normas da ABNT, NR-10 e exigências da Copel.",
  },
];

function Sobre() {
  return (
    <>
      {/* HEADER DA PÁGINA */}
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Quem Somos</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Engenharia feita de perto, com rigor técnico e linguagem simples.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Nascemos no Paraná com um propósito claro: acabar com a distância entre as exigências técnicas da engenharia elétrica e a realidade do dia a dia dos empresários.
        </p>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              A <strong>Eleva Matriz</strong> foi fundada após identificarmos uma dor recorrente em donos e gestores de empresas: a dificuldade em encontrar um parceiro de engenharia que explicasse laudos, projetos e normas elétricas sem complicações.
            </p>
            <p>
              Muitas vezes, uma notificação de fiscalização da NR-10 ou a exigência de laudo do Corpo de Bombeiros (SPDA) chegavam como uma surpresa cheia de termos técnicos incompreensíveis. Decidimos transformar essa relação.
            </p>
            <p>
              Com uma equipe ágil e dedicada formada por <strong>Beatriz, Dani, David e Thiago</strong>, atendemos empresas em todo o estado do <strong>{REGION}</strong>, combinando responsabilidade de quem assina ART com o acolhimento de quem cuida do patrimônio do cliente.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl group">
            <img
              src="/team/beatriz.jpg"
              alt="Equipe da Eleva Matriz Engenharia Elétrica no Paraná"
              className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-6 text-primary-foreground">
              <span className="inline-block rounded-full bg-highlight/30 px-3 py-0.5 text-xs font-bold text-white backdrop-blur mb-1">
                Equipe Eleva Matriz
              </span>
              <p className="text-lg font-bold">Atendimento humanizado e rigor técnico</p>
              <p className="text-xs text-primary-foreground/80 mt-0.5">Beatriz, Dani, David e Thiago prontos para apoiar sua empresa</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="border-y border-border bg-card py-20">
        <div className="container-site">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div>
                <span className="eyebrow">Propósito</span>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground">Nossa Missão</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Garantir a segurança elétrica e a eficiência operacional de empresas no Paraná, entregando projetos e laudos com clareza absoluta, proximidade e tranquilidade para os gestores.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground">Nossa Visão</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Ser a principal referência em engenharia elétrica B2B no Paraná para empresas que valorizam atendimento humanizado, compromisso de prazo e responsabilidade técnica sem rodeios.
                </p>
              </div>
            </div>

            <div>
              <span className="eyebrow">Pilares</span>
              <h2 className="mt-2 text-3xl font-extrabold text-foreground mb-6">Nossos Valores</h2>
              <div className="space-y-4">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-border bg-background p-5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-highlight/15 text-highlight">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM FAZ ACONTECER (EQUIPE) */}
      <section className="container-site py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Gente Que Cuida da Sua Empresa</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">Quem faz acontecer</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Nossa equipe técnica é formada por profissionais apaixonados por engenharia bem feita e focados em resolver problemas reais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="reveal group rounded-3xl border border-border bg-card p-5 shadow-sm hover:border-highlight/40 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="overflow-hidden rounded-2xl border border-border mb-4 aspect-[4/5] bg-muted">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.role} na Eleva Matriz`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-highlight">{member.role}</span>
                <h3 className="mt-1.5 text-xl font-bold text-foreground">{member.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <a
                  href={waLink(`Olá! Gostaria de conversar com ${member.name} da equipe da Eleva Matriz.`)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-highlight transition-colors"
                >
                  Falar com {member.name} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
