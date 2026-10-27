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

function useSubmit(fn: (data: Record<string, unknown>) => Promise<unknown>) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Record<string, unknown>;
    fd.consent = fd.consent === "on";
    setState("sending");
    try {
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
  const { state, onSubmit } = useSubmit((data) => submitLead({ data }));
  if (state === "ok")
    return <p role="status" className="rounded-xl bg-card p-6 font-semibold">Pronto! Enviaremos o material para o seu e-mail e WhatsApp em breve. [ajustar quando o material estiver disponível]</p>;
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
  const { state, onSubmit } = useSubmit((data) => submitContact({ data }));
  if (state === "ok")
    return <p role="status" className="rounded-xl border bg-card p-6 font-semibold">Mensagem recebida! Vamos responder o quanto antes.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label htmlFor="c-name">Nome</Label><input id="c-name" name="name" required maxLength={100} className="field" autoComplete="name" /></div>
        <div><Label htmlFor="c-company">Empresa</Label><input id="c-company" name="company" maxLength={120} className="field" autoComplete="organization" /></div>
        <div><Label htmlFor="c-email">E-mail</Label><input id="c-email" name="email" type="email" required maxLength={255} className="field" autoComplete="email" /></div>
        <div><Label htmlFor="c-wa">WhatsApp</Label><input id="c-wa" name="whatsapp" type="tel" maxLength={30} className="field" autoComplete="tel" /></div>
      </div>
      <div><Label htmlFor="c-msg">Como podemos ajudar?</Label><textarea id="c-msg" name="message" required minLength={5} maxLength={2000} rows={5} className="field" /></div>
      <Consent />
      <button disabled={state === "sending"} className="btn btn-primary justify-self-start">{state === "sending" ? "Enviando..." : "Enviar mensagem"}</button>
      {state === "error" && <p role="alert" className="text-sm text-destructive">Não foi possível enviar. Verifique os dados ou chame no WhatsApp.</p>}
    </form>
  );
}
