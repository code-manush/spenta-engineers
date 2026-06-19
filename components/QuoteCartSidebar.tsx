"use client";

import { X, Trash2, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useQuoteList } from "@/components/QuoteListContext";
import { sendQuoteList } from "@/app/products/quote-action";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full mt-3 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
        pending ? "bg-gray-400 cursor-not-allowed text-white" : "bg-accent text-white hover:bg-blue-700"
      }`}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5" strokeWidth={4} />
          <span>Sending...</span>
        </>
      ) : (
        <span>Submit Request</span>
      )}
    </button>
  );
}

export default function QuoteCartSidebar() {
  const { items, removeItem, updateQuantity, updateSize, isCartOpen, setIsCartOpen, clearItems } = useQuoteList();

  const initialState = { success: false, error: null };
  const [state, formAction] = useActionState(sendQuoteList, initialState);

  if (state.success && items.length > 0) {
    clearItems();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <h2 className="text-xl font-bold text-graphite">Your Quote List</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 && !state.success ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <p>Your quote list is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-accent font-medium hover:underline"
              >
                Continue browsing
              </button>
            </div>
          ) : state.success ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-graphite mb-2">Request Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your inquiry. Our team will review your requested items and get back to you shortly.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2 bg-gray-100 text-graphite font-medium rounded-lg hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Items List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-graphite pr-4">{item.productName}</h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-500 mb-1">Size</label>
                        <input
                          type="text"
                          value={item.size}
                          onChange={(e) => updateSize(item.id, e.target.value)}
                          placeholder="e.g. NQ, 3m"
                          className="w-full text-sm border-gray-300 rounded focus:border-accent focus:ring-accent"
                        />
                      </div>
                      <div className="w-24">
                        <label className="block text-xs font-medium text-gray-500 mb-1">Qty</label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-full text-sm border-gray-300 rounded focus:border-accent focus:ring-accent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-200 my-6" />

              {/* Form */}
              <form action={formAction} className="space-y-4">
                <input type="hidden" name="items" value={JSON.stringify(items)} />

                <h3 className="font-semibold text-graphite">Your Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                {state.error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600">{state.error}</p>
                  </div>
                )}

                <SubmitButton />
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
