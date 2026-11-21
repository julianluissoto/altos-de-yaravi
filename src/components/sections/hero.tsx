'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { heroImage } from '@/lib/data';
import { formatDateAR, todayISO, whatsappUrl } from '@/lib/whatsapp';

const guestOptions = [1, 2, 3, 4];

function BookingBar() {
  const [checkin, setCheckin] = React.useState('');
  const [checkout, setCheckout] = React.useState('');
  const [guests, setGuests] = React.useState('4');
  const [minDate, setMinDate] = React.useState<string>();
  const [error, setError] = React.useState('');

  // La fecha mínima se calcula en el navegador para evitar diferencias con el servidor.
  React.useEffect(() => setMinDate(todayISO()), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkin && checkout && checkout <= checkin) {
      setError('La fecha de salida tiene que ser posterior a la de llegada.');
      return;
    }
    setError('');
    const people = `${guests} ${guests === '1' ? 'persona' : 'personas'}`;
    const dates =
      checkin && checkout
        ? ` del ${formatDateAR(checkin)} al ${formatDateAR(checkout)}`
        : '';
    window.open(
      whatsappUrl(`Hola! Quiero consultar disponibilidad${dates} para ${people}.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const fieldClass = 'min-w-0 px-4 py-2.5 md:px-6';
  const labelClass = 'block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground';
  const inputClass = 'w-full bg-transparent py-0.5 text-[15px] font-medium text-foreground outline-none';

  return (
    <div className="relative z-10 mx-auto -mt-10 w-[calc(100%-2rem)] max-w-4xl">
      <form
        onSubmit={handleSubmit}
        aria-label="Consultar disponibilidad"
        className="grid grid-cols-2 gap-y-1 rounded-2xl border bg-card p-2 shadow-[0_12px_32px_-14px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_1fr_1fr_auto] md:items-center md:rounded-full md:p-2 md:pl-0"
      >
        <div className={`${fieldClass} border-b md:border-b-0 md:border-r`}>
          <label htmlFor="hero-checkin" className={labelClass}>Llegada</label>
          <input
            id="hero-checkin"
            type="date"
            min={minDate}
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className={`${fieldClass} border-b md:border-b-0 md:border-r`}>
          <label htmlFor="hero-checkout" className={labelClass}>Salida</label>
          <input
            id="hero-checkout"
            type="date"
            min={checkin || minDate}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className={`${fieldClass} col-span-2 md:col-span-1`}>
          <label htmlFor="hero-guests" className={labelClass}>Huéspedes</label>
          <select
            id="hero-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={inputClass}
          >
            {guestOptions.map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'persona' : 'personas'}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" className="col-span-2 mt-1 h-12 rounded-full bg-accent px-7 text-[15px] text-accent-foreground hover:bg-accent/90 md:col-span-1 md:mt-0 md:h-[52px]">
          Consultar disponibilidad
        </Button>
      </form>
      <p className="mt-3 min-h-[1.25rem] text-center text-sm text-destructive" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="container pt-2 md:pt-3">
      <div className="relative h-[520px] overflow-hidden rounded-2xl md:h-[600px]">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 pb-16 text-white md:p-12 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">
            Embalse · Valle de Calamuchita
          </p>
          <h1 className="mt-3 max-w-[13ch] font-headline text-[44px] leading-none md:text-7xl lg:text-[84px]">
            Departamentos a <em className="text-accent-soft">300 m</em> del lago
          </h1>
          <p className="mt-4 max-w-xl text-white/85 md:text-lg">
            Dos departamentos equipados en Altos de Yaraví, cerca del centro, la costanera y la terminal.
            Ideales para descansar en familia.
          </p>
        </div>
      </div>
      <BookingBar />
    </section>
  );
}
