import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { gifts, type GiftItem } from "@/lib/gifts";
import { GiftDialog } from "@/components/GiftDialog";

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
            Casamento · 2026
          </p>
          <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] text-sage-deep">
            Maria Theresa
            <span className="block italic text-4xl md:text-5xl my-3 text-accent-foreground/70">&</span>
            Rodrigo
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Sua presença em nosso grande dia já é o presente mais precioso.
            Mas, se desejar contribuir, preparamos com carinho a lista abaixo.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 text-sage-deep">
            <span className="h-px w-12 bg-sage-deep/40" />
            <Heart className="h-4 w-4 fill-current" />
            <span className="h-px w-12 bg-sage-deep/40" />
          </div>
        </div>
      </header>

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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/30 transition-colors group-hover:bg-accent/60">
                  <gift.Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-display text-2xl text-primary">
                  R$ {gift.amount}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-sage-deep">
                {gift.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {gift.description}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-sage-deep/60 group-hover:text-sage-deep transition-colors">
                Presentear →
              </p>
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
