"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colorSchemes } from "@/lib/color-schemes";
import { Label } from "@/components/ui/label";

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <div className="flex items-center gap-2 justify-center">
        <Label htmlFor="color-scheme-selector" className="text-sm font-medium">Color Scheme:</Label>
        <Select value={colorScheme} onValueChange={setColorScheme}>
        <SelectTrigger id="color-scheme-selector" className="w-[180px] h-8 text-xs">
            <SelectValue placeholder="Select a scheme" />
        </SelectTrigger>
        <SelectContent>
            {colorSchemes.map((scheme) => (
            <SelectItem key={scheme.name} value={scheme.name} className="text-xs">
                {scheme.label}
            </SelectItem>
            ))}
        </SelectContent>
        </Select>
    </div>
  );
}
