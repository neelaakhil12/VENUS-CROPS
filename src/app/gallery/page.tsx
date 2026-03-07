"use client";

import Layout from "@/components/Layout";
import { Leaf, Play, X, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const galleryItems = [
    {
        url: "/img/field-research.png",
        title: "Growth Monitoring",
        category: "Field",
        type: "image"
    },
    {
        url: "/img/paddy-field.png",
        title: "Sustainable Farming",
        category: "Field",
        type: "image"
    },
    {
        url: "/img/wheat-field.png",
        title: "Agricultural Excellence",
        category: "Field",
        type: "image"
    },
    {
        url: "/img/maize-field.png",
        title: "Maize Crop Selection",
        category: "Field",
        type: "image"
    },
    {
        url: "/img/agriculture_hero_banner.png",
        title: "Vast Farming Lands",
        category: "Field",
        type: "image"
    },
    {
        url: "/videos/field_research_video.mp4",
        thumbnail: "/img/field-monitoring.png",
        title: "Agricultural Excellence",
        category: "Videos",
        type: "video"
    },
    {
        url: "/videos/venus_secondary_video.mp4",
        thumbnail: "/img/field-research.png",
        title: "Sustainable Farming Practices",
        category: "Videos",
        type: "video"
    }
];

export default function Gallery() {
    const [filter, setFilter] = useState("Images");

    const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const playingVideo = e.currentTarget;
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            if (video !== playingVideo) {
                video.pause();
            }
        });
    };

    const filteredItems = galleryItems.filter(item =>
        item.category === filter ||
        (filter === "Images" && item.type === "image") ||
        (filter === "Videos" && item.type === "video")
    );

    return (
        <Layout>
            {/* Hero Section */}
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

            {/* Filter Section */}
            <section className="pt-16 pb-8 bg-gray-50">
                <div className="container-custom flex justify-center gap-4">
                    {["Images", "Videos"].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full font-bold transition-all ${filter === cat
                                ? "bg-brand-green text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-20 bg-gray-50 min-h-[60vh]">
                <div className="container-custom">
                    <div className={`grid gap-6 ${filter === "Videos"
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto md:gap-10"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        }`}>
                        {filteredItems.map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 50}
                                className="group relative bg-black rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
                            >
                                {/* Media / Thumbnail */}
                                <div className="w-full h-full overflow-hidden">
                                    {item.type === "video" ? (
                                        <video
                                            src={item.url}
                                            loop
                                            playsInline
                                            controls
                                            onPlay={handleVideoPlay}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    )}

                                    {/* Play Icon for Overlay (only for images or if no controls) - Removing for cleaner look with native controls */}
                                </div>

                                {/* Bottom Info Overlay (Screenshot Style) */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end min-h-[40%] pointer-events-none">
                                    <h3 className={`font-bold leading-tight mb-2 transition-colors duration-300 ${item.type === "video" ? "text-yellow-500 text-xl" : "text-white text-lg"
                                        }`}>
                                        {item.title}
                                    </h3>

                                    {item.type === "video" && (
                                        <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                            <Play className="h-3 w-3 fill-white" />
                                            <span>Videos Gallery</span>
                                        </div>
                                    )}

                                    {item.type === "image" && (
                                        <span className="text-brand-green font-bold text-xs uppercase tracking-widest">{item.category}</span>
                                    )}
                                </div>

                                {/* Leaf Decoration (Consistency with site theme) */}
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-xl text-white/40 scale-0 group-hover:scale-100 transition-transform pointer-events-none">
                                    <Leaf className="h-4 w-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white border-t border-gray-100">
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
