"use client";

import Layout from "@/components/Layout";
import { Target, Eye, Heart, ShieldCheck, Microscope, Briefcase, Mail, Phone, Leaf, Zap, MapPin } from "lucide-react";
import IndiaMap from "@/components/IndiaMap";

export default function About() {
    return (
        <Layout>
            {/* Banner */}
            <section className="bg-brand-red pt-32 pb-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6">About Our Company</h1>
                    <p data-aos="fade-up" className="text-lg text-red-100 max-w-2xl mx-auto">
                        Committed to excellence in agriculture through high-quality seeds
                        and innovative farming solutions.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            {/* Overview Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-brand-green pl-4">Company Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Venus Crop Science is a dedicated agricultural seeds company committed to providing high-quality seeds to farmers for better productivity and profitability. We believe that the foundation of great farming starts with the quality of the seed.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our facility is strategically located to serve the farming community across Telangana and beyond, ensuring that every farmer has access to the best agricultural technology and seed varieties.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <p className="italic text-gray-700 font-medium">"Our address reflects our roots in the heart of the farming landscape, dedicated to serving those who feed the nation."</p>
                                <p className="mt-4 text-sm text-brand-green font-bold">Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Telangana – 503224</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
                            <img src="/img/seed-lab.png" alt="Seed Laboratory" className="rounded-2xl shadow-lg mt-8" />
                            <img src="/img/field-research.png" alt="Field Research" className="rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Message Section */}
            <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div data-aos="fade-right" className="lg:w-1/3">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green to-brand-red opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src="/img/founder.png"
                                        alt="Praneeth Lakkaram - Founder of Venus Crop Science"
                                        className="w-full aspect-[4/5] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                        <h3 className="text-xl font-bold">Praneeth Lakkaram</h3>
                                        <p className="text-sm text-gray-300">Founder & Visionary</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="lg:w-2/3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6">
                                <Leaf className="h-4 w-4" />
                                Founder's Message
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
                                Empowering Farmers Through <span className="text-brand-green">Innovation</span> & Quality
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed italic text-lg">
                                <p>
                                    "Praneeth Lakkaram is the Founder of Venus Crop Science, an agricultural seed company established in 2021 with a clear mission to support farmers through quality seeds, innovation, and reliable crop solutions."
                                </p>
                                <p>
                                    "Coming from a background closely connected to agriculture, Praneeth understood the real challenges faced by farmers — low productivity, lack of reliable seed quality, and limited access to proper crop guidance. With a strong passion for improving farming outcomes, he founded Venus Crop Science to bridge the gap between scientific seed technology and farmers’ needs."
                                </p>
                                <p>
                                    "Under his leadership, the company focuses on developing and supplying high-quality paddy, maize, and vegetable seeds that help farmers achieve better yields and sustainable growth. Praneeth believes that the future of agriculture depends on combining traditional farming knowledge with modern research and seed innovation."
                                </p>
                                <p>
                                    "His vision is to build Venus Crop Science into a trusted agricultural brand that empowers farmers, strengthens dealer networks, and contributes to the progress of Indian agriculture."
                                </p>
                                <p className="font-semibold text-gray-900 not-italic">
                                    "With dedication, transparency, and farmer-first values, Praneeth continues to lead the company toward creating long-term value for farmers, partners, and the agricultural community."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Reach Map Section */}
            <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 mx-auto">Our Operating <span className="text-brand-green">States</span></h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Our high-quality seeds are trusted by farmers across 11 major states in India. We have established a strong presence to ensure farmers get the best agricultural solutions suited for their specific regional climates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 h-[600px] w-full" data-aos="zoom-in">
                            <IndiaMap />
                        </div>
                        <div className="lg:col-span-4" data-aos="fade-left">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green opacity-5 rounded-full -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                                    <MapPin className="text-brand-red h-6 w-6" />
                                    States We Serve
                                </h3>
                                <ul className="grid grid-cols-2 gap-y-4 gap-x-2">
                                    {[
                                        "Uttar Pradesh", "Punjab", "Haryana",
                                        "Rajasthan", "Gujarat", "Madhya Pradesh",
                                        "Maharashtra", "Telangana", "Andhra Pradesh",
                                        "West Bengal", "Karnataka"
                                    ].map((state) => (
                                        <li key={state} className="flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-brand-green transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-0.5 shrink-0" />
                                            {state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div data-aos="zoom-in" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="bg-brand-green bg-opacity-10 p-4 rounded-2xl inline-block mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                <Target className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide high-quality seeds and agricultural solutions that increase farmers’ yield, income, and sustainability. We strive to be the bridge between scientific innovation and field implementation.
                            </p>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green opacity-5 rounded-full -mr-16 -mt-16"></div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="bg-brand-red bg-opacity-10 p-4 rounded-2xl inline-block mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                <Eye className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a trusted and leading seed company delivering innovative and farmer-focused products. We envision a future where every farmer has the tools to achieve maximum productivity.
                            </p>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-5 rounded-full -mr-16 -mt-16"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mb-16 text-gray-900">Our <span className="text-brand-green">Core Values</span></h2>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: ShieldCheck, name: "Quality Assurance" },
                            { icon: Heart, name: "Farmer Commitment" },
                            { icon: Zap, name: "Innovation" },
                            { icon: Target, name: "Integrity" },
                            { icon: Leaf, name: "Sustainability" }
                        ].map((value, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col items-center">
                                <div className="bg-gray-50 p-6 rounded-full mb-4 text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-inner">
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <h4 className="font-bold text-gray-800">{value.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research & Development */}
            <section className="section-padding bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right" className="relative">
                            <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                                <img src="/img/rd-lab.png" alt="R&D Lab" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl">
                                <Microscope className="h-12 w-12 text-white" />
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pioneering Through <span className="text-brand-green">Research & Development</span></h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our R&D focus is at the heart of our operations. We invest heavily in scientific research to develop seeds that are not just high-yielding but also resilient to the ever-changing climate and pest pressures.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "High-yield seed development",
                                    "Disease resistance breeding",
                                    "Climate adaptability",
                                    "Enhanced germination",
                                    "Sustainable solutions"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-brand-red" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-brand-red rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growing Team</h2>
                                <p className="text-red-100 mb-10 text-lg">
                                    Are you passionate about agriculture? We're looking for talented individuals to help us revolutionize farming. Explore our career opportunities.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white bg-opacity-10 p-4 rounded-xl">
                                        <Mail className="h-6 w-6" />
                                        <span>Venuscropscience@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white bg-opacity-10 p-4 rounded-xl">
                                        <Phone className="h-6 w-6" />
                                        <span>+91 8639171139</span>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Briefcase className="text-brand-red" />
                                    Open Roles
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Sales Executives",
                                        "Agriculture Officers",
                                        "Marketing Executives",
                                        "R&D Assistants",
                                        "Operations Staff",
                                        "Customer Support"
                                    ].map((role, i) => (
                                        <div key={i} className="bg-gray-50 p-4 rounded-xl text-sm font-semibold border border-gray-100 hover:border-brand-red transition-all cursor-default">
                                            {role}
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-8 btn-secondary">Apply Now</button>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

// Helper component
function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
        </svg>
    );
}
