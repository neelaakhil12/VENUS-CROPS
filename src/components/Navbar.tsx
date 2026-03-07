"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, ClipboardList, Download } from "lucide-react";
import DealershipModal from "./DealershipModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "R&D", href: "/rd" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? "shadow-lg py-2" : "py-4"
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="flex items-center shrink-0">
                    <img src="/logo.png" alt="Venus Crop Science Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 font-medium text-gray-700 hover:bg-brand-red hover:text-white transition-all duration-300 rounded-md"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button / Desktop CTAs */}
                <div className="flex items-center space-x-3">
                    <a
                        href="/documents/venus_catalogue.pdf"
                        download
                        className="hidden md:flex items-center gap-2 border-2 border-brand-green text-brand-green px-5 py-2 rounded-full font-bold transition-all shadow-sm hover:bg-brand-green hover:text-white active:scale-95 text-sm"
                    >
                        <Download className="h-4 w-4" /> Catalog
                    </a>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden md:flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:scale-105 active:scale-95 text-sm"
                    >
                        <ClipboardList className="h-4 w-4" /> Apply for Dealership
                    </button>
                    <div className="md:hidden flex items-center shrink-0 pr-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 p-2 -mr-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 text-lg font-medium hover:text-brand-green py-2 border-b border-gray-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/documents/venus_catalogue.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green px-6 py-4 rounded-xl font-bold transition-all shadow-sm"
                    >
                        <Download className="h-5 w-5" /> Product Catalog
                    </a>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg"
                    >
                        <ClipboardList className="h-5 w-5" /> Apply for Dealership
                    </button>
                </div>
            )}
            <DealershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
};

export default Navbar;
