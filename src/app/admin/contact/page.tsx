"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, MapPin, LayoutDashboard, Save, Phone, Mail, Home } from "lucide-react";
import Link from "next/link";

export default function AdminContact() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth) { router.push("/admin/login"); return; }
        fetch("/api/data").then(res => res.json()).then(setData);
    }, [router]);

    const handleUpdate = async (path: string, value: string) => {
        const updatedData = { ...data };
        const keys = path.split('.');
        let current = updatedData;
        for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
        current[keys[keys.length - 1]] = value;

        await fetch("/api/data", {
            method: "POST",
            body: JSON.stringify(updatedData),
        });
        setData(updatedData);
    };

    if (!data) return <div>Loading Contact Settings...</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Reuse */}
            <aside className="w-80 bg-white shadow-2xl flex flex-col fixed h-full z-20 border-r border-gray-100">
                <div className="p-10">
                    <Link href="/" className="flex items-center gap-3">
                        <Leaf className="h-6 w-6 text-brand-green" />
                        <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Venus <span className="text-brand-red">Admin</span></span>
                    </Link>
                </div>
                <nav className="flex-grow px-6 space-y-2">
                    <Link href="/admin/dashboard" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-gray-400 hover:bg-gray-50 font-black uppercase text-xs tracking-widest"><LayoutDashboard className="h-5 w-5" />Dashboard</Link>
                    <Link href="/admin/contact" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-brand-green text-white shadow-xl font-black uppercase text-xs tracking-widest"><MapPin className="h-5 w-5" />Contact Details</Link>
                </nav>
            </aside>

            <main className="flex-grow ml-80 p-16">
                <header className="mb-16">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Contact & Presence</h1>
                    <p className="text-gray-500 font-medium">Update company information and serving locations</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <section className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 space-y-10">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight flex items-center gap-3">
                            <Home className="text-brand-green" /> Company Address
                        </h2>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Operational HQ</label>
                            <textarea
                                className="w-full bg-gray-50 border-0 rounded-3xl p-8 font-bold text-gray-700 min-h-[150px] focus:ring-4 focus:ring-brand-green/10"
                                defaultValue={data.company.contact.address}
                                onBlur={(e) => handleUpdate('company.contact.address', e.target.value)}
                            />
                        </div>
                    </section>

                    <section className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 space-y-10">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight flex items-center gap-3">
                            <Phone className="text-brand-red" /> Communication
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Official Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold"
                                    defaultValue={data.company.contact.email}
                                    onBlur={(e) => handleUpdate('company.contact.email', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Support Line</label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold"
                                    defaultValue={data.company.contact.phone}
                                    onBlur={(e) => handleUpdate('company.contact.phone', e.target.value)}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
