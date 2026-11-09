import { useState, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Zap,
  Network,
  Wifi,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  Building2,
  Cpu,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Camera,
  Layers,
  Award,
  Sliders,
  DollarSign,
  Activity,
  Server
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { waLink } from "@/lib/site";

// ==========================================
// 1. SIMULADOR INTERATIVO DE ROI & INFRAESTRUTURA
// ==========================================

export function RoiInfrastructureSimulator() {
  const [mounted, setMounted] = useState(false);
  const [networkPoints, setNetworkPoints] = useState<number>(120);
  const [monthlyEnergyBill, setMonthlyEnergyBill] = useState<number>(6500);
  const [sectorType, setSectorType] = useState<"industria" | "saude" | "cooperativa" | "corporativo">("industria");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cálculos dinâmicos
  const calculations = useMemo(() => {
    // Estimativa de perda de produtividade por quedas de rede antiga: ~R$ 150/ponto/ano
    const downtimeOldLoss = networkPoints * 180;
    const downtimeElevaLoss = networkPoints * 12; // 93% redução em paradas

    // Economia solar estimada: 85% da conta
    const monthlySolarSavings = monthlyEnergyBill * 0.85;
    const annualSolarSavings = monthlySolarSavings * 12;

    // Investimento solar estimado
    const estimatedSolarInvestment = monthlyEnergyBill * 6.8;
    const paybackMonths = Math.max(18, Math.round(estimatedSolarInvestment / monthlySolarSavings));

    // Dados de projeção para o gráfico de 5 anos (economia líquida acumulada)
    const fiveYearProjection = [
      { ano: "Ano 1", semEleva: Math.round(downtimeOldLoss), comEleva: Math.round(annualSolarSavings - downtimeElevaLoss) },
      { ano: "Ano 2", semEleva: Math.round(downtimeOldLoss * 2.1), comEleva: Math.round(annualSolarSavings * 2 - downtimeElevaLoss * 2) },
      { ano: "Ano 3", semEleva: Math.round(downtimeOldLoss * 3.3), comEleva: Math.round(annualSolarSavings * 3 - downtimeElevaLoss * 3) },
      { ano: "Ano 4", semEleva: Math.round(downtimeOldLoss * 4.6), comEleva: Math.round(annualSolarSavings * 4 - downtimeElevaLoss * 4) },
      { ano: "Ano 5", semEleva: Math.round(downtimeOldLoss * 6.0), comEleva: Math.round(annualSolarSavings * 5 - downtimeElevaLoss * 5) },
    ];

    // Comparativo de performance de rede (Velocidade e Estabilidade)
    const performanceData = [
      { metric: "Velocidade Nominal", antiga: 100, eleva: 10000 }, // 100 Mbps vs 10 Gbps
      { metric: "Estabilidade de Link", antiga: 78, eleva: 99.9 },
      { metric: "Capacidade Wi-Fi", antiga: 25, eleva: 250 },
    ];

    return {
      monthlySolarSavings,
      annualSolarSavings,
      paybackMonths,
      fiveYearProjection,
      performanceData,
    };
  }, [networkPoints, monthlyEnergyBill, sectorType]);

  const sectorLabels = {
    industria: "Indústria / Fábrica",
    saude: "Hospital / Clínica",
    cooperativa: "Cooperativa / Agro",
    corporativo: "Empresa / Escritório",
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 text-highlight text-xs font-bold px-3 py-1 mb-2">
            <Sliders className="h-3.5 w-3.5" /> Simulador Interativo
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Simulador de Eficiência, Redes e Retorno (ROI)
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Ajuste os controles abaixo para calcular o impacto de uma infraestrutura moderna de cabeamento, fibra e energia solar.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-muted/60 p-1.5 rounded-xl text-xs font-bold">
          <span className="text-muted-foreground px-2">Setor:</span>
          {(Object.keys(sectorLabels) as Array<keyof typeof sectorLabels>).map((key) => (
            <button
              key={key}
              onClick={() => setSectorType(key)}
              className={`rounded-lg px-2.5 py-1 transition-all ${
                sectorType === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {sectorLabels[key].split('/')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* CONTROLES INTERATIVOS (SLIDERS) */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Network className="h-4 w-4 text-highlight" /> Pontos de Rede Estimados
            </label>
            <span className="text-lg font-black text-foreground bg-muted px-3 py-0.5 rounded-lg">
              {networkPoints} pontos
            </span>
          </div>
          <input
            type="range"
            min={20}
            max={800}
            step={10}
            value={networkPoints}
            onChange={(e) => setNetworkPoints(Number(e.target.value))}
            className="w-full accent-highlight cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
            <span>20 pts (escritório)</span>
            <span>250 pts (médio porte)</span>
            <span>800+ pts (grande indústria)</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-green-600" /> Conta de Energia Mensal Atual
            </label>
            <span className="text-lg font-black text-foreground bg-muted px-3 py-0.5 rounded-lg">
              R$ {monthlyEnergyBill.toLocaleString("pt-BR")}
            </span>
          </div>
          <input
            type="range"
            min={1500}
            max={35000}
            step={500}
            value={monthlyEnergyBill}
            onChange={(e) => setMonthlyEnergyBill(Number(e.target.value))}
            className="w-full accent-highlight cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
            <span>R$ 1.500/mês</span>
            <span>R$ 15.000/mês</span>
            <span>R$ 35.000+/mês</span>
          </div>
        </div>
      </div>

      {/* RESULTADOS VISUAIS PRINCIPAIS */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-background p-4 text-center">
          <span className="text-xs font-bold uppercase text-muted-foreground block">Economia Solar / Mês</span>
          <p className="mt-1.5 text-2xl md:text-3xl font-black text-green-600">
            R$ {Math.round(calculations.monthlySolarSavings).toLocaleString("pt-BR")}
          </p>
          <span className="text-[11px] text-muted-foreground mt-0.5 block">Redução média de 85%</span>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4 text-center">
          <span className="text-xs font-bold uppercase text-muted-foreground block">Economia em 1 Ano</span>
          <p className="mt-1.5 text-2xl md:text-3xl font-black text-foreground">
            R$ {Math.round(calculations.annualSolarSavings).toLocaleString("pt-BR")}
          </p>
          <span className="text-[11px] text-muted-foreground mt-0.5 block">Recursos livres no caixa</span>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4 text-center">
          <span className="text-xs font-bold uppercase text-muted-foreground block">Payback Estimado</span>
          <p className="mt-1.5 text-2xl md:text-3xl font-black text-highlight">
            {calculations.paybackMonths} meses
          </p>
          <span className="text-[11px] text-muted-foreground mt-0.5 block">Retorno do investimento</span>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4 text-center">
          <span className="text-xs font-bold uppercase text-muted-foreground block">Disponibilidade de Rede</span>
          <p className="mt-1.5 text-2xl md:text-3xl font-black text-primary">
            99.9%
          </p>
          <span className="text-[11px] text-muted-foreground mt-0.5 block">Fibra e Cat6A certificada</span>
        </div>
      </div>

      {/* GRÁFICOS VISUAIS EM TEMPO REAL */}
      <div className="mt-10 grid gap-8 lg:grid-cols-12 items-center">
        {/* GRÁFICO 1: PROJEÇÃO DE ECONOMIA ACUMULADA */}
        <div className="lg:col-span-7 rounded-2xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-highlight" /> Projeção de Economia Financeira Acumulada
              </h4>
              <p className="text-xs text-muted-foreground">Em reais (R$) ao longo de 5 anos com energia solar e infraestrutura Eleva</p>
            </div>
            <span className="text-xs font-extrabold text-green-600 bg-green-500/10 px-2 py-0.5 rounded">
              Retorno Líquido Positivo
            </span>
          </div>

          <div className="h-64 w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={calculations.fiveYearProjection} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorEleva" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284C7" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0284C7" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                  <XAxis dataKey="ano" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
                    width={55}
                  />
                  <Tooltip
                    formatter={(value: any) => [`R$ ${Number(value).toLocaleString("pt-BR")}`, "Economia com Eleva"]}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="comEleva"
                    name="Economia Acumulada (R$)"
                    stroke="#0284C7"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorEleva)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full bg-muted/40 animate-pulse rounded-xl" />
            )}
          </div>
        </div>

        {/* GRÁFICO 2: PERFORMANCE & DISPONIBILIDADE */}
        <div className="lg:col-span-5 rounded-2xl border border-border bg-background p-5 shadow-sm space-y-4">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Activity className="h-4 w-4 text-highlight" /> Antes vs Depois: Estabilidade Operacional
          </h4>
          <p className="text-xs text-muted-foreground">
            Comparativo entre cabeamento antigo/sem certificação vs Infraestrutura Certificada Eleva Matriz.
          </p>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-foreground">Estabilidade e Imunidade a Ruídos</span>
                <span className="text-highlight font-bold">99.9% (Eleva) vs 65% (Tradicional)</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                <div className="h-full bg-highlight rounded-full" style={{ width: "99.9%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-foreground">Velocidade em Links Ópticos</span>
                <span className="text-highlight font-bold">Até 50 Gb/s (Eleva) vs 1 Gb/s (Padrão)</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-foreground">Pontos Certificados com Analisador</span>
                <span className="text-highlight font-bold">100% dos pontos com Laudo Gráfico</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <a
              href={waLink(
                `Olá! Usei o Simulador no site da Eleva Matriz para minha empresa de ${networkPoints} pontos de rede e conta de R$ ${monthlyEnergyBill}. Gostaria de receber um estudo técnico personalizado.`
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight w-full text-xs font-bold justify-center"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar Proposta Técnica com estes Dados
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. DIAGRAMA INTERATIVO: TOPOLOGIA VISUAL DE INFRAESTRUTURA
// ==========================================

const TOPOLOGY_LAYERS = [
  {
    id: "fibra",
    icon: Network,
    name: "01. Backbone Óptico (Até 50 Gb/s)",
    badge: "Alta Velocidade & Redundância",
    desc: "Anéis ópticos aéreos e subterrâneos redundantes com fusão por arco voltaico, interligando galpões, silos e prédios sem perda de sinal.",
    metric: "Links de 10Gb a 50Gb/s",
    highlight: "Zero interferência eletromagnética em ambientes fabris.",
  },
  {
    id: "switches",
    icon: Server,
    name: "02. Ativos de Rede & Switches PoE",
    badge: "Gerenciamento Corporativo",
    desc: "Switches core e de borda gerenciáveis (Aruba e Ubiquiti), com alimentação PoE direta para câmeras, APs e telefones IP.",
    metric: "Switches Core e Borda",
    highlight: "VLANs isoladas para financeiro, produção e convidados.",
  },
  {
    id: "wifi",
    icon: Wifi,
    name: "03. Wi-Fi Corporativo de Alta Densidade",
    badge: "Cobertura Sem Pontos Cegos",
    desc: "Access Points corporativos distribuídos estrategicamente após estudo de calor (site survey), com roaming contínuo entre setores.",
    metric: "Até 500 dispositivos/AP",
    highlight: "Conexão ininterrupta para coletores de dados e notebooks.",
  },
  {
    id: "cftv",
    icon: Camera,
    name: "04. Segurança Eletrônica (CFTV IP)",
    badge: "Vigilância & Proteção",
    desc: "Câmeras IP HD/4K corporativas com gravação centralizada em NVR/servidor de alta capacidade e acesso seguro pelos gestores.",
    metric: "Monitoramento 24h",
    highlight: "Nitidez facial e leitura de placas de veículos nas portarias.",
  },
  {
    id: "eletrica",
    icon: Zap,
    name: "05. Engenharia Elétrica & SPDA",
    badge: "Rigor Técnico CREA-PR",
    desc: "Padrões de entrada de até 400A, quadros de distribuição balanceados e Sistema de Proteção contra Descargas Atmosféricas (SPDA).",
    metric: "ART Obrigatória",
    highlight: "Proteção patrimonial contra queimas por raios e sobrecargas.",
  },
  {
    id: "certificacao",
    icon: Award,
    name: "06. Certificação com Analisador",
    badge: "Garantia Documentada",
    desc: "Testes ponto a ponto com equipamento analisador calibrado, gerando relatórios gráficos de atenuação e conformidade ANSI/TIA/EIA.",
    metric: "100% dos Pontos Testados",
    highlight: "Laudo técnico exigido por auditorias e seguradoras.",
  },
];

export function TopologyExplorer() {
  const [selectedLayer, setSelectedLayer] = useState<string>("fibra");

  const current = TOPOLOGY_LAYERS.find((l) => l.id === selectedLayer) || TOPOLOGY_LAYERS[0];
  const CurrentIcon = current.icon;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1 mb-2">
          <Layers className="h-3.5 w-3.5 text-highlight" /> Raio-X da Infraestrutura
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
          Topologia Completa: Como Conectamos Sua Empresa
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Clique nas camadas abaixo para explorar visualmente cada etapa da engenharia integrada da Eleva Matriz.
        </p>
      </div>

      {/* SELETOR EM ABAS INTERATIVAS */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {TOPOLOGY_LAYERS.map((layer) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={`flex flex-col items-center text-center p-3.5 rounded-2xl border transition-all ${
                isSelected
                  ? "border-highlight bg-highlight/10 text-primary shadow-md scale-102"
                  : "border-border bg-background text-muted-foreground hover:border-highlight/50 hover:text-foreground"
              }`}
            >
              <div className={`grid h-10 w-10 place-items-center rounded-xl mb-2 ${
                isSelected ? "bg-highlight text-white" : "bg-muted text-muted-foreground"
              }`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold line-clamp-2">{layer.name.replace(/^\d+\.\s*/, '')}</span>
            </button>
          );
        })}
      </div>

      {/* RAIO-X VISUAL DA CAMADA SELECIONADA */}
      <div className="mt-8 rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
          <CurrentIcon className="h-12 w-12 text-highlight" />
        </div>

        <div className="flex-1 space-y-2 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-block rounded-md bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
              {current.badge}
            </span>
            <span className="text-xs font-extrabold text-highlight bg-highlight/15 px-2.5 py-0.5 rounded-md">
              {current.metric}
            </span>
          </div>
          <h4 className="text-xl font-bold text-foreground">{current.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{current.desc}</p>
          <p className="text-xs font-semibold text-primary pt-1 flex items-center justify-center md:justify-start gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-highlight" /> {current.highlight}
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={waLink(`Olá! Gostaria de entender mais sobre a solução de ${current.name} para a minha empresa.`)}
            target="_blank"
            rel="noopener"
            className="btn btn-outline text-xs font-bold"
          >
            Falar com Engenheiro <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAPA VISUAL INTERATIVO DE POLOS NO PARANÁ
// ==========================================

const PARANA_HUBS = [
  {
    city: "Londrina & Região Metropolitana",
    role: "Sede Operacional & Centro Técnico",
    projects: [
      "Hospital Geral de Londrina (7 pavimentos, 600 pontos Cat6)",
      "Cooperativa de Trabalho Médico (1.463 pontos de rede)",
      "Comércio de Produtos Agrícolas (1.100m fibra e 757 pontos)",
      "Condomínio Residencial Vertical (106 câmeras CFTV IP)",
    ],
    highlight: "Mais de 3.500 pontos de rede executados na região metropolitana.",
  },
  {
    city: "Ibiporã",
    role: "Polo Industrial Metalmecânico",
    projects: [
      "Indústria de Carrocerias Metálicas (630 pontos, anel óptico 2.000m 50Gb, 68 APs, 90 câmeras)",
      "Indústria e Comércio de Correias (160 pontos Cat6 e telefonia)",
    ],
    highlight: "Infraestrutura óptica de 50 Gb/s interligando plantas fabris.",
  },
  {
    city: "Mandaguari & Região Norte Central",
    role: "Polo Agroindustrial & Cooperativas",
    projects: [
      "Cooperativa Agropecuária e Industrial (Anel óptico 7.500m aéreo/subterrâneo, 160 fusões)",
      "Interligação de unidades fabris, armazéns e silos de grãos",
    ],
    highlight: "Anel óptico aéreo e subterrâneo com fusão eletrovoltaica.",
  },
  {
    city: "Rolândia & Cambé",
    role: "Polo Corporativo & Residencial de Alto Padrão",
    projects: [
      "Escritório de Contabilidade em Rolândia (Elétrica total, 110 pontos e SPDA)",
      "Residencial de Alto Padrão em Cambé (42 painéis solares, Wi-Fi e CFTV)",
    ],
    highlight: "Energia solar fotovoltaica e conformidade elétrica rigorosa.",
  },
  {
    city: "Maringá, Curitiba, Ponta Grossa & Cascavel",
    role: "Atendimento Presencial em Todo o Paraná",
    projects: [
      "Cooperativa de Crédito com 40 agências no PR, SP e SC (2.800 pontos certificados)",
      "Atendimento presencial ágil com equipe própria e equipamentos calibrados",
    ],
    highlight: "Mobilidade e atendimento em empresas de todo o estado.",
  },
];

export function ParanaCoverageMap() {
  const [selectedHubIndex, setSelectedHubIndex] = useState<number>(0);
  const current = PARANA_HUBS[selectedHubIndex];

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 text-highlight text-xs font-bold px-3 py-1 mb-2">
            <MapPin className="h-3.5 w-3.5" /> Presença Regional
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Presença Técnica Comprovada no Paraná
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Selecione uma região abaixo para conferir os projetos e complexos atendidos pela Eleva Matriz.
          </p>
        </div>

        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
          Base em Londrina · Atendimento em Todo o PR
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        {/* LISTA DE POLOS INTERATIVA */}
        <div className="lg:col-span-5 space-y-2">
          {PARANA_HUBS.map((hub, idx) => {
            const isSelected = selectedHubIndex === idx;
            return (
              <button
                key={hub.city}
                onClick={() => setSelectedHubIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? "border-highlight bg-highlight/10 shadow-sm"
                    : "border-border bg-background hover:border-highlight/40"
                }`}
              >
                <div>
                  <h4 className={`text-sm font-bold ${isSelected ? "text-primary font-black" : "text-foreground"}`}>
                    {hub.city}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{hub.role}</p>
                </div>
                <div className={`grid h-8 w-8 place-items-center rounded-xl shrink-0 ${
                  isSelected ? "bg-highlight text-white" : "bg-muted text-muted-foreground"
                }`}>
                  <MapPin className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* DETALHES DO POLO SELECIONADO */}
        <div className="lg:col-span-7 rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block rounded-md bg-highlight text-white text-xs font-bold px-2.5 py-0.5">
                Projetos Entregues
              </span>
              <span className="text-xs font-semibold text-muted-foreground">{current.role}</span>
            </div>

            <h4 className="text-xl font-black text-foreground">{current.city}</h4>
            <p className="text-xs font-semibold text-highlight mt-1">{current.highlight}</p>

            <ul className="mt-6 space-y-2.5">
              {current.projects.map((proj) => (
                <li key={proj} className="flex items-start gap-2.5 text-xs text-foreground leading-relaxed bg-muted/40 p-3 rounded-xl border border-border/60">
                  <CheckCircle2 className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Sua empresa nessa região?</span>
            <a
              href={waLink(`Olá! Minha empresa fica na região de ${current.city} e gostaria de agendar uma visita técnica.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight text-xs py-2 px-4 font-bold"
            >
              Agendar Visita Técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. INFOGRÁFICO INTERATIVO: MÉTODO ELEVA MATRIZ EM 4 PASSOS
// ==========================================

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico & Mapeamento Técnico",
    desc: "Visita presencial para vistoria detalhada de quadros, teste de continuidade, inspeção termográfica e análise de cobertura Wi-Fi (site survey).",
    gain: "Identificação exata de riscos, perdas de carga e gargalos antes de gastar qualquer real.",
  },
  {
    step: "02",
    title: "Projeto de Engenharia com ART",
    desc: "Dimensionamento dos circuitos, cálculo de links de fibra óptica, escolha de equipamentos ativos e emissão da ART registrada no CREA-PR.",
    gain: "Segurança jurídica e técnica total, com garantia de aprovação junto a concessionárias e bombeiros.",
  },
  {
    step: "03",
    title: "Execução com Precisão e Limpeza",
    desc: "Lançamento de cabos Cat6/6A, fusões ópticas de alta precisão, montagem profissional de racks com identificação e montagem de quadros elétricos.",
    gain: "Instalação sem paradas no chão de fábrica e cabeamento 100% organizado e identificado.",
  },
  {
    step: "04",
    title: "Certificação com Analisador & Entrega",
    desc: "Teste ponto a ponto com equipamento analisador calibrado, gerando gráficos de conformidade técnica e entrega do as-built da obra.",
    gain: "Certeza documental de velocidade máxima em cada tomada de rede e tranquilidade contratual.",
  },
];

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">Método & Rigor</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">
          O Método Eleva Matriz: Do Diagnóstico à Certificação
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Sem improviso ou gambiarras. Nosso fluxo segue padrão de engenharia com instrumentos calibrados e ART.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((s, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                isSelected
                  ? "border-highlight bg-highlight/10 shadow-lg scale-102"
                  : "border-border bg-background hover:border-highlight/50"
              }`}
            >
              <div>
                <span className={`text-3xl font-black ${isSelected ? "text-highlight" : "text-muted-foreground/50"}`}>
                  {s.step}
                </span>
                <h4 className="mt-2 text-base font-bold text-foreground leading-snug">{s.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="text-[11px] font-bold text-primary block leading-tight">
                  ✓ {s.gain}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
