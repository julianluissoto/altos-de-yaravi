'use client';

import Image from 'next/image';
import React from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { galleryImages } from '@/lib/placeholder-images';
import { instagramUrl } from '@/lib/whatsapp';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

// Cantidad de fotos visibles en el mosaico; el resto se ve en el carrusel.
const VISIBLE = 5;

// Mosaico de 5 fotos: en escritorio, una grande a la izquierda y 4 chicas a la derecha.
const tileClasses = ['col-span-2 md:row-span-2', '', '', '', ''];

function GalleryGrid({ images }: { images: ImagePlaceholder[] }) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const current = selected !== null ? images[selected] : null;
  const visible = images.slice(0, VISIBLE);
  const hidden = images.length - visible.length;

  const go = (delta: number) =>
    setSelected((i) => (i === null ? i : (i + delta + images.length) % images.length));

  const step = (delta: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    go(delta);
  };

  // Deslizar con el dedo en el carrusel: izquierda = siguiente, derecha = anterior.
  const touchStart = React.useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Solo cuenta si el gesto es mayormente horizontal y de al menos 50px.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-2 md:auto-rows-[200px] md:grid-cols-4 md:gap-3">
        {visible.map((image, index) => {
          const isMore = hidden > 0 && index === visible.length - 1;
          return (
            <button
              key={image.id}
              type="button"
              // "Ver más" abre el carrusel en la primera foto que no se ve en el mosaico.
              onClick={() => setSelected(isMore ? visible.length : index)}
              aria-label={isMore ? `Ver ${hidden} fotos más` : `Ampliar foto: ${image.title ?? ''}`}
              className={cn('group relative overflow-hidden rounded-xl bg-muted', tileClasses[index])}
            >
              <Image
                src={image.imageUrl}
                alt={image.title ?? ''}
                data-ai-hint={image.imageHint}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {isMore && (
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 text-white transition-colors group-hover:bg-black/65">
                  <span className="font-headline text-3xl leading-none">+{hidden}</span>
                  <span className="mt-1 text-sm font-medium">Ver más</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-full max-w-5xl border-0 bg-background p-3 sm:p-4">
          {current && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{current.title ?? 'Foto ampliada'}</DialogTitle>
              </DialogHeader>
              <div
                className="relative mt-6 aspect-[3/2] w-full touch-pan-y select-none"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <Image src={current.imageUrl} alt={current.title ?? ''} fill sizes="100vw" className="rounded-lg object-contain" />
              </div>
              <div className="flex items-center justify-between gap-4 px-1">
                <p className="text-sm text-muted-foreground">
                  {current.title}
                  <span className="ml-3 tabular-nums">
                    {selected! + 1} / {images.length}
                  </span>
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full" onClick={step(-1)} aria-label="Foto anterior">
                    <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" onClick={step(1)} aria-label="Foto siguiente">
                    <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="container scroll-mt-20 py-20 md:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Galería</p>
          <h2 className="section-title">Embalse en fotos</h2>
        </div>
        <div className="max-w-md">
          <p className="text-muted-foreground">
            El lago, el dique y los paisajes que vas a tener a pocos minutos.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.75} />
            Seguinos en Instagram
          </a>
        </div>
      </div>
      <GalleryGrid images={galleryImages} />
    </section>
  );
}
