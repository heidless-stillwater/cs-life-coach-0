'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { getPersonalizedSuggestion, type PersonalizedIntakeState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Loader2, AlertCircle } from 'lucide-react';

const initialState: PersonalizedIntakeState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? 'Getting Suggestion...' : 'Get Personalized Suggestion'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(getPersonalizedSuggestion, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.isError) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <Card className="w-full max-w-2xl shadow-xl h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Personalized Intake</CardTitle>
        <CardDescription>
          Tell us about your challenges, and our AI assistant will suggest the best services for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <form ref={formRef} action={formAction} className="space-y-4 h-full flex flex-col">
          <Textarea
            name="needs"
            placeholder="For example: 'I'm struggling with work-life balance and feel constantly stressed' or 'I want to improve my leadership skills and confidence at work.'"
            rows={5}
            required
            className="text-base flex-grow"
          />
           <SubmitButton />
        </form>
      </CardContent>
       {state.message && (
        <CardFooter>
          <Alert variant={state.isError ? 'destructive' : 'default'} className="w-full">
            {state.isError ? <AlertCircle className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            <AlertTitle>{state.isError ? 'Error' : 'Our Suggestion For You'}</AlertTitle>
            <AlertDescription>
              {state.message}
              {state.suggestedServices && <p className="mt-2 font-semibold text-primary">{state.suggestedServices}</p>}
            </AlertDescription>
          </Alert>
        </CardFooter>
        )}
    </Card>
  );
}
