import { accommodationsData, Accommodation } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CreditCard, Users, Bed, Wifi, Wind, Droplets, Leaf, Mountain, Car, Flame } from 'lucide-react';
import Link from 'next/link';

const featureIcons: { [key: string]: React.ReactNode } = {
  default: <Leaf className="h-4 w-4 text-secondary" />,
  "forest view": <Leaf className="h-4 w-4 text-secondary" />,
  "lake view": <Droplets className="h-4 w-4 text-primary" />,
  "mountain view": <Mountain className="h-4 w-4 text-accent" />,
  "cama king-size": <Bed className="h-4 w-4" />,
  "balcón privado": <Wind className="h-4 w-4" />,
  "jacuzzi": <Droplets className="h-4 w-4" />,
  "chimenea": <Leaf className="h-4 w-4 text-secondary" />,
  "vista al bosque": <Leaf className="h-4 w-4 text-secondary" />,
  "vista al lago": <Droplets className="h-4 w-4 text-primary" />,
  "vista a la montaña": <Mountain className="h-4 w-4 text-accent" />,
  "piscina privada": <Droplets className="h-4 w-4" />,
  "cocina completa": <Leaf className="h-4 w-4 text-secondary" />,
  "cochera": <Car className="h-4 w-4" />,
  "asador": <Flame className="h-4 w-4" />,
  "wifi": <Wifi className="h-4 w-4" />,
};


function AccommodationDisplay({ accommodation, reverseLayout = false }: { accommodation: Accommodation, reverseLayout?: boolean }) {
  const mainImage = accommodation.image;
  const interiorImages = accommodation.interiorImages.slice(0, 4); // Ensure we only take 4 images

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${reverseLayout ? 'lg:col-start-2' : ''}`}>
        <div className="col-span-2 row-span-2 relative min-h-[300px] lg:min-h-[450px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={mainImage.imageUrl}
            alt={mainImage.description}
            data-ai-hint={mainImage.imageHint}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        {interiorImages.map((image, index) => (
          <div key={image.id} className="relative h-32 w-full overflow-hidden rounded-lg shadow-md lg:h-40">
             <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
             />
          </div>
        ))}
      </div>
      
      <div className={`space-y-6 ${reverseLayout ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <h3 className="font-headline text-3xl font-bold">{accommodation.name}</h3>
        <p className="text-muted-foreground">{accommodation.description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className='text-base'>Hasta {accommodation.guests} huéspedes</span>
            </div>
            <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground text-base">Consulte tarifa</span>
            </div>
        </div>

        <div>
            <h4 className='font-semibold mb-3'>Comodidades destacadas:</h4>
            <div className="flex flex-wrap gap-3">
                {accommodation.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
                        {featureIcons[feature.toLowerCase()] || featureIcons.default}
                        <span className="capitalize font-medium">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="pt-4">
          <Link href="#contact" passHref>
            <Button size="lg" className="w-full md:w-auto">
              Reservar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function Accommodations() {
  return (
    <section id="accommodations" className="bg-background py-16 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Nuestro Alojamientos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Diseñado para ofrecer comodidad y espacio.
          </p>
        </div>
        <div className="space-y-20">
          {accommodationsData.map((acc, index) => (
            <AccommodationDisplay key={acc.id} accommodation={acc} reverseLayout={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
