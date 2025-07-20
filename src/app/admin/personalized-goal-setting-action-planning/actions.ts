'use server';

import { z } from 'zod';
import { generateGoalAndActionPlan } from '@/ai/flows/goal-setting-flow';

export interface GoalSettingState {
  message: string | null;
  generatedPlan?: {
    smartGoal: string;
    actionPlan: string[];
  };
  isError?: boolean;
}

const goalSchema = z.object({
  clientGoal: z.string().min(5, { message: 'Please describe the client goal in at least 5 characters.' }),
  clientContext: z.string().min(10, { message: 'Please provide at least 10 characters of context for better results.' }),
});

export async function getGoalAndActionPlan(
  prevState: GoalSettingState,
  formData: FormData
): Promise<GoalSettingState> {
    const validatedFields = goalSchema.safeParse({
        clientGoal: formData.get('clientGoal'),
        clientContext: formData.get('clientContext'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors.map((e) => e.message).join(', '),
            isError: true,
        };
    }

    try {
        const result = await generateGoalAndActionPlan({ 
            clientGoal: validatedFields.data.clientGoal,
            clientContext: validatedFields.data.clientContext,
         });
        return {
            message: 'Successfully generated goal and action plan:',
            generatedPlan: result,
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
