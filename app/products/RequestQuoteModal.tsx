"use client";

import { useState } from "react";

interface Props {
    productName: string;
    sizes: { size: string }[];
}

export default function RequestQuoteModal({
    productName,
    sizes,
}: Props) {
    const [open, setOpen] = useState(false);

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

                        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Size */}
                            <div>
                                <label className="text-sm text-gray-600">Size</label>
                                <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2">
                                    {sizes.map((s) => (
                                        <option key={s.size}>{s.size}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="text-sm text-gray-600">Quantity</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 50"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Name */}
                            <div>
                                <label className="text-sm text-gray-600">Your Name</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label className="text-sm text-gray-600">Company</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm text-gray-600">Message</label>
                                <textarea
                                    rows={3}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Submit */}

                            <a
                                href={`https://wa.me/919426753291?text=${encodeURIComponent(
                                    `Hello,

I would like a quotation for:

Product: ${productName}

Requested Size:
Quantity:

Company:
Location:

Thank you.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full mt-3 text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                Enquire via WhatsApp
                            </a>


                        </form>
                    </div>
                </div>
            )}
        </>
    );
}