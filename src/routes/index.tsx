import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Handshake, MessageCircle, ShieldCheck, Zap, Award, FileDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { PROJECTS, SERVICES, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/Forms";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", "Engenharia Elétrica para Empresas no Paraná | Eleva Matriz",
    "Projetos elétricos, laudos NR-10, SPDA e energia solar para empresas em todo o Paraná. Atendimento próximo e linguagem simples. Fale no WhatsApp."),
  component: Index,
});

const WHY = [
  { Icon: ShieldCheck, title: "Confiança", text: "Engenheiro responsável em cada projeto, com documentação e ART." },
  { Icon: Handshake, title: "Proximidade", text: "Você fala direto com quem faz. Sem robô, sem enrolação." },
  { Icon: Award, title: "Tradição", text: "Trabalho feito com cuidado, seguindo as normas técnicas à risca." },
  { Icon: Zap, title: "Energia", text: "Resposta rápida e prazos cumpridos para sua empresa não parar." },
];

function Index() {
  return (
    <>
      <section className="container-site grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="reveal">
          <p className="eyebrow">Engenharia elétrica para empresas · {REGION}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Sua empresa com energia <span className="text-highlight">segura</span>, regularizada e sem dor de cabeça.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Cuidamos de toda a parte elétrica do seu negócio e explicamos cada passo de um jeito que qualquer pessoa entende.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight text-lg">
              <MessageCircle className="h-5 w-5" aria-hidden /> Chamar no WhatsApp
            </a>
            <Link to="/servicos" className="btn btn-outline text-primary">Ver serviços</Link>
          </div>
        </div>
        <img src={hero} alt="Engenheiro da Eleva Matriz analisando projeto em obra comercial" width={1280} height={960}
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" fetchPriority="high" />
      </section>

      <section className="bg-card py-20" aria-labelledby="servicos-titulo">
        <div className="container-site">
          <p className="eyebrow">O que fazemos</p>
          <h2 id="servicos-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl">Serviços pensados para o dia a dia da sua empresa</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="reveal rounded-2xl border bg-background p-7 transition-shadow hover:shadow-lg">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.short}</p>
                <Link to="/servicos" hash={s.slug} className="mt-5 inline-flex items-center gap-1 font-bold text-primary">
                  Saiba mais <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20" aria-labelledby="porque-titulo">
        <p className="eyebrow">Por que a Eleva Matriz</p>
        <h2 id="porque-titulo" className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">Uma engenharia que fala a sua língua</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ Icon, title, text }) => (
            <div key={title} className="reveal">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-highlight/15 text-highlight"><Icon className="h-7 w-7" aria-hidden /></div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-20" aria-labelledby="port-titulo">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfólio</p>
              <h2 id="port-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl">Alguns trabalhos realizados</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-1 font-bold text-primary">Ver todos <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <article key={p.client} className="reveal overflow-hidden rounded-2xl border bg-background">
                <div className="img-slot grid aspect-[4/3] place-items-center text-sm font-semibold text-muted-foreground">[Foto do projeto]</div>
                <div className="p-6"><p className="eyebrow">{p.sector}</p><h3 className="mt-2 text-lg font-bold">{p.client}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20" aria-labelledby="material-titulo">
        <div className="grid items-center gap-10 rounded-3xl bg-secondary p-8 md:grid-cols-2 md:p-14">
          <div>
            <FileDown className="h-10 w-10 text-highlight" aria-hidden />
            <h2 id="material-titulo" className="mt-4 text-3xl font-extrabold">Material gratuito: [Checklist de segurança elétrica para empresas]</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Descubra se sua empresa está em dia com a NR-10", "Sinais de alerta na instalação elétrica", "Como reduzir a conta de luz"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-highlight" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
