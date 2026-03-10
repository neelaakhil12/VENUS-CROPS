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
        try {
            const res = await fetch("/api/data");
            const json = await res.json();
            if (json.error) {
                console.error("API Error:", json.error);
                setData({ products: [], gallery: [] }); // Set fallback
            } else {
                setData(json);
            }
        } catch (err) {
            console.error("Fetch Error:", err);
            setData({ products: [], gallery: [] }); // Set fallback
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData = { ...data };

        let targetCategory = updatedData.products.find((p: any) => p.category === editingProduct.category);

        if (!targetCategory && editingProduct.category) {
            // Create new category if it doesn't exist
            targetCategory = { category: editingProduct.category, varieties: [] };
            updatedData.products.push(targetCategory);
        }

        if (editingProduct.originalName || editingProduct.id) {
            // Update logic: find the old product and update it
            updatedData.products.forEach((cat: any) => {
                const idx = cat.varieties.findIndex((v: any) => v.name === (editingProduct.originalName || editingProduct.name));
                if (idx !== -1) {
                    // Remove from old category/position
                    cat.varieties.splice(idx, 1);
                }
            });
            // Add to new/target category
            if (targetCategory) {
                targetCategory.varieties.push({ ...editingProduct });
            }
        } else {
            // Add logic
            if (targetCategory) {
                targetCategory.varieties.push({ ...editingProduct });
            }
        }

        const res = await fetch("/api/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });

        if (res.ok) {
            setIsModalOpen(false);
            fetchData();
        } else {
            const err = await res.json();
            alert("Error saving: " + err.error);
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
                        onClick={() => { setEditingProduct({ category: data?.products?.[0]?.category || "" }); setIsModalOpen(true); }}
                        className="bg-brand-red text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-xl shadow-red-100 hover:scale-105 transition-all"
                    >
                        <Plus className="h-5 w-5" /> Add New Variety
                    </button>
                </header>

                {/* Categories List */}
                <div className="space-y-12">
                    {data?.products && data.products.length > 0 ? (
                        data.products.map((cat: any, catIdx: number) => (
                            <section key={cat.category} className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gray-50/50 px-10 py-6 border-b border-gray-100 flex justify-between items-center">
                                    <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">{cat.category}</h2>
                                    <span className="bg-white px-4 py-1 rounded-full text-xs font-black text-gray-400 border border-gray-100">{cat.varieties?.length || 0} Varieties</span>
                                </div>
                                <div className="divide-y divide-gray-50">
                                    {cat.varieties?.map((v: any, vIdx: number) => (
                                        <div key={v.name} className="px-10 py-6 flex items-start justify-between group hover:bg-gray-50/50 transition-all border-b border-gray-50 last:border-0">
                                            <div className="flex items-start gap-8 w-full max-w-4xl">
                                                <div className="w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shrink-0 shadow-sm">
                                                    {v.image && <img src={v.image} className="w-full h-full object-cover" />}
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-brand-green transition-colors mb-1">{v.name}</h3>
                                                    <div className="text-xs font-bold text-brand-green uppercase tracking-widest mb-4 bg-green-50 inline-block px-3 py-1 rounded-full">{v.type} • {v.packing}</div>

                                                    {/* Technical Details Point-wise list */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                                                        {v.seed_per_acre && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Seed/Acre: <strong className="text-gray-900">{v.seed_per_acre}</strong></span></div>}
                                                        {v.height && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Height: <strong className="text-gray-900">{v.height}</strong></span></div>}
                                                        {v.duration && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Duration: <strong className="text-gray-900">{v.duration}</strong></span></div>}
                                                        {v.grain_type && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Grain Type: <strong className="text-gray-900">{v.grain_type}</strong></span></div>}
                                                        {v.panicle_length && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Panicle Length: <strong className="text-gray-900">{v.panicle_length}</strong></span></div>}
                                                        {v.grains_per_panicle && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Grains/Panicle: <strong className="text-gray-900">{v.grains_per_panicle}</strong></span></div>}
                                                        {v.disease_reaction && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Disease Reaction: <strong className="text-gray-900">{v.disease_reaction}</strong></span></div>}
                                                        {v.sowing_time && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Sowing Time: <strong className="text-gray-900">{v.sowing_time}</strong></span></div>}
                                                        {v.resistant_to && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Resistant To: <strong className="text-gray-900">{v.resistant_to}</strong></span></div>}
                                                        {v.suitability && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Suitability: <strong className="text-gray-900">{v.suitability}</strong></span></div>}
                                                        {v.sowing_period && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Sowing Period: <strong className="text-gray-900">{v.sowing_period}</strong></span></div>}
                                                        {v.spacing && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Spacing: <strong className="text-gray-900">{v.spacing}</strong></span></div>}
                                                        {v.grains_characters && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Grain Characters: <strong className="text-gray-900">{v.grains_characters}</strong></span></div>}
                                                        {v.cuttings && <div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /><span className="text-sm text-gray-500">Cuttings: <strong className="text-gray-900">{v.cuttings}</strong></span></div>}

                                                        {v.benefits && v.benefits.length > 0 && (
                                                            <div className="col-span-1 md:col-span-2 mt-2 pt-2 border-t border-gray-100">
                                                                <ul className="list-disc list-inside space-y-1 ml-1 text-gray-900 font-medium text-sm">
                                                                    {v.benefits.map((benefit: string, bIdx: number) => (
                                                                        <li key={bIdx}>{benefit}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => { setEditingProduct({ ...v, originalName: v.name, category: cat.category }); setIsModalOpen(true); }} className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-brand-green hover:shadow-lg transition-all"><Edit className="h-4 w-4" /></button>
                                                <button onClick={() => deleteProduct(catIdx, vIdx)} className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-brand-red hover:shadow-lg transition-all"><Trash2 className="h-4 w-4" /></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="bg-white p-20 rounded-[3rem] text-center border-2 border-dashed border-gray-100">
                            <Package className="h-16 w-16 text-gray-200 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-400">No products found.</h3>
                            <p className="text-gray-400 text-sm mt-2">Check your database connection in .env or add your first product!</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Basic Modal for Add/Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
                    <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl p-12 relative max-h-[90vh] overflow-y-auto">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 p-4 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-all z-10"><X /></button>
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-8">{editingProduct.originalName ? 'Edit Variety' : 'Add New Variety'}</h2>

                        <form onSubmit={handleSave} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Basic Info */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Variety Name</label>
                                        <input required type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold focus:ring-4 focus:ring-brand-green/10" value={editingProduct.name || ""} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Category</label>
                                        <div className="flex flex-col gap-2">
                                            <select
                                                className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold text-gray-700 focus:ring-4 focus:ring-brand-green/10"
                                                value={editingProduct.category || ""}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                            >
                                                <option value="" disabled>Select Category</option>
                                                {data?.products?.map((c: any) => (
                                                    <option key={c.category} value={c.category}>{c.category}</option>
                                                ))}
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Or type new category..."
                                                className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold text-gray-700 placeholder:text-gray-300"
                                                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Description</label>
                                        <textarea
                                            className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold text-sm min-h-[120px]"
                                            placeholder="Variety characteristics and benefits..."
                                            value={editingProduct.description || ""}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Technical Specs */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Type</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.type || ""} onChange={(e) => setEditingProduct({ ...editingProduct, type: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Packing</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.packing || ""} onChange={(e) => setEditingProduct({ ...editingProduct, packing: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Seed/Acre</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.seed_per_acre || ""} onChange={(e) => setEditingProduct({ ...editingProduct, seed_per_acre: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Height</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.height || ""} onChange={(e) => setEditingProduct({ ...editingProduct, height: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.duration || ""} onChange={(e) => setEditingProduct({ ...editingProduct, duration: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Grain Type</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.grain_type || ""} onChange={(e) => setEditingProduct({ ...editingProduct, grain_type: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Panicle Length</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.panicle_length || ""} onChange={(e) => setEditingProduct({ ...editingProduct, panicle_length: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Grains/Panicle</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.grains_per_panicle || ""} onChange={(e) => setEditingProduct({ ...editingProduct, grains_per_panicle: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Disease Reaction</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.disease_reaction || ""} onChange={(e) => setEditingProduct({ ...editingProduct, disease_reaction: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sowing Time</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.sowing_time || ""} onChange={(e) => setEditingProduct({ ...editingProduct, sowing_time: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Resistant To</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.resistant_to || ""} onChange={(e) => setEditingProduct({ ...editingProduct, resistant_to: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Suitability</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.suitability || ""} onChange={(e) => setEditingProduct({ ...editingProduct, suitability: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sowing Period</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.sowing_period || ""} onChange={(e) => setEditingProduct({ ...editingProduct, sowing_period: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Spacing</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.spacing || ""} onChange={(e) => setEditingProduct({ ...editingProduct, spacing: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Grain Characters</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.grains_characters || ""} onChange={(e) => setEditingProduct({ ...editingProduct, grains_characters: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cuttings</label>
                                        <input type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm" value={editingProduct.cuttings || ""} onChange={(e) => setEditingProduct({ ...editingProduct, cuttings: e.target.value })} />
                                    </div>
                                    <div className="col-span-2 space-y-1 pt-4 border-t border-gray-100">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Benefits (Point-wise, one per line)</label>
                                        <textarea
                                            className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 font-bold text-sm min-h-[120px]"
                                            value={Array.isArray(editingProduct.benefits) ? editingProduct.benefits.join('\n') : (editingProduct.benefits || "")}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, benefits: e.target.value.split('\n').filter(b => b.trim() !== "") })}
                                        />
                                        <p className="text-[10px] text-gray-400 italic">Each line will be displayed as a separate bullet point on the main website.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Product Image</label>
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-grow w-full">
                                        <div className="relative group/upload">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (!file) return;
                                                    const btn = e.target.closest('form')?.querySelector('button[type="submit"]');
                                                    if (btn) (btn as any).disabled = true;
                                                    const formData = new FormData();
                                                    formData.append('file', file);
                                                    try {
                                                        const res = await fetch('/api/upload', { method: 'POST', body: formData });
                                                        const json = await res.json();
                                                        if (json.url) setEditingProduct({ ...editingProduct, image: json.url });
                                                    } catch (err) {
                                                        console.error("Upload failed:", err);
                                                    } finally {
                                                        if (btn) (btn as any).disabled = false;
                                                    }
                                                }}
                                                className="w-full bg-gray-50 border-2 border-dashed border-gray-100 rounded-3xl px-6 py-8 font-bold text-gray-400 hover:border-brand-green hover:bg-green-50/30 transition-all cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    {editingProduct.image && (
                                        <div className="shrink-0 group/preview relative">
                                            <img src={editingProduct.image} className="w-32 h-32 rounded-2xl object-cover shadow-xl border-4 border-white transform group-hover:scale-105 transition-all" />
                                            <div className="absolute -top-2 -right-2 bg-brand-green text-white text-[10px] font-black px-2 py-1 rounded-full uppercase shadow-lg">Current</div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-brand-green text-white py-6 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl hover:bg-green-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-4">
                                <Save className="h-6 w-6" /> {editingProduct.originalName ? 'Update Variety' : 'Add Variety to Inventory'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
