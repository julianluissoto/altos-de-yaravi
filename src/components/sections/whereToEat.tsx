
import type { WhereToEatItem } from '@/lib/data';
import { whereToEatData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function RestaurantCard({ place }: { place: WhereToEatItem }) {
    return (
        <Card className="flex flex-col items-center text-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4">
            <div className="relative h-24 w-48 mb-4">
                <Image
                    src={place.logo.imageUrl}
                    alt={`Logo de ${place.name}`}
                    data-ai-hint={place.logo.imageHint}
                    fill
                    className="object-contain"
                />
            </div>
            <CardHeader className="p-2">
                <CardTitle className="font-headline text-2xl">{place.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
                <p className="text-muted-foreground">{place.description}</p>
            </CardContent>
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
