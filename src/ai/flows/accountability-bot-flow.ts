'use server';

/**
 * @fileOverview An AI flow for generating client engagement and accountability messages.
 *
 * - generateAccountabilityMessage - A function that handles the message generation process.
 * - AccountabilityBotInput - The input type for the generateAccountabilityMessage function.
 * - AccountabilityBotOutput - The return type for the generateAccountabilityMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AccountabilityBotInputSchema = z.object({
  clientGoal: z.string().describe("The client's primary goal."),
  clientProgress: z.string().describe("A brief summary of the client's recent progress or context for the message."),
  botType: z.enum(['check-in', 'encouragement', 'accountability', 'reminder']).describe('The type of bot message to generate.'),
});
export type AccountabilityBotInput = z.infer<typeof AccountabilityBotInputSchema>;

const AccountabilityBotOutputSchema = z.object({
  message: z.string().describe('A personalized, encouraging message for the client.'),
});
export type AccountabilityBotOutput = z.infer<typeof AccountabilityBotOutputSchema>;

export async function generateAccountabilityMessage(
  input: AccountabilityBotInput
): Promise<AccountabilityBotOutput> {
  return accountabilityBotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'accountabilityBotPrompt',
  input: {schema: AccountabilityBotInputSchema},
  output: {schema: AccountabilityBotOutputSchema},
  prompt: `You are an AI assistant for a life coach. Your role is to generate short, supportive check-in messages for clients. The tone of the message should be determined by the 'botType'.

Keep all messages concise, like a text message. Reference the client's goal and their recent progress to make the message personal.

BOT PERSONAS:
- check-in: Your tone should be gentle, curious, and open-ended. Ask a question to invite reflection without being demanding.
- accountability: Your tone should be positive, empathetic, and motivating. A balanced check-in to help the client feel seen and motivated.
- encouragement: Your tone should be warm, celebratory, and uplifting. Focus on celebrating progress, no matter how small.
- reminder: Your tone should be friendly, gentle, and helpful. A simple nudge about a goal or task.

Client's Goal: {{{clientGoal}}}
Recent Progress/Context: {{{clientProgress}}}
Message Type to Generate: {{{botType}}}

Generate a message with the specified persona.
  `,
});

const accountabilityBotFlow = ai.defineFlow(
  {
    name: 'accountabilityBotFlow',
    inputSchema: AccountabilityBotInputSchema,
    outputSchema: AccountabilityBotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
