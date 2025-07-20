// This is a server action.
'use server';

/**
 * @fileOverview Motivational phrase generator AI agent.
 *
 * - generateMotivationalPhrase - A function that generates a motivational phrase related to a given text.
 * - GenerateMotivationalPhraseInput - The input type for the generateMotivationalPhrase function.
 * - GenerateMotivationalPhraseOutput - The return type for the generateMotivationalPhrase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMotivationalPhraseInputSchema = z.object({
  text: z.string().describe('The current text to generate a motivational phrase for.'),
});
export type GenerateMotivationalPhraseInput = z.infer<typeof GenerateMotivationalPhraseInputSchema>;

const GenerateMotivationalPhraseOutputSchema = z.object({
  phrase: z.string().describe('A motivational phrase related to the current text.'),
});
export type GenerateMotivationalPhraseOutput = z.infer<typeof GenerateMotivationalPhraseOutputSchema>;

export async function generateMotivationalPhrase(
  input: GenerateMotivationalPhraseInput
): Promise<GenerateMotivationalPhraseOutput> {
  return generateMotivationalPhraseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMotivationalPhrasePrompt',
  input: {schema: GenerateMotivationalPhraseInputSchema},
  output: {schema: GenerateMotivationalPhraseOutputSchema},
  prompt: `You are a motivational speaker. Generate a motivational phrase related to the following text: "{{{text}}}".`,
});

const generateMotivationalPhraseFlow = ai.defineFlow(
  {
    name: 'generateMotivationalPhraseFlow',
    inputSchema: GenerateMotivationalPhraseInputSchema,
    outputSchema: GenerateMotivationalPhraseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
