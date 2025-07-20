import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';
import { StandardContactForm } from './standard-contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
          Let's Start the Conversation
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          We're excited to hear from you. Use our personalized tool below or reach out directly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 p-8 rounded-lg border bg-card text-card-foreground shadow-sm h-full">
            <h2 className="text-3xl font-bold font-headline text-center">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:test@test.com" className="text-muted-foreground hover:text-primary transition-colors">
                    test@test.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:11112223333" className="text-muted-foreground hover:text-primary transition-colors">
                    1111-222-3333
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-muted-foreground">Woodberry Down, London N4 2TG</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                <div>
                  <h3 className="text-lg font-semibold">Website</h3>
                  <a href="https://website.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    website.com
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center md:items-start h-full">
            <ContactForm />
        </div>
      </div>
      
      <div className="mt-24">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight">
                Or Send a General Inquiry
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
                Use the form below for any other questions.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.9995836065796!2d-0.08892188422791104!3d51.56839397964525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c1aaaaaaaab%3A0x861310864386918a!2sWoodberry%20Down%2C%20London%20N4%202TG%2C%20UK!5e0!3m2!1sen!2sus!4v1682522195159!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <StandardContactForm />
            </div>
        </div>
      </div>
    </div>
  );
}
