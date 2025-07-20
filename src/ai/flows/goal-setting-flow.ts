'use server';

/**
 * @fileOverview An AI flow for generating personalized goals and action plans.
 *
 * - generateGoalAndActionPlan - A function that handles the goal and plan generation process.
 * - GoalAndActionPlanInput - The input type for the generateGoalAndActionPlan function.
 * - GoalAndActionPlanOutput - The return type for the generateGoalAndActionPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GoalAndActionPlanInputSchema = z.object({
  clientGoal: z.string().describe("The client's broad, high-level goal."),
  clientContext: z.string().describe("Brief context about the client's situation, challenges, or lifestyle."),
});
export type GoalAndActionPlanInput = z.infer<typeof GoalAndActionPlanInputSchema>;

const GoalAndActionPlanOutputSchema = z.object({
  smartGoal: z.string().describe('A well-defined S.M.A.R.T. (Specific, Measurable, Achievable, Relevant, Time-bound) goal.'),
  actionPlan: z.array(z.string()).describe('A list of concrete, sequential steps the client can take to achieve the goal.'),
});
export type GoalAndActionPlanOutput = z.infer<typeof GoalAndActionPlanOutputSchema>;

export async function generateGoalAndActionPlan(
  input: GoalAndActionPlanInput
): Promise<GoalAndActionPlanOutput> {
  return goalSettingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'goalSettingPrompt',
  input: {schema: GoalAndActionPlanInputSchema},
  output: {schema: GoalAndActionPlanOutputSchema},
  prompt: `You are an expert life coach who specializes in helping clients turn vague aspirations into concrete, actionable plans.

  Your task is to take the client's broad goal and their personal context, and then create:
  1. A S.M.A.R.T. Goal: Make it Specific, Measurable, Achievable, Relevant, and Time-bound. This should be a single, clear sentence.
  2. An Action Plan: A list of 3-5 clear, sequential steps to achieve the S.M.A.R.T. goal. Each step should be a concise, actionable instruction.

  Client's Broad Goal: {{{clientGoal}}}
  Client's Context: {{{clientContext}}}

  Generate a S.M.A.R.T. goal and a corresponding action plan.
  `,
});

const goalSettingFlow = ai.defineFlow(
  {
    name: 'goalSettingFlow',
    inputSchema: GoalAndActionPlanInputSchema,
    outputSchema: GoalAndActionPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
