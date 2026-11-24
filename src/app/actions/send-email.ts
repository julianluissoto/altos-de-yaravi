'use server';

import { headers } from 'next/headers';
import { z } from 'zod';
import { Resend } from 'resend';
import { format } from 'date-fns';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  /** Si el envío se bloqueó por país: texto para continuar la consulta por WhatsApp. */
  whatsappText?: string;
};

const sendEmailSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  phone: z.string().min(10, { message: 'Por favor, introduce un número de teléfono de al menos 10 dígitos.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  checkin: z.string().optional(),
  checkout: z.string().optional(),
  website: z.string().optional(), // Honeypot field
});

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_COUNTRY = 'AR';

/** En producción solo acepta visitantes de Argentina; en local no hay dato de país y se permite. */
async function isAllowedCountry() {
  if (process.env.NODE_ENV !== 'production') return true;
  return (await headers()).get('x-vercel-ip-country') === ALLOWED_COUNTRY;
}

/** Evita que lo que escribe el visitante se interprete como HTML en el mail. */
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendEmail(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = sendEmailSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Datos de formulario inválidos',
      issues,
    };
  }

  // Honeypot check
  if (parsed.data.website) {
    return {
      message: '¡Mensaje Enviado! Gracias por contactarnos.',
    };
  }

  if (!(await isAllowedCountry())) {
    const { name, message } = parsed.data;
    return {
      message: 'El formulario solo recibe consultas desde Argentina. Escribinos por WhatsApp.',
      whatsappText: `Hola! Soy ${name}. ${message}`.slice(0, 1000),
    };
  }

  try {
    const { name, email, phone, message, checkin, checkout } = parsed.data;

    const formattedCheckin = checkin ? format(new Date(checkin), "dd/MM/yyyy") : "No especificada";
    const formattedCheckout = checkout ? format(new Date(checkout), "dd/MM/yyyy") : "No especificada";



    //const whatsappLink = `https://wa.me/${process.env.WHATSAPP_API_NUMBER}?text=${encodeURIComponent(`Hola, soy ${name}. Me gustaría hacer una consulta sobre reservas.`)}`;
    const whatapplinkMail = `https://wa.me/549${phone.replace(/D/g, '')}?text=${encodeURIComponent(`Hola, soy julian de Altos de yaravi. Nos habias dejado una consulta por alojamiento en embalse`)}`;

    await resend.emails.send({
      from: 'altosdeyaravi@resend.dev',
      to: process.env.EMAIL!,
      subject: `Nueva consulta de ${name} desde tu web`,
      html: `
        <p>Has recibido una nueva consulta de reserva:</p>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)} (<a href="${whatapplinkMail}" target="_blank">Contactar por WhatsApp</a>)</p>
        <p><strong>Llegada:</strong> ${formattedCheckin}</p>
        <p><strong>Salida:</strong> ${formattedCheckout}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    return {
      message: '¡Mensaje Enviado! Gracias por contactarnos.',
    };
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return {
      message: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      issues: ['Error del servidor'],
    };
  }
}
