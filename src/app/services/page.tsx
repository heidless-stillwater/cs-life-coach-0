
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Scale, TrendingUp, Rocket, Crown, Zap, ClipboardList, Sparkles, Lightbulb, Shield, Mic, BarChart, Users, HeartHandshake, Bot, BrainCircuit, Wind, Anchor } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const personalServices = [
  {
    title: 'Life Balance Coaching',
    price: '$150/session',
    icon: Scale,
    description: 'Feeling overwhelmed? This program helps you create harmony between your demanding career and personal life, reducing stress and increasing fulfillment.',
    features: ['Work-life integration strategies', 'Stress management techniques', 'Mindfulness and presence training', 'Personal values alignment'],
    href: '/services/life-balance-coaching'
  },
  {
    title: 'Confidence & Mindset Shift',
    price: '$120/session',
    icon: TrendingUp,
    description: 'Break through self-doubt and limiting beliefs. This program is designed to build unshakable confidence and a resilient, growth-oriented mindset.',
    features: ['Imposter syndrome coaching', 'Positive psychology techniques', 'Goal-setting and achievement', 'Building resilience'],
    href: '/services/confidence-mindset-shift'
  },
  {
    title: 'Jumpstart Package',
    price: '$250',
    icon: Zap,
    description: 'A focused, high-impact package of three sessions to kickstart your journey and gain immediate momentum on your most pressing goal.',
    features: ['Goal clarification', 'Action planning', 'Initial steps implementation', 'Accountability check-in'],
    href: '/services/jumpstart-package'
  },
  {
    title: 'Personal Growth Plan',
    price: '$400',
    icon: ClipboardList,
    description: 'A comprehensive 6-session plan to dive deep into your personal development, creating lasting habits and tangible progress.',
    features: ['In-depth values assessment', 'Long-term goal setting', 'Habit formation strategies', 'Monthly progress reviews'],
    href: '/services/personal-growth-plan'
  },
  {
    title: 'Transformation Package',
    price: '$750',
    icon: Sparkles,
    description: 'A three-month immersive experience for profound change. We will work together to completely redesign your approach to life.',
    features: ['12 weekly sessions', 'Unlimited email support', 'Customized exercises', 'Final review & future-proofing'],
    href: '/services/transformation-package'
  },
];

const careerServices = [
    {
    title: 'Career Progression Program',
    price: '$200/session',
    icon: Rocket,
    description: "Whether you're seeking a promotion, changing careers, or starting a new venture, this program provides the clarity and strategy to achieve your professional goals.",
    features: ['Career path mapping', 'Resume and interview skills', 'Networking strategies', 'Leadership skill development'],
    href: '/services/career-progression-program'
  },
  {
    title: 'Executive Leadership Coaching',
    price: '$300/session',
    icon: Crown,
    description: 'For managers and executives looking to enhance their impact. We focus on developing your authentic leadership style to inspire teams and drive results.',
    features: ['Advanced communication skills', 'Team motivation techniques', 'Strategic decision making', 'Conflict resolution'],
    href: '/services/executive-leadership-coaching'
  },
  {
    title: 'Career Clarity Session',
    price: '$175',
    icon: Lightbulb,
    description: "A single, intensive 90-minute session to cut through confusion and define a clear, actionable direction for your career.",
    features: ['Strengths and passion analysis', 'Career options exploration', 'Next-step action plan', 'Resource recommendations'],
    href: '/services/career-clarity-session'
  },
  {
    title: 'Unstoppable Package',
    price: '$900',
    icon: Shield,
    description: 'A premium 3-month coaching program for ambitious professionals ready to overcome any obstacle and secure major career advancements.',
    features: ['10 intensive sessions', 'Interview and negotiation prep', 'Personal brand development', 'Stakeholder management'],
    href: '/services/unstoppable-package'
  },
]

