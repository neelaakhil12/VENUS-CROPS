"use client";

import Layout from "@/components/Layout";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Leaf, Info, Package, Ruler, Calendar, CheckCircle2 } from "lucide-react";

interface SeedVariety {
    name: string;
    type: string;
    packing: string;
    seed_per_acre?: string;
    height?: string;
    duration: string;
    grain_type?: string;
    cuttings?: string;
    spacing?: string;
    yield?: string;
    panicle_length?: string;
    grains_per_panicle?: string;
    disease_reaction?: string;
    sowing_time?: string;
    resistant_to?: string;
    suitability?: string;
    sowing_period?: string;
    benefits?: string[];
    grains_characters?: string;
    image?: string;
}

interface CategoryGroup {
    category: string;
    varieties: SeedVariety[];
}

// productsData will be fetched from API

function ProductCard({ variety, idx, category }: { variety: SeedVariety, idx: number, category: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const hasExtraDetails = !!(
        variety.panicle_length ||
        variety.grains_per_panicle ||
        variety.disease_reaction ||
        variety.sowing_time ||
        variety.resistant_to ||
        variety.suitability ||
        variety.sowing_period ||
        (variety.benefits && variety.benefits.length > 0) ||
        variety.grains_characters
    );

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col"
        >
            <div className="h-64 bg-gradient-to-br from-green-100 to-green-50 relative flex items-center justify-center shrink-0 overflow-hidden">
                {variety.image ? (
                    <img src={variety.image} alt={variety.name} className="h-full w-full object-contain p-2" />
                ) : (
                    <Leaf className="h-24 w-24 text-brand-green opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                )}
            </div>

            <div className="p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-green transition-colors">{variety.name}</h3>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Package className="h-4 w-4 text-brand-green" />
                        <span className="text-sm">Packing: <strong className="text-gray-900">{variety.packing}</strong></span>
                    </div>
                    {variety.seed_per_acre && (
                        <div className="flex items-center gap-3 text-gray-600">
                            <Info className="h-4 w-4 text-brand-green" />
                            <span className="text-sm">Seed/Acre: <strong className="text-gray-900">{variety.seed_per_acre}</strong></span>
                        </div>
                    )}
                    <div className="flex items-center gap-3 text-gray-600">
                        <Ruler className="h-4 w-4 text-brand-green" />
                        <span className="text-sm">Height: <strong className="text-gray-900">{variety.height || "Standard"}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="h-4 w-4 text-brand-green" />
                        <span className="text-sm">Duration: <strong className="text-gray-900">{variety.duration}</strong></span>
                    </div>
                    {variety.grain_type && (
                        <div className="flex items-center gap-3 text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-brand-green" />
                            <span className="text-sm">Grain Type: <strong className="text-gray-900">{variety.grain_type}</strong></span>
                        </div>
                    )}
                    {variety.cuttings && (
                        <div className="flex items-center gap-3 text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-brand-green" />
                            <span className="text-sm">Cuttings: <strong className="text-gray-900">{variety.cuttings}</strong></span>
                        </div>
                    )}

                    {/* Detailed Characteristics */}
                    {isExpanded && hasExtraDetails && (
                        <div className="mt-6 pt-6 border-t border-gray-100 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Key Characters:</h4>
                            {variety.panicle_length && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Panicle length: <strong className="text-gray-900">{variety.panicle_length}</strong></span>
                                </div>
                            )}
                            {variety.grains_per_panicle && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Grains per panicle: <strong className="text-gray-900">{variety.grains_per_panicle}</strong></span>
                                </div>
                            )}
                            {variety.disease_reaction && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Disease Reaction: <strong className="text-gray-900">{variety.disease_reaction}</strong></span>
                                </div>
                            )}
                            {variety.sowing_time && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Sowing time: <strong className="text-gray-900">{variety.sowing_time}</strong></span>
                                </div>
                            )}
                            {variety.resistant_to && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Resistant to: <strong className="text-gray-900">{variety.resistant_to}</strong></span>
                                </div>
                            )}
                            {variety.suitability && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Suitable for: <strong className="text-gray-900">{variety.suitability}</strong></span>
                                </div>
                            )}
                            {variety.sowing_period && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Sowing Period: <strong className="text-gray-900">{variety.sowing_period}</strong></span>
                                </div>
                            )}
                            {variety.spacing && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Spacing: <strong className="text-gray-900">{variety.spacing}</strong></span>
                                </div>
                            )}
                            {variety.grains_characters && (
                                <div className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm">Grain Characters: <strong className="text-gray-900">{variety.grains_characters}</strong></span>
                                </div>
                            )}
                            {variety.benefits && variety.benefits.map((benefit, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span className="text-sm text-gray-900 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-8 space-y-3">
                    {hasExtraDetails && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-brand-green hover:text-brand-green transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {isExpanded ? "View Less" : "View More Details"}
                        </button>
                    )}
                    <button className="w-full py-3 rounded-xl bg-brand-green text-white font-bold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                        Inquire Now
                    </button>
                </div>
            </div>
        </div>
    );
}

import siteData from "@/data/siteData.json";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [data, setData] = useState<any>(null);
    const [activeCategory, setActiveCategory] = useState<string>("");

    useEffect(() => {
        fetch("/api/data")
            .then(res => res.json())
            .then(json => {
                if (json.error || !json.products) {
                    throw new Error(json.error || "Invalid data format");
                }
                setData(json);
                const categoryParam = searchParams.get("category");
                setActiveCategory(categoryParam || json.products[0]?.category || "");
            })
            .catch(err => {
                console.warn("API Fetch failed, falling back to static data:", err);
                setData(siteData);
                const categoryParam = searchParams.get("category");
                setActiveCategory(categoryParam || siteData.products[0]?.category || "");
            });
    }, [searchParams]);

    if (!data || !data.products || !Array.isArray(data.products)) return <div className="pt-40 text-center text-gray-500">Loading Products Library...</div>;

    const productsData = data.products;
    const categories = productsData.map((p: any) => p.category);
    const filteredProducts = productsData.filter((p: any) => p.category === activeCategory);

    return (
        <>
            {/* Banner */}
            <section className="bg-brand-green pt-24 pb-12 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6">Our Premium Seeds</h1>
                    <p data-aos="fade-up" className="text-lg text-green-50 max-w-2xl mx-auto">
                        Discover our wide range of high-quality seed varieties engineered for
                        excellence and maximum productivity.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            {/* Filter Buttons */}
            <section className="py-6 bg-white sticky top-20 z-40 border-b border-gray-100 shadow-sm">
                <div className="container-custom">
                    <div className="flex overflow-x-auto whitespace-nowrap gap-4 pb-2 scrollbar-hide md:flex-wrap md:justify-center md:pb-0">
                        {categories.map((cat: string, i: number) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shrink-0 ${activeCategory === cat
                                    ? "bg-brand-red text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Display */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    {filteredProducts.map((catGroup: any, groupIdx: number) => (
                        <div key={groupIdx} className="mb-12 last:mb-0">
                            <h2 data-aos="fade-right" className="text-3xl font-bold mb-6 text-gray-900 border-l-8 border-brand-green pl-6 flex items-center gap-3">
                                {catGroup.category}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                                {catGroup.varieties.map((variety: any, idx: number) => (
                                    <ProductCard key={idx} variety={variety} idx={idx} category={catGroup.category} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default function Products() {
    return (
        <Layout>
            <Suspense fallback={<div className="pt-40 text-center text-gray-500">Loading Products...</div>}>
                <ProductsContent />
            </Suspense>
        </Layout>
    );
}
