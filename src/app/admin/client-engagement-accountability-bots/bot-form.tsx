'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { getAccountabilityMessage, type AccountabilityBotState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Loader2, AlertCircle, Bot, Copy, Check, Heart, BellRing, HandHeart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const initialState: AccountabilityBotState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? 'Generating...' : 'Generate Message'}
    </Button>
  );
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button onClick={handleCopy} size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7">
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
    )
}

const botConfig = {
    'check-in': {
        title: 'Check-in Bot',
        description: 'Generate a gentle, open-ended message to start a conversation and see how your client is feeling.',
        icon: HandHeart,
    },
    encouragement: {
        title: 'Encouragement Bot',
        description: 'Generate a warm, supportive message to celebrate progress and lift your client\'s spirits.',
        icon: Heart,
    },
    accountability: {
        title: 'Accountability Bot',
        description: 'Generate a balanced check-in message to keep your client focused and motivated.',
        icon: Bot,
    },
    reminder: {
        title: 'Reminder Bot',
        description: 'Generate a friendly, gentle reminder about upcoming tasks or goals.',
        icon: BellRing,
    }
}

export function AccountabilityBotForm({ botType }: { botType: 'check-in' | 'encouragement' | 'accountability' | 'reminder' }) {
  const [state, formAction] = useActionState(getAccountabilityMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const config = botConfig[botType];
  const Icon = config.icon;

  useEffect(() => {
    if (state.message && !state.isError) {
      // Don't reset form on success
    }
  }, [state]);

  return (
    <Card className="w-full max-w-2xl shadow-xl border-0">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Icon /> {config.title}</CardTitle>
        <CardDescription>
          {config.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
            <input type="hidden" name="botType" value={botType} />
            <div className="space-y-2">
                <Label htmlFor={`clientGoal-${botType}`}>Client's Goal</Label>
                <Input
                    id={`clientGoal-${botType}`}
                    name="clientGoal"
                    placeholder="e.g., 'Launch my new website by the end of the month'"
                    required
                    className="text-base"
                />
            </div>
             <div className="space-y-2">
                <Label htmlFor={`clientProgress-${botType}`}>Recent Progress / Context</Label>
                <Textarea
                    id={`clientProgress-${botType}`}
                    name="clientProgress"
                    placeholder="e.g., 'They finished the homepage design and wrote the about page copy.'"
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
            {state.isError ? <AlertCircle className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            <AlertTitle>{state.isError ? 'Error' : 'Generated Message'}</AlertTitle>
            <AlertDescription>
              {state.message}
              {state.generatedMessage && (
                <div className="relative mt-2 p-4 rounded-md bg-secondary border">
                    <p className="font-semibold text-primary pr-8">{state.generatedMessage}</p>
                    <CopyButton textToCopy={state.generatedMessage} />
                </div>
              )}
            </AlertDescription>
          </Alert>
        </CardFooter>
        )}
    </Card>
  );
}
