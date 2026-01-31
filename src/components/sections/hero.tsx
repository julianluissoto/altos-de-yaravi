

import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { heroImage } from '@/lib/data';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Hero() {



  return (
    <section id="home" className="relative h-[vh] md:h-[50vh] w-full">
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
          Descubrí Embalse de Calamuchita.
          Naturaleza, tranquilidad y aventura en el corazón de Córdoba.
        </p>


        {/* Contenedor: centrado en desktop (md:justify-center) */}
        <div className="flex flex-row gap-4 mt-8 w-full md:justify-center items-stretch">

          {/* Botón navegación interna */}
          <Link href="#contact" className="w-1/2 md:w-auto">
            <Button
              size="lg"
              className="
        w-full md:w-[240px] 
        h-16 md:h-14 
        px-4 
        text-sm sm:text-base md:text-lg
        leading-tight
        animate-pulse-slow 
        hover:scale-105 transition-transform
      "
            >
              <span className="text-center">Consultar Disponibilidad</span>
            </Button>
          </Link>

          {/* Botón WhatsApp */}
          <Button
            asChild
            size="lg"
            className="
      w-1/2 md:w-[240px] 
      h-16 md:h-14 
      px-4 
      bg-green-600 hover:bg-green-700 text-white
      text-sm sm:text-base md:text-lg
    "
          >
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
                "Hola! Quiero consultar disponibilidad 😊"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center"
            >
              Enviar WhatsApp
            </a>
          </Button>
        </div>



      </div>
    </section>
  );
}
