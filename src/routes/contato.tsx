import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { EMAIL, REGION, SOCIAL, WHATSAPP_DISPLAY, pageHead, waLink } from "@/lib/site";
import { ContactForm } from "@/components/site/Forms";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("/contato", "Contato e Orçamento | Eleva Matriz Engenharia Elétrica",
    "Peça seu orçamento de engenharia elétrica pelo WhatsApp (43) 99819-8004 ou formulário. Atendemos empresas em todo o Paraná."),
  component: Contato,
});

function Contato() {
  return (
    <section className="container-site py-16 md:py-24">
      <p className="eyebrow">Contato</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Fale com a gente. A resposta é rápida.</h1>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border bg-card p-6 md:p-10"><h2 className="mb-6 text-2xl font-bold">Envie uma mensagem</h2><ContactForm /></div>
        <div className="space-y-6">
          <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight w-full text-lg"><MessageCircle className="h-5 w-5" aria-hidden /> {WHATSAPP_DISPLAY}</a>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3"><Mail className="h-6 w-6 text-highlight" aria-hidden /><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin className="h-6 w-6 text-highlight" aria-hidden />Atendemos empresas em todo o {REGION}</li>
          </ul>
          <div className="flex gap-3">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" className="btn btn-outline text-primary"><Instagram className="h-5 w-5" aria-hidden /> Siga no Instagram</a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="btn btn-outline text-primary px-4"><Facebook className="h-5 w-5" /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="btn btn-outline text-primary px-4"><Linkedin className="h-5 w-5" /></a>
          </div>
          <div className="img-slot grid aspect-video place-items-center rounded-2xl p-4 text-center text-sm font-semibold text-muted-foreground">
            [Mapa e avaliações do Google Meu Negócio, inserir link quando disponível]
          </div>
        </div>
      </div>
    </section>
  );
}
