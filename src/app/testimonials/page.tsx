import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Alex Johnson',
    title: 'Software Engineer',
    quote: "Best Day Coaching transformed my approach to work. I'm more focused, less stressed, and my career is on an upward trajectory. The personalized intake was surprisingly accurate and set me on the right path from day one.",
    avatar: 'AJ',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'male professional'
  },
  {
    name: 'Samantha Bee',
    title: 'Marketing Manager',
    quote: 'I was feeling stuck and overwhelmed. The guidance I received helped me rediscover my passion and find a perfect work-life balance. It truly feels like I am living my best day, every day now.',
    avatar: 'SB',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'female professional'
  },
  {
    name: 'Michael Chen',
    title: 'Entrepreneur',
    quote: "As a founder, it's easy to lose sight of the bigger picture. The leadership coaching provided me with the strategic tools to not only grow my business but also to lead my team with more confidence and empathy.",
    avatar: 'MC',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'male entrepreneur'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Graphic Designer',
    quote: 'I struggled with imposter syndrome for years. The mindset coaching was a game-changer. I learned to value my work and communicate my worth, which led to better projects and a significant pay increase.',
    avatar: 'ER',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'female artist'
  },
   {
    name: 'David Lee',
    title: 'Product Manager',
    quote: 'The career progression program was exactly what I needed. I clarified my long-term goals and created an actionable plan. Six months later, I landed my dream job at a company I admire.',
    avatar: 'DL',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'professional man'
  },
  {
    name: 'Jessica Taylor',
    title: 'Human Resources',
    quote: 'I recommend Best Day Coaching to all our senior staff. The impact on team morale and leadership effectiveness has been remarkable. A truly invaluable partner for our organization.',
    avatar: 'JT',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'professional woman'
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
          Success Stories from Our Clients
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Hear from individuals who have transformed their lives with our support.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col justify-between bg-secondary/70">
            <CardContent className="p-6">
              <blockquote className="text-lg text-foreground italic">
                "{testimonial.quote}"
              </blockquote>
            </CardContent>
            <div className="flex items-center p-6 bg-secondary mt-auto">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold font-headline text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
