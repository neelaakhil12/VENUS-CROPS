"use client";

import { Leaf, LayoutDashboard, Package, MessageSquare, Settings, LogOut, ArrowUpRight, TrendingUp, Users, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const stats = [
        { title: "Total Products", value: "13", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Contact Enquiries", value: "24", icon: MessageSquare, color: "text-brand-green", bg: "bg-green-50" },
        { title: "Daily Visitors", value: "152", icon: Users, color: "text-brand-red", bg: "bg-red-50" },
        { title: "Recent Activity", value: "+12%", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    const recentEnquiries = [
        { id: 1, name: "Ramesh Kumar", email: "ramesh@example.com", phone: "+91 98765 43210", subject: "Paddy Seed Bulk Inquiry", date: "2 mins ago" },
        { id: 2, name: "Suresh Patel", email: "suresh@example.com", phone: "+91 87654 32109", subject: "Maize Crop Duration", date: "1 hour ago" },
        { id: 3, name: "Amit Singh", email: "amit@example.com", phone: "+91 76543 21098", subject: "Vegetable Seeds Availability", date: "3 hours ago" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
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
                        { id: "settings", icon: Settings, label: "Web Content", href: "/admin/settings" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all ${activeTab === item.id
                                    ? "bg-brand-green text-white shadow-lg shadow-green-100"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-brand-green"
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link href="/admin/login" className="flex items-center gap-4 px-6 py-4 text-gray-400 hover:text-brand-red transition-all">
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-72 p-10 bg-gray-50 bg-opacity-50">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                        <p className="text-gray-500 mt-1">Welcome back, Administrator. Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-gray-600">System Live</span>
                        </div>
                        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-100">
                            AD
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl inline-block mb-6`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                            <div className="flex items-end justify-between mt-2">
                                <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
                                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                                    <ArrowUpRight className="h-3 w-3" /> 4%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Enquiries & Recent Products Overlay */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <MessageSquare className="text-brand-green h-5 w-5" />
                                Recent Enquiries
                            </h3>
                            <Link href="/admin/enquiries" className="text-brand-green text-sm font-bold hover:underline">View All</Link>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                                        <th className="pb-4 font-bold">Farmer Name</th>
                                        <th className="pb-4 font-bold">Subject</th>
                                        <th className="pb-4 font-bold">Status</th>
                                        <th className="pb-4 font-bold text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentEnquiries.map((enq) => (
                                        <tr key={enq.id} className="group cursor-pointer hover:bg-gray-50 transition-colors">
                                            <td className="py-6 pr-4">
                                                <div className="font-bold text-gray-900">{enq.name}</div>
                                                <div className="text-xs text-gray-400">{enq.email}</div>
                                            </td>
                                            <td className="py-6 px-4">
                                                <span className="text-sm text-gray-600">{enq.subject}</span>
                                            </td>
                                            <td className="py-6 px-4">
                                                <span className="px-3 py-1 bg-yellow-50 text-yellow-600 text-xs font-bold rounded-full border border-yellow-100">Pending</span>
                                            </td>
                                            <td className="py-6 pl-4 text-right">
                                                <span className="text-xs text-gray-400 font-medium">{enq.date}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                            <ShoppingBag className="text-brand-red h-5 w-5" />
                            Quick Actions
                        </h3>
                        <div className="space-y-4">
                            <button className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                <Package className="h-5 w-5" /> Add New Product
                            </button>
                            <button className="w-full bg-gray-50 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 border border-gray-100">
                                <Settings className="h-5 w-5" /> Site Settings
                            </button>
                        </div>

                        <div className="mt-auto pt-12">
                            <div className="bg-gradient-to-br from-brand-red to-red-600 p-8 rounded-2xl text-white relative overflow-hidden shadow-xl">
                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                                    <p className="text-sm opacity-80 mb-6 leading-relaxed">System documentation is available for all administrative tasks.</p>
                                    <button className="bg-white text-brand-red px-6 py-2 rounded-xl text-sm font-bold shadow-lg">Open Docs</button>
                                </div>
                                <Leaf className="absolute -bottom-4 -right-4 h-32 w-32 opacity-20 -rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
