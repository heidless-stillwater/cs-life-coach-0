'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Download, Loader2, Sparkles, Paintbrush, Text, Palette } from 'lucide-react';
import { ColorPicker } from './color-picker';

type ToolbarProps = {
  text: string;
  onTextChange: (text: string) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
  textColor: string;
  onTextColorChange: (color: string) => void;
  aiPhrase: string;
  isGeneratingAIPhrase: boolean;
  onGeneratePhrase: () => void;
  onInsertPhrase: () => void;
  onDownload: () => void;
};

export function Toolbar({
  text,
  onTextChange,
  fontSize,
  onFontSizeChange,
  backgroundColor,
  onBackgroundColorChange,
  textColor,
  onTextColorChange,
  aiPhrase,
  isGeneratingAIPhrase,
  onGeneratePhrase,
  onInsertPhrase,
  onDownload,
}: ToolbarProps) {
  return (
    <Card className="flex-1 flex flex-col shadow-lg border-border/60 overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline tracking-tight">Customize Your Space</CardTitle>
        <CardDescription>Tailor the look, feel, and content.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 overflow-y-auto pr-4 pl-6 py-2">
        <div className="space-y-2">
          <Label htmlFor="text-input" className="flex items-center gap-2 font-semibold">
            <Text className="h-4 w-4" />
            Your Text
          </Label>
          <Textarea
            id="text-input"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="What's on your mind?"
            rows={5}
            className="resize-none text-base"
          />
        </div>

        <div className="space-y-3">
          <Label className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-4 w-4 text-accent" />
            AI Inspiration
          </Label>
          <Button onClick={onGeneratePhrase} disabled={isGeneratingAIPhrase} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isGeneratingAIPhrase ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Generate a motivational phrase
          </Button>
          {aiPhrase && (
            <div className="p-3 bg-primary rounded-md border border-primary/20 text-sm flex items-center justify-between gap-2 animate-in fade-in">
              <p className="flex-1 italic text-primary-foreground">"{aiPhrase}"</p>
              <Button size="sm" variant="secondary" onClick={onInsertPhrase}>Insert</Button>
            </div>
          )}
        </div>
        
        <div className="space-y-4 pt-2">
          <Label htmlFor="font-size-slider" className="flex items-center gap-2 font-semibold">
            <Text className="h-4 w-4" />
            Font Size: {fontSize}px
          </Label>
          <Slider
            id="font-size-slider"
            min={12}
            max={80}
            step={1}
            value={[fontSize]}
            onValueChange={(value) => onFontSizeChange(value[0])}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="bg-color-picker" className="flex items-center gap-2 font-semibold">
              <Paintbrush className="h-4 w-4" />
              Background
            </Label>
            <ColorPicker id="bg-color-picker" value={backgroundColor} onChange={onBackgroundColorChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="text-color-picker" className="flex items-center gap-2 font-semibold">
              <Palette className="h-4 w-4" />
              Text Color
            </Label>
            <ColorPicker id="text-color-picker" value={textColor} onChange={onTextColorChange} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Button variant="outline" onClick={onDownload} className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download as .txt
        </Button>
      </CardFooter>
    </Card>
  );
}
