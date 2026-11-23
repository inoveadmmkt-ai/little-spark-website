import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { submitContact, submitLead } from "@/lib/forms.functions";

function Consent() {
  return (
    <label className="flex items-start gap-3 text-sm text-muted-foreground">
      <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 accent-[var(--color-primary)]" />
      <span>
        Autorizo a Eleva Matriz a usar meus dados para entrar em contato, conforme a{" "}
        <Link to="/privacidade" className="font-semibold text-primary underline">política de privacidade</Link> (LGPD).
      </span>
    </label>
  );
}

function backupSubmissionLocally(type: "lead" | "contact", data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const key = "eleva_submissions_backup";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const item = {
      ...data,
      id: `local_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type,
      created_at: new Date().toISOString(),
    };
    existing.unshift(item);
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 200)));
  } catch (err) {
    console.warn("Could not save local submission backup:", err);
  }
}

function useSubmit(type: "lead" | "contact", fn: (data: Record<string, unknown>) => Promise<unknown>) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Record<string, unknown>;
    fd["consent"] = fd["consent"] === "on";
    setState("sending");
    try {
      backupSubmissionLocally(type, fd);
      await fn(fd);
      form.reset();
      setState("ok");
    } catch {
      setState("error");
    }
  };
  return { state, onSubmit };
}

const Label = ({ children, htmlFor }: { children: string; htmlFor: string }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">{children}</label>
);

export function LeadForm() {
  const { state, onSubmit } = useSubmit("lead", (data) => submitLead({ data }));
  if (state === "ok")
    return <p role="status" className="rounded-xl bg-card p-6 font-semibold">Pronto! Enviaremos o material para o seu e-mail e WhatsApp em breve.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div><Label htmlFor="l-name">Nome</Label><input id="l-name" name="name" required maxLength={100} className="field" autoComplete="name" /></div>
      <div><Label htmlFor="l-email">E-mail</Label><input id="l-email" name="email" type="email" required maxLength={255} className="field" autoComplete="email" /></div>
      <div><Label htmlFor="l-wa">WhatsApp</Label><input id="l-wa" name="whatsapp" type="tel" required maxLength={30} className="field" placeholder="(43) 90000-0000" autoComplete="tel" /></div>
      <Consent />
      <button disabled={state === "sending"} className="btn btn-highlight">{state === "sending" ? "Enviando..." : "Quero o material gratuito"}</button>
      {state === "error" && <p role="alert" className="text-sm text-destructive">Não foi possível enviar. Verifique os dados ou chame no WhatsApp.</p>}
    </form>
  );
}

export function ContactForm() {
  const { state, onSubmit } = useSubmit("contact", (data) => submitContact({ data }));
  if (state === "ok")
    return <p role="status" className="rounded-xl border bg-card p-6 font-semibold">Mensagem recebida com sucesso! Nossa equipe entrará em contato em breve.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label htmlFor="c-name">Nome Completo</Label><input id="c-name" name="name" required maxLength={100} className="field" autoComplete="name" placeholder="Seu nome" /></div>
        <div><Label htmlFor="c-company">Empresa, Condomínio ou Residência</Label><input id="c-company" name="company" maxLength={120} className="field" autoComplete="organization" placeholder="Nome da empresa ou residência" /></div>
        <div><Label htmlFor="c-email">E-mail</Label><input id="c-email" name="email" type="email" required maxLength={255} className="field" autoComplete="email" placeholder="seu@email.com" /></div>
        <div><Label htmlFor="c-wa">WhatsApp / Telefone</Label><input id="c-wa" name="whatsapp" type="tel" maxLength={30} className="field" autoComplete="tel" placeholder="(43) 90000-0000" /></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-sector">Tipo de Imóvel / Setor</Label>
          <select id="c-sector" name="sector" className="field" defaultValue="Empresarial">
            <option value="Empresarial">Empresas & Escritórios</option>
            <option value="Residencial Alto Padrão">Residencial de Alto Padrão</option>
            <option value="Condomínio">Condomínio Vertical ou Horizontal</option>
            <option value="Indústria">Indústria & Galpão</option>
            <option value="Cooperativa / Agro">Cooperativa ou Agroindústria</option>
            <option value="Saúde">Hospital, Clínica ou Laboratório</option>
            <option value="Outro">Outro segmento</option>
          </select>
        </div>
        <div>
          <Label htmlFor="c-channel">Canal Preferencial</Label>
          <select id="c-channel" name="preferred_channel" className="field" defaultValue="Comercial">
            <option value="Comercial">Comercial (Orçamentos & Novos Projetos)</option>
            <option value="Operacional">Operacional / Técnico (Engenharia & Obras)</option>
          </select>
        </div>
      </div>
      <div><Label htmlFor="c-msg">Como podemos te ajudar?</Label><textarea id="c-msg" name="message" required minLength={5} maxLength={2000} rows={4} className="field" placeholder="Descreva brevemente o projeto elétrico, rede, Wi-Fi, CFTV ou necessidade técnica..." /></div>
      <Consent />
      <button disabled={state === "sending"} className="btn btn-primary justify-self-start">{state === "sending" ? "Enviando..." : "Enviar mensagem"}</button>
      {state === "error" && <p role="alert" className="text-sm text-destructive">Não foi possível enviar. Verifique os dados ou chame no WhatsApp.</p>}
    </form>
  );
}
