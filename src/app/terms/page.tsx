"use client";

import Layout from "@/components/Layout";
import { Scale, FileText, CheckCircle, AlertTriangle } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <Layout>
            <section className="bg-brand-red pt-36 pb-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
                    <p className="text-lg text-red-100 max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our website and services.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Scale className="text-brand-red" /> 1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing and using the Venus Crop Science website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FileText className="text-brand-green" /> 2. Product Information
                            </h2>
                            <p>
                                While we strive to provide accurate information about our seed varieties and agricultural products, actual results may vary based on environmental factors, soil conditions, and farming practices. Descriptions and yield data are for informational purposes only.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <CheckCircle className="text-brand-red" /> 3. Intellectual Property
                            </h2>
                            <p>
                                All content on this website, including but not limited to text, images, logos, and seed variety names, is the property of Venus Crop Science and is protected by applicable intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <AlertTriangle className="text-brand-green" /> 4. Limitation of Liability
                            </h2>
                            <p>
                                Venus Crop Science is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our products or website information, especially where factors beyond our control (weather, soil, pests) affect crop performance.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
                            <p>
                                These Terms and Conditions are governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Telangana.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
