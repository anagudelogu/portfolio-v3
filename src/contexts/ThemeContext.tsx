'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    if (darkThemeMediaQuery.matches) {
      setTheme('dark');
    }

    darkThemeMediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });

    return () => {
      darkThemeMediaQuery.removeEventListener('change', () => {});
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
