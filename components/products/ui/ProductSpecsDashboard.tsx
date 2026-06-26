"use client";

interface Metric {
    label: string;
    value: string;
}

interface Spec {
    label: string;
    value: string;
}

interface ProductSpecsDashboardProps {
    title?: string;
    metrics?: Metric[];
    specs: Spec[];
}

export default function ProductSpecsDashboard({ title = "Technical Specifications", metrics, specs }: ProductSpecsDashboardProps) {
    return (
        <section className="py-24 md:py-40 relative bg-white">
            
            {/* Background Container (overflow-hidden to prevent horizontal scroll without breaking sticky) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Highly detailed Blueprint Background */}
                <div className="absolute inset-0 opacity-[0.15]" style={{
                    backgroundImage: `
                        linear-gradient(rgba(10, 135, 138, 1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(10, 135, 138, 1) 1px, transparent 1px),
                        linear-gradient(rgba(10, 135, 138, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(10, 135, 138, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: `
                        100px 100px, 
                        100px 100px, 
                        20px 20px, 
                        20px 20px
                    `,
                    backgroundPosition: "center center"
                }} />
                
                {/* Massive Abstract Geometric Shapes in the Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-accent/20 rounded-full translate-x-1/4 -translate-y-1/4" />
                <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] border border-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-accent/20 rounded-full -translate-x-1/4 translate-y-1/4" />
            </div>

            {/* Mix-Blend Container: This makes the text X-Ray through the background grid */}
            <div className="max-w-[100rem] mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 items-start mix-blend-multiply">
                
                {/* Left Side: Editorial Title (Sticky) */}
                <div className="lg:col-span-3 flex flex-col justify-start relative lg:sticky lg:top-40 z-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-12 bg-gray-900" />
                        <span className="uppercase tracking-[0.3em] text-gray-900 font-bold text-xs">
                            Data Sheet
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-gray-900 tracking-tighter leading-[0.85] uppercase">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="block mb-2">{word}</span>
                        ))}
                    </h2>
                </div>

                {/* Right Side: Brutalist Typographic Flow */}
                <div className="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-24 lg:gap-y-32 pb-16">
                        {specs.map((spec, idx) => (
                            <div key={idx} className="flex flex-col min-w-[180px] group relative">
                                <span className="text-gray-900 font-bold tracking-[0.2em] uppercase text-[11px] block border-b-2 border-gray-900 pb-3 mb-3 w-full transition-colors duration-500">
                                    {spec.label}
                                </span>
                                
                                {/* 
                                  Mix-Blend X-Ray Effect:
                                  Because the container has mix-blend-multiply, this bold accent text will 
                                  allow the grid and abstract circles underneath to visually cut through it, 
                                  looking like an x-ray or blueprint overlay.
                                */}
                                <div className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter leading-[0.9] cursor-default text-accent group-hover:text-gray-900 transition-colors duration-500 relative z-10 break-words">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
