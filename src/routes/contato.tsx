import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, MapPin, MessageCircle, Clock, Phone, ShieldCheck, Wrench, Briefcase } from "lucide-react";
import {
  EMAIL,
  REGION,
  CITY_BASE,
  SOCIAL,
  PHONE_COMERCIAL_DISPLAY,
  PHONE_TECNICO_DISPLAY,
  CONTACT_CHANNELS,
  pageHead,
  waLink,
} from "@/lib/site";
import { ContactForm } from "@/components/site/Forms";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageHead(
      "/contato",
      "Contato e Telefones Oficiais | Eleva Matriz Engenharia Elétrica Paraná",
      "Canais diretos: Comercial (43) 99196-2873 e Operacional/Técnico (43) 98817-4121. Atendimento rápido para empresas, indústrias e residências de alto padrão no Paraná."
    ),
  component: Contato,
});

function Contato() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Canais Oficiais de Atendimento</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Fale diretamente com nossa equipe técnica ou comercial
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Disponibilizamos linhas dedicadas para que você seja atendido com máxima agilidade: escolha o canal comercial para novos projetos e cotações, ou o canal técnico/operacional para acompanhamento de obras e engenharia.
        </p>
      </div>

      {/* CARDS DESTACADOS DOS DOIS TELEFONES */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* COMERCIAL */}
        <div className="rounded-3xl border border-highlight/30 bg-gradient-to-br from-highlight/10 via-background to-card p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight/15 px-3 py-1 text-xs font-bold text-highlight">
                <Briefcase className="h-3.5 w-3.5" /> Comercial & Novos Projetos
              </span>
              <span className="text-xs font-semibold text-muted-foreground">Orçamentos</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">{PHONE_COMERCIAL_DISPLAY}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Ideal para cotações, solicitações de propostas para empresas, indústrias, condomínios ou residências de alto padrão, além de agendamento de reuniões comerciais.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT_CHANNELS.comercial.waHref()}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight flex-1 text-sm font-bold shadow-md shadow-highlight/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Comercial
            </a>
            <a
              href={CONTACT_CHANNELS.comercial.telHref}
              className="btn btn-outline text-primary text-sm font-semibold"
            >
              <Phone className="h-4 w-4" aria-hidden /> Ligar
            </a>
          </div>
        </div>

        {/* TÉCNICO / OPERACIONAL */}
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                <Wrench className="h-3.5 w-3.5" /> Técnico & Operacional
              </span>
              <span className="text-xs font-semibold text-muted-foreground">Engenharia & Obras</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">{PHONE_TECNICO_DISPLAY}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Canal direto com nossa engenharia para acompanhamento de cronograma de obras, vistorias técnicas presenciais, laudos periciais e alinhamentos de campo com ART.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT_CHANNELS.operacional.waHref()}
              target="_blank"
              rel="noopener"
              className="btn btn-primary flex-1 text-sm font-bold shadow-md"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Técnico
            </a>
            <a
              href={CONTACT_CHANNELS.operacional.telHref}
              className="btn btn-outline text-primary text-sm font-semibold"
            >
              <Phone className="h-4 w-4" aria-hidden /> Ligar
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* FORMULÁRIO DE CONTATO B2B & RESIDENCIAL */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Envie uma mensagem formal</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha os dados abaixo e retornaremos com uma proposta técnica detalhada ou contato especializado.
            </p>
          </div>
          <ContactForm />
        </div>

        {/* INFORMAÇÕES DE CONTATO E GOOGLE MEU NEGÓCIO */}
        <div className="space-y-6">
          {/* DADOS DE CONTATO E HORÁRIO */}
          <div className="rounded-3xl border border-border bg-card p-6 space-y-4">
            <h3 className="text-base font-bold text-foreground">Informações Centrais</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-highlight shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="block text-xs font-bold text-muted-foreground">E-mail Oficial</span>
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-foreground hover:text-highlight transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-highlight shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="block text-xs font-bold text-muted-foreground">Telefones Diretos</span>
                  <p className="text-foreground font-medium">Comercial: {PHONE_COMERCIAL_DISPLAY}</p>
                  <p className="text-foreground font-medium">Operacional: {PHONE_TECNICO_DISPLAY}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-highlight shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="block text-xs font-bold text-muted-foreground">Área de Atuação</span>
                  <span className="text-foreground">Todo o estado do {REGION} (base em {CITY_BASE})</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-highlight shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="block text-xs font-bold text-muted-foreground">Horário de Atendimento</span>
                  <span className="text-foreground">Segunda a Sexta, das 08h às 18h</span>
                </div>
              </li>
            </ul>

            <div className="border-t border-border pt-4">
              <span className="block text-xs font-bold text-muted-foreground mb-3">Redes Sociais</span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline text-primary text-xs py-2 px-3.5"
                >
                  <Instagram className="h-4 w-4 text-highlight" aria-hidden /> @eleva.matriz
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline text-primary text-xs py-2 px-3.5"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline text-primary text-xs py-2 px-3.5"
                >
                  <Facebook className="h-4 w-4" aria-hidden /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* GOOGLE MEU NEGÓCIO & MAPA PLACEHOLDER */}
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-muted-foreground">Google Meu Negócio</span>
            </div>
            <h4 className="text-sm font-bold text-foreground">Eleva Matriz Engenharia Elétrica</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Atendimento técnico corporativo no Paraná · Avaliações e localização verificada.
            </p>

            <div className="img-slot mt-4 flex aspect-video flex-col items-center justify-center rounded-2xl border border-border p-4 text-center text-xs font-semibold text-muted-foreground">
              <span>[Mapa Interativo do Google Meu Negócio]</span>
              <span className="mt-1 text-[11px] font-normal text-muted-foreground/80">
                (Inserir link oficial do perfil da empresa quando disponibilizado)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
