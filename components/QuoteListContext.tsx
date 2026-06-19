"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface QuoteItem {
  id: string;
  productName: string;
  size: string;
  quantity: number;
}

interface QuoteListContextType {
  items: QuoteItem[];
  addItem: (item: Omit<QuoteItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateSize: (id: string, size: string) => void;
  clearItems: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const QuoteListContext = createContext<QuoteListContextType | undefined>(undefined);

export function QuoteListProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("spenta-quote-list");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse quote list from local storage", e);
      }
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("spenta-quote-list", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (item: Omit<QuoteItem, "id">) => {
    setItems((prev) => {
      // Check if item with same product and size exists
      const existing = prev.find((i) => i.productName === item.productName && i.size === item.size);
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        );
      }
      return [...prev, { ...item, id: Math.random().toString(36).substr(2, 9) }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const updateSize = (id: string, size: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, size } : item)));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <QuoteListContext.Provider
      value={{
        items: isMounted ? items : [], // prevent hydration mismatch
        addItem,
        removeItem,
        updateQuantity,
        updateSize,
        clearItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </QuoteListContext.Provider>
  );
}

export function useQuoteList() {
  const context = useContext(QuoteListContext);
  if (context === undefined) {
    throw new Error("useQuoteList must be used within a QuoteListProvider");
  }
  return context;
}
