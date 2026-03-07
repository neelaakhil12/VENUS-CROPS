"use client";

import Layout from "@/components/Layout";
import { Leaf, Play, X, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
        url: "/videos/reel-1.mp4",
        thumbnail: "/img/field-research.png",
        title: "Agricultural Innovation",
        category: "Videos",
        type: "video"
    },
    {
        url: "/videos/reel-2.mp4",
        thumbnail: "/img/paddy-field.png",
        title: "Sustainable Yields",
        category: "Videos",
        type: "video"
    }
];

const ReelItem = ({ videoUrl, title, category }: { videoUrl: string, title: string, category: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current?.pause();
                    setIsPlaying(false);
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="relative h-[80vh] md:h-[90vh] w-full max-w-[450px] mx-auto bg-black rounded-[2rem] overflow-hidden snap-center shadow-2xl border border-white/10 group">
            <video
                ref={videoRef}
                src={videoUrl}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onClick={() => {
                    if (videoRef.current?.paused) {
                        videoRef.current.play();
                        setIsPlaying(true);
                    } else {
                        videoRef.current?.pause();
                        setIsPlaying(false);
                    }
                }}
            />

            {/* Overlay Info */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                <span className="text-brand-green font-bold text-sm mb-2 uppercase tracking-widest block">{category}</span>
                <h3 className="text-white text-2xl font-bold">{title}</h3>
                <p className="text-gray-300 text-sm mt-2">Venus Crop Science - Nurturing the future</p>
            </div>

            {/* Controls Overlay */}
            <div className="absolute top-6 right-6 flex flex-col gap-4">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="bg-black/20 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/30 transition-all"
                >
                    {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </button>
            </div>

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-md p-8 rounded-full">
                        <Play className="h-12 w-12 text-white fill-white opacity-50" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default function Gallery() {
    const [filter, setFilter] = useState("All");
    const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

    const filteredItems = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === filter || (filter === "Images" && item.type === "image") || (filter === "Videos" && item.type === "video"));

    const isReelMode = filter === "Videos";

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
            <section className={`pt-16 pb-8 bg-gray-50 transition-all duration-500 ${isReelMode ? "sticky top-20 z-40 backdrop-blur-md bg-gray-50/80" : ""}`}>
                <div className="container-custom flex justify-center gap-4">
                    {["All", "Images", "Videos"].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full font-bold transition-all ${filter === cat
                                ? "bg-brand-green text-white shadow-lg lg:scale-110"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid or Reels View */}
            <section className="pb-20 bg-gray-50 min-h-[60vh]">
                <div className="container-custom">
                    {isReelMode ? (
                        <div className="flex flex-col gap-8 h-[85vh] overflow-y-auto snap-y snap-mandatory py-4 scrollbar-hide px-4">
                            <div className="text-center mb-4 text-gray-400 animate-bounce">
                                <p className="text-sm font-medium">Scroll down for more</p>
                                <ChevronDown className="h-5 w-5 mx-auto mt-1" />
                            </div>
                            {filteredItems.map((item, i) => (
                                <ReelItem
                                    key={i}
                                    videoUrl={item.url}
                                    title={item.title}
                                    category={item.category}
                                />
                            ))}
                            <div className="h-20" /> {/* Bottom spacing */}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, i) => (
                                <div
                                    key={i}
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 100}
                                    onClick={() => item.type === "video" && setFilter("Videos")}
                                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${item.type === "video" ? "cursor-pointer" : ""}`}
                                >
                                    <div className="aspect-[4/3] overflow-hidden text-center">
                                        <img
                                            src={item.type === "video" ? item.thumbnail : item.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {item.type === "video" && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 group-hover:scale-110 transition-transform">
                                                    <Play className="h-8 w-8 text-white fill-white" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <span className="text-brand-green font-bold text-sm mb-2 uppercase tracking-wider">{item.category}</span>
                                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm text-brand-green scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                        <Leaf className="h-5 w-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
