import { QRCodeSVG } from "qrcode.react";
import { useMemo, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generatePixPayload } from "@/lib/pix";
import type { GiftItem } from "@/lib/gifts";

const PIX_KEY = "mariatfernandes6@gmail.com";
const PIX_NAME = "Maria T Fernandes";
const PIX_CITY = "BRASIL";

interface Props {
  gift: GiftItem | null;
  onClose: () => void;
}

export function GiftDialog({ gift, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  const payload = useMemo(() => {
    if (!gift) return "";
    return generatePixPayload({
      key: PIX_KEY,
      name: PIX_NAME,
      city: PIX_CITY,
      amount: gift.amount,
      description: gift.name,
      txid: gift.id.slice(0, 25),
    });
  }, [gift]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={!!gift} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md">
        {gift && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-border">
                <img src={gift.image} alt={gift.name} width={96} height={96} className="h-full w-full object-cover" />
              </div>
              <DialogTitle className="font-display text-3xl">{gift.name}</DialogTitle>
              <DialogDescription className="text-base">
                {gift.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2 rounded-xl border border-border bg-card p-6">
              <p className="text-center text-sm text-muted-foreground">
                Escaneie o QR Code abaixo e envie
              </p>
              <p className="text-center font-display text-4xl text-primary mt-1">
                R$ {gift.amount.toFixed(2).replace(".", ",")}
              </p>
              <p className="text-center text-sm text-muted-foreground mt-1">
                para presentear os noivos com <em>{gift.name}</em>
              </p>

              <div className="my-6 flex justify-center">
                <div className="rounded-lg bg-white p-4 shadow-[var(--shadow-card)]">
                  <QRCodeSVG value={payload} size={200} level="M" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground text-center">
                  Ou copie o código Pix
                </p>
                <Button onClick={handleCopy} variant="outline" className="w-full gap-2">
                  {copied ? <><Check className="h-4 w-4" /> Copiado!</> : <><Copy className="h-4 w-4" /> Copiar Pix Copia e Cola</>}
                </Button>
                <p className="text-center text-xs text-muted-foreground pt-2">
                  Chave: <span className="font-mono">{PIX_KEY}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
