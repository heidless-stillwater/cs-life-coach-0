'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getGoalAndActionPlan, type GoalSettingState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Loader2, AlertCircle, Target, ListChecks, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const initialState: GoalSettingState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? 'Generating Plan...' : 'Generate S.M.A.R.T. Plan'}
    </Button>
  );
}

export function GoalSettingForm() {
  const [state, formAction] = useActionState(getGoalAndActionPlan, initialState);

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Target /> Goal Setter</CardTitle>
        <CardDescription>
          Generate a S.M.A.R.T. goal and a step-by-step action plan based on your client's needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="clientGoal">Client's Broad Goal</Label>
                <Input
                    id="clientGoal"
                    name="clientGoal"
                    placeholder="e.g., 'I want to be healthier' or 'Get a promotion'"
                    required
                    className="text-base"
                />
            </div>
             <div className="space-y-2">
                <Label htmlFor="clientContext">Client's Context & Challenges</Label>
                <Textarea
                    id="clientContext"
                    name="clientContext"
                    placeholder="e.g., 'Works long hours, struggles with cooking, has a gym membership but rarely goes.'"
                    rows={3}
                    required
                    className="text-base"
                />
            </div>
           <SubmitButton />
        </form>
      </CardContent>
       {state.message && (
        <CardFooter>
          <Alert variant={state.isError ? 'destructive' : 'default'} className="w-full">
            <AlertTitle>{state.isError ? 'Error' : 'Generated Plan'}</AlertTitle>
            <AlertDescription>
              {state.message}
            </AlertDescription>
            {state.generatedPlan && (
                <div className="mt-4 space-y-4">
                    <div>
                        <h3 className="font-semibold flex items-center gap-2"><Target className="h-4 w-4 text-primary" />S.M.A.R.T. Goal</h3>
                        <p className="text-foreground mt-1 p-3 bg-secondary rounded-md">{state.generatedPlan.smartGoal}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold flex items-center gap-2"><ListChecks className="h-4 w-4 text-primary" />Action Plan</h3>
                        <ul className="mt-1 space-y-2">
                            {state.generatedPlan.actionPlan.map((step, index) => (
                                <li key={index} className="flex items-start gap-3 p-3 bg-secondary rounded-md">
                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
          </Alert>
        </CardFooter>
        )}
    </Card>
  );
}
