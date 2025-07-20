import Link from 'next/link';
import { Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/50">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 pr-8">
            <Link href="/" className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-accent" />
              <span className="font-bold text-xl font-headline">Best Day Coaching</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Helping you achieve your best day, every day.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold font-headline mb-2">Navigation</h3>
            <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link>
            <Link href="/testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold font-headline mb-2">Legal</h3>
            <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-bold font-headline mb-2">Contact Us</h3>
            <a href="mailto:test@test.com" className="text-muted-foreground hover:text-primary">test@test.com</a>
            <a href="tel:11112223333" className="text-muted-foreground hover:text-primary">1111-222-3333</a>
            <p className="text-muted-foreground">Woodberry Down, London N4 2TG</p>
            <a href="https://website.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">website.com</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Best Day Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
