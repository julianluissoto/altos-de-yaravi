export const instagramUrl = 'https://www.instagram.com/altosdeyaravi/';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_API_NUMBER ?? '';

/** Arma el link de WhatsApp con un mensaje opcional precargado. */
export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Convierte "2027-01-12" (valor de <input type="date">) en "12/01/2027". */
export function formatDateAR(isoDate: string) {
  const [y, m, d] = isoDate.split('-');
  return `${d}/${m}/${y}`;
}

/** Fecha de hoy en formato YYYY-MM-DD según la hora local del navegador. */
export function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}
