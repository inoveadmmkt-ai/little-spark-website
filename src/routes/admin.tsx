import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Lock,
  Download,
  Search,
  MessageCircle,
  Mail,
  Building2,
  Calendar,
  RefreshCw,
  LogOut,
  Users,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Phone,
  FileText
} from "lucide-react";
import { fetchAdminSubmissions } from "@/lib/forms.functions";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/admin")({
  head: () =>
    pageHead(
      "/admin",
      "Central Administrativa | Eleva Matriz",
      "Painel restrito para gestão de leads e solicitações de contato da Eleva Matriz."
    ),
  component: AdminPage,
});

interface Submission {
  id: string;
  type: "lead" | "contact";
  name: string;
  email: string;
  whatsapp?: string | null;
  company?: string | null;
  message?: string | null;
  consent: boolean;
  created_at: string;
  status?: "novo" | "atendimento" | "orcamento" | "concluido";
}

const PIN_STORAGE_KEY = "eleva_admin_pin";
const STATUS_STORAGE_KEY = "eleva_leads_status_map";

function formatDateTime(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function cleanWaNumber(phone?: string | null) {
  if (!phone) return "";
  const nums = phone.replace(/\D/g, "");
  if (!nums) return "";
  if (nums.startsWith("55")) return nums;
  return `55${nums}`;
}

function AdminPage() {
  const [pin, setPin] = useState("");
  const [enteredPin, setEnteredPin] = useState("");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [activeTab, setActiveTab] = useState<"todos" | "leads" | "contacts">("todos");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusMap, setStatusMap] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string>("");

  // Load saved PIN and status map on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPin = sessionStorage.getItem(PIN_STORAGE_KEY) || localStorage.getItem(PIN_STORAGE_KEY);
      if (savedPin) {
        setPin(savedPin);
        loadData(savedPin);
      }
      try {
        const savedStatus = JSON.parse(localStorage.getItem(STATUS_STORAGE_KEY) || "{}");
        setStatusMap(savedStatus);
      } catch {
        // ignore
      }
    }
  }, []);

  const loadData = async (activePin: string) => {
    setLoading(true);
    setAuthError("");
    setNotice("");
    try {
      const res = await fetchAdminSubmissions({ data: { pin: activePin } });
      
      // Load local backups from this browser as fallback/enrichment
      let localItems: Submission[] = [];
      if (typeof window !== "undefined") {
        try {
          localItems = JSON.parse(localStorage.getItem("eleva_submissions_backup") || "[]");
        } catch {
          // ignore
        }
      }

      const merged: Submission[] = [];
      const seen = new Set<string>();

      // From Supabase Leads
      (res.leads || []).forEach((l: any) => {
        const id = l.id || `lead_${l.created_at}_${l.email}`;
        if (!seen.has(id)) {
          seen.add(id);
          merged.push({
            id,
            type: "lead",
            name: l.name,
            email: l.email,
            whatsapp: l.whatsapp,
            consent: l.consent,
            created_at: l.created_at || new Date().toISOString(),
          });
        }
      });

      // From Supabase Contacts
      (res.contacts || []).forEach((c: any) => {
        const id = c.id || `contact_${c.created_at}_${c.email}`;
        if (!seen.has(id)) {
          seen.add(id);
          merged.push({
            id,
            type: "contact",
            name: c.name,
            email: c.email,
            whatsapp: c.whatsapp,
            company: c.company,
            message: c.message,
            consent: c.consent,
            created_at: c.created_at || new Date().toISOString(),
          });
        }
      });

      // Add local browser backups if not yet in server list
      localItems.forEach((item) => {
        const key = `${item.email}_${item.whatsapp}`;
        const alreadyExists = merged.some((m) => m.email === item.email && m.type === item.type);
        if (!alreadyExists && !seen.has(item.id)) {
          seen.add(item.id);
          merged.push(item);
        }
      });

      // Sort by newest
      merged.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setSubmissions(merged);
      if ((res as any).warning) {
        setNotice((res as any).warning);
      }
    } catch (err: any) {
      setAuthError(err?.message || "Não foi possível validar o código de acesso.");
      setPin("");
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(PIN_STORAGE_KEY);
        localStorage.removeItem(PIN_STORAGE_KEY);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enteredPin.trim()) return;
    const clean = enteredPin.trim();
    setPin(clean);
    sessionStorage.setItem(PIN_STORAGE_KEY, clean);
    localStorage.setItem(PIN_STORAGE_KEY, clean);
    loadData(clean);
  };

  const handleLogout = () => {
    setPin("");
    setEnteredPin("");
    setSubmissions([]);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(PIN_STORAGE_KEY);
      localStorage.removeItem(PIN_STORAGE_KEY);
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    const updated = { ...statusMap, [id]: newStatus };
    setStatusMap(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  // Filtered submissions
  const filtered = useMemo(() => {
    let list = submissions;
    if (activeTab === "leads") {
      list = list.filter((s) => s.type === "lead");
    } else if (activeTab === "contacts") {
      list = list.filter((s) => s.type === "contact");
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          (s.whatsapp && s.whatsapp.includes(q)) ||
          (s.company && s.company.toLowerCase().includes(q)) ||
          (s.message && s.message.toLowerCase().includes(q))
      );
    }
    return list;
  }, [submissions, activeTab, search]);

  // Export to CSV
  const handleExportCSV = () => {
    if (filtered.length === 0) return;
    const headers = [
      "ID",
      "Tipo",
      "Data e Hora",
      "Nome",
      "Empresa",
      "E-mail",
      "WhatsApp",
      "Status",
      "Mensagem / Necessidade",
    ];

    const rows = filtered.map((s) => [
      s.id,
      s.type === "lead" ? "Material Gratuito" : "Formulário de Contato",
      formatDateTime(s.created_at),
      `"${(s.name || "").replace(/"/g, '""')}"`,
      `"${(s.company || "").replace(/"/g, '""')}"`,
      `"${(s.email || "").replace(/"/g, '""')}"`,
      `"${(s.whatsapp || "").replace(/"/g, '""')}"`,
      statusMap[s.id] || "Novo",
      `"${(s.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map((r) => r.join(";"))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads_eleva_matriz_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // If not authenticated, show PIN login screen
  if (!pin) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Lock className="h-7 w-7 text-highlight" />
            </div>
            <h1 className="mt-5 text-2xl font-extrabold text-foreground">Central Administrativa</h1>
            <p className="mt-1 text-xs font-semibold text-highlight uppercase tracking-wider">Eleva Matriz Engenharia</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Área restrita à equipe para consulta e gestão dos leads e solicitações de contato cadastrados no site.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label htmlFor="adm-pin" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                Código de Acesso (PIN)
              </label>
              <input
                id="adm-pin"
                type="password"
                required
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                placeholder="Digite a senha de acesso"
                className="field text-center text-lg tracking-widest font-mono"
                autoFocus
              />
              <p className="mt-2 text-[11px] text-muted-foreground text-center">
                Código padrão de acesso da equipe: <code className="bg-muted px-1.5 py-0.5 rounded font-bold text-foreground">eleva2026</code>
              </p>
            </div>

            {authError && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-xs font-medium text-destructive text-center">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full justify-center text-sm font-bold shadow-lg shadow-primary/20"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" /> Verificando...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" /> Acessar Central de Cadastros
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao site público
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Statistics
  const totalLeadsCount = submissions.filter((s) => s.type === "lead").length;
  const totalContactsCount = submissions.filter((s) => s.type === "contact").length;
  const todayCount = submissions.filter((s) => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      return s.created_at.slice(0, 10) === today;
    } catch {
      return false;
    }
  }).length;

  return (
    <div className="min-h-screen bg-muted/20">
      {/* TOPBAR ADMIN */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="container-site flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-extrabold text-lg text-foreground hover:text-primary transition-colors flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white text-xs font-black">
                EM
              </span>
              <span>Eleva Matriz</span>
            </Link>
            <span className="rounded-full bg-highlight/15 text-highlight text-[11px] font-bold px-2.5 py-0.5">
              Central de Leads & Contatos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => loadData(pin)}
              disabled={loading}
              title="Atualizar lista"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Atualizar</span>
            </button>

            <button
              onClick={handleLogout}
              title="Sair da Central"
              className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-1.5 text-xs font-bold text-destructive hover:bg-destructive/20 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="container-site py-8 space-y-8">
        {/* CARDS DE RESUMO */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider">Total de Cadastros</span>
              <Users className="h-5 w-5 text-highlight" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-foreground">{submissions.length}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Recebidos pelo site</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider">Material Gratuito</span>
              <FileText className="h-5 w-5 text-highlight" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-foreground">{totalLeadsCount}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Checklist & Guias</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider">Mensagens de Contato</span>
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-foreground">{totalContactsCount}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Orçamentos & Dúvidas</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wider">Cadastros Hoje</span>
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-foreground">{todayCount}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Últimas 24 horas</p>
          </div>
        </div>

        {notice && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs font-medium text-amber-800 dark:text-amber-200">
            {notice}
          </div>
        )}

        {/* BARRA DE AÇÕES: PESQUISA, ABAS E EXPORTAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
          {/* ABAS */}
          <div className="flex rounded-xl bg-muted p-1 gap-1">
            <button
              onClick={() => setActiveTab("todos")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                activeTab === "todos" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                activeTab === "leads" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Leads ({totalLeadsCount})
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                activeTab === "contacts" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contatos ({totalContactsCount})
            </button>
          </div>

          {/* BUSCA E EXPORTAÇÃO */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 md:justify-end">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nome, email, wa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-highlight"
              />
            </div>

            <button
              onClick={handleExportCSV}
              disabled={filtered.length === 0}
              className="btn btn-outline text-xs font-bold w-full sm:w-auto shrink-0 justify-center gap-1.5 hover:border-highlight"
            >
              <FileSpreadsheet className="h-4 w-4 text-green-600" /> Exportar para Excel (.CSV)
            </button>
          </div>
        </div>

        {/* LISTAGEM DE LEADS */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">Nenhum cadastro encontrado</h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-sm mx-auto">
              {search
                ? "Nenhum resultado corresponde à sua pesquisa. Tente outros termos."
                : "Os cadastros realizados nos formulários de material gratuito e contato aparecerão listados aqui automaticamente."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => {
              const waClean = cleanWaNumber(item.whatsapp);
              const isExpanded = expandedId === item.id;
              const currentStatus = statusMap[item.id] || "novo";

              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-highlight/40 transition-all flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`rounded-md px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                          item.type === "lead"
                            ? "bg-highlight/15 text-highlight border border-highlight/20"
                            : "bg-primary/10 text-primary border border-primary/20"
                        }`}
                      >
                        {item.type === "lead" ? "Material Gratuito" : "Contato & Orçamento"}
                      </span>

                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDateTime(item.created_at)}
                      </span>
                    </div>

                    {/* STATUS DO LEAD */}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-muted-foreground">Status:</span>
                      <select
                        value={currentStatus}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-highlight"
                      >
                        <option value="novo">Novo</option>
                        <option value="atendimento">Em Atendimento</option>
                        <option value="orcamento">Orçamento Enviado</option>
                        <option value="concluido">Concluído</option>
                      </select>
                    </div>
                  </div>

                  {/* DADOS PRINCIPAIS DO CLIENTE */}
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 items-start">
                    <div>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">Nome</span>
                      <p className="mt-0.5 text-sm font-bold text-foreground">{item.name}</p>
                      {item.company && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <Building2 className="h-3 w-3" /> {item.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">E-mail</span>
                      <a
                        href={`mailto:${item.email}?subject=Contato Eleva Matriz Engenharia`}
                        className="mt-0.5 text-xs text-primary hover:text-highlight font-medium flex items-center gap-1 break-all"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" /> {item.email}
                      </a>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">WhatsApp</span>
                      {waClean ? (
                        <a
                          href={`https://wa.me/${waClean}?text=${encodeURIComponent(
                            `Olá ${item.name}! Vi seu cadastro no site da Eleva Matriz. Como podemos ajudar sua empresa hoje?`
                          )}`}
                          target="_blank"
                          rel="noopener"
                          className="mt-0.5 inline-flex items-center gap-1 text-xs font-bold text-green-600 hover:text-green-700 hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0" /> {item.whatsapp}
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground mt-0.5 block">Não informado</span>
                      )}
                    </div>

                    <div className="flex sm:justify-end items-center gap-2">
                      {waClean && (
                        <a
                          href={`https://wa.me/${waClean}?text=${encodeURIComponent(
                            `Olá ${item.name}! Vi seu cadastro no site da Eleva Matriz. Como podemos ajudar sua empresa hoje?`
                          )}`}
                          target="_blank"
                          rel="noopener"
                          className="btn btn-highlight text-xs py-1.5 px-3 font-bold justify-center"
                          title="Chamar no WhatsApp"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> Chamar WhatsApp
                        </a>
                      )}

                      {item.message && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                          className="rounded-lg border border-border p-1.5 text-muted-foreground hover:text-foreground"
                          title={isExpanded ? "Ocultar mensagem" : "Ver mensagem completa"}
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* MENSAGEM EXPANDIDA SE HOUVER */}
                  {item.message && isExpanded && (
                    <div className="rounded-xl border border-border bg-background p-4 text-xs leading-relaxed text-foreground mt-1">
                      <strong className="text-highlight block mb-1">Mensagem enviada pelo cliente:</strong>
                      <p className="whitespace-pre-line text-muted-foreground">{item.message}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
