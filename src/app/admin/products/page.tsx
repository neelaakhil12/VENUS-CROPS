"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, LayoutDashboard, Package, MessageSquare, Plus, Search, Filter, Edit, Trash2, Eye, LogOut } from "lucide-react";

export default function ManageProducts() {
    const [activeTab] = useState("products");

    const products = [
        { id: 1, name: "Sindhuja (Bold Variety)", category: "Paddy Seeds", duration: "120-125 days", packing: "10kg", status: "Active" },
        { id: 2, name: "VCS-AMAN (Fine Variety)", category: "Paddy Seeds", duration: "130-135 days", packing: "10kg", status: "Active" },
        { id: 3, name: "Akhanda", category: "Fodder Jowar", duration: "Multi-cut", packing: "1kg", status: "Inactive" },
        { id: 4, name: "VCS-75", category: "Maize Seeds", duration: "120 days", packing: "4kg", status: "Active" },
        { id: 5, name: "Morocco Coriander", category: "Vegetable Seeds", duration: "30-35 days", packing: "2kg", status: "Active" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar Placeholder (Reuse) */}
            <aside className="w-72 bg-white shadow-xl flex flex-col fixed h-full z-20">
                <div className="p-8 border-b border-gray-100">
                    <Link href="/" className="flex items-center gap-2">
                        <Leaf className="h-8 w-8 text-brand-green" />
                        <span className="text-xl font-bold">VENUS <span className="text-brand-red">ADMIN</span></span>
                    </Link>
                </div>

                <nav className="flex-grow p-4 mt-4 space-y-2">
                    {[
                        { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
                        { id: "products", icon: Package, label: "Manage Products", href: "/admin/products" },
                        { id: "enquiries", icon: MessageSquare, label: "Enquiries", href: "/admin/enquiries" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all ${activeTab === item.id
                                    ? "bg-brand-green text-white shadow-lg"
                                    : "text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link href="/admin/login" className="flex items-center gap-4 px-6 py-4 text-gray-400">
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>

            <main className="flex-grow ml-72 p-10 bg-gray-50 bg-opacity-50">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 text-center md:text-left">Manage Seed Products</h1>
                        <p className="text-gray-500 mt-1">Add, update, or remove seed varieties from your website.</p>
                    </div>
                    <button className="bg-brand-red text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                        <Plus className="h-5 w-5" /> Add New Variety
                    </button>
                </header>

                {/* Filter Bar */}
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-gray-50 text-gray-600 px-4 py-3 rounded-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-100">
                            <Filter className="h-4 w-4" /> Filter
                        </button>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-black">
                                <th className="py-5 px-8">Product Name</th>
                                <th className="py-5 px-8">Category</th>
                                <th className="py-5 px-8">Duration</th>
                                <th className="py-5 px-8">Status</th>
                                <th className="py-5 px-8 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="py-6 px-8">
                                        <div className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">{item.name}</div>
                                        <div className="text-xs text-gray-400">Packing: {item.packing}</div>
                                    </td>
                                    <td className="py-6 px-8 text-sm font-medium text-gray-600">
                                        {item.category}
                                    </td>
                                    <td className="py-6 px-8 text-sm text-gray-600">
                                        {item.duration}
                                    </td>
                                    <td className="py-6 px-8">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.status === "Active"
                                                ? "bg-green-50 text-green-600 border border-green-100"
                                                : "bg-gray-50 text-gray-400 border border-gray-100"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-6 px-8 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button title="View" className="p-2 text-gray-400 hover:text-brand-green hover:bg-green-50 rounded-lg transition-colors">
                                                <Eye className="h-5 w-5" />
                                            </button>
                                            <button title="Edit" className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Edit className="h-5 w-5" />
                                            </button>
                                            <button title="Delete" className="p-2 text-gray-400 hover:text-brand-red hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
