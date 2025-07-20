import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Life Balance Coaching',
    description: 'Find harmony between your personal and professional life.',
  },
  {
    title: 'Career Progression',
    description: 'Navigate your career path with confidence and clarity.',
  },
  {
    title: 'Leadership Development',
    description: 'Enhance your leadership skills to inspire and motivate teams.',
  },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    title: 'Software Engineer',
    quote: "Best Day Coaching transformed my approach to work. I'm more focused, less stressed, and my career is on an upward trajectory.",
    avatar: 'AJ',
  },
  {
    name: 'Samantha Bee',
    title: 'Marketing Manager',
    quote: 'I was feeling stuck and overwhelmed. The guidance I received helped me rediscover my passion and find a perfect work-life balance.',
    avatar: 'SB',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-4">
            <span className="text-primary">Unlock</span> Your <span className="text-secondary-foreground">Potential</span>, Live Your <span className="text-primary">Best Day</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We provide personalized coaching to help you overcome challenges, achieve your goals, and create a life you love.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Why Choose Us?</h2>
              <p className="text-muted-foreground mb-6">
                At Best Day Coaching, we believe in a holistic approach. We don't just focus on your career; we focus on you. Our goal is to empower you with the tools and mindset to thrive in all areas of your life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Personalized AI-driven intake to match you with the right services.</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Proven strategies for sustainable growth and well-being.</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-semibold">A supportive and confidential coaching environment.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
               <Image src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/live-homepage-why-choose-us.jpg" layout="fill" objectFit="cover" alt="Coaching session" data-ai-hint="coaching session" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold font-headline mb-2">Our Services</h2>
          <p className="text-muted-foreground mb-12">Tailored coaching programs to meet your unique needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-left hover:border-primary transition-colors">
                <CardHeader>
                  <Zap className="h-8 w-8 text-accent mb-4" />
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-8 text-lg text-primary font-bold">
            <Link href="/services">Explore All Services &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center mt-6">
                    <Avatar>
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-8 text-lg text-primary font-bold">
            <Link href="/testimonials">Read More Testimonials &rarr;</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
