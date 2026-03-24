"use client";

import Layout from "@/components/Layout";
import { ShieldAlert, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <section className="bg-brand-green pt-36 pb-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-lg text-green-100 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy outlines how we handle your data at Venus Crop Science.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Lock className="text-brand-green" /> 1. Introduction
                            </h2>
                            <p>
                                At Venus Crop Science, we are committed to protecting the privacy and security of our customers and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website and services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Eye className="text-brand-red" /> 2. Information We Collect
                            </h2>
                            <p>
                                We may collect personal information that you voluntarily provide to us, such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contact information (Name, Email, Phone Number, Address)</li>
                                <li>Agricultural preferences and seed requirements</li>
                                <li>Information provided through contact forms and dealership applications</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <ShieldAlert className="text-brand-green" /> 3. How We Use Your Information
                            </h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and improve our products and services</li>
                                <li>Communicate with you regarding your enquiries</li>
                                <li>Send you updates about new seed varieties and farming solutions</li>
                                <li>Process dealership applications</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FileText className="text-brand-red" /> 4. Data Security
                            </h2>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
                                <p className="font-bold text-gray-900">Venus Crop Science</p>
                                <p>Email: Venuscropscience@gmail.com</p>
                                <p>Phone: +91 8639171139</p>
                                <p>Address: Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Telangana – 503224</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
