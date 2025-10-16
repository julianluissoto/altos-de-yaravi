'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { format } from 'date-fns';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

const sendEmailSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  phone: z.string().min(10, { message: 'Por favor, introduce un número de teléfono de al menos 10 dígitos.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  checkin: z.string().optional(),
  checkout: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    const { name, email, phone, message, checkin, checkout } = parsed.data;

    const formattedCheckin = checkin ? format(new Date(checkin), "dd/MM/yyyy") : "No especificada";
    const formattedCheckout = checkout ? format(new Date(checkout), "dd/MM/yyyy") : "No especificada";
    
    // Limpiar el número de teléfono para el enlace de WhatsApp
    const whatsappNumber = phone.replace(/[^0-9]/g, '');
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    await resend.emails.send({
      from: 'altosdeyaravi@resend.dev',
      to: 'julianlasoto@gmail.com',
      subject: `Nueva consulta de ${name} desde tu web`,
      html: `
        <p>Has recibido una nueva consulta de reserva:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone} (<a href="${whatsappLink}" target="_blank">Contactar por WhatsApp</a>)</p>
        <p><strong>Llegada:</strong> ${formattedCheckin}</p>
        <p><strong>Salida:</strong> ${formattedCheckout}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
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
