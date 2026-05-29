import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import { gifts, type GiftItem } from "@/lib/gifts";
import { GiftDialog } from "@/components/GiftDialog";
import { Countdown } from "@/components/Countdown";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maria Theresa & Rodrigo — Nosso Casamento" },
      { name: "description", content: "Lista de presentes do casamento de Maria Theresa e Rodrigo. Escolha um presente e contribua via Pix." },
      { property: "og:title", content: "Maria Theresa & Rodrigo — Nosso Casamento" },
      { property: "og:description", content: "Sua presença e carinho são o nosso maior presente. Veja nossa lista." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fira+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<GiftItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Eucalipto e flores brancas"
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/60 to-background" />
        </div>

        <div className="mx-auto max-w-4xl px-6 pt-24 pb-32 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/80">
            Casamento · 25 de Julho de 2026
          </p>
          <div className="mt-8 flex justify-center">
            <Countdown />
          </div>
          <h1 className="mt-8 font-display text-6xl md:text-8xl leading-[0.95] text-sage-deep">
            Maria Theresa
            <span className="block italic text-4xl md:text-5xl my-3 text-accent-foreground/70">&</span>
            Rodrigo
          </h1>
          <div className="mt-10 inline-flex items-center gap-2 text-sage-deep">
            <span className="h-px w-12 bg-sage-deep/40" />
            <Heart className="h-4 w-4 fill-current" />
            <span className="h-px w-12 bg-sage-deep/40" />
          </div>
        </div>
      </header>

      {/* Mensagem inicial */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/70">Boas-vindas</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-sage-deep">
          Um novo capítulo
        </h2>
        <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
          <p>
            Com a graça de Deus e o coração cheio de amor, iniciamos um novo capítulo das nossas vidas.
          </p>
          <p>
            Acreditamos que nada acontece por acaso e que cada detalhe deste momento foi preparado pelas mãos de Deus.
            Por isso, ter você conosco torna tudo ainda mais especial.
          </p>
          <p>
            Cada convidado foi escolhido a dedo, com muito carinho, porque faz parte da nossa história,
            das nossas memórias e daquilo que levaremos para sempre em nossos corações.
          </p>
          <p>
            Mais do que celebrar um casamento, queremos celebrar o amor, a união e as bênçãos que Deus
            derrama sobre nossas vidas ao lado das pessoas que amamos.
          </p>
          <p className="font-display text-2xl md:text-3xl text-sage-deep pt-2">
            Será uma alegria imensa compartilhar esse dia tão único com vocês!
          </p>
        </div>
      </section>

      {/* Couple Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/70">Nós dois</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-sage-deep">
            Nossa História
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: couple1, alt: "Maria Theresa e Rodrigo - retrato em preto e branco" },
            { src: couple2, alt: "Maria Theresa e Rodrigo - ensaio claro" },
            { src: couple3, alt: "Maria Theresa e Rodrigo - momento íntimo" },
            { src: couple4, alt: "Maria Theresa e Rodrigo - look social" },
            { src: couple5, alt: "Maria Theresa e Rodrigo - sob a árvore" },
            { src: couple6, alt: "Maria Theresa e Rodrigo - de mãos dadas" },
          ].map((p, i) => (
            <div key={i} className="overflow-hidden rounded-2xl aspect-[4/5] bg-accent/20">
              <img src={p.src} alt={p.alt} loading="lazy" width={1024} height={1280}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* Texto antes da lista */}
      <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/70">Nosso lar</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-sage-deep">
          Construindo nosso cantinho
        </h2>
        <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
          <p>
            Nossa casa está sendo construída com muito amor, cuidado e carinho, exatamente da forma como sempre sonhamos.
          </p>
          <p>
            Cada detalhe foi pensado para transformar esse novo começo em um lar cheio de aconchego, paz e felicidade.
          </p>
          <p>
            Os presentes disponíveis em nossa lista são simbólicos e os valores serão convertidos em Pix,
            contribuindo para realizarmos esse sonho e montarmos nosso cantinho com todo amor.
          </p>
          <p>
            Agradecemos imensamente por fazer parte desse momento tão especial. Sua presença, carinho e contribuição
            serão lembrados com muito amor em nossa nova história.
          </p>
        </div>
      </section>

      {/* Gifts */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/70">Lista</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-sage-deep">
            Nossos Presentes
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Clique em um presente para ver o QR Code do Pix e contribuir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift) => (
            <button
              key={gift.id}
              onClick={() => setSelected(gift)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-accent"
            >
              <div className="aspect-[4/3] overflow-hidden bg-accent/20">
                <img
                  src={gift.image}
                  alt={gift.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-sage-deep leading-tight">
                    {gift.name}
                  </h3>
                  <span className="font-display text-lg text-primary whitespace-nowrap">
                    R$ {gift.amount}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {gift.description}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-sage-deep/60 group-hover:text-sage-deep transition-colors">
                  Presentear →
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-12 text-center">
        <Heart className="mx-auto h-5 w-5 text-sage-deep/60 fill-current" />
        <p className="mt-4 font-display text-xl text-sage-deep">
          Com gratidão, Maria Theresa & Rodrigo
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Obrigado por fazer parte da nossa história.
        </p>
      </footer>

      <GiftDialog gift={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
