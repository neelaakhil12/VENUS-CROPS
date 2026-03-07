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

const productsData: CategoryGroup[] = [
    {
        category: "Paddy Varieties",
        varieties: [
            {
                name: "Sindhuja (Bold Variety)",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "15-20kg",
                height: "105-110cm",
                duration: "120-125 days",
                grain_type: "Medium Bold",
                panicle_length: "25-26cm",
                grains_per_panicle: "380-400",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                image: "/img/sindhuja.jpeg"
            },
            {
                name: "VCS-AMAN (Fine Variety)",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "10kg",
                height: "115-120cm",
                duration: "130-135 days",
                grain_type: "Medium Fine",
                panicle_length: "25-26cm",
                grains_per_panicle: "350-400",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/vcs-aman.png"
            },
            {
                name: "Amulya (Fine Variety)",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "10kg",
                height: "115-120cm",
                duration: "130 days",
                grain_type: "Medium Fine",
                panicle_length: "25-26cm",
                grains_per_panicle: "380-400",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/amulya.jpeg"
            },
            {
                name: "SRI-RAM (Fine Variety)",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "10kg",
                height: "100-120cm",
                duration: "140 days",
                grain_type: "Medium Fine",
                panicle_length: "24-26cm",
                grains_per_panicle: "300-320",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/sriram.png"
            },
            {
                name: "VCS RNR-15048",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "10kg",
                height: "100-120cm",
                duration: "120-130 days",
                grain_type: "Medium Fine",
                panicle_length: "26-28cm",
                grains_per_panicle: "370-390",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/vcs-rnr-15048-upd.png"
            },
            {
                name: "VCS-Sampoorna",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "10kg",
                height: "110-115cm",
                duration: "130-140 days",
                grain_type: "Medium Fine",
                panicle_length: "26-28cm",
                grains_per_panicle: "350-370",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/vcs-sampoorna-upd.png"
            },
            {
                name: "Sharma-55",
                type: "Improved Paddy Seeds",
                packing: "10kg",
                seed_per_acre: "15-20kg",
                height: "110-115cm",
                duration: "120-125 days",
                grain_type: "Medium Bold",
                panicle_length: "26-27cm",
                grains_per_panicle: "380-400",
                disease_reaction: "Tolerant to all major Diseases",
                sowing_time: "Kharif (May-June), Rabi (Nov-Dec)",
                resistant_to: "BLB (Bacterial Leaf Blight)",
                suitability: "Quality consumption",
                image: "/img/sharma-55-upd.png"
            }
        ]
    },
    {
        category: "Fodder Jowar Varieties",
        varieties: [
            {
                name: "Akhanda",
                type: "Hybrid Seed",
                packing: "1kg",
                seed_per_acre: "4kg",
                height: "10-12 feet",
                duration: "5 years",
                cuttings: "60 cuttings",
                sowing_period: "Kharif and Rabi",
                spacing: "30*15cm",
                benefits: [
                    "Each cut : After 25 days",
                    "High yielding with best leafy green variety",
                    "The variety with good tillers, thin stem with narrow leaves",
                    "Healthy animals and profitable dairy farm",
                    "The Variety is very succulent dark green and good palatable fodder"
                ],
                image: "/img/akhanda.png"
            },
            {
                name: "Jupiter",
                type: "Hybrid Seeds",
                packing: "1kg",
                seed_per_acre: "4kg",
                height: "8-10 feet",
                duration: "1 year",
                cuttings: "12 cuttings",
                sowing_period: "All seasons",
                spacing: "30*15cm",
                benefits: [
                    "Each cut : After 25 days",
                    "High yielding with best leafy green variety",
                    "The variety with good tillers, thin stem with narrow leaves",
                    "Healthy animals and profitable dairy farm",
                    "The Variety is very succulent dark green and good palatable fodder"
                ],
                image: "/img/jupiter.png"
            },
            {
                name: "Jerssey",
                type: "Hybrid Seeds",
                packing: "5kg",
                seed_per_acre: "15-20kg",
                height: "7-8 feet",
                duration: "Single-cut",
                cuttings: "5 cuttings",
                sowing_period: "All seasons",
                benefits: [
                    "Each cut : After 45-50 days",
                    "High yielding with best leafy green variety",
                    "The variety with good tillers, thin stem with narrow leaves",
                    "Healthy animals and profitable dairy farm",
                    "The Variety is very succulent dark green and good palatable fodder"
                ],
                image: "/img/jerssey.png"
            },
            {
                name: "VCS SX-71",
                type: "Hybrid Seeds",
                packing: "3kg",
                seed_per_acre: "25-30kg",
                height: "10-12 feet",
                duration: "Multi-cut",
                cuttings: "First cut (45-40 days), Next cuts (45-50 days)",
                sowing_period: "Spring (March-April) and Monsoon (May-August)",
                benefits: [
                    "Each cut : After 25 days",
                    "High yielding with best leafy green variety",
                    "The variety with good tillers, thin stem with narrow leaves",
                    "Healthy animals and profitable dairy farm",
                    "The Variety is very succulent dark green and good palatable fodder"
                ],
                image: "/img/vcs-sx-71.png"
            }
        ]
    },
    {
        category: "Maize Varieties",
        varieties: [
            {
                name: "VCS-8875",
                type: "Hybrid Type",
                packing: "4 kg",
                seed_per_acre: "8 kg",
                height: "Medium",
                duration: "120 days",
                sowing_time: "Both kharif and Rabi variety",
                benefits: [
                    "Yield & Performance: Known for high yield potential, with report It is noted for producing long, uniform, and attractive cobs with 16–18 kernel rows.",
                    "Adaptability: Suitable for various growing conditions, including areas with low rainfall, and is often cultivated during the Rabi season in India.",
                    "Plant Structure: The plants are tall and sturdy, featuring a strong root system that provides excellent resistance to lodging (falling over).",
                    "Usage: Primary use is for grain production, though it can be utilized for silage."
                ],
                image: "/img/vcs-8875.png"
            },
            {
                name: "VCS-8842",
                type: "Hybrid Type",
                packing: "4 kg",
                seed_per_acre: "8 kg",
                height: "180 to 185cm",
                duration: "110-115days",
                sowing_time: "Both Kharif and Rabi",
                benefits: [
                    "Yield & Performance: Known for high yield potential, with report It is noted for producing long, uniform, and attractive cobs with 16–18 kernel rows.",
                    "Adaptability: Suitable for various growing conditions, including areas with low rainfall, and is often cultivated during the Rabi season in India.",
                    "Plant Structure: The plants are tall and sturdy, featuring a strong root system that provides excellent resistance to lodging (falling over).",
                    "Usage: Primary use is for grain production, though it can be utilized for silage."
                ],
                image: "/img/vcs-8842.png"
            },
            {
                name: "VCS-8866",
                type: "Hybrid Type",
                packing: "4 kg",
                seed_per_acre: "8 kg",
                height: "Medium",
                duration: "110-115days",
                sowing_time: "Rabi Speciality variety",
                benefits: [
                    "Yield & Performance: Known for high yield potential, with report It is noted for producing long, uniform, and attractive cobs with 16–18 kernel rows.",
                    "Adaptability: Suitable for various growing conditions, including areas with low rainfall, and is often cultivated during the Rabi season in India.",
                    "Plant Structure: The plants are tall and sturdy, featuring a strong root system that provides excellent resistance to lodging (falling over).",
                    "Usage: Primary use is for grain production, though it can be utilized for silage."
                ],
                image: "/img/vcs-8866.png"
            }
        ]
    },
    {
        category: "Vegetable Varieties",
        varieties: [
            {
                name: "Morocco Coriander",
                type: "Hybrid Seeds",
                packing: "2kg",
                seed_per_acre: "20kg",
                duration: "30-35 days",
                sowing_time: "All seasons",
                benefits: ["High yielding with best leafy green"],
                image: "/img/morocco-coriander.png"
            }
        ]
    }
];

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

function ProductsContent() {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    const categories = ["All", ...productsData.map(p => p.category)];

    const filteredProducts = activeCategory === "All"
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

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
                        {categories.map((cat, i) => (
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
                    {filteredProducts.map((catGroup, groupIdx) => (
                        <div key={groupIdx} className="mb-12 last:mb-0">
                            <h2 data-aos="fade-right" className="text-3xl font-bold mb-6 text-gray-900 border-l-8 border-brand-green pl-6 flex items-center gap-3">
                                {catGroup.category}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                                {catGroup.varieties.map((variety, idx) => (
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
