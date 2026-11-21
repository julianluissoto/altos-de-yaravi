import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl('Hola! Quiero consultar disponibilidad.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
