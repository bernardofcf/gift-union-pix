## Mudanças

### 1. Fundo decorado estilo convite
Substituir o `bg-background` sólido por um fundo claro com folhagens de eucalipto aquarela nos cantos (igual ao PDF):
- Gerar imagem `src/assets/bg-eucalipto.jpg` (1600×2400, branco-creme com leves ramos verdes nos 4 cantos, bem suave para não competir com o conteúdo)
- Aplicar como `background-image` fixo no `<body>` ou no wrapper raiz em `src/routes/index.tsx`, com `background-attachment: fixed` e `background-size: cover`
- Reduzir opacidade do overlay do hero para deixar o fundo aparecer também nas seções abaixo

### 2. Trocar "Panelas Alumínio Turim Tramontina 5 Peças" (R$ 259)
- Virar **"Aparelho de Jantar 30 Peças"** (mesmo valor R$ 259, mesmo `id` para preservar txid do Pix → QR Code permanece idêntico)
- Gerar nova imagem `public/gifts/panelas-turim.jpg` mostrando um aparelho de jantar (pratos, sobremesa, bowls em porcelana branca)
- Apenas alterar `name` e `description` em `src/lib/gifts.ts`

### 3. Trocar "Jogo de Talheres Inox" (R$ 250)
- Virar **"Kit Banheiro Completo"** (mesmo valor R$ 250, mesmo `id` para QR estável)
- Gerar nova imagem `public/gifts/talheres-inox.jpg` mostrando um kit de banheiro (porta-sabonete, escova, dispenser etc. em tons neutros)
- Apenas alterar `name` e `description` em `src/lib/gifts.ts`

### 4. Verificação dos QR Codes Pix
Conferir `src/lib/pix.ts` e `src/components/GiftDialog.tsx`:
- Chave: `mariatfernandes6@gmail.com` ✓
- Payload **estático** (sem timestamp, sem aleatoriedade) — `generatePixPayload` já é determinístico, mesmo input gera mesmo QR para sempre ✓
- Validar CRC16 e estrutura EMV com um decoder de Pix para garantir leitura por qualquer banco
- Como mantemos o mesmo `id` (que vira `txid`) e o mesmo `amount` nos 2 presentes trocados, o QR de cada um continua **idêntico** ao já existente

### Detalhes técnicos

- Os nomes dos arquivos `panelas-turim.jpg` e `talheres-inox.jpg` ficam (apenas o conteúdo da foto muda), evitando referências quebradas
- O fundo será aplicado via classe utilitária Tailwind em `src/routes/index.tsx`, mantendo os tokens semânticos da paleta sage/cream
- Nenhuma alteração em `pix.ts` (já é estático e correto)