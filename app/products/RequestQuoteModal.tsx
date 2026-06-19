"use client";

import { Loader2, CheckCircle2, AlertCircle, Twitter } from 'lucide-react';
import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendQuoteRequest } from "./quote-action";

interface Props {
    productName: string;
    sizes: { size: string }[];
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full mt-3 text-center py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                pending
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-accent text-white hover:bg-blue-700"
            }`}
        >
            {pending ? (
                <>
                    <Loader2 className="animate-spin h-5 w-5" strokeWidth={4} />
                    <span>Sending...</span>
                </>
            ) : (
                <span>Submit Quote Request</span>
            )}
        </button>
    );
}

export default function RequestQuoteModal({
    productName,
    sizes,
}: Props) {
    const [open, setOpen] = useState(false);
    const initialState = { success: false, error: null };
    const [state, formAction] = useActionState(sendQuoteRequest, initialState);

    // Close modal on success after 3 seconds
    if (state.success && open) {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    return (
        <>
            {/* Trigger */}
            <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 bg-white text-graphite rounded-lg font-medium hover:bg-gray-100 transition"
            >
                Request Quote
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative">

                        {/* Close */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-semibold text-graphite">
                            Request a Quote
                        </h3>
                        <p className="mt-2 text-gray-600">
                            {productName}
                        </p>

                        <form action={formAction} className="mt-6 space-y-4">
                            {/* Hidden product name */}
                            <input type="hidden" name="productName" value={productName} />

                            {/* Size */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Size <span className="text-gray-400">(Optional)</span>
                                </label>
                                <select
                                    name="size"
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="">Select size</option>
                                    {sizes.map((s) => (
                                        <option key={s.size} value={s.size}>
                                            {s.size}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Quantity <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="e.g. 50"
                                    min="1"
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Additional Message <span className="text-gray-400">(Optional)</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Any specific requirements or questions..."
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Success Message */}
                            {state.success && (
                                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" strokeWidth={2} />
                                        <p className="text-green-700 font-semibold">
                                            Quote request sent successfully! We&apos;ll get back to you shortly.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {state.error && (
                                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" strokeWidth={2} />
                                        <p className="text-red-600 font-semibold">
                                            {state.error}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <SubmitButton />

                            {/* WhatsApp Alternative */}
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or</span>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/919426753291?text=${encodeURIComponent(
                                    `Hello,

I would like a quotation for:

Product: ${productName}

Requested Size: ${sizes.length > 0 ? sizes[0].size : "Please specify"}
Quantity: Please specify

Company: Please specify
Location: Please specify

Thank you.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-medium"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Twitter className="w-5 h-5" />
                                    Enquire via WhatsApp
                                </span>
                            </a>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}