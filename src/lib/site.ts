export const SITE_URL = "https://elevamatriz.com.br"; // [domínio oficial da empresa]
export const WHATSAPP_NUMBER = "5543998198004";
export const WHATSAPP_DISPLAY = "(43) 99819-8004";
export const EMAIL = "contato@elevamatriz.com.br"; // [ajustar se houver e-mail diferente]
export const REGION = "Paraná";
export const CITY_BASE = "Londrina e região metropolitana"; // [ajustar cidade sede]
export const INSTAGRAM_HANDLE = "@eleva.matriz";
export const SOCIAL = {
  instagram: "https://www.instagram.com/eleva.matriz/",
  facebook: "https://facebook.com/[pagina]",
  linkedin: "https://linkedin.com/company/[empresa]",
};

export function waLink(msg = "Olá! Vim pelo site da Eleva Matriz e gostaria de saber mais.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const SERVICES = [
  {
    slug: "projetos-eletricos",
    title: "Projetos Elétricos Comerciais e Industriais",
    badge: "Planejamento & Engenharia",
    short: "Dimensionamento completo da rede elétrica da sua empresa, evitando desperdícios e garantindo operação segura.",
    what: "É o mapa técnico detalhado de toda a infraestrutura elétrica: cálculo de demanda de carga, diagramas unifilares, quadros de distribuição, cabeamento e proteção de máquinas pesadas, tudo aprovado na concessionária (Copel).",
    who: "Indústrias, comércios, galpões logísticos e empresas que estão construindo, ampliando ou instalando maquinários novos.",
    gain: "Fim das quedas de disjuntor, economia na compra exata de cabos/disjuntores sem sobras, e aprovação ágil junto aos órgãos reguladores.",
  },
  {
    slug: "laudos-tecnicos",
    title: "Laudo das Instalações Elétricas & NR-10",
    badge: "Segurança & Conformidade",
    short: "Vistoria técnica presencial com emissão de Laudo Pericial e ART para fiscalizações, bombeiros e seguradoras.",
    what: "Uma inspeção minuciosa com medições instrumentadas e análise termográfica, verificando riscos de choque, sobrecarga e conformidade com a Norma Regulamentadora NR-10 e NBR 5410.",
    who: "Empresas com colaboradores, galpões, fábricas e comércios em processo de renovação de alvará, auditorias do Ministério do Trabalho ou contratação de seguro.",
    gain: "Tranquilidade absoluta contra autuações e multas pesadas de fiscalização, prevenção de incêndios e proteção total para sua equipe.",
  },
  {
    slug: "spda",
    title: "SPDA e Laudo de Para-Raios",
    badge: "Proteção Patrimonial",
    short: "Projeto, instalação e laudo de conformidade do sistema de para-raios exigido pelo Corpo de Bombeiros (AVCB).",
    what: "Projeto e inspeção com medição de resistência de aterramento e continuidade das descidas do Sistema de Proteção contra Descargas Atmosféricas (SPDA), rigorosamente dentro da NBR 5419.",
    who: "Prédios comerciais, galpões industriais, condomínios empresariais e depósitos que precisam emitir ou renovar o alvará do Corpo de Bombeiros.",
    gain: "Blindagem de equipamentos eletrônicos contra queima por raios, conformidade com seguradoras e liberação do alvará de funcionamento.",
  },
  {
    slug: "energia-solar",
    title: "Energia Solar Fotovoltaica para Empresas",
    badge: "Redução de Custos",
    short: "Reduza até 90% dos gastos com energia elétrica da sua empresa com um sistema fotovoltaico de alto rendimento.",
    what: "Estudo de viabilidade técnica e financeira, projeto de engenharia, fornecimento de equipamentos tier-1 e homologação completa na concessionária até a geração ativa de créditos.",
    who: "Empresas, indústrias, clínicas e comércios com conta de energia acima de R$ 1.500/mês que buscam previsibilidade orçamentária.",
    gain: "Economia imediata e recorrente no fluxo de caixa, proteção contra reajustes na tarifa de energia e posicionamento de marca sustentável.",
  },
  {
    slug: "manutencao",
    title: "Manutenção Preventiva & Eficiência Energética",
    badge: "Operação Contínua",
    short: "Revisão periódica de painéis e diagnóstico térmico para sua empresa nunca parar por falha elétrica.",
    what: "Inspeções preventivas programadas com termografia infravermelha, reaperto de conexões, rebalanceamento de fases e correção de fator de potência (eliminação de multas de energia reativa).",
    who: "Fábricas, supermercados, centros de distribuição e operações críticas que não podem ter paradas de produção inesperadas.",
    gain: "Aumento da vida útil das máquinas, corte de multas na conta de luz e zero prejuízo com paradas não programadas.",
  },
];

