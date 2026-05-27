// Generate a static PIX BR Code (EMV format) payload
function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function tlv(id: string, value: string): string {
  return id + value.length.toString().padStart(2, "0") + value;
}

export interface PixOptions {
  key: string;
  name: string;
  city: string;
  amount?: number;
  description?: string;
  txid?: string;
}

export function generatePixPayload({
  key,
  name,
  city,
  amount,
}: PixOptions): string {
  const merchantAccount = tlv("00", "br.gov.bcb.pix") + tlv("01", key);

  const sanitize = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9 ]/g, "").toUpperCase();

  const payload =
    tlv("00", "01") +
    tlv("26", merchantAccount) +
    tlv("52", "0000") +
    tlv("53", "986") +
    (amount ? tlv("54", amount.toFixed(2)) : "") +
    tlv("58", "BR") +
    tlv("59", sanitize(name).slice(0, 25)) +
    tlv("60", sanitize(city).slice(0, 15)) +
    tlv("62", tlv("05", "***"));

  const toCrc = payload + "6304";
  return toCrc + crc16(toCrc);
}
