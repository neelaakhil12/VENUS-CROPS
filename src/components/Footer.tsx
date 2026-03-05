import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-brand-green" />
                            <span className="text-xl font-bold text-gray-900">
                                VENUS <span className="text-brand-red">CROP</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Dedicated to providing high-quality seeds to farmers for better productivity and profitability.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://wa.me/message/X74JYZEBCJHRN1" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full hover:bg-brand-green hover:text-white transition-colors text-gray-600">
                                <Leaf className="h-5 w-5" />
                            </a>
                            <a href="https://www.facebook.com/share/1NJG3PB6Ex/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full hover:bg-brand-red hover:text-white transition-colors text-gray-600">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/venuscropscience_8844" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full hover:bg-brand-green hover:text-white transition-colors text-gray-600">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-green pl-3">Quick Links</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-brand-green transition-colors">Our Products</Link></li>
                            <li><Link href="/about" className="hover:text-brand-green transition-colors">About Company</Link></li>
                            <li><Link href="/gallery" className="hover:text-brand-green transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Seed Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Seed Categories</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="hover:text-brand-red cursor-default">Paddy Seeds</li>
                            <li className="hover:text-brand-red cursor-default">Fodder Jowar Seeds</li>
                            <li className="hover:text-brand-red cursor-default">Maize Seeds</li>
                            <li className="hover:text-brand-red cursor-default">Vegetable Seeds</li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-green pl-3">Contact Details</h3>
                        <ul className="space-y-6 text-gray-600">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-1" />
                                <span className="text-sm">Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Nizamabad District, Telangana – 503224</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                                <span>+91 8639171139</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-brand-green shrink-0" />
                                <span className="text-sm">Venuscropscience@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                    <p>© {currentYear} Venus Crop Science. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
