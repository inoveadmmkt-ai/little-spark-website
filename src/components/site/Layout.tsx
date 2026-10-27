import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { EMAIL, REGION, SOCIAL, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

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
            Engenharia elétrica para empresas, com proximidade, segurança e explicação simples em cada etapa.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
              { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
              { href: SOCIAL.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: waLink(), Icon: MessageCircle, label: "WhatsApp" },
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
          </ul>
        </div>
        <div>
          <p className="font-bold">Contato</p>
          <ul className="mt-3 space-y-3 text-primary-foreground/75">
            <li className="flex gap-2"><MessageCircle className="h-5 w-5 shrink-0" aria-hidden />{WHATSAPP_DISPLAY}</li>
            <li className="flex gap-2"><Mail className="h-5 w-5 shrink-0" aria-hidden />{EMAIL}</li>
            <li className="flex gap-2"><MapPin className="h-5 w-5 shrink-0" aria-hidden />Atendemos todo o {REGION}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Eleva Matriz Engenharia. [CNPJ 00.000.000/0000-00]
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-xl transition-transform hover:scale-105">
      <MessageCircle className="h-8 w-8" />
    </a>
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
        <h2 className="text-3xl font-extrabold md:text-4xl">Vamos conversar sobre a sua empresa?</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
          Conte o que você precisa. A gente explica tudo sem complicação e responde rapidinho.
        </p>
        <a href={waLink()} target="_blank" rel="noopener" className="btn btn-highlight mt-8 text-lg">
          <MessageCircle className="h-5 w-5" aria-hidden /> Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
