"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useQuoteList } from "@/components/QuoteListContext";

interface Props {
  productName: string;
  defaultSize?: string;
}

export default function AddToCartButton({ productName, defaultSize = "" }: Props) {
  const { addItem, setIsCartOpen } = useQuoteList();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      productName,
      size: defaultSize,
      quantity: 1,
    });
    setAdded(true);
    setIsCartOpen(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border-2 ${
        added
          ? "bg-green-50 border-green-600 text-green-700"
          : "bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
      }`}
    >
      {added ? (
        <>
          <Check className="w-5 h-5" />
          <span>Added to List</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Quote List</span>
        </>
      )}
    </button>
  );
}
