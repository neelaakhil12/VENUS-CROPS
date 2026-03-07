"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Package, Plus, Search, Edit, Trash2, Eye, LayoutDashboard, ChevronRight, X, Save } from "lucide-react";
import Link from "next/link";

export default function AdminProducts() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth) { router.push("/admin/login"); return; }
        fetchData();
    }, [router]);

    const fetchData = async () => {
        const res = await fetch("/api/data");
        const json = await res.json();
        setData(json);
        setLoading(false);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData = { ...data };

        if (editingProduct.id) {
            // logic for update
        } else {
            // logic for add
        }

        const res = await fetch("/api/data", {
            method: "POST",
            body: JSON.stringify(updatedData),
        });

        if (res.ok) {
            setIsModalOpen(false);
            fetchData();
        }
    };

    const deleteProduct = async (catIndex: number, varIndex: number) => {
        if (!confirm("Delete this variety?")) return;
        const updatedData = { ...data };
        updatedData.products[catIndex].varieties.splice(varIndex, 1);

        await fetch("/api/data", {
            method: "POST",
            body: JSON.stringify(updatedData),
        });
        fetchData();
    };

    if (loading) return <div>Loading Management Console...</div>;

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
                    <Link href="/admin/products" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-brand-green text-white shadow-xl font-black uppercase text-xs tracking-widest"><Package className="h-5 w-5" />Products</Link>
                </nav>
            </aside>

            <main className="flex-grow ml-80 p-16">
                <header className="flex justify-between items-center mb-16">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Product Inventory</h1>
                        <p className="text-gray-500 font-medium">Manage your seed varieties and categories</p>
                    </div>
                    <button
                        onClick={() => { setEditingProduct({}); setIsModalOpen(true); }}
                        className="bg-brand-red text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-xl shadow-red-100 hover:scale-105 transition-all"
                    >
                        <Plus className="h-5 w-5" /> Add New Variety
                    </button>
                </header>

                {/* Categories List */}
                <div className="space-y-12">
                    {data.products.map((cat: any, catIdx: number) => (
                        <section key={cat.category} className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50/50 px-10 py-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">{cat.category}</h2>
                                <span className="bg-white px-4 py-1 rounded-full text-xs font-black text-gray-400 border border-gray-100">{cat.varieties.length} Varieties</span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {cat.varieties.map((v: any, vIdx: number) => (
                                    <div key={v.name} className="px-10 py-6 flex items-center justify-between group hover:bg-gray-50/50 transition-all">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                                                {v.image && <img src={v.image} className="w-full h-full object-cover" />}
                                            </div>
                                            <div>
                                                <h3 className="font-black text-gray-900 group-hover:text-brand-green transition-colors">{v.name}</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{v.type} • {v.packing}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => { setEditingProduct(v); setIsModalOpen(true); }} className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-brand-green hover:shadow-lg transition-all"><Edit className="h-4 w-4" /></button>
                                            <button onClick={() => deleteProduct(catIdx, vIdx)} className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-brand-red hover:shadow-lg transition-all"><Trash2 className="h-4 w-4" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            {/* Basic Modal for Add/Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
                    <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-12 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 p-4 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-all"><X /></button>
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-8">{editingProduct.name ? 'Edit Variety' : 'Add New Variety'}</h2>

                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Variety Name</label>
                                    <input type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold" defaultValue={editingProduct.name} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Category</label>
                                    <select className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold">
                                        {data.products.map((c: any) => <option key={c.category}>{c.category}</option>)}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3">
                                <Save className="h-5 w-5" /> Save Variety Details
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
