'use client';

import React, { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendEmail, FormState } from '@/app/actions/send-email';
import { todayISO, whatsappUrl } from '@/lib/whatsapp';

const initialState: FormState = { message: '' };

const fieldClass = 'h-11 rounded-lg bg-background';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="h-12 flex-1 rounded-full px-6">
      {pending ? 'Enviando…' : 'Enviar consulta'}
    </Button>
  );
}

// Mediodía local para que la fecha no se corra un día al convertirla en el servidor.
const toIsoNoon = (d: string) => (d ? `${d}T12:00:00` : '');

export default function Contact() {
  const { toast } = useToast();
  const [checkin, setCheckin] = React.useState('');
  const [checkout, setCheckout] = React.useState('');
  const [minDate, setMinDate] = React.useState<string>();
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setMinDate(todayISO()), []);

  useEffect(() => {
    if (!state.message) return;
    toast({
      title: state.issues ? 'Error' : 'Consulta enviada',
      description: state.message,
      variant: state.issues ? 'destructive' : 'default',
    });
    if (!state.issues) {
      formRef.current?.reset();
      setCheckin('');
      setCheckout('');
    }
  }, [state, toast]);

  return (
    <section id="contact" className="container scroll-mt-20 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 rounded-3xl border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
        <div>
          <p className="eyebrow">Reservas</p>
          <h2 className="section-title">Consultá fechas y disponibilidad</h2>
          <p className="mt-5 max-w-md text-[17px] text-muted-foreground">
            Dejanos tus fechas y te respondemos a la brevedad. Si preferís, escribinos directo por WhatsApp.
          </p>

          <Button asChild variant="outline" className="mt-8 h-12 rounded-full bg-transparent px-6">
            <a href={whatsappUrl('Hola! Quiero consultar disponibilidad.')} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </Button>

          <dl className="mt-10 border-t text-[15px]">
            <div className="flex justify-between gap-6 border-b py-3.5">
              <dt className="text-muted-foreground">Dirección</dt>
              <dd className="text-right">El Yaraví 75, Embalse</dd>
            </div>
            <div className="flex justify-between gap-6 border-b py-3.5">
              <dt className="text-muted-foreground">Departamentos</dt>
              <dd className="text-right">2, para 4 y 5 personas</dd>
            </div>
          </dl>
        </div>

        <form ref={formRef} action={formAction} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="hidden" name="checkin" value={toIsoNoon(checkin)} />
          <input type="hidden" name="checkout" value={toIsoNoon(checkout)} />

          {/* Honeypot */}
          <div className="sr-only" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkin-date">Llegada</Label>
            <Input
              id="checkin-date"
              type="date"
              min={minDate}
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout-date">Salida</Label>
            <Input
              id="checkout-date"
              type="date"
              min={checkin || minDate}
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu nombre" required className={fieldClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" required className={fieldClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" name="phone" type="tel" placeholder="351 000 0000" required className={fieldClass} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuántas personas son, qué departamento te interesa, consultas…"
              required
              className="min-h-[120px] rounded-lg bg-background"
            />
          </div>

          {state.issues && (
            <Alert variant="destructive" className="sm:col-span-2">
              <AlertTitle>Revisá estos datos:</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-5">
                  {state.issues.map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="flex sm:col-span-2">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
