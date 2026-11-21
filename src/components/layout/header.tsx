'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '../ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#accommodations', label: 'Departamentos' },
  { href: '#gallery', label: 'Galería' },
  { href: '#explore', label: 'Qué hacer' },
  { href: '#location', label: 'Ubicación' },
  { href: '#reviews', label: 'Opiniones' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-background/85 backdrop-blur-md transition-colors',
        scrolled && 'border-border'
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="https://res.cloudinary.com/julian-soto/image/upload/v1760542030/altos%20de%20yaravi/Sin_t%C3%ADtulo-1_n6e8ko.png"
            alt="Altos de Yaraví"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-headline text-[22px] leading-none tracking-tight">Altos de Yaraví</span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
              Embalse
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] lg:flex">
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

        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-10 rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90 sm:inline-flex">
            <Link href="#contact">Reservar</Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" strokeWidth={1.5} />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <nav className="flex flex-col pt-12">
                {[...navLinks, { href: '#contact', label: 'Contacto y reservas' }].map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="border-b py-4 font-headline text-2xl transition-colors hover:text-muted-foreground"
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
