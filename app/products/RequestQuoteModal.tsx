"use client";

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
                    : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
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
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition"
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

                        <h3 className="text-2xl font-semibold text-gray-900">
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors"
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors"
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors"
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors"
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors"
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
                                    className="mt-1 w-full border-2 border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-blue-600 transition-colors"
                                />
                            </div>

                            {/* Success Message */}
                            {state.success && (
                                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-green-700 font-semibold">
                                            Quote request sent successfully! We'll get back to you shortly.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {state.error && (
                                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
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
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982a.396.396 0 01-.38-.117l-.893-.87a.396.396 0 01-.117-.38l.982-3.742-.214-.361a9.87 9.87 0 01-1.378-5.031c0-5.45 4.436-9.884 9.884-9.884 2.64 0 5.122 1.03 6.98 2.898a9.825 9.825 0 012.885 6.98c0 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.89a11.846 11.846 0 00-3.48-8.413z"/>
                                    </svg>
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