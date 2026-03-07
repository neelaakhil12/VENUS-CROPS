"use client";

import Layout from "@/components/Layout";
import { Microscope, Beaker, Sprout, ShieldCheck, Zap, Microscope as LabIcon, Binary, FlaskConical, TestTube2, Globe } from "lucide-react";

export default function RD() {
    const focusAreas = [
        {
            title: "Genomic Selection",
            description: "Using advanced genetic mapping to identify and propagate the most resilient and high-yielding seed traits.",
            icon: Binary
        },
        {
            title: "Climate Resilience",
            description: "Developing varieties that thrive in varying weather conditions, from drought-prone areas to flood-heavy regions.",
            icon: Globe
        },
        {
            title: "Pest Resistance",
            description: "Natural breeding techniques to enhance the inherent resistance of crops against major pests and diseases.",
            icon: ShieldCheck
        },
        {
            title: "Nutritional Enhancement",
            description: "Bio-fortification research to improve the essential mineral and vitamin content of staple food crops.",
            icon: Zap
        }
    ];

    const labFeatures = [
        "Advanced Seed Testing Laboratory",
        "Temperature-Controlled Germination Chambers",
        "Purity Testing Facilities",
        "Moisture Analysis Instrumentation",
        "Pathology and Entomology Research Units"
    ];

    return (
        <Layout>
            {/* Banner Section */}
            <section className="bg-brand-red pt-24 pb-12 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6">Research & Development</h1>
                    <p data-aos="fade-up" className="text-lg text-red-100 max-w-2xl mx-auto italic">
                        "Pioneering the future of agriculture through scientific excellence and field-tested innovation."
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            {/* Scientific Approach Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-brand-green pl-4">Our Scientific Approach</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                At Venus Crop Science, R&D is the engine that drives our growth. We believe that sustainable agriculture starts with a deep understanding of crop genetics and environmental interaction. Our dedicated team of scientists works tirelessly to bridge the gap between complex laboratory research and practical field applications.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Every seed variety we release undergoes rigorous multi-location trials and multi-year testing to ensure it meets our high standards for yield stability, grain quality, and stress tolerance.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {labFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                                        <div className="h-2 w-2 rounded-full bg-brand-green"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div data-aos="fade-left" className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                                <img src="/img/rd-lab.png" alt="Venus R&D Lab" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-brand-green p-8 rounded-3xl shadow-xl text-white hidden md:block">
                                <FlaskConical className="h-12 w-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core R&D Focus Areas */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900">Core <span className="text-brand-green">R&D Focus</span> Areas</h2>
                        <div className="w-24 h-1.5 bg-brand-red mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {focusAreas.map((area, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="bg-gray-50 p-4 rounded-2xl inline-block mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                    <area.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{area.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Integration Section */}
            <section className="section-padding bg-gray-900 text-white overflow-hidden relative">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red font-bold text-sm mb-6">
                                <TestTube2 className="h-4 w-4" />
                                Innovation in Action
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Harnessing Data to <br /><span className="text-brand-green">Power Better Yields</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our researchers leverage digital data and predictive modeling to anticipate crop performance across different agro-climatic zones. This precision approach allows us to recommend the right seed for the right region, maximizing productivity for the farmer.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <div className="p-3 bg-brand-green rounded-xl">
                                        <Microscope className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">DNA Fingerprinting</h4>
                                        <p className="text-sm text-gray-500">Ensuring genetic purity of every seed lot.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <div className="p-3 bg-brand-red rounded-xl">
                                        <Beaker className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Biotech Interventions</h4>
                                        <p className="text-sm text-gray-500">Modern tools for sustainable crop improvement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img src="/img/field-research.png" alt="Advanced Agriculture" className="w-full h-auto" />
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/10 rounded-full blur-3xl -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-brand-green rounded-[3rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <Sprout className="h-16 w-16 mx-auto mb-8 opacity-50" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to see our <br />seeds in action?</h2>
                            <p className="text-green-50 max-w-2xl mx-auto mb-12 text-lg">
                                Join thousands of farmers who rely on Venus Crop Science's R&D-backed varieties for consistent success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn-secondary bg-white text-brand-green hover:bg-gray-100 px-10 py-4 font-bold text-lg rounded-full transition-all">
                                    View Products
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 font-bold text-lg rounded-full transition-all">
                                    Contact Research Team
                                </button>
                            </div>
                        </div>
                        {/* Abstract background graphics */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-48 -mb-48"></div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
