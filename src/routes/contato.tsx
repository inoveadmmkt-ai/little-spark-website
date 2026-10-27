import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, MapPin, MessageCircle, Clock, Star, ExternalLink, ShieldCheck } from "lucide-react";
import { EMAIL, REGION, CITY_BASE, SOCIAL, WHATSAPP_DISPLAY, pageHead, waLink } from "@/lib/site";
import { ContactForm } from "@/components/site/Forms";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageHead(
      "/contato",
      "Contato e Orçamento | Eleva Matriz Engenharia Elétrica Paraná",
      "Fale direto com nossos engenheiros pelo WhatsApp (43) 99819-8004 ou envie sua mensagem. Atendimento ágil para empresas em todo o Paraná."
    ),
  component: Contato,
});

function Contato() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Canais de Atendimento</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Fale com a gente. A resposta é rápida e descomplicada.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Seja para tirar dúvidas sobre uma notificação da NR-10, solicitar laudo de SPDA ou orçar um projeto elétrico completo, nossa equipe está pronta para te atender.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* FORMULÁRIO DE CONTATO B2B */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Envie uma mensagem</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha os dados abaixo e retornaremos com uma proposta ou contato técnico.
            </p>
          </div>
          <ContactForm />
        </div>

        {/* INFORMAÇÕES DE CONTATO E GOOGLE MEU NEGÓCIO */}
        <div className="space-y-6">
          {/* BOTÃO PRINCIPAL WHATSAPP */}
          <div className="rounded-3xl border border-highlight/30 bg-gradient-to-br from-highlight/10 via-background to-card p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-highlight">Atendimento Imediato</span>
            <h3 className="mt-1 text-xl font-bold text-foreground">Prefere falar pelo WhatsApp?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Converse diretamente com o engenheiro responsável sem filas ou intermediários.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight mt-4 w-full text-base font-bold shadow-md shadow-highlight/20"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Conversar no WhatsApp · {WHATSAPP_DISPLAY}
            </a>
          </div>

          {/* DADOS DE CONTATO E HORÁRIO */}
          <div className="rounded-3xl border border-border bg-card p-6 space-y-4">
            <h3 className="text-base font-bold text-foreground">Informações de Contato</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-highlight shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="block text-xs font-bold text-muted-foreground">E-mail Comercial</span>
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-foreground hover:text-highlight transition-colors">
                    {EMAIL}
                  </a>
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
                  <span className="block text-xs font-bold text-muted-foreground">Horário de Funcionamento</span>
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
                  <Instagram className="h-4 w-4" aria-hidden /> Instagram
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
