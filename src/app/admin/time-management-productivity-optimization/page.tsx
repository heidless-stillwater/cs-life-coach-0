import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { aiFunctions } from '@/lib/ai-functions';

export default function Page() {
    const aiFunction = aiFunctions.find(fn => fn.href === '/admin/time-management-productivity-optimization');

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
            
            <Card className="w-full shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Function Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center p-8 bg-secondary rounded-lg">
                        <h2 className="text-2xl font-bold text-muted-foreground">Coming Soon</h2>
                        <p className="text-muted-foreground mt-2">This AI function is currently under development.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
