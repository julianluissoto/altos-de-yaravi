import { placesToVisitData, PlaceToVisit } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function PlaceCard({ place }: { place: PlaceToVisit }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-60 w-full">
        <Image
          src={place.image.imageUrl}
          alt={place.image.description}
          data-ai-hint={place.image.imageHint}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{place.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{place.description}</p>
      </CardContent>
    </Card>
  );
}


export default function PlacesToVisit() {
  return (
    <section id="places-to-visit" className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Lugares para Explorar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Descubre las maravillas naturales y culturales que rodean Altos de Yaraví.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {placesToVisitData.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}
