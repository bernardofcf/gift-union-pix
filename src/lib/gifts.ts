import {
  Wine, ChefHat, Coffee, UtensilsCrossed, Soup, Sparkles,
  Bed, Plane, Flower2, Wind, Cake, Gift,
} from "lucide-react";

export interface GiftItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  Icon: React.ComponentType<{ className?: string }>;
}

export const gifts: GiftItem[] = [
  { id: "airfryer", name: "Air Fryer", description: "Para refeições rápidas no nosso novo lar.", amount: 450, Icon: ChefHat },
  { id: "mixer", name: "Batedeira Planetária", description: "Para os bolos das comemorações em família.", amount: 600, Icon: Soup },
  { id: "whisky", name: "Garrafa de Whisky", description: "Um brinde aos momentos especiais.", amount: 250, Icon: Wine },
  { id: "cafeteira", name: "Cafeteira Italiana", description: "Manhãs lentas com o cheiro de café fresco.", amount: 180, Icon: Coffee },
  { id: "jantar", name: "Jogo de Jantar", description: "Para receber quem amamos à nossa mesa.", amount: 380, Icon: UtensilsCrossed },
  { id: "lencol", name: "Jogo de Lençóis", description: "Conforto para os dias de descanso a dois.", amount: 320, Icon: Bed },
  { id: "lua-de-mel", name: "Diária da Lua de Mel", description: "Ajude-nos a viver a viagem dos sonhos.", amount: 800, Icon: Plane },
  { id: "flores", name: "Flores da Cerimônia", description: "Um buquê que ficará na memória.", amount: 150, Icon: Flower2 },
  { id: "ventilador", name: "Ventilador de Torre", description: "Brisa leve nos dias quentes.", amount: 350, Icon: Wind },
  { id: "bolo", name: "Bolo de Casamento", description: "Uma fatia de doçura para os convidados.", amount: 500, Icon: Cake },
  { id: "perfume", name: "Perfume do Casal", description: "Para perfumar nossa nova história.", amount: 280, Icon: Sparkles },
  { id: "surpresa", name: "Presente Surpresa", description: "Escolha o valor que desejar com carinho.", amount: 100, Icon: Gift },
];
