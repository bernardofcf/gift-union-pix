import airfryer from "@/assets/gift-airfryer.jpg";
import mixer from "@/assets/gift-mixer.jpg";
import whisky from "@/assets/gift-whisky.jpg";
import cafeteira from "@/assets/gift-cafeteira.jpg";
import jantar from "@/assets/gift-jantar.jpg";
import lencol from "@/assets/gift-lencol.jpg";
import lua from "@/assets/gift-lua.jpg";
import flores from "@/assets/gift-flores.jpg";
import ventilador from "@/assets/gift-ventilador.jpg";
import bolo from "@/assets/gift-bolo.jpg";
import perfume from "@/assets/gift-perfume.jpg";
import surpresa from "@/assets/gift-surpresa.jpg";

export interface GiftItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  image: string;
}

export const gifts: GiftItem[] = [
  { id: "airfryer", name: "Air Fryer", description: "Para refeições rápidas no nosso novo lar.", amount: 450, image: airfryer },
  { id: "mixer", name: "Batedeira Planetária", description: "Para os bolos das comemorações em família.", amount: 600, image: mixer },
  { id: "whisky", name: "Garrafa de Whisky", description: "Um brinde aos momentos especiais.", amount: 250, image: whisky },
  { id: "cafeteira", name: "Cafeteira Italiana", description: "Manhãs lentas com o cheiro de café fresco.", amount: 180, image: cafeteira },
  { id: "jantar", name: "Jogo de Jantar", description: "Para receber quem amamos à nossa mesa.", amount: 380, image: jantar },
  { id: "lencol", name: "Jogo de Lençóis", description: "Conforto para os dias de descanso a dois.", amount: 320, image: lencol },
  { id: "lua-de-mel", name: "Diária da Lua de Mel", description: "Ajude-nos a viver a viagem dos sonhos.", amount: 800, image: lua },
  { id: "flores", name: "Flores da Cerimônia", description: "Um buquê que ficará na memória.", amount: 150, image: flores },
  { id: "ventilador", name: "Ventilador de Torre", description: "Brisa leve nos dias quentes.", amount: 350, image: ventilador },
  { id: "bolo", name: "Bolo de Casamento", description: "Uma fatia de doçura para os convidados.", amount: 500, image: bolo },
  { id: "perfume", name: "Perfume do Casal", description: "Para perfumar nossa nova história.", amount: 280, image: perfume },
  { id: "surpresa", name: "Presente Surpresa", description: "Escolha o valor que desejar com carinho.", amount: 100, image: surpresa },
];
