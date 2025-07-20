import { aiFunctions } from '@/lib/ai-functions';
import { AccountabilityBotForm } from './bot-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Heart, BellRing, HandHeart } from 'lucide-react';

export default function Page() {
    const aiFunction = aiFunctions.find(fn => fn.href === '/admin/client-engagement-accountability-bots');

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
                <Tabs defaultValue="accountability" className="w-full max-w-2xl">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="check-in"><HandHeart className="mr-2 h-4 w-4" /> Check-in</TabsTrigger>
                        <TabsTrigger value="encouragement"><Heart className="mr-2 h-4 w-4" /> Encouragement</TabsTrigger>
                        <TabsTrigger value="accountability"><Bot className="mr-2 h-4 w-4" /> Accountability</TabsTrigger>
                        <TabsTrigger value="reminder"><BellRing className="mr-2 h-4 w-4" /> Reminder</TabsTrigger>
                    </TabsList>
                    <TabsContent value="check-in">
                        <AccountabilityBotForm botType="check-in" />
                    </TabsContent>
                    <TabsContent value="encouragement">
                        <AccountabilityBotForm botType="encouragement" />
                    </TabsContent>
                    <TabsContent value="accountability">
                        <AccountabilityBotForm botType="accountability" />
                    </TabsContent>
                    <TabsContent value="reminder">
                        <AccountabilityBotForm botType="reminder" />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
