export interface GiftItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  image: string;
}

// Images live in public/gifts/{id}.jpg
const img = (id: string) => `/gifts/${id}.jpg`;

export const gifts: GiftItem[] = [
  { id: "tv-samsung", name: "Smart TV Samsung Crystal UHD 65\"", description: "Para as noites de cinema no nosso lar.", amount: 3000, image: img("tv-samsung") },
  { id: "ar-split", name: "Ar-Condicionado Split Inverter 12.000 BTUs", description: "Conforto em todas as estações.", amount: 2500, image: img("ar-split") },
  { id: "cervejeira", name: "Cervejeira Vertical", description: "Brindes gelados com quem amamos.", amount: 2000, image: img("cervejeira") },
  { id: "cooktop-inducao", name: "Cooktop de Indução", description: "Tecnologia e elegância na cozinha.", amount: 1800, image: img("cooktop-inducao") },
  { id: "churrasqueira-parrilla", name: "Churrasqueira Assador Parrilla Inox Gás GLP Portátil", description: "Para os encontros ao ar livre.", amount: 1439.99, image: img("churrasqueira-parrilla") },
  { id: "robo-aspirador", name: "Robô Aspirador Inteligente", description: "Praticidade para o dia a dia do casal.", amount: 1300, image: img("robo-aspirador") },
  { id: "cafeteira-espresso", name: "Cafeteira Espresso", description: "Cafés especiais todas as manhãs.", amount: 1100, image: img("cafeteira-espresso") },
  { id: "panelas-style-cook", name: "Conjunto de Panelas Style Cook 10 Peças", description: "Cozinhar virou ritual com elas.", amount: 900, image: img("panelas-style-cook") },
  { id: "pressao-eletrica", name: "Panela de Pressão Elétrica", description: "Refeições prontas em minutos.", amount: 800, image: img("pressao-eletrica") },
  { id: "panelas-tramontina-solar", name: "Jogo de Panelas Tramontina Solar 4 Peças", description: "Aço inox com fundo triplo.", amount: 610, image: img("panelas-tramontina-solar") },
  { id: "airfryer-electrolux", name: "Air Fryer Oven Electrolux Rita Lobo 12L", description: "Refeições rápidas e saborosas.", amount: 598, image: img("airfryer-electrolux") },
  { id: "xicaras-cha", name: "Jogo de Xícaras de Chá em Porcelana", description: "Tardes tranquilas em casa.", amount: 500, image: img("xicaras-cha") },
  { id: "liquidificador-electrolux", name: "Liquidificador Electrolux c/ Copo de Vidro", description: "Vitaminas e receitas com mais durabilidade.", amount: 450, image: img("liquidificador-electrolux") },
  { id: "copos-cristal", name: "Conjunto de Copos de Cristal", description: "Brilho na mesa em cada ocasião.", amount: 410, image: img("copos-cristal") },
  { id: "mixer-multi", name: "Mixer Multifuncional", description: "Versatilidade no preparo das receitas.", amount: 370, image: img("mixer-multi") },
  { id: "edredom", name: "Edredom Sofisticado", description: "Aconchego para as noites a dois.", amount: 350, image: img("edredom") },
  { id: "cama-queen", name: "Kit Cama Queen 100% Algodão", description: "Noites de sono perfeito.", amount: 300, image: img("cama-queen") },
  { id: "faqueiro-wolff", name: "Wolff Faqueiro 30 Peças", description: "Aço inox para a mesa do dia a dia.", amount: 250, image: img("faqueiro-wolff") },
  { id: "travessas", name: "Travessas e Refratários", description: "Para servir com beleza.", amount: 200, image: img("travessas") },
  { id: "tacas-cristal", name: "Jogo de Taças de Cristal", description: "Brindes especiais merecem.", amount: 190, image: img("tacas-cristal") },
  { id: "grill-sanduicheira", name: "Grill / Sanduicheira Inox", description: "Lanches em minutos.", amount: 180, image: img("grill-sanduicheira") },
  { id: "frigideira-ceramica", name: "Frigideira Cerâmica Antiaderente para Indução", description: "Compatível com cooktop e fogão.", amount: 170, image: img("frigideira-ceramica") },
  { id: "kit-banheiro", name: "Kit Banheiro Completo", description: "Conjunto cerâmico em tons neutros para o lavabo.", amount: 150, image: img("kit-banheiro") },
];
