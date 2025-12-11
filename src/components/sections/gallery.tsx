'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { galleryImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';


function GalleryGrid({ images }: { images: ImagePlaceholder[] }) {
  console.log(images);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedImageIndex(index);
  const handleClose = () => setSelectedImageIndex(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex! + 1));
    }
  };

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Card
            key={image.id}
            className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleOpen(index)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.title!}
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



      <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && handleClose()}>
        <DialogContent className="max-w-4xl w-full p-2 sm:p-4">
          {currentImage && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>Imagen Ampliada</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-video w-full mt-4">
                <Image
                  src={currentImage.imageUrl}
                  alt={currentImage.title!}
                  fill
                  className="object-contain rounded-md"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-center text-muted-foreground mt-2">{currentImage.title}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
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