const skillsServices = [
  {
    title: 'Public Speaking Mastery',
    price: '$150/session',
    icon: Mic,
    description: 'Conquer stage fright and deliver presentations with confidence and charisma. From team meetings to keynotes, we will build your skills.',
    features: ['Content structuring', 'Delivery techniques', 'Audience engagement', 'Managing Q&A sessions'],
    href: '/services/public-speaking-mastery'
  },
  {
    title: 'Productivity Power-Up',
    price: '$150/session',
    icon: BarChart,
    description: 'Learn to manage your time, energy, and attention effectively. Stop being busy and start being productive.',
    features: ['Time-blocking strategies', 'Energy management', 'Digital tool optimization', 'Delegation skills'],
    href: '/services/productivity-power-up'
  },
  {
    title: 'Negotiation Skills',
    price: '$180/session',
    icon: Users,
    description: 'Learn the art and science of negotiation to get what you want in your career and life, from salary to project deadlines.',
    features: ['Win-win strategies', 'Preparation and research', 'Handling difficult tactics', 'Building long-term relationships'],
    href: '/services/negotiation-skills'
  },
   {
    title: 'Leadership Development',
    price: '$160/session',
    icon: Crown,
    description: 'Develop your authentic leadership style to inspire teams, drive results and handle conflicts.',
    features: ['Advanced communication skills', 'Team motivation techniques', 'Strategic decision making', 'Conflict resolution'],
    href: '/services/leadership-development'
  },
  {
    title: 'Emotional Intelligence',
    price: '$160/session',
    icon: BrainCircuit,
    description: 'Enhance your self-awareness, empathy, and social skills to improve relationships and leadership effectiveness.',
    features: ['Understanding emotions', 'Active listening', 'Giving and receiving feedback', 'Managing interpersonal dynamics'],
    href: '/services/emotional-intelligence'
  },
  {
    title: 'Conflict Resolution',
    price: '$160/session',
    icon: HeartHandshake,
    description: 'Navigate disagreements constructively. Turn potential conflicts into opportunities for growth and stronger collaboration.',
    features: ['De-escalation techniques', 'Finding common ground', 'Mediating disputes', 'Setting healthy boundaries'],
    href: '/services/conflict-resolution'
  },
]

const spiritualServices = [
  {
    title: 'Mindfulness & Meditation',
    price: '$100/session',
    icon: Wind,
    description: 'Develop a consistent mindfulness practice to reduce stress, increase focus, and cultivate inner peace in a chaotic world.',
    features: ['Guided meditation techniques', 'Breathwork exercises', 'Mindful daily routines', 'Cultivating presence'],
    href: '/services/mindfulness-meditation'
  },
  {
    title: 'Finding Your Purpose',
    price: '$180/session',
    icon: Anchor,
    description: 'A deep dive into your values, passions, and unique gifts to uncover a clear sense of purpose that guides your life and decisions.',
    features: ['Values clarification', 'Life mission statement creation', 'Aligning work with purpose', 'Overcoming existential blocks'],
    href: '/services/finding-your-purpose'
  },
  {
    title: 'Spiritual Awakening Journey',
    price: '$220/session',
    icon: Bot,
    description: 'Guidance and support for those experiencing a spiritual awakening. Navigate this profound transition with clarity and integration.',
    features: ['Understanding spiritual shifts', 'Integrating new awareness', 'Grounding techniques', 'Connecting with intuition'],
    href: '/services/spiritual-awakening-journey'
  },
]

const ServiceCard = ({ service }: { service: { title: string, price: string, icon: React.ElementType, description: string, features: string[], href?: string }}) => (
  <Card key={service.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
    <div className="flex justify-center items-center py-5 bg-secondary/50">
      <service.icon className="h-10 w-10 text-primary" />
    </div>
    <CardHeader>
      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
      <p className="text-2xl font-semibold text-primary">{service.price}</p>
      <CardDescription className="pt-2">{service.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
        {service.href ? (
             <Button asChild className="w-full font-bold">
                <Link href={service.href}>Find Out More</Link>
            </Button>
        ) : (
            <Button asChild className="w-full font-bold">
                <Link href="/contact">Book Now</Link>
            </Button>
        )}
    </CardFooter>
  </Card>
);

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
            Our Coaching Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Invest in yourself with programs designed for transformative results.
          </p>
        </div>

        <Tabs defaultValue="personal" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
            <TabsTrigger value="personal">Personal Path</TabsTrigger>
            <TabsTrigger value="career">Career Path</TabsTrigger>
            <TabsTrigger value="skills">Skills Path</TabsTrigger>
            <TabsTrigger value="spiritual">Spiritual Path</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {personalServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="career">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {careerServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {skillsServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="spiritual">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {spiritualServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
