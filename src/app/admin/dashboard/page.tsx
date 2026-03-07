"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Package, Images, MapPin, LayoutDashboard, LogOut, ArrowRight, Activity, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth) {
            router.push("/admin/login");
            return;
        }

        fetch("/api/data")
            .then(res => res.json())
            .then(setData);
    }, [router]);

    if (!data) return <div className="min-h-screen flex items-center justify-center font-black text-brand-green uppercase tracking-tighter bg-gray-50">Initializing Secure Session...</div>;

    const stats = [
        { title: "Active Products", value: data.products?.reduce((acc: number, cat: any) => acc + cat.varieties.length, 0) || 0, icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Gallery Items", value: data.gallery?.length || 0, icon: Images, color: "text-brand-green", bg: "bg-green-50" },
        { title: "Enquiries", value: "24", icon: MessageSquare, color: "text-brand-red", bg: "bg-red-50" },
        { title: "Active Regions", value: "11 States", icon: MapPin, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white shadow-2xl flex flex-col fixed h-full z-20 border-r border-gray-100">
                <div className="p-10">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="bg-brand-green p-2 rounded-xl">
                            <Leaf className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Venus <span className="text-brand-red">Admin</span></span>
                    </Link>
                </div>

                <nav className="flex-grow px-6 space-y-2">
                    {[
                        { label: "Overview", icon: LayoutDashboard, href: "/admin/dashboard", active: true },
                        { label: "Manage Products", icon: Package, href: "/admin/products" },
                        { label: "Media Gallery", icon: Images, href: "/admin/gallery" },
                        { label: "Contact & Reach", icon: MapPin, href: "/admin/contact" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-4 px-6 py-4 rounded-[1.25rem] font-black uppercase text-xs tracking-widest transition-all ${item.active
                                    ? "bg-brand-green text-white shadow-xl shadow-green-100"
                                    : "text-gray-400 hover:bg-gray-50 hover:text-brand-green"
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-8 border-t border-gray-100">
                    <button
                        onClick={() => { localStorage.removeItem("admin_auth"); router.push("/admin/login"); }}
                        className="w-full flex items-center justify-center gap-3 py-4 text-gray-400 font-bold hover:text-brand-red transition-all border-2 border-transparent hover:border-red-50 rounded-2xl"
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Secure Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-80 p-12 lg:p-16">
                <header className="flex justify-between items-end mb-16">
                    <div className="space-y-2">
                        <span className="text-sm font-black text-brand-green uppercase tracking-[0.2em]">Management Console</span>
                        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter uppercase">Welcome, Administrator</h1>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                        <div className="text-right">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Active Status</p>
                            <p className="text-sm font-bold text-gray-900">System Online</p>
                        </div>
                        <div className="w-10 h-10 bg-green-500 rounded-2xl shadow-lg shadow-green-100 animate-pulse"></div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl inline-block mb-6 shadow-inner`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{stat.title}</p>
                            <h3 className="text-4xl font-black text-gray-900 tracking-tighter">{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden relative group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase mb-4">Latest Products</h3>
                            <p className="text-gray-500 font-medium mb-8">Quickly update your variety portfolio</p>
                            <Link href="/admin/products" className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-2xl shadow-lg shadow-green-100 transition-all">
                                Manage Portfolio <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <Package className="absolute -bottom-10 -right-10 h-48 w-48 text-gray-50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
                    </div>

                    <div className="bg-brand-red p-10 rounded-[3rem] shadow-sm overflow-hidden relative group">
                        <div className="relative z-10 text-white">
                            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">Media Library</h3>
                            <p className="text-red-100 font-medium mb-8">Update field videos and event images</p>
                            <Link href="/admin/gallery" className="inline-flex items-center gap-3 bg-white text-brand-red px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-2xl shadow-lg shadow-red-900 transition-all">
                                Update Gallery <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <Images className="absolute -bottom-10 -right-10 h-48 w-48 text-white opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700" />
                    </div>
                </div>
            </main>
        </div>
    );
}
