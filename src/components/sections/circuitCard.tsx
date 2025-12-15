
import type { TouristCircuit } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Route } from 'lucide-react';

export function CircuitCard({ circuit, reverseLayout = false }: { circuit: TouristCircuit, reverseLayout?: boolean }) {
  return (
    <Card className="overflow-hidden shadow-lg w-full">
      <div className={`grid grid-cols-1 md:grid-cols-2 items-stretch ${reverseLayout ? 'md:grid-flow-col-dense' : ''}`}>

        <div className={`relative min-h-[300px] w-full ${reverseLayout ? 'md:col-start-2' : ''}`}>
          <Image
            src={circuit.image.imageUrl}
            alt={circuit.image.description}
            data-ai-hint={circuit.image.imageHint}
            fill
            className="object-cover"
          />
        </div>

        <div className={`p-6 flex flex-col justify-center space-y-4 ${reverseLayout ? 'md:col-start-1 md:row-start-1' : ''}`}>
          <CardHeader className="p-0">
            <CardTitle className="font-headline text-3xl">{circuit.name}</CardTitle>
            <div className="flex items-center gap-4 text-muted-foreground pt-2">
              <div className='flex items-center gap-2'>
                <Clock className="h-4 w-4" />
                <span>{circuit.travelTime}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">
              {circuit.description}
            </p>
            <div className='mt-4'>
              <h4 className='font-semibold mb-2 flex items-center gap-2'><Route className="h-5 w-5 text-primary" /> Ruta Sugerida</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <iframe
                  src={circuit.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className='min-h-[250px]'
                ></iframe>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
