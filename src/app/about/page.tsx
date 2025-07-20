import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
            Our Mission is Your Success
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            We are dedicated to providing you with the clarity, confidence, and tools to build a life that excites you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/live-about-meet-coach.jpg"
              alt="Coach portrait"
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Meet Your Coach, Jane Doe</h2>
            <p className="text-lg text-muted-foreground">
              With over a decade of experience in personal and professional development, Jane is a certified life and career coach passionate about helping individuals unlock their true potential. Her empathetic yet direct approach has guided countless clients toward meaningful change and lasting fulfillment.
            </p>
            <p className="text-muted-foreground">
              Jane believes that everyone has the capacity for greatness. Her coaching philosophy is built on a foundation of trust, collaboration, and actionable strategies tailored to your unique journey.
            </p>
            <div className="flex justify-start">
              <Button asChild size="lg">
                <Link href="/contact">Begin Your Transformation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12 bg-secondary rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Coaching Philosophy</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Empowerment:</span> We provide tools and perspectives, but you are the driver of your own change.</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Holistic Approach:</span> We look at the whole picture—career, life, health, and relationships—to create balanced success.</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Action-Oriented:</span> Our sessions are focused on creating concrete, actionable steps to move you forward.</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Confidential Partnership:</span> We create a safe, non-judgmental space for you to explore and grow.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
