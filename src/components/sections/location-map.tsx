import { Button } from '@/components/ui/button';

const address = 'El Yaraví 75, Embalse, Córdoba';
const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3373.011833139335!2d-64.3993611!3d-32.1997222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDExJzU5LjAiUyA2NMKwMjMnNTcuNyJX!5e0!3m2!1ses-419!2sus!4v1721763784535!5m2!1ses-419!2sus';
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  'El Yaraví 75, Embalse, Córdoba, Argentina'
)}`;

const details = [
  { label: 'Dirección', value: address },
  { label: 'Lago de Embalse', value: 'A 300 m' },
  { label: 'Zona', value: 'Valle de Calamuchita' },
  { label: 'Código postal', value: '5856' },
];

export default function LocationMap() {
  return (
    <section id="location" className="container scroll-mt-20 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="min-h-[340px] overflow-hidden rounded-2xl border bg-muted lg:col-span-7 lg:min-h-[460px]">
          <iframe
            src={mapUrl}
            title="Mapa de ubicación de Altos de Yaraví"
            className="h-full min-h-[340px] w-full lg:min-h-[460px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="eyebrow">Ubicación</p>
          <h2 className="section-title">A 300 metros del lago</h2>
          <p className="mt-5 text-[17px] text-muted-foreground">
            Estamos en una zona tranquila de Embalse, con acceso fácil a la ruta, la terminal de ómnibus, el centro y
            la costanera.
          </p>
          <dl className="mt-8 border-t">
            {details.map((d) => (
              <div key={d.label} className="flex justify-between gap-6 border-b py-3.5 text-[15px]">
                <dt className="text-muted-foreground">{d.label}</dt>
                <dd className="text-right">{d.value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="outline" className="mt-8 h-12 self-start rounded-full bg-transparent px-6">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
