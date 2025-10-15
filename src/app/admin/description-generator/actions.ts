'use server';

import { generateAccommodationDescription } from '@/ai/flows/generate-accommodation-descriptions';
import { z } from 'zod';

export const formSchema = z.object({
  accommodationName: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  accommodationType: z.string().min(3, { message: 'El tipo debe tener al menos 3 caracteres.' }),
  location: z.string().min(3, { message: 'La ubicación debe tener al menos 3 caracteres.' }),
  uniqueFeatures: z.string().min(10, { message: 'Las características deben tener al menos 10 caracteres.' }),
  numberOfGuests: z.coerce.number().min(1, { message: 'Debe alojar al menos a 1 huésped.' }),
  pricePerNight: z.coerce.number().min(1, { message: 'El precio debe ser un número positivo.' }),
});

export type FormState = {
  message: string;
  description: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onGenerate(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Datos de formulario inválidos',
      description: prevState.description, // Keep old description on validation error
      issues,
    };
  }

  try {
    const result = await generateAccommodationDescription(parsed.data);
    return {
      message: '¡Descripción generada con éxito!',
      description: result.description,
    };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
    return {
      message: 'Error al generar la descripción.',
      description: '',
      issues: [errorMessage],
    };
  }
}
