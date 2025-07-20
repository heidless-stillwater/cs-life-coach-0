'use server';

import { z } from 'zod';
import { generateAccountabilityMessage } from '@/ai/flows/accountability-bot-flow';

export interface AccountabilityBotState {
  message: string | null;
  generatedMessage?: string;
  isError?: boolean;
}

const botSchema = z.object({
  clientGoal: z.string().min(5, { message: 'Please describe the client goal in at least 5 characters.' }),
  clientProgress: z.string().min(5, { message: 'Please describe the client progress in at least 5 characters.' }),
  botType: z.enum(['check-in', 'encouragement', 'accountability', 'reminder']),
});

export async function getAccountabilityMessage(
  prevState: AccountabilityBotState,
  formData: FormData
): Promise<AccountabilityBotState> {
    const validatedFields = botSchema.safeParse({
        clientGoal: formData.get('clientGoal'),
        clientProgress: formData.get('clientProgress'),
        botType: formData.get('botType'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors.map((e) => e.message).join(', '),
            isError: true,
        };
    }

    try {
        const result = await generateAccountabilityMessage({ 
            clientGoal: validatedFields.data.clientGoal,
            clientProgress: validatedFields.data.clientProgress,
            botType: validatedFields.data.botType,
         });
        return {
            message: 'Successfully generated message:',
            generatedMessage: result.message,
            isError: false,
        };
    } catch (e) {
        console.error(e);
        return {
            message: 'There was an error processing your request. Please try again later.',
            isError: true,
        };
    }
}
