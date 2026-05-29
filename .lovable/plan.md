## Contador regressivo até 25/07/2026 16h (BRT)

### O que será feito

1. **Criar componente `src/components/Countdown.tsx`**
   - Calcula o tempo restante até `2026-07-25T16:00:00-03:00`
   - Atualiza a cada 1 segundo via `setInterval`
   - Mostra 4 blocos: DIAS · HORAS · MIN · SEG
   - Números grandes em `font-display` (DM Serif Display), rótulos pequenos em uppercase com tracking largo
   - Separadores sutis (pontos ou linhas verticais) entre os blocos
   - Usa tokens semânticos (`text-sage-deep`, `border-sage-deep/20`) para combinar com a paleta oliva/creme existente
   - Responsivo: blocos menores no mobile, maiores no desktop
   - Quando chegar a zero, mostra mensagem "Chegou o grande dia!"

2. **Integrar em `src/routes/index.tsx`**
   - Inserir o `<Countdown />` no hero, entre o "Casamento · 2026" e o título "Maria Theresa & Rodrigo"
   - Sem alterar o restante do layout

### Detalhes técnicos

- Componente client-side puro (usa `useState` + `useEffect`), seguro pra SSR (estado inicial calculado no primeiro render do cliente para evitar mismatch — render inicial com zeros e hidrata no `useEffect`)
- Sem dependências novas
- Fuso horário fixo BRT (UTC-3) via string ISO com offset, então funciona igual em qualquer fuso do visitante
