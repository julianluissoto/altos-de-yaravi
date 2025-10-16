'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useRef, useActionState } from "react";
import { addDays, format } from "date-fns";
import { useFormStatus } from "react-dom";
import { sendEmail, FormState } from "@/app/actions/send-email";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const initialState: FormState = {
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="flex-1">
            {pending ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
    );
}

export default function Contact() {
    const { toast } = useToast();
    const [checkinDate, setCheckinDate] = React.useState<Date | undefined>(new Date());
    const [checkoutDate, setCheckoutDate] = React.useState<Date | undefined>(addDays(new Date(), 4));

    const [state, formAction] = useActionState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.issues ? "Error" : "¡Éxito!",
                description: state.message,
                variant: state.issues ? "destructive" : "default",
            });
            if (!state.issues) {
                formRef.current?.reset();
                setCheckinDate(new Date());
                setCheckoutDate(addDays(new Date(), 4));
            }
        }
    }, [state, toast]);

    return (
        <section id="contact" className="bg-secondary/10 py-12 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-4xl font-bold md:text-5xl">Reserva tu Estancia</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg md:text-xl">
                        ¿Listo para descanzar? Consulta la disponibilidad o envíanos un whatsapp para reservar.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Consultar Disponibilidad</CardTitle>
                            <CardDescription>Selecciona tus fechas de llegada y salida.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2 justify-center">
                            <div className="space-y-2 flex flex-col items-center">
                                <Label className="font-semibold">Llegada</Label>
                                <Calendar
                                    mode="single"
                                    selected={checkinDate}
                                    onSelect={setCheckinDate}
                                    className="rounded-md border"
                                    disabled={{ before: new Date() }}
                                />
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <Label className="font-semibold">Salida</Label>
                                <Calendar
                                    mode="single"
                                    selected={checkoutDate}
                                    onSelect={setCheckoutDate}
                                    className="rounded-md border"
                                    disabled={{ before: checkinDate || new Date() }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Contáctanos</CardTitle>
                            <CardDescription>Completa el formulario a continuación o contáctanos por WhatsApp.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form ref={formRef} action={formAction} className="space-y-4">
                                <input type="hidden" name="checkin" value={checkinDate?.toISOString()} />
                                <input type="hidden" name="checkout" value={checkoutDate?.toISOString()} />
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre</Label>
                                    <Input id="name" name="name" placeholder="Tu Nombre" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo Electrónico</Label>
                                    <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono</Label>
                                    <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Mensaje</Label>
                                    <Textarea id="message" name="message" placeholder="Tus preguntas o detalles de la reserva..." required />
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
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <SubmitButton />
                                    <Button asChild variant="outline" className="flex-1 border-secondary hover:bg-secondary/20">
                                        <a href="https://wa.me/+5493571680795" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                            <WhatsappIcon className="h-5 w-5" />
                                            Escribinos
                                        </a>
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
