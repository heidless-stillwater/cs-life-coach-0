import { ContactForm } from '@/app/contact/contact-form';
import { aiFunctions } from '@/lib/ai-functions';

export default function Page() {
    const aiFunction = aiFunctions.find(fn => fn.href === '/admin/personalized-intake-tool');

    if (!aiFunction) {
        return <div>Function not found</div>;
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
                    {aiFunction.name}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                    {aiFunction.description}
                </p>
            </div>
            
            <div className="flex justify-center">
                <ContactForm />
            </div>
        </div>
    );
}
