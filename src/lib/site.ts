export const SITE_URL = "https://elevamatriz.com.br"; // [confirmar domínio oficial]
export const WHATSAPP_NUMBER = "5543998198004"; // [confirmar número oficial]
export const WHATSAPP_DISPLAY = "(43) 99819-8004";
export const EMAIL = "[contato@elevamatriz.com.br]";
export const REGION = "Paraná"; // [confirmar estado de atuação]
export const SOCIAL = {
  instagram: "https://instagram.com/[usuario]",
  facebook: "https://facebook.com/[pagina]",
  linkedin: "https://linkedin.com/company/[empresa]",
};

export function waLink(msg = "Olá! Vim pelo site da Eleva Matriz e gostaria de saber mais.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const SERVICES = [
  {
    slug: "projetos-eletricos",
    title: "Projetos elétricos",
    short: "Planejamento completo da parte elétrica da sua empresa, do jeito certo desde o início.",
    what: "É o 'mapa' de toda a instalação elétrica: onde ficam quadros, tomadas, cabos e proteções, calculado para a carga real do seu negócio.",
    who: "Empresas que vão construir, reformar, ampliar ou instalar máquinas novas.",
    gain: "Mais segurança, menos desperdício de material e aprovação facilitada junto à concessionária.",
  },
  {
    slug: "laudos-tecnicos",
    title: "Laudos e inspeções (NR-10)",
    short: "Avaliamos suas instalações e entregamos um documento técnico claro e válido.",
    what: "Uma vistoria feita por engenheiro responsável, que verifica riscos e emite o laudo exigido por normas e fiscalizações.",
    who: "Empresas com funcionários, indústrias, comércios e quem precisa regularizar alvarás ou seguros.",
    gain: "Tranquilidade em fiscalizações, menos risco de acidentes e de multas.",
  },
  {
    slug: "spda",
    title: "SPDA (para-raios)",
    short: "Projeto, instalação e laudo do sistema de proteção contra descargas atmosféricas.",
    what: "É o sistema que protege o prédio, as pessoas e os equipamentos contra raios.",
    who: "Galpões, prédios comerciais, indústrias e condomínios empresariais.",
    gain: "Proteção do patrimônio e documentação exigida pelo Corpo de Bombeiros.",
  },
  {
    slug: "energia-solar",
    title: "Energia solar para empresas",
    short: "Reduza a conta de luz com um sistema dimensionado para o seu consumo.",
    what: "Instalação de placas que geram a própria energia da empresa, com todo o processo junto à concessionária.",
    who: "Negócios que querem cortar custos fixos e ter previsibilidade.",
    gain: "Economia na conta de energia mês a mês e um negócio mais sustentável.",
  },
  {
    slug: "manutencao",
    title: "Manutenção e eficiência energética",
    short: "Acompanhamento preventivo para evitar paradas e gastos inesperados.",
    what: "Visitas periódicas para revisar quadros, conexões e consumo, corrigindo problemas antes que virem prejuízo.",
    who: "Empresas que não podem parar e querem cuidar das instalações com regularidade.",
    gain: "Menos imprevistos, equipamentos durando mais e conta de luz sob controle.",
  },
];

export const PROJECTS = [
  { client: "[Nome do cliente 1]", sector: "Indústria", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
  { client: "[Nome do cliente 2]", sector: "Comércio", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
  { client: "[Nome do cliente 3]", sector: "Logística", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
  { client: "[Nome do cliente 4]", sector: "Saúde", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
  { client: "[Nome do cliente 5]", sector: "Agronegócio", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
  { client: "[Nome do cliente 6]", sector: "Escritório", challenge: "[Descreva o desafio do cliente]", result: "[Descreva o resultado alcançado]" },
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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: SITE_URL + path }],
  };
}
