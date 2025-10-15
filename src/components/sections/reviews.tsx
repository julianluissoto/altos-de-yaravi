
'use client';

import { reviewsData, Review } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex flex-col justify-between h-full min-h-[220px] shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={`https://i.pravatar.cc/150?u=${review.name}`} />
            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{review.name}</h4>
            <div className="flex items-center gap-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-muted-foreground/50" />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{review.review}"</p>
      </CardContent>
    </Card>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Lo que dicen nuestros huéspedes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Nos enorgullece ofrecer una experiencia inolvidable. Lee lo que otros opinan.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-sm md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {reviewsData.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <ReviewCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
