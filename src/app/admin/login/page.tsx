"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simplified logic for demonstration; would normally use next-auth
        if (email === "admin@venuscrops.com" && password === "admin123") {
            router.push("/admin/dashboard");
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-brand-green p-8 text-center text-white relative">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:scale-105 transition-transform">
                        <Leaf className="h-10 w-10" />
                        <span className="text-2xl font-bold">VENUS <span className="text-brand-red">CROP</span></span>
                    </Link>
                    <h2 className="text-xl font-medium opacity-90">Secure Admin Access</h2>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                </div>

                <div className="p-8 md:p-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 animate-shake">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Admin Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white transition-all shadow-inner"
                                    placeholder="admin@venuscrops.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white transition-all shadow-inner"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 text-lg shadow-xl py-4 mt-8">
                            Sign In <ArrowRight className="h-5 w-5" />
                        </button>

                        <p className="text-center text-gray-500 text-xs mt-8">
                            Authorized Personnel Only. <br />
                            © 2026 Venus Crop Science.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
