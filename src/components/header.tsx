
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { aiFunctions } from '@/lib/ai-functions';

const mainLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
];

const clientFocusedFunctions = [
	'Client Engagement & Accountability Bots',
	'Personalized Goal Setting & Action Planning',
	'Personalized Intake Tool'
]
const clientFunctions = aiFunctions.filter((fn) => clientFocusedFunctions.includes(fn.name))

const businessFocusedFunctions = [
  'Dynamic Progress Tracking & Visualization',
	'Intelligent Habit Formation & Breaking',
	'Emotional Intelligence & Resilience Development',
	'Decision-Making Support & Scenario Analysis'
];
const businessFunctions = aiFunctions.filter((fn) => businessFocusedFunctions.includes(fn.name));


export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sun className="h-6 w-6 text-accent" />
          <span className="font-bold text-[25px] font-headline">Best Day Coaching</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {mainLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-primary text-[18px]',
                  isActive ? 'text-primary font-bold' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    'flex items-center gap-1 font-medium transition-colors hover:text-primary text-[18px]',
                    pathname.startsWith('/admin') ? 'text-primary font-bold' : 'text-muted-foreground'
                  )}
                >
                  Admin
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/admin">AI Functions List</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                 <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Client-Focused</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {clientFunctions.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                 <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Business-Focused</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {businessFunctions.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="font-bold">
              <Link href="/contact">Start Here</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
               <SheetHeader className="p-6 border-b">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Sun className="h-6 w-6 text-accent" />
                    <span className="font-bold font-headline">Best Day Coaching</span>
                </Link>
              </SheetHeader>
              <div className="flex flex-col h-full px-6 pb-6">
                <nav className="flex flex-col gap-4 mt-6">
                {mainLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                          'text-lg font-medium',
                          isActive ? 'text-primary font-bold' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="admin-menu" className="border-b-0">
                      <AccordionTrigger className={cn(
                        'text-lg font-medium py-2 hover:no-underline',
                        pathname.startsWith('/admin') ? 'text-primary font-bold' : 'text-muted-foreground'
                        )}>
                        Admin
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <Link
                            href="/admin"
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                'block py-2 text-lg font-medium',
                                pathname === '/admin' ? 'text-primary font-bold' : 'text-muted-foreground'
                            )}
                            >
                            AI Functions List
                        </Link>
                        <div className="border-b my-2"></div>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="client-focused-menu" className="border-b-0">
                             <AccordionTrigger className='text-lg font-medium py-2 hover:no-underline'>
                                Client-Focused
                              </AccordionTrigger>
                              <AccordionContent className="pl-4">
                                {clientFunctions.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                      'block py-2 text-lg font-medium',
                                      pathname === item.href ? 'text-primary font-bold' : 'text-muted-foreground'
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="business-focused-menu" className="border-b-0">
                             <AccordionTrigger className='text-lg font-medium py-2 hover:no-underline'>
                                Business-Focused
                              </AccordionTrigger>
                              <AccordionContent className="pl-4">
                                {businessFunctions.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                      'block py-2 text-lg font-medium',
                                      pathname === item.href ? 'text-primary font-bold' : 'text-muted-foreground'
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex justify-center pt-8">
                    <ThemeToggle />
                  </div>
                  <Button asChild size="lg" className="font-bold" onClick={() => setIsMenuOpen(false)}>
                      <Link href="/contact">Start Here</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
