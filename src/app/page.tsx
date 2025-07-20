'use client';

import { useState, useTransition } from 'react';
import { useToast } from '@/hooks/use-toast';
import { generateMotivationalPhrase } from '@/ai/flows/generate-motivational-phrase';
import { Toolbar } from '@/components/life-coach/toolbar';
import { DisplayArea } from '@/components/life-coach/display-area';
import { Sparkles } from 'lucide-react';

export default function LifeCoachPage() {
  const [text, setText] = useState<string>('c-life-coach base text');
  const [fontSize, setFontSize] = useState<number>(36);
  const [backgroundColor, setBackgroundColor] = useState<string>('#F8F8FF');
  const [textColor, setTextColor] = useState<string>('#0A0A0A');
  const [aiPhrase, setAiPhrase] = useState<string>('');
  
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGeneratePhrase = () => {
    startTransition(async () => {
      setAiPhrase('');
      try {
        const result = await generateMotivationalPhrase({ text });
        if (result.phrase) {
          setAiPhrase(result.phrase);
        } else {
          throw new Error("AI did not return a phrase.");
        }
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not generate a motivational phrase. Please try again.",
        });
      }
    });
  };

  const handleInsertPhrase = () => {
    setText(prev => `${prev.trim()} ${aiPhrase}`.trim());
    setAiPhrase('');
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-inspiration.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch(error) {
       console.error(error);
       toast({
          variant: "destructive",
          title: "Download failed",
          description: "Could not download the text file.",
       })
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-background text-foreground">
      <aside className="w-full md:w-[380px] lg:w-[420px] md:border-r border-b md:border-b-0 p-4 md:p-6 flex flex-col gap-6">
        <header className="flex items-center gap-3">
          <div className="bg-accent p-2.5 rounded-lg shadow-md">
            <Sparkles className="h-6 w-6 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold font-headline tracking-tight">
            cs-life-coach-0
          </h1>
        </header>

        <Toolbar
          text={text}
          onTextChange={setText}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          backgroundColor={backgroundColor}
          onBackgroundColorChange={setBackgroundColor}
          textColor={textColor}
          onTextColorChange={setTextColor}
          aiPhrase={aiPhrase}
          isGeneratingAIPhrase={isPending}
          onGeneratePhrase={handleGeneratePhrase}
          onInsertPhrase={handleInsertPhrase}
          onDownload={handleDownload}
        />
      </aside>

      <DisplayArea
        text={text}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    </div>
  );
}
