import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PrefillInfo {
  industry?: string;
  service?: string;
  turnover?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  prefill: PrefillInfo;
  openQuoteModal: (prefillData?: PrefillInfo) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<PrefillInfo>({});

  const openQuoteModal = (prefillData?: PrefillInfo) => {
    if (prefillData) {
      setPrefill(prefillData);
    } else {
      setPrefill({});
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, prefill, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
