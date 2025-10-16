import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
         <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold mr-6">
          <Image
            src="https://res.cloudinary.com/julian-soto/image/upload/v1760542030/altos%20de%20yaravi/Sin_t%C3%ADtulo-1_n6e8ko.png"
            alt="Altos de Yaraví Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          Altos de Yaraví
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#accommodations" className="text-muted-foreground transition-colors hover:text-foreground">
            Alojamientos
          </Link>
          <Link href="#gallery" className="text-muted-foreground transition-colors hover:text-foreground">
            Galería
          </Link>
          <Link href="#reviews" className="text-muted-foreground transition-colors hover:text-foreground">
            Reseñas
          </Link>
          <Link href="#places-to-visit" className="text-muted-foreground transition-colors hover:text-foreground">
            Lugares a Visitar
          </Link>
          <Link href="#location" className="text-muted-foreground transition-colors hover:text-foreground">
            Ubicación
          </Link>
          <Link href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contacto y Reservas
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
        </div>
      </div>
    </header>
  );
}
