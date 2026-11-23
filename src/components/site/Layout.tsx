import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin, Phone, Briefcase, Wrench } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import {
  EMAIL,
  REGION,
  SOCIAL,
  PHONE_COMERCIAL_DISPLAY,
  PHONE_TECNICO_DISPLAY,
  CONTACT_CHANNELS,
  waLink,
} from "@/lib/site";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" aria-label="Eleva Matriz Engenharia - página inicial">
          <img src={logo.url} alt="Eleva Matriz Engenharia" width={140} height={72} className="h-12 w-auto mix-blend-multiply" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight">
            <MessageCircle className="h-5 w-5" aria-hidden /> WhatsApp
          </a>
        </nav>
        <button className="md:hidden p-2" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t md:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg font-semibold hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight mt-2">Chamar no WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-extrabold">Eleva Matriz Engenharia</p>
          <p className="mt-3 max-w-sm text-primary-foreground/75">
            Engenharia elétrica e infraestrutura de redes para empresas e residências de alto padrão, com proximidade, segurança e explicação simples em cada etapa.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
              { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
              { href: SOCIAL.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: waLink(), Icon: MessageCircle, label: "WhatsApp Comercial" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 hover:bg-highlight hover:text-highlight-foreground">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Páginas</p>
          <ul className="mt-3 space-y-2 text-primary-foreground/75">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-highlight">{n.label}</Link></li>)}
            <li><Link to="/privacidade" className="hover:text-highlight">Política de privacidade</Link></li>
            <li className="pt-2"><Link to="/admin" className="hover:text-highlight text-xs opacity-75 inline-flex items-center gap-1.5 border-t border-primary-foreground/10 pt-2"><span className="text-[10px]">🔒</span> Acesso da Equipe (ADM)</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Telefones & Contato</p>
          <ul className="mt-3 space-y-3 text-primary-foreground/75 text-sm">
            <li className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-highlight uppercase tracking-wider">Comercial / Orçamentos</span>
              <a href={CONTACT_CHANNELS.comercial.waHref()} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-highlight font-semibold">
                <MessageCircle className="h-4 w-4 shrink-0 text-highlight" aria-hidden /> {PHONE_COMERCIAL_DISPLAY}
              </a>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-highlight uppercase tracking-wider">Técnico / Operacional</span>
              <a href={CONTACT_CHANNELS.operacional.waHref()} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-highlight font-semibold">
                <Wrench className="h-4 w-4 shrink-0 text-highlight" aria-hidden /> {PHONE_TECNICO_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2 pt-1"><Mail className="h-4 w-4 shrink-0" aria-hidden />{EMAIL}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" aria-hidden />Atendemos todo o {REGION}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Eleva Matriz Engenharia. Londrina - PR
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-card p-4 shadow-2xl backdrop-blur animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-highlight">Fale no WhatsApp</span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md"
              aria-label="Fechar opções"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Escolha o canal de atendimento ideal para você:</p>
          <div className="mt-3 space-y-2">
            <a
              href={CONTACT_CHANNELS.comercial.waHref()}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 p-2.5 rounded-xl border border-highlight/30 bg-highlight/10 hover:bg-highlight/20 transition-colors"
            >
              <Briefcase className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-foreground">Comercial & Orçamentos</p>
                <p className="text-[11px] font-semibold text-highlight">{PHONE_COMERCIAL_DISPLAY}</p>
                <p className="text-[10px] text-muted-foreground">Propostas e novas demandas</p>
              </div>
            </a>
            <a
              href={CONTACT_CHANNELS.operacional.waHref()}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 p-2.5 rounded-xl border border-border bg-background hover:bg-accent/40 transition-colors"
            >
              <Wrench className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-foreground">Técnico & Operacional</p>
                <p className="text-[11px] font-semibold text-primary">{PHONE_TECNICO_DISPLAY}</p>
                <p className="text-[10px] text-muted-foreground">Engenharia e obras em campo</p>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir canais de WhatsApp"
        aria-expanded={open}
        className="grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(!localStorage.getItem("cookie-ok")); }, []);
  if (!show) return null;
  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border bg-card p-5 shadow-2xl md:bottom-6">
      <p className="text-sm text-muted-foreground">
        Usamos cookies essenciais para o site funcionar bem. Saiba mais na nossa{" "}
        <Link to="/privacidade" className="font-semibold text-primary underline">política de privacidade</Link>.
      </p>
      <button className="btn btn-primary mt-3 min-h-10 py-2" onClick={() => { localStorage.setItem("cookie-ok", "1"); setShow(false); }}>
        Entendi
      </button>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="container-site py-20">
      <div className="reveal rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-16">
        <h2 className="text-3xl font-extrabold md:text-4xl">Vamos conversar sobre o seu projeto?</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75 leading-relaxed">
          Conte o que você precisa para sua empresa ou residência de alto padrão. Explicamos tudo sem complicação e retornamos com agilidade técnica.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CONTACT_CHANNELS.comercial.waHref()}
            target="_blank"
            rel="noopener"
            className="btn btn-highlight text-base shadow-lg shadow-highlight/20"
          >
            <MessageCircle className="h-5 w-5" aria-hidden /> WhatsApp Comercial ({PHONE_COMERCIAL_DISPLAY})
          </a>
          <a
            href={CONTACT_CHANNELS.operacional.waHref()}
            target="_blank"
            rel="noopener"
            className="btn btn-outline bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base"
          >
            <Wrench className="h-5 w-5" aria-hidden /> Canal Técnico ({PHONE_TECNICO_DISPLAY})
          </a>
        </div>
      </div>
    </section>
  );
}
