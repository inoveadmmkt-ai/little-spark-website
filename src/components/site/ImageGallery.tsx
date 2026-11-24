import { useState, useEffect } from "react";
import { MessageCircle, ZoomIn, X, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Camera } from "lucide-react";
import { waLink, CONTACT_CHANNELS } from "@/lib/site";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Redes & Racks" | "Fibra Óptica" | "Elétrica Industrial" | "Residencial Alto Padrão" | "Energia Solar" | "Segurança & CFTV" | "Certificação";
  src: string;
  alt: string;
  tag: string;
  location?: string;
  desc: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "rack-cat6a",
    title: "Organização e Conectorização de Racks Corporativos Cat6A",
    category: "Redes & Racks",
    src: "/galeria/cabeamento_estruturado.jpg",
    alt: "Rack de servidores e patch panels Cat6A perfeitamente organizados com iluminação LED e switches",
    tag: "Cat6A & Switches 50Gb",
    location: "Paraná (Complexos Industriais e Hospitais)",
    desc: "Cabeamento estruturado executado com rigor estético e técnico: identificação alfa-numérica ponto a ponto, patch cords sob medida, pentes de organização e roteamento de alta densidade sem aquecimento ou sobreposição.",
  },
  {
    id: "fusao-fibra",
    title: "Fusão de Fibra Óptica por Arco Voltaico de Precisão",
    category: "Fibra Óptica",
    src: "/galeria/fibra_optica.jpg",
    alt: "Máquina de fusão de fibra óptica realizando emenda em distribuidor óptico DIO",
    tag: "Atenuação < 0.02 dB",
    location: "Londrina, Mandaguari e Região",
    desc: "Emendas ópticas por fusão automática em distribuidores ópticos (DIO), caixas de emenda subterrâneas e aéreas. Cada conector é inspecionado e testado para garantir perdas ópticas mínimas e imunidade a ruídos.",
  },
  {
    id: "painel-eletrico",
    title: "Quadros de Distribuição e Painéis Elétricos de Força",
    category: "Elétrica Industrial",
    src: "/galeria/eletrica_industrial.jpg",
    alt: "Painel elétrico industrial com barramentos de cobre, disjuntores e protetores de surto DPS",
    tag: "Conformidade NR-10 & ART",
    location: "Indústrias e Centros de Distribuição",
    desc: "Montagem, reestruturação e balanceamento de cargas elétricas em quadros de força até 400A. Instalação de dispositivos de proteção contra surtos (DPS), aterramento para SPDA e laudos periciais com ART no CREA-PR.",
  },
  {
    id: "residencial-wallbox",
    title: "Infraestrutura Elétrica, Wi-Fi 6 e Wallbox em Casa de Alto Padrão",
    category: "Residencial Alto Padrão",
    src: "/galeria/residencial_alto_padrao.jpg",
    alt: "Residência moderna em condomínio fechado com estação de recarga Wallbox e Wi-Fi 6 integrado",
    tag: "Wallbox 32A & Automação",
    location: "Condomínios Fechados (Londrina e Região)",
    desc: "Projetos elétricos residenciais executivos: alimentação balanceada para carregador de veículo elétrico Wallbox, circuitos dedicados para ar-condicionado e área gourmet, e cabeamento discreto sem fios aparentes.",
  },
  {
    id: "usina-solar",
    title: "Usinas Fotovoltaicas Comerciais e Industriais de Alto Rendimento",
    category: "Energia Solar",
    src: "/galeria/energia_solar.jpg",
    alt: "Telhado industrial com usina solar fotovoltaica homologada na concessionária de energia",
    tag: "Economia até 90% na Luz",
    location: "Usinas no Norte e Centro do Paraná",
    desc: "Engenharia solar completa: estudo de sombreamento, dimensionamento de inversores de primeira linha, fixação estrutural segura e homologação ágil junto à concessionária Copel.",
  },
  {
    id: "cftv-perimetro",
    title: "Monitoramento Patrimonial por Câmeras IP de Alta Resolução",
    category: "Segurança & CFTV",
    src: "/galeria/cftv_seguranca.jpg",
    alt: "Câmera de segurança CFTV IP profissional com infravermelho e PoE",
    tag: "Full HD & Acesso Seguro",
    location: "Galpões, Condomínios e Empresas",
    desc: "Sistemas de segurança digital com câmeras PoE conectadas a servidores NVR de gravação em rede. Imagens com nitidez total dia e noite, visualização em tempo real no smartphone e backup redundante.",
  },
  {
    id: "analisador-fluke",
    title: "Auditoria e Certificação Ponto a Ponto com Analisador Calibrado",
    category: "Certificação",
    src: "/galeria/certificacao_fluke.jpg",
    alt: "Técnico utilizando equipamento analisador de rede calibrado com tela exibindo teste PASS",
    tag: "Laudo com Rastreabilidade RBC",
    location: "Bancos, Hospitais e Redes Críticas",
    desc: "Auditoria técnica computadorizada com equipamento analisador calibrado pela Rede Brasileira de Calibração (RBC). Emissão de relatório individual com gráficos de NEXT, perda de retorno e comprimento.",
  },
  {
    id: "wifi-teto",
    title: "Access Points Corporativos Wi-Fi 6 de Teto sem Pontos Cegos",
    category: "Redes & Racks",
    src: "/galeria/wifi_corporativo.jpg",
    alt: "Access Point Wi-Fi 6 de alta densidade instalado no teto de escritório corporativo",
    tag: "Wi-Fi 6 & Handover Contínuo",
    location: "Escritórios, Escolas e Galpões",
    desc: "Projetos com mapeamento de sinal (site survey): posicionamento estratégico de Access Points corporativos (Ubiquiti / Aruba) garantindo velocidade nominal, roaming transparente e suporte a dezenas de conexões.",
  },
];

