import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, MessageCircle, ShieldAlert } from "lucide-react";
import { waLink } from "@/lib/site";

const QUESTIONS = [
  {
    title: "1. Qual é o perfil da sua empresa?",
    options: [
      { label: "Indústria ou Manufatura", sector: "Indústria" },
      { label: "Comércio, Loja ou Supermercado", sector: "Comércio" },
      { label: "Galpão Logístico, Silo ou Armazém", sector: "Logística" },
      { label: "Condomínio Comercial ou Clínica", sector: "Condomínio/Clínica" },
    ],
  },
  {
    title: "2. Quando foi emitido o último laudo de NR-10 ou SPDA (para-raios)?",
    options: [
      { label: "Há mais de 1 ano ou nunca foi feito", risk: "high", note: "Alto risco de não conformidade" },
      { label: "Não tenho certeza / não encontrei o documento", risk: "high", note: "Risco em vistorias" },
      { label: "Menos de 12 meses (está em dia)", risk: "low", note: "Dentro da validade anual" },
    ],
  },
  {
    title: "3. Sua empresa enfrenta quedas de disjuntor, calor em painéis ou multas de energia?",
    options: [
      { label: "Sim, já tivemos quedas ou cobrança de reativo", pain: "Sim, problemas elétricos ativos" },
      { label: "Ocasionalmente temos oscilações ou equipamentos esquentando", pain: "Oscilações pontuais" },
      { label: "Não, a operação parece estável", pain: "Aparente estabilidade" },
    ],
  },
];

export function DiagnosticWidget() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (optionLabel: string) => {
    const updated = [...answers, optionLabel];
    setAnswers(updated);
    setStep(step + 1);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
  };

  const isCompleted = step >= QUESTIONS.length;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-lg">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight/15 px-3 py-0.5 text-xs font-bold text-highlight">
            <ShieldAlert className="h-3.5 w-3.5" /> Autoavaliação Gratuita em 1 Minuto
          </span>
          <h3 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            Sua empresa está segura contra multas ou paradas elétricas?
          </h3>
        </div>
        {isCompleted && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Refazer
          </button>
        )}
      </div>

      {!isCompleted ? (
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-3">
            <span>Passo {step + 1} de {QUESTIONS.length}</span>
            <span>{Math.round(((step) / QUESTIONS.length) * 100)}% concluído</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-highlight transition-all duration-300"
              style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>

          <h4 className="mt-6 text-lg font-bold text-foreground">
            {QUESTIONS[step].title}
          </h4>

          <div className="mt-4 grid gap-3">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSelect(opt.label)}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background p-4 text-left font-semibold text-foreground transition-all hover:border-highlight hover:bg-highlight/5 hover:text-highlight"
              >
                <span className="text-sm md:text-base">{opt.label}</span>
                <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-left">
          <div className="rounded-2xl border border-highlight/30 bg-accent/30 p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-highlight shrink-0" />
              <div>
                <h4 className="font-extrabold text-foreground">Diagnóstico Preliminar Concluído</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Com base nas suas respostas, sua empresa pode ter pontos de atenção em conformidade ou custos:
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs md:text-sm text-foreground/90 border-t border-border pt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                <span><strong>Setor:</strong> {answers[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                <span><strong>Situação dos Laudos:</strong> {answers[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                <span><strong>Histórico Operacional:</strong> {answers[2]}</span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-card p-4 border border-border text-xs text-muted-foreground">
              💡 <strong>Recomendação Técnica Eleva Matriz:</strong> O Corpo de Bombeiros e as auditorias trabalhistas do Ministério do Trabalho exigem atualização anual do laudo de SPDA e inspeção periódica de NR-10. Uma vistoria técnica preliminar garante proteção imediata contra autos de infração.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(
                `Olá! Fiz a autoavaliação no site da Eleva Matriz.\nEmpresa: ${answers[0]}\nSituação Laudos: ${answers[1]}\nProblemas: ${answers[2]}\nGostaria de entender como regularizar.`
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight w-full text-base font-bold shadow-md shadow-highlight/20"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Enviar Resultado e Falar com Engenheiro no WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
