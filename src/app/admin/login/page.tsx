"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Using environment variables for secure access
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

        if (email === adminEmail && password === adminPass) {
            localStorage.setItem("admin_auth", "true");
            router.push("/admin/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-brand-green p-10 text-center text-white relative overflow-hidden">
                    <Leaf className="h-16 w-16 mx-auto mb-4 relative z-10" />
                    <h1 className="text-3xl font-black relative z-10 uppercase tracking-tighter">Venus Admin</h1>
                    <p className="text-green-50/80 text-sm relative z-10 mt-2">Secure owner access portal</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                </div>

                <form onSubmit={handleLogin} className="p-10 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100 animate-shake">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-black text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@venuscropscience.com"
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-4 focus:ring-brand-green/20 focus:border-brand-green transition-all font-medium text-gray-900"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-black text-gray-500 uppercase tracking-widest px-1">Security Key</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-4 focus:ring-brand-green/20 focus:border-brand-green transition-all font-medium text-gray-900"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-green text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-100 hover:shadow-2xl hover:scale-[1.02] transform transition-all flex items-center justify-center gap-3 mt-4"
                    >
                        Access Dashboard
                    </button>
                </form>

                <div className="px-10 pb-10 text-center">
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                        Authorized personnel only. All access attempts are monitored and recorded.
                    </p>
                </div>
            </div>
        </div>
    );
}
