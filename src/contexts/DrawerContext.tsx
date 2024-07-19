'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type DrawerContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext<DrawerContextType | null>(null);

export default function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
}
