
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const service = {
    title: 'Life Balance Coaching',
    description: "Our Life Balance Coaching service is designed to help you find harmony and reduce stress. We'll work together to identify priorities, set boundaries, and create a fulfilling schedule that aligns with your values, allowing you to thrive in both your personal and professional life.",
    features: [
      'Personalized work-life integration strategies',
      'Advanced stress management and reduction techniques',
      'Mindfulness practices for greater presence and focus',
      'Aligning daily actions with core personal values'
    ],
    price: '$150/session'
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
            data-ai-hint="work life balance"
          />
        </div>
      </div>
    </div>
  );
}