const CATEGORIES = [
  "Todos",
  "Redes & Racks",
  "Fibra Óptica",
  "Elétrica Industrial",
  "Residencial Alto Padrão",
  "Energia Solar",
  "Segurança & CFTV",
  "Certificação",
] as const;

export function ImageGallery({ title = "Galeria Visual de Obras & Infraestrutura", subtitle = "Confira a precisão técnica e o acabamento das instalações executadas pela Eleva Matriz em todo o Paraná." }: { title?: string; subtitle?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = activeCategory === "Todos"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowRight") {
        const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
        if (idx !== -1 && idx < filteredPhotos.length - 1) {
          setSelectedPhoto(filteredPhotos[idx + 1]);
        }
      }
      if (e.key === "ArrowLeft") {
        const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
        if (idx > 0) {
          setSelectedPhoto(filteredPhotos[idx - 1]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <section className="py-16 md:py-24" aria-labelledby="galeria-fotos-titulo">
      <div className="container-site">
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground mb-3">
              <Camera className="h-3.5 w-3.5 text-highlight" />
              Acervo Fotográfico de Campo
            </div>
            <h2 id="galeria-fotos-titulo" className="text-3xl font-extrabold md:text-4xl text-foreground">
              {title}
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT_CHANNELS.comercial.waHref("Olá! Gostaria de solicitar um orçamento para um projeto com o padrão visual da galeria da Eleva Matriz.")}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight text-sm font-bold shadow-md shadow-highlight/20"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar Visita Técnica
            </a>
          </div>
        </div>

        {/* PILLS DE FILTRO */}
        <div className="mt-8 flex flex-wrap gap-1.5 sm:gap-2 pb-2">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-102"
                    : "border border-border bg-card text-muted-foreground hover:border-highlight hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID DE FOTOS */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="reveal group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-highlight hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 transition-opacity group-hover:opacity-85" />
                
                {/* TAG SUPERIOR */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-foreground backdrop-blur shadow-sm">
                    {photo.category}
                  </span>
                  <span className="rounded-full bg-highlight/90 px-2.5 py-1 text-[11px] font-bold text-highlight-foreground backdrop-blur shadow-sm">
                    {photo.tag}
                  </span>
                </div>

                {/* BOTÃO DE ZOOM HOVER */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-4 py-2 text-xs font-extrabold text-primary shadow-xl backdrop-blur">
                    <ZoomIn className="h-4 w-4 text-highlight" /> Ver foto ampliada
                  </span>
                </div>
              </div>

              {/* DETALHES DO CARD */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="font-bold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>
                {photo.location && (
                  <p className="mt-2 text-[11px] text-muted-foreground flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                    {photo.location}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CALLOUT PARA ENVIAR FOTOS DE INFRAESTRUTURA */}
        <div className="mt-12 rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-card via-background to-accent/20 p-5 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="h-5 w-5 text-highlight shrink-0" />
              Sua empresa ou residência precisa de uma transformação técnica assim?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Você pode nos enviar fotos da sua sala de servidores, quadro elétrico ou planta arquitetônica pelo WhatsApp. Nossos engenheiros analisam previamente e retornam com uma recomendação sem custo.
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center shrink-0">
            <a
              href={CONTACT_CHANNELS.comercial.waHref("Olá! Gostaria de enviar fotos da minha infraestrutura atual para uma análise técnica com a Eleva Matriz.")}
              target="_blank"
              rel="noopener"
              className="btn btn-highlight text-xs sm:text-sm font-bold shadow-md shadow-highlight/20 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 shrink-0" /> Enviar Fotos no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] overflow-y-auto max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-card shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar foto ampliada"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* IMAGEM AMPLIADA */}
            <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2">
                <span className="rounded-full bg-black/60 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-white backdrop-blur">
                  {selectedPhoto.category}
                </span>
                <span className="rounded-full bg-highlight px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-highlight-foreground shadow-md">
                  {selectedPhoto.tag}
                </span>
              </div>
            </div>

            {/* DESCRIÇÃO E DETALHES TÉCNICOS */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">{selectedPhoto.title}</h3>
                {selectedPhoto.location && (
                  <p className="mt-1 text-xs font-medium text-highlight">
                    Local / Aplicação: {selectedPhoto.location}
                  </p>
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedPhoto.desc}
              </p>

              <div className="border-t border-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground w-full sm:w-auto">
                  <ShieldCheck className="h-4 w-4 text-highlight shrink-0" />
                  <span>Projeto com ART no CREA-PR e certificação de conformidade</span>
                </div>
                <a
                  href={CONTACT_CHANNELS.comercial.waHref(`Olá! Vi a foto "${selectedPhoto.title}" no site da Eleva Matriz e gostaria de um projeto similar para o meu imóvel.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-highlight text-xs sm:text-sm font-bold shadow-md shadow-highlight/20 w-full sm:w-auto text-center"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" /> Solicitar Projeto Similar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
