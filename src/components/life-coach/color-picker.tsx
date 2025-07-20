'use client';

type ColorPickerProps = {
  id: string;
  value: string;
  onChange: (color: string) => void;
};

function getContrastingTextColor(hexColor: string): string {
    if (!hexColor || hexColor.length < 7) return '#000000';
    try {
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return (yiq >= 128) ? '#0A0A0A' : '#FFFFFF';
    } catch (e) {
      return '#000000';
    }
}


export function ColorPicker({ id, value, onChange }: ColorPickerProps) {
  const contrastingColor = getContrastingTextColor(value);
  return (
    <div className="relative h-10 w-full">
      <input
        id={id}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label={`${id} color picker`}
      />
      <div 
        className="h-full w-full rounded-md border flex items-center justify-between px-3 text-sm font-mono transition-colors"
        style={{ backgroundColor: value }}
        aria-hidden="true"
      >
        <span style={{ color: contrastingColor }}>{value.toUpperCase()}</span>
        <div 
            className="h-5 w-5 rounded-full border" 
            style={{ 
                backgroundColor: value,
                borderColor: contrastingColor
            }}
        />
      </div>
    </div>
  );
}
