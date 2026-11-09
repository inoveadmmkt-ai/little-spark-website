export const SITE_URL = "https://elevamatriz.com.br";
export const WHATSAPP_NUMBER = "5543998198004";
export const WHATSAPP_DISPLAY = "(43) 99819-8004";
export const EMAIL = "contato@elevamatriz.com.br";
export const REGION = "Paraná e Sul do Brasil";
export const CITY_BASE = "Londrina e região metropolitana";
export const INSTAGRAM_HANDLE = "@eleva.matriz";
export const SOCIAL = {
  instagram: "https://www.instagram.com/eleva.matriz/",
  facebook: "https://facebook.com/elevamatriz",
  linkedin: "https://linkedin.com/company/eleva-matriz",
};

export function waLink(msg = "Olá! Vim pelo site da Eleva Matriz e gostaria de saber mais.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const MISSION = "Elevar o nível de performance em infraestrutura de redes e instalações elétricas empresariais.";

export const VISION = "Ser referência no Sul do Brasil em soluções completas de cabeamento estruturado para empresas, reconhecida pela qualidade e compromisso com o resultado.";

export const CORE_VALUES = [
  {
    title: "Respeito",
    desc: "Cultivamos relações baseadas em consideração, educação e profissionalismo. Valorizamos clientes, colaboradores, parceiros e fornecedores, reconhecendo a importância de cada pessoa nas relações construídas pela Eleva.",
  },
  {
    title: "Compromisso com Resultado",
    desc: "Assumimos cada entrega com responsabilidade sobre o resultado final. Buscamos soluções que funcionem, resolvam a necessidade do cliente e expressem a qualidade que queremos associar à Eleva.",
  },
  {
    title: "Pontualidade",
    desc: "Honramos os compromissos assumidos com responsabilidade e organização. Prazo, escopo e qualidade fazem parte da nossa palavra e refletem a forma como conduzimos cada relação.",
  },
  {
    title: "Excelência Técnica",
    desc: "Buscamos alto padrão técnico em conhecimento, preparação, execução e processos. A excelência também está no cuidado com a segurança das pessoas, dos equipamentos e da estrutura envolvida em cada projeto.",
  },
  {
    title: "Inovação",
    desc: "Valorizamos a evolução contínua. Estamos atentos a novas tecnologias, conhecimentos e formas de trabalhar que ampliem nossa capacidade de gerar soluções cada vez melhores.",
  },
  {
    title: "Ética",
    desc: "Conduzimos nossas relações com honestidade, coerência e transparência. Prezamos por informações claras, decisões responsáveis e uma atuação alinhada ao que consideramos correto.",
  },
  {
    title: "Visão do Todo",
    desc: "Compreendemos cada necessidade dentro de um contexto maior. Conectamos tecnologias, estruturas e processos para desenvolver soluções integradas e mais adequadas à realidade de cada cliente.",
  },
  {
    title: "Confiança",
    desc: "Construímos relações de longo prazo por meio de consistência, proximidade e boas entregas. Queremos que clientes, colaboradores e parceiros encontrem na Eleva uma empresa em que possam confiar.",
  },
  {
    title: "Valorização das Pessoas",
    desc: "Reconhecemos a contribuição das pessoas para o crescimento da Eleva. Buscamos criar um ambiente de respeito, reconhecimento e pertencimento, no qual todos possam ter orgulho do que estão ajudando a construir.",
  },
];

export const SERVICES = [
  {
    slug: "cabeamento-estruturado",
    title: "Infraestrutura e Cabeamento Estruturado",
    badge: "Redes & Fibra Óptica",
    short: "Cabeamento Categoria 6 e 6A, anéis ópticos redundantes de 10 e 50 Gb/s e fusões ópticas de precisão.",
    what: "Projeto executivo, lançamento, conectorização e identificação de pontos de rede Cat6 e Cat6A, montagem e organização de racks e fusão eletrovoltaica de fibra óptica para anéis aéreos e subterrâneos.",
    who: "Indústrias, hospitais, cooperativas, galpões logísticos e empresas com alto fluxo de dados que necessitam de estabilidade absoluta.",
    gain: "Fim definitivo das quedas de conexão, velocidade nominal em 100% dos pontos e rede preparada para a expansão da empresa.",
  },
  {
    slug: "wifi-corporativo",
    title: "Soluções de Comunicação Sem Fio (Wi-Fi)",
    badge: "Alta Densidade & Cobertura",
    short: "Wi-Fi corporativo de alta performance (Ubiquiti e Aruba) com controladoras redundantes e sem pontos cegos.",
    what: "Mapeamento térmico de sinal (site survey), implantação de Access Points corporativos com handover contínuo e balanceamento de carga para dezenas ou centenas de dispositivos simultâneos.",
    who: "Chão de fábrica, centros de distribuição, clínicas, escolas e escritórios modernos que dependem de mobilidade e coletores sem fio.",
    gain: "Conexão sem fio rápida em toda a extensão do imóvel, isolamento seguro para visitantes e mobilidade total para equipes operacionais.",
  },
  {
    slug: "cftv-seguranca",
    title: "Sistemas de Segurança (CFTV IP)",
    badge: "Proteção & Vigilância",
    short: "Monitoramento por câmeras IP de alta definição, gravação em rede e gerenciamento patrimonial seguro.",
    what: "Dimensionamento e instalação de infraestrutura completa, câmeras IP com tecnologia PoE, NVRs/servidores de gravação e configuração para acesso remoto seguro e criptografado.",
    who: "Indústrias, condomínios verticais, comércios e galpões que exigem controle rigoroso de perímetro, estoques e portarias.",
    gain: "Imagens com nitidez total para prevenção de sinistros, segurança contínua para colaboradores e proteção patrimonial 24 horas por dia.",
  },
  {
    slug: "solucoes-corporativas",
    title: "Soluções Técnicas para Ambientes Corporativos",
    badge: "Ativos & Telefonia",
    short: "Switches core e de acesso gerenciáveis (1/10/50Gb), centrais PABX digital e cabeamento vertical telefônico.",
    what: "Implantação de equipamentos ativos de rede de ponta (Aruba, Ubiquiti), cabeamento vertical metálico CTPAPL para comunicação de voz e manutenção especializada de PABX digital.",
    who: "Cooperativas, universidades, operadoras de saúde e empresas com comunicação interna e externa de grande escala.",
    gain: "Comunicação de voz e dados sem ruídos, separação de redes lógicas (VLANs) e alta disponibilidade de canais de atendimento.",
  },
  {
    slug: "instalacoes-eletricas",
    title: "Projetos e Execução de Instalações Elétricas",
    badge: "Engenharia Elétrica & SPDA",
    short: "Entradas de energia até 400A, distribuição de quadros de força, laudos NR-10 e aterramento para SPDA com ART.",
    what: "Projetos elétricos com cálculo de demanda de carga, reestruturação e montagem de quadros de força, adequações de entradas de energia e proteção contra descargas atmosféricas (SPDA) conforme normas ABNT.",
    who: "Empresas com novas máquinas, ampliações de galpão, condomínios e indústrias em processo de regularização com Copel e Bombeiros.",
    gain: "Segurança total contra riscos de incêndio ou choque, ausência de desarmes inesperados e conformidade legal com emissão de ART no CREA-PR.",
  },
  {
    slug: "energia-solar",
    title: "Energia Solar Fotovoltaica",
    badge: "Sustentabilidade & Economia",
    short: "Usinas solares comerciais e industriais de alto rendimento para reduzir drasticamente a fatura de energia.",
    what: "Dimensionamento de engenharia, fornecimento de módulos e inversores de primeira linha, homologação completa na concessionária de energia e instalação com acompanhamento técnico.",
    who: "Comércios, indústrias, clínicas e residências de alto padrão que buscam previsibilidade e corte definitivo no custo com energia.",
    gain: "Economia imediata de até 90% na conta de luz, retorno garantido do investimento e valorização patrimonial imediata.",
  },
  {
    slug: "certificacao-redes",
    title: "Certificação de Cabeamento com Analisador",
    badge: "Laudo & Homologação",
    short: "Testes e certificação ponto a ponto de redes Cat6/6A e fibra óptica com equipamento analisador calibrado.",
    what: "Auditoria técnica detalhada de cada terminação com analisador de redes, gerando relatório individual com curvas de perda, NEXT, comprimento e conformidade com normas internacionais ANSI/TIA.",
    who: "Empresas que contrataram instalações de rede ou que precisam de laudo pericial para auditorias, seguradoras e garantia do fabricante.",
    gain: "Certeza documental de que 100% dos pontos de rede operam na velocidade máxima nominal, sem perda de pacotes ou ruídos.",
  },
];

export const PROJECTS = [
  {
    client: "Indústria de Carrocerias Metálicas (Ibiporã-PR)",
    sector: "Indústria",
    tag: "Rede Cat6/6A, Fibra 50Gb & CFTV",
    challenge: "Complexo industrial com necessidade de interligar galpões com altíssima velocidade e eliminar quedas no chão de fábrica.",
    solution: "Instalação de 630 pontos de rede (580 Cat6 + 50 Cat6A), anel óptico redundante com 2.000m de cabos ópticos para links de 10 e 50 Gb/s, 68 APs Ubiquiti, 33 switches Aruba/Ubiquiti (1/10/50Gb), 90 câmeras CFTV IP e aterramento elétrico para SPDA.",
    result: "Comunicação ultraveloz sem paradas, monitoramento completo da planta fabril e proteção contra descargas atmosféricas.",
  },
  {
    client: "Cooperativa de Crédito (40 Agências no PR, SP e SC)",
    sector: "Cooperativas",
    tag: "Adequação & Certificação de 2.800 Pontos",
    challenge: "Necessidade de padronizar a infraestrutura de dados e segurança de 40 agências financeiras em três estados.",
    solution: "Adequação técnica de cabeamento estruturado e câmeras de segurança em 40 agências, com análise e certificação minuciosa de mais de 2.800 pontos de rede com analisador.",
    result: "Rede certificada e homologada dentro dos rígidos padrões de segurança bancária, com relatórios técnicos individuais por ponto.",
  },
  {
    client: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    sector: "Educação",
    tag: "540 Pontos Cat6 & Telefonia 300 Pares",
    challenge: "Infraestrutura de alta demanda para salas de aula, laboratórios técnicos e setores acadêmicos integrados.",
    solution: "Projeto e execução de 540 pontos de rede Categoria 6, cabeamento vertical telefônico par metálico CTPAPL com 300 pares e instalação de 32 switches ativos (4 core e 28 de acesso).",
    result: "Ambiente universitário conectado com alta velocidade, estabilidade e capacidade de tráfego para milhares de estudantes e professores.",
  },
  {
    client: "Cooperativa Agropecuária e Industrial (Mandaguari-PR)",
    sector: "Agronegócio",
    tag: "Anel Óptico 7.500m & 160 Fusões",
    challenge: "Interligação de unidades fabris e silos em área aberta com grande distância e interferência eletromagnética.",
    solution: "Construção de anel óptico com lançamento de 3.500m aéreos e 4.000m subterrâneos (total 7.500m), 160 fusões por arco voltaico, 325 pontos de rede Cat6 e 24 switches gerenciáveis (4 core e 20 acesso).",
    result: "Comunicação blindada e redundante entre todas as unidades de recebimento e beneficiamento agroindustrial.",
  },
  {
    client: "Cooperativa de Trabalho Médico (Londrina-PR)",
    sector: "Saúde",
    tag: "1.463 Pontos de Rede & 750 Pares Telefônicos",
    challenge: "Infraestrutura corporativa crítica para sistemas de prontuário, autorizações de guias e atendimento aos cooperados.",
    solution: "Execução de rede óptica com 200m de cabos ópticos, 1.463 pontos de cabeamento (1.367 Cat6 e 96 Cat6A) e cabeamento telefônico vertical CTPAPL com 750 pares de comunicação.",
    result: "Velocidade imediata para acesso aos sistemas médicos, sem congestionamento e com central telefônica de altíssima capacidade.",
  },
  {
    client: "Hospital Geral de Alta Complexidade (Londrina-PR)",
    sector: "Saúde",
    tag: "7 Pavimentos & 600 Pontos Certificados",
    challenge: "Modernização da infraestrutura em ambiente hospitalar em funcionamento contínuo de 7 andares.",
    solution: "Instalação de infraestrutura completa para cabeamento em 7 pavimentos, cabos ópticos para interligação de racks com 48 fusões e conectorização/certificação de 600 pontos de rede Cat6.",
    result: "Sistemas de UTI, farmácia e prontuário operando com zero latência e total confiabilidade no tráfego de exames pesados.",
  },
  {
    client: "Comércio e Representação Agrícola (Londrina-PR)",
    sector: "Agronegócio",
    tag: "1.100m Fibra Óptica & 757 Pontos",
    challenge: "Estruturação de dados e telefonia para centro logístico e comercial de insumos agrícolas.",
    solution: "Lançamento de 1.100 metros de fibra óptica, 685 pontos de rede Cat6, 72 pontos Cat6A e cabeamento telefônico CTPAPL com 700 pares de comunicação.",
    result: "Integração plena entre faturamento, expedição de insumos e comunicação com clientes de todo o país.",
  },
  {
    client: "3DJ Indústria e Comércio de Peças de Metais",
    sector: "Indústria",
    tag: "Rede, CFTV & Usina Solar 133 Painéis",
    challenge: "Necessidade de modernização de dados, segurança patrimonial e redução expressiva na conta de luz industrial.",
    solution: "Projeto e execução de 48 pontos de rede, sistema de CFTV IP com 20 câmeras e instalação de usina de energia solar fotovoltaica com 133 painéis solares.",
    result: "Redução drástica nos custos com energia elétrica, monitoramento total da produção e rede de dados rápida.",
  },
  {
    client: "Condomínio Residencial Vertical (Londrina-PR)",
    sector: "Condomínios",
    tag: "106 Câmeras CFTV IP & Infraestrutura",
    challenge: "Cobertura de segurança em áreas comuns, garagens e portarias sem pontos cegos.",
    solution: "Passagem, conectorização e certificação de 106 pontos de rede Cat6 e instalação de 106 câmeras de vigilância CFTV IP com infraestrutura completa.",
    result: "Monitoramento em alta definição para segurança de centenas de moradores e facilidade de gestão para a administração predial.",
  },
  {
    client: "Empresa de Tecnologia da Saúde Pública",
    sector: "Saúde",
    tag: "Elétrica & Padrão de Entrada 400A",
    challenge: "Adequação de carga elétrica para alimentar servidores e infraestrutura de processamento de dados críticos da saúde.",
    solution: "Readequação completa das instalações elétricas, montagem e distribuição de quadros elétricos com padrão de entrada de 400 amperes homologado.",
    result: "Energia elétrica estável, dimensionada para cargas contínuas e em total conformidade com normas técnicas e segurança com ART.",
  },
  {
    client: "Demarco Peças e Equipamentos Ltda",
    sector: "Comércio",
    tag: "Rede Cat6, Wi-Fi & CFTV IP",
    challenge: "Estruturação de loja e depósito para agilidade no atendimento de balcão e conferência de estoque.",
    solution: "Instalação de infraestrutura de rede com 48 pontos Categoria 6, 14 câmeras CFTV IP e rede Wi-Fi corporativa.",
    result: "Agilidade na consulta e saída de peças no sistema e controle visual das áreas de estoque e atendimento.",
  },
  {
    client: "Escritório de Contabilidade (Rolândia-PR)",
    sector: "Corporativo",
    tag: "Elétrica Completa, 110 Pontos & SPDA",
    challenge: "Instalação de nova sede com alta densidade de computadores, proteção contra raios e segurança eletrônica.",
    solution: "Instalações elétricas completas, 110 pontos de rede Cat6, 16 câmeras CFTV e Sistema de Proteção contra Descargas Atmosféricas (SPDA).",
    result: "Sede entregue pronta para operação contínua, sem riscos de sobrecarga e com proteção total dos servidores de contabilidade.",
  },
];

export const FAQS = [
  {
    q: "A Eleva Matriz atende em qualquer cidade do Paraná?",
    a: "Sim! Nossa equipe atende empresas, indústrias e cooperativas em todo o Paraná e no Sul do Brasil, com base em Londrina e atuação em Maringá, Curitiba, Ponta Grossa, Cascavel e região.",
  },
  {
    q: "Quem é o responsável técnico pelos projetos e laudos?",
    a: "Todos os nossos serviços contam com engenheiro responsável habilitado e registrado no CREA-PR (Eng. Thiago Marin Barbosa), com emissão obrigatória da ART (Anotação de Responsabilidade Técnica).",
  },
  {
    q: "Qual a diferença entre cabeamento comum e cabeamento estruturado certificado?",
    a: "O cabeamento estruturado certificado segue normas internacionais rigorosas (ANSI/TIA/EIA). Cada ponto é testado com equipamento analisador calibrado, gerando um laudo que garante velocidade máxima nominal e imunidade a ruídos.",
  },
  {
    q: "Como funciona para pedir um orçamento de rede ou elétrica?",
    a: "É muito simples: você nos chama no WhatsApp ou preenche o formulário informando a necessidade da sua empresa. Agendamos uma conversa técnica ágil e transparente, sem complicação ou burocracia.",
  },
  {
    q: "Os instrumentos de medição têm laudo de calibração?",
    a: "Sim. Nossos analisadores de rede, terrômetros e câmeras termográficas possuem certificados de calibração vigentes e rastreáveis pela RBC/Inmetro, assegurando que laudos e certificações tenham validade legal plena perante peritos e seguradoras.",
  },
  {
    q: "Vocês atendem desde pequenos escritórios até grandes indústrias e hospitais?",
    a: "Sim! Nosso portfólio abrange desde adequações de 48 pontos até grandes complexos industriais com mais de 1.400 pontos de rede, anéis ópticos de 7.500 metros e redes bancárias de 40 agências.",
  },
];

export const PERSONAS = [
  {
    id: "industria",
    title: "Indústrias & Metalmecânica",
    target: "Diretores de Produção e Gerentes de Manutenção",
    pain: "Paradas de linha por falhas de rede, desarmes elétricos no horário de pico e falta de comunicação veloz entre galpões.",
    solution: "Anéis ópticos redundantes de até 50Gb, cabeamento Cat6A blindado, quadros elétricos industriais e SPDA completo com ART.",
    benefit: "Chão de fábrica 100% conectado sem paradas, dados em tempo real e segurança operacional e jurídica comprovada.",
  },
  {
    id: "cooperativas",
    title: "Cooperativas & Agroindústrias",
    target: "Gerentes de TI, Infraestrutura e Operações",
    pain: "Unidades espalhadas por grandes distâncias, interferência eletromagnética em silos e lentidão no tráfego de dados.",
    solution: "Lançamento de anéis de fibra óptica aérea e subterrânea, Wi-Fi de alta densidade e certificação com analisador de rede.",
    benefit: "Interligação de filiais e armazéns com altíssima disponibilidade e relatórios técnicos ponto a ponto.",
  },
  {
    id: "saude",
    title: "Hospitais, Clínicas & Laboratórios",
    target: "Administradores Hospitalares e Coordenadores de TI",
    pain: "Oscilações de energia em equipamentos críticos e lentidão no tráfego de imagens pesadas e prontuários médicos.",
    solution: "Infraestrutura de cabeamento em múltiplos pavimentos, fibra óptica entre racks e quadros elétricos dedicados.",
    benefit: "Prontuário e UTI com zero latência, estabilidade elétrica total e conformidade com as normas de saúde.",
  },
  {
    id: "corporativo",
    title: "Empresas, Condomínios & Escritórios",
    target: "Gestores Administrativos, Síndicos e Empresários",
    pain: "Rede Wi-Fi instável, falta de controle de segurança por câmeras e custos elevados de energia elétrica.",
    solution: "Wi-Fi profissional Ubiquiti/Aruba, sistemas de CFTV IP de alta definição e energia solar fotovoltaica.",
    benefit: "Colaboradores produtivos sem queda de conexão, proteção patrimonial 24h e economia de até 90% na fatura de luz.",
  },
];

export const COMPARISON = [
  {
    criterion: "Linguagem e Comunicação",
    traditional: "Termos técnicos inacessíveis que causam mais dúvidas do que soluções.",
    eleva: "Linguagem clara, objetiva e próxima: qualquer gestor entende o que precisa ser feito.",
  },
  {
    criterion: "Acervo Técnico Comprovado",
    traditional: "Equipes sem portfólio documentado ou experiência em projetos de alta complexidade.",
    eleva: "Mais de 7.500 pontos certificados, 15.000m de fibra e atendimento a grandes hospitais, cooperativas e indústrias.",
  },
  {
    criterion: "Certificação Instrumentada",
    traditional: "Entrega de cabos sem teste formal ou com 'testadores de continuidade' simples que não medem perda.",
    eleva: "Certificação com analisador de rede de alta precisão, gerando relatórios gráficos de atenuação e conformidade ANSI/TIA.",
  },
  {
    criterion: "Atendimento e Proximidade",
    traditional: "Intermediários, chamados lentos e dificuldade para falar com os responsáveis pelo projeto.",
    eleva: "Contato direto com quem entende e faz, com agilidade e presença constante em todo o Paraná.",
  },
  {
    criterion: "Garantia Técnica & Legal",
    traditional: "Nem sempre especificam calibração de instrumentos ou responsabilidade técnica.",
    eleva: "Responsável técnico registrado no CREA-PR, instrumentos calibrados e ART em 100% dos trabalhos.",
  },
];

export const TEAM = [
  {
    name: "Beatriz Costa",
    role: "Marketing & Comunicação",
    photo: "/team/beatriz_studio.jpg",
    bio: "Responsável pela organização das ações de marketing, comunicação e conteúdo da Eleva, contribuindo para fortalecer a presença e a imagem da empresa.",
  },
  {
    name: "Danielli Marin",
    role: "Administração & RH",
    photo: "/team/dani_studio.jpg",
    bio: "Responsável pela gestão administrativa, financeira, de Recursos Humanos e faturamento, garantindo a organização dos processos internos e a eficiência operacional da empresa.",
  },
  {
    name: "David Costa",
    role: "Head Comercial",
    photo: "/team/david_studio.jpg",
    bio: "Responsável pela visão estratégica de negócios da Eleva Matriz Engenharia, atuando na identificação de oportunidades, desenvolvimento de parcerias e expansão comercial.",
  },
  {
    name: "Thiago Marin",
    role: "Engenharia & Projetos (CREA-PR)",
    photo: "/team/thiago_studio.jpg",
    bio: "Responsável pelo desenvolvimento de projetos, execução e coordenação de equipes técnicas, atuando no planejamento e na condução de soluções personalizadas com habilitação profissional junto ao CREA-PR.",
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
