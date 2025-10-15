'use server';

/**
 * @fileOverview Generates engaging and varied descriptions for accommodations using AI.
 *
 * - generateAccommodationDescription - A function that generates accommodation descriptions.
 * - GenerateAccommodationDescriptionInput - The input type for the generateAccommodationDescription function.
 * - GenerateAccommodationDescriptionOutput - The return type for the generateAccommodationDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAccommodationDescriptionInputSchema = z.object({
  accommodationName: z.string().describe('The name of the accommodation.'),
  accommodationType: z.string().describe('The type of accommodation (e.g., cabin, suite, room).'),
  location: z.string().describe('The location of the accommodation (e.g., mountains, forest, lakeside).'),
  uniqueFeatures: z.string().describe('Unique features or amenities of the accommodation (e.g., fireplace, jacuzzi, private balcony).'),
  numberOfGuests: z.number().describe('The maximum number of guests the accommodation can host.'),
  pricePerNight: z.number().describe('The price per night for the accommodation.'),
});
export type GenerateAccommodationDescriptionInput = z.infer<typeof GenerateAccommodationDescriptionInputSchema>;

const GenerateAccommodationDescriptionOutputSchema = z.object({
  description: z.string().describe('An engaging and varied description for the accommodation.'),
});
export type GenerateAccommodationDescriptionOutput = z.infer<typeof GenerateAccommodationDescriptionOutputSchema>;

export async function generateAccommodationDescription(input: GenerateAccommodationDescriptionInput): Promise<GenerateAccommodationDescriptionOutput> {
  return generateAccommodationDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAccommodationDescriptionPrompt',
  input: {schema: GenerateAccommodationDescriptionInputSchema},
  output: {schema: GenerateAccommodationDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in creating attractive accommodation descriptions.

  Generate an engaging and varied description for the accommodation, highlighting its best features and benefits.
  Make it sound appealing to potential guests looking for a relaxing retreat.
  Be sure to include details about the accommodation's type, location, unique features, capacity, and price.

  Accommodation Name: {{{accommodationName}}}
  Accommodation Type: {{{accommodationType}}}
  Location: {{{location}}}
  Unique Features: {{{uniqueFeatures}}}
  Number of Guests: {{{numberOfGuests}}}
  Price Per Night: {{{pricePerNight}}}
  `,
});

const generateAccommodationDescriptionFlow = ai.defineFlow(
  {
    name: 'generateAccommodationDescriptionFlow',
    inputSchema: GenerateAccommodationDescriptionInputSchema,
    outputSchema: GenerateAccommodationDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
