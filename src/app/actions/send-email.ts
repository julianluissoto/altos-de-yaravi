'use server';

import { z } from 'zod';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

const sendEmailSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});


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
  
  // Aquí es donde integrarías tu servicio de envío de correos (ej: SendGrid, Resend)
  // Por ahora, solo simularemos el éxito.
  console.log('--- Correo Simulado ---');
  console.log('Para: julianlasoto@gmail.com');
  console.log('De:', parsed.data.name, `<${parsed.data.email}>`);
  console.log('Mensaje:', parsed.data.message);
  console.log('---------------------');

  return {
    message: '¡Mensaje Enviado! Gracias por contactarnos.',
  };
}
