"use client";

import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const whatsappNumber = "918639171139";
        const message = `*New Enquiry from Venus Crop Science Website*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Email:* ${formData.email}%0A%0A` +
            `*Message:* ${formData.message}`;
            
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
        
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Layout>
            {/* Banner */}
            <section className="bg-brand-green pt-36 pb-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p data-aos="fade-up" className="text-lg text-green-10 max-w-2xl mx-auto">
                        Have questions about our seeds? Reach out to us today.
                        We're here to help you grow.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold mb-8 text-gray-900 leading-tight">
                                Get in Touch with our <br />
                                <span className="text-brand-green">Agriculture Experts</span>
                            </h2>
                            <p className="text-gray-600 mb-12 text-lg">
                                Fill out the form and our team will be in touch within 24 hours.
                                Whether you need advice on seed variety or pricing, we're ready to assist.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-brand-red bg-opacity-10 p-4 rounded-2xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                                        <p className="text-gray-600">Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Jakkaranpally Mandal, Nizamabad District, Telangana – 503224</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-brand-green bg-opacity-10 p-4 rounded-2xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                                        <p className="text-gray-600">+91 8639171139</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-brand-blue-500 bg-opacity-10 p-4 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Email Address</h4>
                                        <p className="text-gray-600">Venuscropscience@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-orange-500 bg-opacity-10 p-4 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div data-aos="fade-left">
                            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                        <MessageSquare className="text-brand-green" />
                                        Send a Message
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                                            <textarea
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 text-lg">
                                            Submit Enquiry <Send className="h-5 w-5" />
                                        </button>
                                    </form>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green opacity-5 rounded-full -mr-16 -mt-16"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 w-full bg-gray-200 relative">
                <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center text-gray-500 font-bold">
                    [ Google Map Integration Placeholder ]
                </div>
            </section>
        </Layout>
    );
}
