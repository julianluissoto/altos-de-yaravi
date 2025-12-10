'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '../ui/sheet';
import { Menu, Mountain } from 'lucide-react';
import React from 'react';

const navLinks = [
  { href: '#accommodations', label: 'Alojamientos' },
  { href: '#gallery', label: 'Galería' },
  { href: '#reviews', label: 'Reseñas' },
  { href: '#places-to-visit', label: 'Lugares a Visitar' },
  { href: '#location', label: 'Ubicación' },
  { href: '#contact', label: 'Contacto y Reservas' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <nav className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
