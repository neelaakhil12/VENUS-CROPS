import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "R&D", href: "/rd" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];

    const services = [
        { name: "Paddy Varieties", href: "/products?category=Paddy+Varieties" },
        { name: "Maize Varieties", href: "/products?category=Maize+Varieties" },
        { name: "Vegetable Varieties", href: "/products?category=Vegetable+Varieties" },
        { name: "Fodder Jowar Varieties", href: "/products?category=Fodder+Jowar+Varieties" },
    ];

    return (
        <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img src="/logo.png" alt="Venus Crop Science Logo" className="h-20 md:h-24 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Venus Crop Science is a leading agricultural seeds company dedicated to providing
                            high-quality seeds to farmers for better productivity and sustainable farming.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1NJG3PB6Ex/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2.5 rounded hover:bg-brand-green hover:text-white transition-all text-gray-400 border border-gray-100">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/venuscropscience_8844" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2.5 rounded hover:bg-brand-green hover:text-white transition-all text-gray-400 border border-gray-100">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-brand-green transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="hover:text-brand-green transition-colors text-sm">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-1" />
                                <span className="text-sm text-gray-500">
                                    Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Nizamabad District, Telangana – 503224
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                                <span className="text-sm">+91 8639171139</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-brand-green shrink-0" />
                                <span className="text-sm text-gray-500">Venuscropscience@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {currentYear} VENUS CROP SCIENCE. All rights reserved.</p>
                        <span className="hidden md:inline">|</span>
                        <p>
                            Developed by{" "}
                            <a 
                                href="https://www.codtechitsolutions.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-brand-green transition-colors font-medium"
                            >
                                CODTECH IT SOLUTIONS
                            </a>
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-brand-green">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-brand-green">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
