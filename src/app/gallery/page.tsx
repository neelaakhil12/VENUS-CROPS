"use client";

import Layout from "@/components/Layout";
import { Leaf } from "lucide-react";

const galleryImages = [
    {
        url: "/img/rd-lab.png",
        title: "Seed Research Lab",
        category: "R&D"
    },
    {
        url: "/img/field-research.png",
        title: "Growth Monitoring",
        category: "Field"
    },
    {
        url: "/img/seed-lab.png",
        title: "Quality Selection",
        category: "Processing"
    },
    {
        url: "/img/paddy-field.png",
        title: "Sustainable Farming",
        category: "Field"
    },
    {
        url: "/img/wheat-field.png",
        title: "Agricultural Excellence",
        category: "Field"
    },
    {
        url: "/img/maize-field.png",
        title: "Maize Crop Selection",
        category: "Field"
    },
    {
        url: "/img/sindhuja.jpeg",
        title: "Premium Paddy Seeds",
        category: "Products"
    },
    {
        url: "/img/vcs-aman.png",
        title: "Quality Seed Samples",
        category: "Products"
    },
    {
        url: "/img/agriculture_hero_banner.png",
        title: "Vast Farming Lands",
        category: "Field"
    }
];

export default function Gallery() {
    return (
        <Layout>
            <section className="bg-brand-red pt-32 pb-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6">Visual Gallery</h1>
                    <p data-aos="fade-up" className="text-lg text-red-100 max-w-2xl mx-auto">
                        A glimpse into our world of agricultural innovation, research,
                        and the beautiful results in the field.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-brand-green font-bold text-sm mb-2">{image.category}</span>
                                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm text-brand-green scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                    <Leaf className="h-5 w-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom text-center">
                    <div data-aos="fade-up" className="max-w-3xl mx-auto bg-brand-green/5 p-12 rounded-[3rem] border border-brand-green/10">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Experience Agricultural Innovation</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our seeds are the result of years of dedicated research and a deep commitment to farmer success. Explore our products to see how we can transform your yields.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/products" className="btn-primary">View Products</a>
                            <a href="/contact" className="px-8 py-3 rounded-full font-semibold border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
