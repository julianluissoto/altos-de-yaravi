import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  const address = "El Yaraví 72, Embalse, Córdoba, Argentina";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3373.011833139335!2d-64.3993611!3d-32.1997222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDExJzU5LjAiUyA2NMKwMjMnNTcuNyJX!5e0!3m2!1ses-419!2sus!4v1721763784535!5m2!1ses-419!2sus";

  return (
    <section id="location" className="bg-secondary/10 py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Nuestra Ubicación</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Encuéntranos en el corazón de un paraíso natural, con fácil acceso a las principales atracciones.
          </p>
        </div>
        <Card className="overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <iframe
                    className="w-full h-full min-h-[400px] lg:h-full"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={mapUrl}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Altos de Yaraví
                </CardTitle>
                <CardDescription className="pt-2">{address}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estamos ubicados en una zona privilegiada, rodeados de la tranquilidad de las sierras y la belleza del embalse. Un lugar perfecto para desconectar y disfrutar.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
