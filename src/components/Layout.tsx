import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const whatsappNumber = "918639171139";
    const whatsappMessage = "Hello! I'm interested in Venus Crop Science seeds. Can you help me?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
                aria-label="Chat on WhatsApp"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
                {/* Button */}
                <span className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                    {/* WhatsApp SVG Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-8 h-8 fill-white"
                    >
                        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.774L0 32l8.476-2.003A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.763-1.845l-.484-.287-5.03 1.188 1.214-4.899-.317-.503A13.26 13.26 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.257-9.83c-.398-.2-2.355-1.163-2.72-1.295-.365-.133-.631-.2-.898.2-.266.398-1.031 1.295-1.264 1.562-.232.266-.465.3-.863.1-.398-.2-1.682-.62-3.203-1.978-1.184-1.057-1.983-2.363-2.216-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.465.598-.697.2-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.2-.898-2.163-1.23-2.963-.324-.777-.654-.672-.898-.685l-.765-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322 0 1.96 1.428 3.854 1.628 4.12.2.266 2.812 4.297 6.813 6.027.952.41 1.695.656 2.274.84.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.894.332-.93.332-1.729.232-1.894-.098-.167-.365-.266-.763-.465z" />
                    </svg>
                </span>
                {/* Tooltip */}
                <span className="absolute right-16 bottom-3 bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Chat on WhatsApp
                </span>
            </a>
        </div>
    );
}
