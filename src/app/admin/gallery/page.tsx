"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Images, Plus, Trash2, LayoutDashboard, Film, Image as ImageIcon, ExternalLink, Save, X } from "lucide-react";
import Link from "next/link";

export default function AdminGallery() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({ url: "", title: "", category: "Field", type: "image" });

    useEffect(() => {
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth) { router.push("/admin/login"); return; }
        fetch("/api/data").then(res => res.json()).then(setData);
    }, [router]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData = { ...data };
        updatedData.gallery.push(newItem);

        const res = await fetch("/api/data", {
            method: "POST",
            body: JSON.stringify(updatedData),
        });

        if (res.ok) {
            setData(updatedData);
            setIsModalOpen(false);
            setNewItem({ url: "", title: "", category: "Field", type: "image" });
        }
    };

    const deleteItem = async (index: number) => {
        if (!confirm("Remove this item from gallery?")) return;
        const updatedData = { ...data };
        updatedData.gallery.splice(index, 1);

        await fetch("/api/data", {
            method: "POST",
            body: JSON.stringify(updatedData),
        });
        setData(updatedData);
    };

    if (!data) return <div>Loading Media Library...</div>;

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
                    <Link href="/admin/gallery" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-brand-green text-white shadow-xl font-black uppercase text-xs tracking-widest"><Images className="h-5 w-5" />Gallery</Link>
                </nav>
            </aside>

            <main className="flex-grow ml-80 p-16">
                <header className="flex justify-between items-center mb-16">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Media Library</h1>
                        <p className="text-gray-500 font-medium">Manage your photos and high-performance videos</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-brand-red text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all"
                    >
                        <Plus className="h-5 w-5" /> Add Media Item
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.gallery.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/3] relative bg-black flex items-center justify-center">
                                {item.type === 'video' ? (
                                    <video src={item.url} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                    <img src={item.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                )}
                                <div className="absolute top-6 right-6 flex gap-2 invisible group-hover:visible transition-all">
                                    <button onClick={() => deleteItem(idx)} className="p-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all"><Trash2 className="h-4 w-4" /></button>
                                </div>
                                {item.type === 'video' && <Film className="absolute top-6 left-6 h-6 w-6 text-yellow-500" />}
                                {item.type === 'image' && <ImageIcon className="absolute top-6 left-6 h-6 w-6 text-brand-green" />}
                            </div>
                            <div className="p-8">
                                <h3 className="font-black text-gray-900 group-hover:text-brand-green transition-colors uppercase tracking-tight">{item.title}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.category}</span>
                                    <Link href={item.url} target="_blank" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-brand-green transition-all"><ExternalLink className="h-4 w-4" /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal for adding media */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
                    <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl p-10 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 p-4 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-all"><X className="h-5 w-5" /></button>
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-8 italic">Add New Media</h2>

                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Item Title</label>
                                <input required type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Media Type</label>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setNewItem({ ...newItem, type: 'image' })} className={`flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${newItem.type === 'image' ? 'bg-brand-green text-white' : 'bg-gray-50 text-gray-400'}`}>Image</button>
                                    <button type="button" onClick={() => setNewItem({ ...newItem, type: 'video' })} className={`flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${newItem.type === 'video' ? 'bg-brand-red text-white' : 'bg-gray-50 text-gray-400'}`}>Video</button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Relative URL (e.g. /img/field.jpg)</label>
                                <input required type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 font-bold" value={newItem.url} onChange={(e) => setNewItem({ ...newItem, url: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-3xl font-black uppercase tracking-[0.2em] shadow-xl shadow-green-100 mt-4">
                                Post to Gallery
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
