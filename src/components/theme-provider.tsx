"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { colorSchemes, type ColorScheme } from "@/lib/color-schemes";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  defaultColorScheme?: string;
  colorSchemeStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorScheme: string;
  setColorScheme: (scheme: string) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
  defaultColorScheme = "COLOR_SCHEME_1",
  colorSchemeStorageKey = "ui-color-scheme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme | null) || defaultTheme;
    }
    return defaultTheme;
  });

  const [colorScheme, setColorScheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(colorSchemeStorageKey) || defaultColorScheme;
    }
    return defaultColorScheme;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;

      // Apply light/dark mode
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem(storageKey, theme);

      // Apply color scheme
      const scheme = colorSchemes.find(s => s.name === colorScheme) || colorSchemes[0];
      const themeColors = scheme.colors[theme];
      
      for (const [key, value] of Object.entries(themeColors)) {
        root.style.setProperty(`--${key}`, value);
      }
      localStorage.setItem(colorSchemeStorageKey, colorScheme);
    }
  }, [theme, colorScheme, mounted, storageKey, colorSchemeStorageKey]);

  const value = {
    theme,
    setTheme,
    colorScheme,
    setColorScheme,
  };
  
  const body = <ThemeProviderContext.Provider value={value}>
    {children}
  </ThemeProviderContext.Provider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