export const PROJECTS = [
  {
    client: "[Indústria Metalmecânica · Norte do PR]",
    sector: "Indústria",
    tag: "Projeto & Aumento de Carga",
    challenge: "Quedas frequentes de disjuntores no horário de pico e necessidade de alimentar dois novos tornos CNC sem sobrecarregar a entrada.",
    solution: "Estudo de demanda de carga, redistribuição de circuitos, instalação de novo quadro de força e aprovação de aumento de demanda junto à Copel com ART.",
    result: "Operação 100% contínua sem desarmes e capacidade ampliada em 40% para futuras expansões.",
  },
  {
    client: "[Centro de Distribuição Logística · Paraná]",
    sector: "Logística",
    tag: "Laudo NR-10 e SPDA",
    challenge: "Alvará do Corpo de Bombeiros bloqueado devido à falta de laudo de para-raios atualizado e inconformidades no aterramento.",
    solution: "Inspeção termográfica completa, medições de aterramento ôhmico em todo o perímetro do galpão e emissão do laudo técnico com ART em 5 dias.",
    result: "AVCB e alvará liberados de imediato, garantindo a renovação da apólice de seguro do patrimônio.",
  },
  {
    client: "[Rede Varejista / Supermercado · Região Metropolitana]",
    sector: "Comércio",
    tag: "Energia Solar Comercial",
    challenge: "Conta de luz excessiva devido ao sistema de câmaras frias e ar condicionado, pesando na margem do negócio.",
    solution: "Projeto e instalação de usina solar fotovoltaica de 75 kWp no telhado da loja, com inversores de alta eficiência e monitoramento em tempo real.",
    result: "Redução de mais de R$ 8.500/mês na fatura de energia, com retorno do investimento estimado em 3 anos.",
  },
  {
    client: "[Clínica Médica e Diagnóstico · PR]",
    sector: "Saúde",
    tag: "Infraestrutura Crítica",
    challenge: "Instalação de equipamento sensível de diagnóstico por imagem com exigência rigorosa de estabilidade de tensão.",
    solution: "Projeto elétrico conforme NBR 13534 para estabelecimentos de saúde, com circuito dedicado, quadro blindado e aterramento isolado.",
    result: "Equipamentos operando com máxima fidelidade e zero oscilação, com laudo entregue à vigilância sanitária.",
  },
  {
    client: "[Complexo Agroindustrial / Silos · PR]",
    sector: "Agronegócio",
    tag: "Segurança & SPDA",
    challenge: "Estrutura metálica exposta a descargas atmosféricas frequentes em campo aberto, gerando risco para grãos e esteiras.",
    solution: "Implantação de malha de aterramento profunda e sistema de captores SPDA dimensionados pelo método de Franklin e Faraday.",
    result: "100% de proteção contra raios durante o período de chuvas e segurança total para os operadores do silo.",
  },
  {
    client: "[Condomínio Empresarial & Salas Comerciais · PR]",
    sector: "Corporativo",
    tag: "Eficiência & Medição",
    challenge: "Desequilíbrio de fases gerando aquecimento excessivo nos cabos do quadro geral e cobrança de multas por energia reativa.",
    solution: "Termografia infravermelha, rebalanceamento de circuitos e instalação de banco automático de capacitores.",
    result: "Eliminação total de multas na conta, redução da temperatura dos cabos em 25°C e divisão justa do consumo.",
  },
];

export const FAQS = [
  {
    q: "A Eleva Matriz atende em qualquer cidade do Paraná?",
    a: "Sim! Nossa equipe atende empresas, indústrias e comércios em todas as regiões do Paraná, incluindo Londrina, Maringá, Curitiba, Ponta Grossa, Cascavel e cidades vizinhas.",
  },
  {
    q: "Quem é o responsável técnico pelos projetos e laudos?",
    a: "Todos os nossos serviços contam com engenheiro eletricista responsável registrado no CREA-PR, com emissão obrigatória da ART (Anotação de Responsabilidade Técnica).",
  },
  {
    q: "Qual é o prazo médio para entrega de um laudo elétrico ou SPDA?",
    a: "Após a visita técnica presencial para vistoria e medições, a emissão do laudo técnico com parecer conclusivo e ART costuma ser entregue em até 3 a 5 dias úteis.",
  },
  {
    q: "Como funciona para pedir um orçamento?",
    a: "É muito simples: você nos chama no WhatsApp ou preenche o formulário informando a necessidade da sua empresa. Conversamos de forma rápida e transparente, sem complicação técnica.",
  },
];

export function pageHead(path: string, title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + path },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Eleva Matriz Engenharia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + path }],
  };
}
