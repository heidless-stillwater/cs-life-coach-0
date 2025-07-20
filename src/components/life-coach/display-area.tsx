'use client';

type DisplayAreaProps = {
  text: string;
  fontSize: number;
  backgroundColor: string;
  textColor: string;
};

export function DisplayArea({ text, fontSize, backgroundColor, textColor }: DisplayAreaProps) {
  return (
    <main 
      className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 transition-colors duration-300" 
      style={{ backgroundColor }}
      aria-label="Text Display Area"
    >
      <div 
        className="w-full h-full flex items-center justify-center max-w-5xl"
        style={{
          color: textColor,
          fontSize: `${fontSize}px`,
        }}
        aria-live="polite"
      >
        <p className="text-center font-headline leading-tight whitespace-pre-wrap break-words">
          {text}
        </p>
      </div>
    </main>
  );
}
