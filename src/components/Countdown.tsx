import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-25T16:00:00-03:00").getTime();

function calc() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (mounted && t.done) {
    return (
      <p className="font-display text-2xl md:text-3xl text-sage-deep italic">
        Chegou o grande dia!
      </p>
    );
  }

  const items: Array<[number, string]> = [
    [t.d, "Dias"],
    [t.h, "Horas"],
    [t.m, "Min"],
    [t.s, "Seg"],
  ];

  return (
    <div
      className="inline-flex items-center gap-3 md:gap-5 px-6 py-4 rounded-2xl border border-sage-deep/20 bg-cream/40 backdrop-blur-sm"
      aria-label="Contagem regressiva para o casamento"
    >
      {items.map(([value, label], i) => (
        <div key={label} className="flex items-center gap-3 md:gap-5">
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="font-display text-3xl md:text-5xl leading-none text-sage-deep tabular-nums">
              {pad(value)}
            </span>
            <span className="mt-1 text-[0.6rem] md:text-xs uppercase tracking-[0.25em] text-sage-deep/60">
              {label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="font-display text-2xl md:text-4xl text-sage-deep/30 leading-none -mt-3">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
