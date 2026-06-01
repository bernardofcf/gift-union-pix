export interface GiftItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  image: string;
}

// Images live in public/gifts/{id}.jpg (generated assets)
const img = (id: string) => `/gifts/${id}.jpg`;

export const gifts: GiftItem[] = [
  { id: "airfryer-electrolux", name: "Air Fryer Oven Electrolux Rita Lobo 12L", description: "Refeições rápidas e saborosas.", amount: 598, image: img("airfryer-electrolux") },
  { id: "tv-samsung", name: "Smart TV Samsung Crystal UHD 65\"", description: "Para as noites de cinema no nosso lar.", amount: 2500, image: img("tv-samsung") },
  { id: "ar-split", name: "Ar-Condicionado Split Inverter 12.000 BTUs", description: "Conforto em todas as estações.", amount: 2500, image: img("ar-split") },
  { id: "robo-aspirador", name: "Robô Aspirador Inteligente", description: "Praticidade para o dia a dia do casal.", amount: 1150, image: img("robo-aspirador") },
  { id: "cervejeira", name: "Cervejeira Vertical", description: "Brindes gelados com quem amamos.", amount: 2500, image: img("cervejeira") },
  { id: "adega", name: "Adega Climatizada", description: "Para guardar os vinhos das comemorações.", amount: 2000, image: img("adega") },
  { id: "cooktop-inducao", name: "Cooktop de Indução", description: "Tecnologia e elegância na cozinha.", amount: 2800, image: img("cooktop-inducao") },
  { id: "panelas-style-cook", name: "Conjunto de Panelas Style Cook 10 Peças", description: "Cozinhar virou ritual com elas.", amount: 744, image: img("panelas-style-cook") },
  { id: "panelas-tramontina-solar", name: "Jogo de Panelas Tramontina Solar 4 Peças", description: "Aço inox com fundo triplo.", amount: 659, image: img("panelas-tramontina-solar") },
  { id: "xicaras-cha", name: "Jogo de Xícaras de Chá em Porcelana", description: "Tardes tranquilas em casa.", amount: 650, image: img("xicaras-cha") },
  { id: "xicaras-pires-cristal", name: "Xícaras com Pires em Cristal", description: "Para receber com sofisticação.", amount: 600, image: img("xicaras-pires-cristal") },
  { id: "faqueiro-bronze", name: "Faqueiro Inox Bronze 36 Peças", description: "Design clássico para nossa mesa.", amount: 588, image: img("faqueiro-bronze") },
  { id: "forno-best", name: "Forno Elétrico Plus 220v Best", description: "Para os assados de domingo.", amount: 584, image: img("forno-best") },
  { id: "airfryer-mondial", name: "Air Fryer Forno Mondial 12L", description: "Praticidade no preparo diário.", amount: 549, image: img("airfryer-mondial") },
  { id: "copos-cristal", name: "Conjunto de Copos de Cristal", description: "Brilho na mesa em cada ocasião.", amount: 500, image: img("copos-cristal") },
  { id: "panelas-antiaderente", name: "Jogo de Panelas Antiaderente", description: "Praticidade e durabilidade.", amount: 500, image: img("panelas-antiaderente") },
  { id: "edredom", name: "Edredom Sofisticado", description: "Aconchego para as noites a dois.", amount: 450, image: img("edredom") },
  { id: "panelas-pratic-cook", name: "Panelas Pratic Cook Crema Cerâmica 10 Peças", description: "Charme e função juntos.", amount: 395, image: img("panelas-pratic-cook") },
  { id: "faqueiro-laguna", name: "Faqueiro Tramontina Laguna 91 Peças", description: "Para reunir toda a família.", amount: 388, image: img("faqueiro-laguna") },
  { id: "faqueiro-elegante", name: "Faqueiro Elegante", description: "Detalhes que fazem diferença.", amount: 350, image: img("faqueiro-elegante") },
  { id: "mixer-multi", name: "Mixer Multifuncional", description: "Versatilidade no preparo das receitas.", amount: 350, image: img("mixer-multi") },
  { id: "pressao-eletrica", name: "Panela de Pressão Elétrica", description: "Refeições prontas em minutos.", amount: 350, image: img("pressao-eletrica") },
  { id: "xicaras-cafe-dourado", name: "Xícaras de Café com Detalhes Dourados", description: "Café da manhã com requinte.", amount: 350, image: img("xicaras-cafe-dourado") },
  { id: "panelas-linz", name: "Panelas Linz Antiaderente Tramontina 7 Peças", description: "Conjunto completo para o dia a dia.", amount: 319, image: img("panelas-linz") },
  { id: "aparelho-jantar", name: "Aparelho de Jantar Completo", description: "Para receber com elegância.", amount: 300, image: img("aparelho-jantar") },
  { id: "pressao-brinox-vanilla", name: "Panela de Pressão Indução Vanilla 5,4L Brinox", description: "Refeições rápidas e seguras.", amount: 279, image: img("pressao-brinox-vanilla") },
  { id: "panelas-turim", name: "Aparelho de Jantar 30 Peças", description: "Porcelana branca para receber com elegância.", amount: 259, image: img("panelas-turim") },
  { id: "manta", name: "Manta Decorativa", description: "Aconchego na sala do casal.", amount: 250, image: img("manta") },
  { id: "talheres-inox", name: "Kit Banheiro Completo", description: "Conjunto cerâmico em tons neutros para o lavabo.", amount: 250, image: img("talheres-inox") },
  { id: "tapete", name: "Tapete Decorativo", description: "Calor e charme para o lar.", amount: 250, image: img("tapete") },
  { id: "processador", name: "Processador de Alimentos", description: "Praticidade na cozinha.", amount: 250, image: img("processador") },
  { id: "cama-queen", name: "Kit Cama Queen 100% Algodão", description: "Noites de sono perfeito.", amount: 400, image: img("cama-queen") },
  { id: "faqueiro-maleta", name: "Faqueiro 42 Peças com Maleta de Madeira", description: "Aço inox em estojo elegante.", amount: 209, image: img("faqueiro-maleta") },
  { id: "kit-casa-nova", name: "Kit Casa Nova Transparente", description: "Organização para o novo lar.", amount: 202, image: img("kit-casa-nova") },
  { id: "liquidificador-premium", name: "Liquidificador Premium", description: "Vitaminas e receitas todos os dias.", amount: 200, image: img("liquidificador-premium") },
  { id: "toalhas", name: "Jogo de Toalhas Premium", description: "Maciez de spa em casa.", amount: 180, image: img("toalhas") },
  { id: "tacas-cristal", name: "Jogo de Taças de Cristal", description: "Brindes especiais merecem.", amount: 180, image: img("tacas-cristal") },
  { id: "luminaria", name: "Luminária Moderna", description: "Luz quente nos cantinhos do lar.", amount: 180, image: img("luminaria") },
  { id: "cafeteira-eletrica", name: "Cafeteira Elétrica", description: "Café fresco todas as manhãs.", amount: 180, image: img("cafeteira-eletrica") },
  { id: "travessas", name: "Travessas e Refratários", description: "Para servir com beleza.", amount: 180, image: img("travessas") },
  { id: "grill-sanduicheira", name: "Grill / Sanduicheira", description: "Lanches em minutos.", amount: 170, image: img("grill-sanduicheira") },
  { id: "xicaras-sofisticado", name: "Jogo de Xícaras Sofisticado", description: "Detalhe que encanta os convidados.", amount: 170, image: img("xicaras-sofisticado") },
  { id: "copos-vidro", name: "Kit Copos de Vidro Premium", description: "Para o dia a dia com charme.", amount: 170, image: img("copos-vidro") },
  { id: "pressao-ceramic-life", name: "Pressão Antiaderente Ceramic Life Brinox 4,5L", description: "Cozinha rápida e prática.", amount: 164, image: img("pressao-ceramic-life") },
  { id: "chaleira-inox", name: "Chaleira Elétrica Inox", description: "Água quente em segundos.", amount: 150, image: img("chaleira-inox") },
];
