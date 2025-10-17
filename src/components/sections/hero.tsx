import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { heroImage } from '@/lib/data';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] md:h-[75vh] w-full">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        data-ai-hint={heroImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="font-headline text-5xl drop-shadow-lg md:text-7xl lg:text-8xl">
          Altos de Yaraví
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white drop-shadow-md md:text-xl">
        Descubrí Embalse de Calamuchita
        Naturaleza, tranquilidad y aventura en el corazón de Córdoba.
        </p>
        <Link className='mt-4' href="#contact" passHref>
          <Button size="lg" className="w-full md:w-auto">
            Consultar Disponibilidad
          </Button>
        </Link>
      </div>
    </section>
  );
}
