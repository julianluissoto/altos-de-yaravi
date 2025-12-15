import { touristCircuitsData, shortCircuitsData, TouristCircuit } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CircuitCard } from './circuitCard';
export default function TouristCircuits() {
  return (
    <section id="tourist-circuits" className="bg-secondary/10 py-16 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Explora Calamuchita</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
            Descubre la magia de la región con nuestras rutas recomendadas, desde paseos cortos a excursiones de día completo.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-headline font-bold hover:no-underline">
              Circuitos Turísticos (Paseos Largos)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-12 flex flex-col items-center pt-8">
                {touristCircuitsData.map((circuit, index) => (
                  <CircuitCard key={circuit.id} circuit={circuit} reverseLayout={index % 2 !== 0} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-headline font-bold hover:no-underline">
              Circuitos Cortos (Paseos Locales)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-12 flex flex-col items-center pt-8">
                {shortCircuitsData.map((circuit, index) => (
                  <CircuitCard key={circuit.id} circuit={circuit} reverseLayout={index % 2 !== 0} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}