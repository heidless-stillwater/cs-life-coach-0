import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/50">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-headline text-lg">About Us</h3>
            <p className="text-muted-foreground text-sm">
              Best Day Coaching is dedicated to helping you unlock your full potential and live a life that you love. We provide personalized coaching to help you achieve your goals.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold font-headline text-lg">Contact Info</h3>
            <a href="mailto:chill@test.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Mail className="h-4 w-4" />
              <span>chill@test.com</span>
            </a>
            <a href="tel:0123345567" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              <span>0123 345 567</span>
            </a>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Proxima Centauri, London N4 2TG</span>
            </p>
             <a href="https://chilled-coaching.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>chilled-coaching.com</span>
             </a>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold font-headline text-lg mb-2">Quick Links</h3>
            <Link href="/about" className="text-muted-foreground hover:text-primary text-sm">About</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary text-sm">Services</Link>
            <Link href="/testimonials" className="text-muted-foreground hover:text-primary text-sm">Testimonials</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact</Link>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-headline text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-sm text-muted-foreground justify-start">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Best Day Coaching. All rights reserved.
          </div>
          <div className="flex gap-4 justify-end">
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
