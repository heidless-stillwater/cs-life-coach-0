'use server';

import { z } from 'zod';
import { personalizeIntake } from '@/ai/flows/personalize-intake';

export interface PersonalizedIntakeState {
  message: string | null;
  suggestedServices?: string;
  isError?: boolean;
}

const intakeSchema = z.object({
  needs: z.string().min(20, { message: 'Please describe your needs in at least 20 characters to get the best suggestion.' }),
});

export async function getPersonalizedSuggestion(
  prevState: PersonalizedIntakeState,
  formData: FormData
): Promise<PersonalizedIntakeState> {
    const validatedFields = intakeSchema.safeParse({
        needs: formData.get('needs'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors.map((e) => e.message).join(', '),
            isError: true,
        };
    }

    try {
        const result = await personalizeIntake({ needs: validatedFields.data.needs });
        return {
            message: 'Based on your needs, we believe this service would be a great starting point:',
            suggestedServices: result.suggestedServices,
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
