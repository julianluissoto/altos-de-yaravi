import { accommodationsData, reviewsData } from '@/lib/data';

export default function Highlights() {
  const maxGuests = Math.max(...accommodationsData.map((a) => a.guests));
  const avgRating = (
    reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewsData.length
  )
    .toFixed(1)
    .replace('.', ',');

  const items = [
    { value: String(accommodationsData.length), label: 'departamentos independientes' },
    { value: '300 m', label: 'hasta el lago de Embalse' },
    { value: String(maxGuests), label: 'huéspedes como máximo' },
    { value: avgRating, label: 'puntaje de nuestros huéspedes' },
  ];

  return (
    <section aria-label="Datos destacados" className="container">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-b pb-10 pt-10 md:grid-cols-4 md:pt-14">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="sr-only">{item.label}</dt>
            <dd className="font-headline text-4xl leading-none tabular-nums text-primary">{item.value}</dd>
            <dd className="mt-2 text-sm text-muted-foreground">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
