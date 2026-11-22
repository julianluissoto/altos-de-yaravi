import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { instagramUrl } from '@/lib/whatsapp';
import VisitCounter from '../shared/visit-counter';

const links = [
  { href: '#accommodations', label: 'Departamentos' },
  { href: '#gallery', label: 'Galería' },
  { href: '#explore', label: 'Qué hacer' },
  { href: '#location', label: 'Ubicación' },
  { href: '#contact', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="font-headline text-2xl">Altos de Yaraví</p>
            <p className="mt-2 text-sm text-background/70">
              El Yaraví 75, Embalse · Valle de Calamuchita, Córdoba
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent-soft"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              Seguinos en Instagram
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/70">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-accent-soft">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-background/15 pt-6 text-sm text-background/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Altos de Yaraví. Todos los derechos reservados.</p>
          <div className="[&>div]:text-background/70">
            <VisitCounter />
          </div>
          <Link
            href="https://www.linkedin.com/in/julian-soto-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent-soft"
          >
            Diseñado por Julian Soto
            <Linkedin className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
