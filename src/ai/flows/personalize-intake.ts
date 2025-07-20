'use server';

/**
 * @fileOverview A personalized intake AI agent.
 *
 * - personalizeIntake - A function that handles the personalized intake process.
 * - PersonalizeIntakeInput - The input type for the personalizeIntake function.
 * - PersonalizeIntakeOutput - The return type for the personalizeIntake function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeIntakeInputSchema = z.object({
  needs: z.string().describe('The potential client’s stated needs and challenges.'),
});
export type PersonalizeIntakeInput = z.infer<typeof PersonalizeIntakeInputSchema>;

const PersonalizeIntakeOutputSchema = z.object({
  suggestedServices: z
    .string()
    .describe('The coaching services or products that best address the client’s stated needs.'),
});
export type PersonalizeIntakeOutput = z.infer<typeof PersonalizeIntakeOutputSchema>;

export async function personalizeIntake(input: PersonalizeIntakeInput): Promise<PersonalizeIntakeOutput> {
  return personalizeIntakeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeIntakePrompt',
  input: {schema: PersonalizeIntakeInputSchema},
  output: {schema: PersonalizeIntakeOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant coaching services based on a client's needs and challenges.

  Given the following needs and challenges, suggest the most relevant coaching services or products.

  Needs and Challenges: {{{needs}}}
  `,
});

const personalizeIntakeFlow = ai.defineFlow(
  {
    name: 'personalizeIntakeFlow',
    inputSchema: PersonalizeIntakeInputSchema,
    outputSchema: PersonalizeIntakeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
