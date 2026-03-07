import Layout from "@/components/Layout";
import { Leaf, Play, Film, Camera } from "lucide-react";
import { useState } from "react";

const galleryImages = [
    {
        url: "/img/field-research.png",
        title: "Growth Monitoring",
        category: "Field"
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
        url: "/img/agriculture_hero_banner.png",
        title: "Vast Farming Lands",
        category: "Field"
    }
];

const galleryVideos = [
    {
        url: "/videos/field_monitoring.mp4",
        title: "Field Monitoring Reel",
        description: "Real-time updates from our research fields."
    },
    {
        url: "/videos/agricultural_innovation.mp4",
        title: "Innovation in Action",
        description: "Showcasing the latest in seed technology."
    }
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState<"Photos" | "Videos">("Photos");

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

            <section className="section-padding bg-gray-50 min-h-screen">
                <div className="container-custom">
                    {/* Category Tabs */}
                    <div className="flex justify-center mb-16" data-aos="fade-up">
                        <div className="bg-white p-2 rounded-2xl shadow-xl flex gap-2">
                            <button
                                onClick={() => setActiveCategory("Photos")}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeCategory === "Photos"
                                    ? "bg-brand-green text-white shadow-lg"
                                    : "text-gray-500 hover:bg-gray-50"
                                    }`}
                            >
                                <Camera className="h-5 w-5" /> Photos
                            </button>
                            <button
                                onClick={() => setActiveCategory("Videos")}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeCategory === "Videos"
                                    ? "bg-brand-green text-white shadow-lg"
                                    : "text-gray-500 hover:bg-gray-50"
                                    }`}
                            >
                                <Film className="h-5 w-5" /> Field Reels
                            </button>
                        </div>
                    </div>

                    {activeCategory === "Photos" ? (
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
                    ) : (
                        <div className="flex flex-wrap justify-center gap-12">
                            {galleryVideos.map((video, i) => (
                                <div
                                    key={i}
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 200}
                                    className="w-full max-w-[350px] group relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900 aspect-[9/16]"
                                >
                                    <video
                                        src={video.url}
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                        poster="/img/field-research.png"
                                    />
                                    <div className="absolute top-6 left-6 z-10">
                                        <div className="bg-brand-red/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                            Reel
                                        </div>
                                    </div>
                                    <div className="absolute bottom-16 left-0 right-0 p-8 pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-white text-2xl font-black mb-2 drop-shadow-lg">{video.title}</h3>
                                        <p className="text-white/80 text-sm line-clamp-2 drop-shadow-md">{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
