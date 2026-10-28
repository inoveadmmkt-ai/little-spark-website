import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Zap,
  Award,
  FileDown,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Instagram,
  Factory,
  Store,
  Warehouse,
  Building2,
  XCircle,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { PROJECTS, SERVICES, FAQS, PERSONAS, COMPARISON, pageHead, waLink, REGION } from "@/lib/site";
import { FinalCTA } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/Forms";
import { DiagnosticWidget } from "@/components/site/DiagnosticWidget";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "/",
      "Engenharia Elétrica B2B no Paraná | Eleva Matriz",
      "Projetos elétricos, laudos NR-10, SPDA e energia solar para empresas em todo o Paraná. Atendimento próximo, sem jargões e com engenheiro responsável."
    ),
  component: Index,
});

const WHY = [
  {
    Icon: ShieldCheck,
    title: "Confiança",
    text: "Engenheiro responsável em cada projeto, com documentação completa, responsabilidade técnica e emissão de ART registrada no CREA-PR.",
  },
  {
    Icon: Handshake,
    title: "Proximidade",
    text: "Você fala diretamente com quem faz. Sem intermediários, sem robôs e com atendimento humanizado que entende a rotina da sua empresa.",
  },
  {
    Icon: Award,
    title: "Tradição",
    text: "Compromisso ético com as normas técnicas da ABNT e concessionárias (Copel), garantindo instalações seguras e sem retrabalho.",
  },
  {
    Icon: Zap,
    title: "Energia",
    text: "Agilidade no atendimento e cumprimento rigoroso de prazos para que as operações da sua empresa nunca fiquem paradas.",
  },
];

const TRUST_METRICS = [
  { value: "100%", label: "Projetos com ART e conformidade técnica no CREA-PR" },
  { value: "Todo o PR", label: "Atendimento presencial em cidades de todo o Paraná" },
  { value: "Rápido", label: "Laudos técnicos e vistorias sem burocracia" },
  { value: "Sem Jargão", label: "Linguagem simples e transparente em cada etapa" },
];

