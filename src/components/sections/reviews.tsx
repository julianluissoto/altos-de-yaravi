import { ArrowUpRight, Star } from 'lucide-react';
import { reviewsData } from '@/lib/data';

// Ficha de Altos de Yaraví en Google Maps (abre el perfil con todas las opiniones).
const googleReviewsUrl = 'https://maps.google.com/?cid=15966244722626961612';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={
            i < rating ? 'h-3.5 w-3.5 fill-accent-soft text-accent-soft' : 'h-3.5 w-3.5 text-primary-foreground/30'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avg = reviewsData.reduce((s, r) => s + r.rating, 0) / reviewsData.length;

  return (
    <section id="reviews" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="eyebrow text-accent-soft">Opiniones</p>
            <h2 className="section-title">Lo que dicen nuestros huéspedes</h2>
          </div>
          <div className="flex items-end gap-4">
            <span className="font-headline text-6xl leading-none tabular-nums">
              {avg.toFixed(1).replace('.', ',')}
            </span>
            <div className="pb-1 text-sm text-primary-foreground/75">
              <Stars rating={Math.round(avg)} />
              <p className="mt-1">{reviewsData.length} opiniones</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <figure key={review.id} className="flex flex-col">
              <Stars rating={review.rating} />
              <blockquote className="mt-4 font-headline text-[21px] leading-snug">“{review.review}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-primary-foreground/75">{review.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-[15px] font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Ver todas las opiniones en Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
