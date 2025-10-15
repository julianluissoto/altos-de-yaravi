'use client';

import { useActionState, useFormStatus } from 'react-dom';
import { onGenerate, FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const initialState: FormState = {
  message: '',
  description: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generando...' : 'Generar Descripción'}
    </Button>
  );
}

export default function DescriptionGeneratorPage() {
  const [state, formAction] = useActionState(onGenerate, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Datos de formulario inválidos') {
      toast({
        title: state.message,
        variant: state.issues ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto py-10">
       <Button asChild variant="ghost" className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Link>
      </Button>
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Generador de Descripciones con IA</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Crea textos de marketing atractivos para tus alojamientos al instante.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-2">
        <Card>
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Detalles del Alojamiento</CardTitle>
              <CardDescription>Proporciona los detalles a continuación para generar una descripción.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="accommodationName">Nombre del Alojamiento</Label>
                <Input id="accommodationName" name="accommodationName" placeholder="Ej: La Cabaña del Atardecer" required />
              </div>
              <div>
                <Label htmlFor="accommodationType">Tipo de Alojamiento</Label>
                <Input id="accommodationType" name="accommodationType" placeholder="Ej: Cabaña, Suite" required />
              </div>
              <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" name="location" placeholder="Ej: Ladera de montaña, Bosque" required />
              </div>
              <div>
                <Label htmlFor="uniqueFeatures">Características Únicas</Label>
                <Textarea id="uniqueFeatures" name="uniqueFeatures" placeholder="Ej: Jacuzzi privado, vistas panorámicas" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="numberOfGuests">Número de Huéspedes</Label>
                  <Input id="numberOfGuests" name="numberOfGuests" type="number" placeholder="Ej: 4" required />
                </div>
                <div>
                  <Label htmlFor="pricePerNight">Precio por Noche ($)</Label>
                  <Input id="pricePerNight" name="pricePerNight" type="number" placeholder="Ej: 250" required />
                </div>
              </div>
              {state.issues && (
                <Alert variant="destructive">
                  <AlertTitle>Por favor, corrige los siguientes errores:</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-5">
                      {state.issues.map((issue) => (
                        <li key={issue}>{issue}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Descripción Generada</CardTitle>
            <CardDescription>El texto generado por IA aparecerá a continuación.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Textarea
              readOnly
              value={state.description || ''}
              placeholder="Esperando generación..."
              className="h-full min-h-[300px] resize-none bg-muted"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
