'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/lib/placeholder-images';


function GalleryGrid({ images }: { images: any }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image:any) => (
        <Card key={image.id} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <CardContent className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


export default function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/10 py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Galería de Fotos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Explora embalse y descubre paisajes ùnicos.
          </p>
        </div>
                    
           <GalleryGrid images={galleryImages} />
          
      
      </div>
    </section>
  );
}
