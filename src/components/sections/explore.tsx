'use client';

import Image from 'next/image';
import React from 'react';
import { Clock, Phone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import {
  placesToVisitData,
  shortCircuitsData,
  touristCircuitsData,
  whereToEatData,
  type TouristCircuit,
} from '@/lib/data';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/julian-soto/image/upload/v1769455446/altos%20de%20yaravi/imagen_default_ex6xlg.png';

const tabs = [
  { value: 'places', label: 'Lugares para visitar' },
  { value: 'short', label: 'Paseos cortos' },
  { value: 'long', label: 'Excursiones de día completo' },
  { value: 'eat', label: 'Dónde comer' },
];

function Row({
  image,
  alt,
  title,
  description,
  aside,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[88px_1fr] gap-4 border-b py-6 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-8">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted md:aspect-[4/3]">
        <Image src={image} alt={alt} fill sizes="(max-width: 768px) 88px, 180px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <h3 className="font-headline text-2xl leading-tight">{title}</h3>
        <p className="mt-2 max-w-[62ch] text-[15px] text-muted-foreground">{description}</p>
      </div>
      {aside && <div className="col-span-2 md:col-span-1 md:justify-self-end">{aside}</div>}
    </li>
  );
}

export default function Explore() {
  const [route, setRoute] = React.useState<TouristCircuit | null>(null);

  const circuitAside = (circuit: TouristCircuit) => (
    <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
      <span className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground tabular-nums">
        <Clock className="h-4 w-4 text-accent" strokeWidth={1.5} />
        {circuit.travelTime}
      </span>
      <Button variant="outline" className="h-10 rounded-full bg-transparent px-5" onClick={() => setRoute(circuit)}>
        Ver ruta
      </Button>
    </div>
  );

  return (
    <section id="explore" className="container scroll-mt-20 py-20 md:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Alrededores</p>
          <h2 className="section-title">Qué hacer en Calamuchita</h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Lugares, paseos y restaurantes que recomendamos a nuestros huéspedes, desde una caminata corta hasta una
          excursión de día completo.
        </p>
      </div>

      <Tabs defaultValue="places">
        <TabsList className="mb-4 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          {tabs.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="h-10 rounded-full border px-4 text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="places">
          <ul className="border-t">
            {placesToVisitData.map((p) => (
              <Row key={p.id} image={p.image.imageUrl} alt={p.image.description} title={p.name} description={p.description} />
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="short">
          <ul className="border-t">
            {shortCircuitsData.map((c) => (
              <Row key={c.id} image={c.image.imageUrl} alt={c.image.description} title={c.name} description={c.description} aside={circuitAside(c)} />
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="long">
          <ul className="border-t">
            {touristCircuitsData.map((c) => (
              <Row key={c.id} image={c.image.imageUrl} alt={c.image.description} title={c.name} description={c.description} aside={circuitAside(c)} />
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="eat">
          <ul className="border-t">
            {whereToEatData.map((r) => {
              const digits = r.phone.replace(/\D/g, '');
              const image = r.logo?.imageUrl?.trim() ? r.logo.imageUrl : DEFAULT_IMAGE;
              return (
                <Row
                  key={r.id}
                  image={image}
                  alt={`Foto de ${r.name}`}
                  title={r.name}
                  description={r.description}
                  aside={
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <Button asChild variant="outline" className="h-10 rounded-full bg-transparent px-4">
                        <a href={`tel:${r.phone}`}>
                          <Phone className="h-4 w-4" strokeWidth={1.5} />
                          <span className="tabular-nums">{r.phone}</span>
                        </a>
                      </Button>
                      <Button asChild className="h-10 rounded-full px-4">
                        <a href={`https://wa.me/54${digits}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  }
                />
              );
            })}
          </ul>
        </TabsContent>
      </Tabs>

      <Dialog open={route !== null} onOpenChange={(open) => !open && setRoute(null)}>
        <DialogContent className="w-full max-w-3xl bg-background">
          {route && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl font-normal">{route.name}</DialogTitle>
                <DialogDescription>Ruta sugerida desde Altos de Yaraví · {route.travelTime}</DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded-xl border">
                <iframe
                  src={route.mapEmbedUrl}
                  title={`Mapa: ${route.name}`}
                  className="h-[420px] w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
