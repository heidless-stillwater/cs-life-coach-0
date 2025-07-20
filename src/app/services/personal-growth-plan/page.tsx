
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const service = {
    title: 'Personal Growth Plan',
    description: 'A comprehensive 6-session plan to dive deep into your personal development. We work with you to create lasting habits, achieve tangible progress, and build a roadmap for your continued growth.',
    features: [
      'In-depth values assessment to find what truly drives you',
      'Strategic long-term goal setting for a clear future',
      'Proven strategies for sustainable habit formation',
      'Monthly progress reviews to adapt and ensure success'
    ],
    price: '$400'
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {service.description}
          </p>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <p className="text-2xl font-bold text-primary">{service.price}</p>
          </div>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://storage.googleapis.com/fast-food-assets/life-coaching-cycle-live.png"
            alt={service.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="planning growth"
          />
        </div>
      </div>
    </div>
  );
}
