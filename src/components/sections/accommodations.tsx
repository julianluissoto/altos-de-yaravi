'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Users, Bed, BedDouble, Wifi, Wind, Droplets, Leaf, Mountain, Car, Flame, Fan, Tv,
  Refrigerator, Trees,
} from 'lucide-react';
import { accommodationsData, Accommodation } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const iconProps = { className: 'h-5 w-5 shrink-0 text-primary', strokeWidth: 1.4 };

const featureIcons: Record<string, React.ReactNode> = {
  default: <Leaf {...iconProps} />,
  'cama 2 plazas': <BedDouble {...iconProps} />,
  'camas individuales': <Bed {...iconProps} />,
  'cama king-size': <Bed {...iconProps} />,
  'vista a las sierras': <Mountain {...iconProps} />,
  'vista al lago': <Droplets {...iconProps} />,
  'cocina completa': <Refrigerator {...iconProps} />,
  cochera: <Car {...iconProps} />,
  asador: <Flame {...iconProps} />,
  wifi: <Wifi {...iconProps} />,
  ventilador: <Fan {...iconProps} />,
  'aire acondicionado': <Wind {...iconProps} />,
  'smart tv': <Tv {...iconProps} />,
  parque: <Trees {...iconProps} />,
};

function formatPrice(price: string) {
  return /\d/.test(price) ? `$ ${price} / noche` : 'Tarifa a consultar';
}

function AccommodationDisplay({ accommodation, reverse }: { accommodation: Accommodation; reverse: boolean }) {
  const images = [accommodation.image, ...accommodation.interiorImages.slice(0, 4)];
  const [active, setActive] = React.useState(0);
  const current = images[active];

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
      {/* Fotos */}
      <div className={cn('lg:col-span-7', reverse && 'lg:order-2')}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            key={current.imageUrl}
            src={current.imageUrl}
            alt={current.description}
            data-ai-hint={current.imageHint}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Hasta {accommodation.guests} huéspedes
          </span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2 md:gap-3">
          {images.map((img, i) => (
            <button
              key={`${img.imageUrl}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver foto: ${img.description}`}
              aria-pressed={i === active}
              className={cn(
                'relative aspect-square overflow-hidden rounded-lg bg-muted outline-offset-2 transition-opacity',
                i === active ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'opacity-70 hover:opacity-100'
              )}
            >
              <Image src={img.imageUrl} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Detalle */}
      <div className={cn('flex flex-col lg:col-span-5 lg:pt-2', reverse && 'lg:order-1')}>
        <p className="eyebrow">{accommodation.location}</p>
        <h3 className="mt-3 font-headline text-4xl leading-tight">{accommodation.name}</h3>
        <p className="mt-4 text-[17px] text-muted-foreground">{accommodation.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y py-4 text-[15px]">
          <span className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" strokeWidth={1.4} />
            Hasta {accommodation.guests} huéspedes
          </span>
          <span className="font-medium">{formatPrice(accommodation.price)}</span>
        </div>

        <h4 className="mt-6 text-sm font-semibold">Qué incluye</h4>
        <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {accommodation.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-[15px]">
              {featureIcons[feature.toLowerCase()] ?? featureIcons.default}
              <span className="first-letter:uppercase">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-12 rounded-full px-6">
            <a
              href={whatsappUrl(`Hola! Quiero consultar disponibilidad del ${accommodation.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full bg-transparent px-6">
            <Link href="#contact">Enviar consulta</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Accommodations() {
  return (
    <section id="accommodations" className="container scroll-mt-20 py-20 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="eyebrow">Alojamiento</p>
          <h2 className="section-title">Nuestros departamentos</h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Dos departamentos independientes, con cochera, asador y cocina completa. A 300 metros del lago.
        </p>
      </div>
      <div className="space-y-20 md:space-y-28">
        {accommodationsData.map((acc, index) => (
          <AccommodationDisplay key={acc.id} accommodation={acc} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
