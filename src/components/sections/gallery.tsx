'use client';

import Image from 'next/image';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { galleryImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

// Mosaico que se repite cada 6 fotos: en escritorio ocupa 3 filas de 4 columnas.
const tileClasses = [
  'col-span-2 md:row-span-2',
  '',
  'md:row-span-2',
  '',
  'md:col-span-2',
  'col-span-2',
];

function GalleryGrid({ images }: { images: ImagePlaceholder[] }) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const current = selected !== null ? images[selected] : null;

  const step = (delta: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected((i) => (i === null ? i : (i + delta + images.length) % images.length));
  };

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-2 md:auto-rows-[200px] md:grid-cols-4 md:gap-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelected(index)}
            aria-label={`Ampliar foto: ${image.title ?? ''}`}
            className={cn(
              'group relative overflow-hidden rounded-xl bg-muted',
              tileClasses[index % tileClasses.length]
            )}
          >
            <Image
              src={image.imageUrl}
              alt={image.title ?? ''}
              data-ai-hint={image.imageHint}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-full max-w-5xl border-0 bg-background p-3 sm:p-4">
          {current && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{current.title ?? 'Foto ampliada'}</DialogTitle>
              </DialogHeader>
              <div className="relative mt-6 aspect-[3/2] w-full">
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
        <p className="max-w-md text-muted-foreground">
          El lago, el dique y los paisajes que vas a tener a pocos minutos.
        </p>
      </div>
      <GalleryGrid images={galleryImages} />
    </section>
  );
}