function Index() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container-site grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            <span className="h-2 w-2 rounded-full bg-highlight animate-pulse" />
            Engenharia Elétrica B2B · {REGION}
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Sua empresa com energia <span className="text-highlight">segura</span>, regularizada e sem dor de cabeça.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Projetos elétricos, laudos NR-10, SPDA e energia solar explicados de um jeito simples, direto ao ponto e conduzidos por engenheiro responsável.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight text-base shadow-lg shadow-highlight/20">
              <MessageCircle className="h-5 w-5" aria-hidden /> Falar no WhatsApp
            </a>
            <Link to="/servicos" className="btn btn-outline text-primary hover:bg-primary/5">
              Conhecer Serviços <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-highlight shrink-0" />
              <span>Laudos válidos com ART</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-highlight shrink-0" />
              <span>Aprovação na Copel</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/10 via-highlight/10 to-transparent blur-xl" />
          <img
            src={hero}
            alt="Engenheiro eletricista da Eleva Matriz analisando projeto técnico em campo no Paraná"
            width={1280}
            height={960}
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl border border-border"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* MÉTRICAS DE CONFIANÇA */}
      <section className="border-y border-border bg-card py-10">
        <div className="container-site grid grid-cols-2 gap-6 md:grid-cols-4">
          {TRUST_METRICS.map((m) => (
            <div key={m.label} className="text-center md:text-left">
              <p className="text-2xl font-extrabold text-primary md:text-3xl">{m.value}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES POR SEGMENTO (PERSONAS) */}
      <section className="py-20 bg-background" aria-labelledby="personas-titulo">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Para Quem é a Eleva Matriz</p>
            <h2 id="personas-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              Soluções pensadas exatamente para o perfil da sua empresa
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Entendemos a realidade de cada setor: desde o chão de fábrica até o comércio de rua, galpões e condomínios empresariais.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAS.map((p, idx) => {
              const Icon = idx === 0 ? Factory : idx === 1 ? Store : idx === 2 ? Warehouse : Building2;
              return (
                <div
                  key={p.id}
                  className="reveal flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-highlight/40 hover:shadow-md"
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-highlight/10 text-highlight mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-highlight">{p.target}</span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{p.title}</h3>

                    <div className="mt-4 space-y-3 text-xs leading-relaxed">
                      <div className="rounded-xl bg-background border border-border p-3">
                        <span className="font-bold text-muted-foreground block mb-0.5">Maior desafio:</span>
                        <span className="text-foreground">{p.pain}</span>
                      </div>
                      <div className="rounded-xl bg-accent/30 border border-primary/10 p-3">
                        <span className="font-bold text-primary block mb-0.5">Como resolvemos:</span>
                        <span className="text-foreground">{p.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold text-primary">✓ {p.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVIÇOS EM DESTAQUE */}
      <section className="py-20" aria-labelledby="servicos-titulo">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Soluções para sua empresa</p>
            <h2 id="servicos-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              Serviços pensados para a segurança e economia do seu negócio
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Sem enrolação nem termos complicados. Cada serviço é planejado para evitar riscos de fiscalização e perdas financeiras.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.slug}
                className="reveal group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all hover:border-highlight/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <span className="inline-block rounded-md bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
                    {s.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <Link
                    to="/servicos"
                    hash={s.slug}
                    className="inline-flex items-center gap-1.5 font-bold text-sm text-highlight group-hover:text-primary transition-colors"
                  >
                    Ver detalhes do serviço <ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/servicos" className="btn btn-outline text-primary">
              Ver todos os serviços e detalhes <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER A ELEVA MATRIZ */}
      <section className="bg-card py-20 border-y border-border" aria-labelledby="porque-titulo">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Diferenciais</p>
            <h2 id="porque-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl">
              Uma engenharia que fala a língua do seu negócio
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Nosso compromisso é entregar clareza, previsibilidade e segurança técnica para gestores e empresários.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ Icon, title, text }) => (
              <div key={title} className="reveal rounded-2xl border border-border bg-background p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-highlight/15 text-highlight">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO: ENGENHARIA TRADICIONAL VS ELEVA MATRIZ */}
      <section className="py-20 bg-background" aria-labelledby="comparativo-titulo">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Transparência & Método</p>
            <h2 id="comparativo-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              Como a Eleva Matriz se diferencia do mercado tradicional
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Eliminamos a burocracia e a complicação para você tomar decisões elétricas com total segurança.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
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
                <div key={c.criterion} className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 gap-4 items-center">
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

      {/* AUTOAVALIAÇÃO INTERATIVA (DIAGNÓSTICO) */}
      <section className="py-16 bg-card border-y border-border" aria-labelledby="diagnostico-titulo">
        <div className="container-site max-w-4xl">
          <DiagnosticWidget />
        </div>
      </section>

      {/* PRÉVIA DO PORTFÓLIO */}
      <section className="py-20" aria-labelledby="port-titulo">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Resultados Comprovados</p>
              <h2 id="port-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl">
                Projetos que deixaram empresas mais seguras
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-highlight">
              Ver portfólio completo <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <article key={p.client} className="reveal flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card">
                <div className="img-slot grid aspect-[16/10] place-items-center text-xs font-semibold text-muted-foreground border-b border-border">
                  <span>[Foto do Projeto · {p.sector}]</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="eyebrow text-xs">{p.sector}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{p.tag}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{p.client}</h3>
                  <p className="mt-3 text-xs text-muted-foreground"><strong>Desafio:</strong> {p.challenge}</p>
                  <p className="mt-2 text-xs font-medium text-primary"><strong>Resultado:</strong> {p.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO DE CAPTURA DE LEAD COM MATERIAL GRATUITO */}
      <section className="container-site py-20" aria-labelledby="material-titulo">
        <div className="grid items-center gap-10 rounded-3xl bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-14 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-highlight-foreground">
              <FileDown className="h-4 w-4" aria-hidden /> Material Gratuito para Empresas
            </div>

            <h2 id="material-titulo" className="mt-5 text-3xl font-extrabold md:text-4xl leading-tight">
              Checklist de Segurança Elétrica & Redução de Custos
            </h2>

            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              Um guia prático em PDF preparado pelos engenheiros da Eleva Matriz para empresários e gestores verificarem os pontos críticos da instalação da sua empresa.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/90">
              {[
                "Como saber se sua empresa está regularizada na NR-10 e Bombeiros",
                "Principais sinais de sobrecarga em quadros e cabos elétricos",
                "Onde estão os desperdícios ocultos na fatura de energia",
                "Checklist passo a passo pronto para aplicar na sua estrutura",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 items-start">
                  <Check className="h-5 w-5 shrink-0 text-highlight mt-0.5" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-card p-6 text-foreground md:p-8 shadow-lg">
            <h3 className="text-xl font-bold">Baixe gratuitamente</h3>
            <p className="mt-1 text-xs text-muted-foreground mb-4">
              Preencha os campos abaixo para receber o material em PDF direto no seu e-mail e WhatsApp:
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQ RÁPIDO PARA SEO */}
      <section className="bg-card py-20 border-t border-border" aria-labelledby="faq-titulo">
        <div className="container-site max-w-4xl">
          <div className="text-center">
            <p className="eyebrow">Dúvidas Comuns</p>
            <h2 id="faq-titulo" className="mt-3 text-3xl font-extrabold md:text-4xl">
              Perguntas Frequentes de Empresários
            </h2>
          </div>

          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-6">
                <h3 className="flex items-center gap-2.5 text-base font-bold text-foreground">
                  <HelpCircle className="h-5 w-5 text-highlight shrink-0" aria-hidden />
                  {faq.q}
                </h3>
                <p className="mt-2 pl-7 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Ficou com alguma outra dúvida sobre a instalação da sua empresa?{" "}
              <a href={waLink("Olá! Tenho uma dúvida sobre os serviços da Eleva Matriz.")} target="_blank" rel="noopener" className="font-bold text-primary underline">
                Converse com a nossa equipe no WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO INSTAGRAM */}
      <section className="container-site pt-16">
        <div className="reveal flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border bg-gradient-to-r from-card via-background to-accent/30 p-8 shadow-sm md:p-10">
          <div className="flex items-center gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-highlight/15 text-highlight">
              <Instagram className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <span className="eyebrow text-xs">Bastidores & Engenharia</span>
              <h3 className="text-xl font-bold text-foreground">Siga a Eleva Matriz no Instagram</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Acompanhe vistorias técnicas, rotina de laudos e orientações práticas de segurança para empresas no perfil{" "}
                <strong className="text-foreground">@eleva.matriz</strong>
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/eleva.matriz/"
            target="_blank"
            rel="noopener"
            className="btn btn-highlight text-sm"
          >
            <Instagram className="h-4 w-4" aria-hidden /> Seguir @eleva.matriz
          </a>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
