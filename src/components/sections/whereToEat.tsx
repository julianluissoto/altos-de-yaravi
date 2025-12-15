
import type { WhereToEatItem } from '@/lib/data';
import { whereToEatData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from "lucide-react";

import { WhatsappIcon } from '../icons/whatsapp-icon';

function RestaurantCard({ place }: { place: WhereToEatItem }) {
    const whatsappNumber = place.phone.replace(/\D/g, "");

    return (
        <Card
            className="
        overflow-hidden rounded-2xl
        shadow-md transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        bg-white
      "
        >
            {/* Imagen */}
            <div className="relative w-full h-48 md:h-56">
                <Image
                    src={place.logo.imageUrl}
                    alt={`Logo de ${place.name}`}
                    data-ai-hint={place.logo.imageHint}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-5 text-center space-y-4">
                <h3 className="font-headline text-2xl font-semibold">
                    {place.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                    {place.description}
                </p>

                {/* Teléfono + WhatsApp */}
                <div className="flex gap-3 w-full">
                    {/* Teléfono */}
                    <a
                        href={`tel:${place.phone}`}
                        className="
              flex-1 inline-flex items-center justify-center gap-2
              rounded-xl border border-primary
              text-primary py-2 text-sm font-semibold
              hover:bg-primary hover:text-white
              transition-colors
            "
                    >
                        <Phone className="h-4 w-4" />
                        {place.phone}
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/54${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex-1 inline-flex items-center justify-center gap-2
              rounded-xl bg-green-600 text-white
              py-2 text-sm font-semibold
              hover:bg-green-700 transition-colors
            "
                    >
                        <WhatsappIcon className="h-4 w-4 fill-current" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </Card>
    );
}


export default function WhereToEat() {
    return (
        <section id="where-to-eat" className="bg-background py-12 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-4xl font-bold md:text-5xl">Dónde Comer</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
                        Descubre los sabores de Calamuchita con nuestras recomendaciones.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {whereToEatData.map(place => (
                        <RestaurantCard key={place.id} place={place} />
                    ))}
                </div>
            </div>
        </section>
    );
}
