'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// A mock server action for demonstration.
// In a real app, this would send an email or save to a database.
async function submitContactForm(prevState: any, formData: FormData) {
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can add error handling here if needed
  // For now, we'll always return success
  return { success: true, message: 'Your message has been sent successfully!' };
}

const initialState = {
  success: false,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function StandardContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">General Contact Form</CardTitle>
        <CardDescription>
          For general inquiries, please fill out the form below.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please type your message here..."
              rows={5}
              required
            />
          </div>
          <SubmitButton />
        </CardContent>
      </form>
      {state.message && (
        <CardFooter>
            <Alert variant={state.success ? 'default' : 'destructive'} className="w-full">
              {state.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{state.success ? 'Success!' : 'Error'}</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
