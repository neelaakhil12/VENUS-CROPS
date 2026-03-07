"use client";

import React, { useState } from "react";
import { X, Send, User, Building2, MapPin, Briefcase } from "lucide-react";

interface DealershipModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DealershipModal: React.FC<DealershipModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        // 1. Applicant Details
        fullName: "",
        fatherHusbandName: "",
        mobileNumber: "",
        whatsappNumber: "",
        emailId: "",
        aadhaarNumber: "",
        // 2. Shop / Firm Details
        shopName: "",
        businessType: "Retailer", // Default
        yearOfEstablishment: "",
        gstNumber: "",
        licenseNumber: "",
        // 3. Shop Address
        shopAddress: "",
        villageTown: "",
        mandalTaluka: "",
        district: "",
        state: "",
        pincode: "",
        locationLink: "",
        // 4. Business Information
        sellingSeeds: false,
        sellingFertilizers: false,
        sellingPesticides: false,
        sellingBioProducts: false,
        cropPaddy: false,
        cropMaize: false,
        cropCotton: false,
        cropVegetables: false,
    });

    const [isLocating, setIsLocating] = useState(false);

    if (!isOpen) return null;

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
                setFormData(prev => ({ ...prev, locationLink: link }));
                setIsLocating(false);
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location. Please check your permissions.");
                setIsLocating(false);
            }
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const products = [
            formData.sellingSeeds && "Seeds",
            formData.sellingFertilizers && "Fertilizers",
            formData.sellingPesticides && "Pesticides",
            formData.sellingBioProducts && "Bio Products",
        ].filter(Boolean).join(", ");

        const crops = [
            formData.cropPaddy && "Paddy",
            formData.cropMaize && "Maize",
            formData.cropCotton && "Cotton",
            formData.cropVegetables && "Vegetables",
        ].filter(Boolean).join(", ");

        const message = `*Dealership Application - Venus Crop Science*%0A%0A` +
            `*1. Applicant Details*%0A` +
            `Name: ${formData.fullName}%0A` +
            `Father/Husband: ${formData.fatherHusbandName}%0A` +
            `Mobile: ${formData.mobileNumber}%0A` +
            `WhatsApp: ${formData.whatsappNumber}%0A` +
            `Email: ${formData.emailId}%0A` +
            `Aadhaar: ${formData.aadhaarNumber}%0A%0A` +
            `*2. Shop Details*%0A` +
            `Shop Name: ${formData.shopName}%0A` +
            `Type: ${formData.businessType}%0A` +
            `Year: ${formData.yearOfEstablishment}%0A` +
            `GST: ${formData.gstNumber}%0A` +
            `License: ${formData.licenseNumber}%0A%0A` +
            `*3. Address*%0A` +
            `${formData.shopAddress}, ${formData.villageTown}, ${formData.mandalTaluka}, ${formData.district}, ${formData.state} - ${formData.pincode}%0A` +
            (formData.locationLink ? `Location: ${formData.locationLink}%0A%0A` : `%0A`) +
            `*4. Business Info*%0A` +
            `Products: ${products || "None"}%0A` +
            `Major Crops: ${crops || "None"}`;

        const whatsappUrl = `https://wa.me/918639171139?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto py-10">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative my-8 animate-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                    <X className="h-6 w-6 text-gray-500" />
                </button>

                <div className="p-6 md:p-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply for Dealership</h2>
                        <p className="text-gray-500">Partner with Venus Crop Science for a greener future</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Section 1: Applicant Details */}
                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-green mb-6 pb-2 border-b border-brand-green/10">
                                <User className="h-5 w-5" /> 1️⃣ Applicant Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="Enter Full Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Father / Husband Name</label>
                                    <input type="text" name="fatherHusbandName" required value={formData.fatherHusbandName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="Enter Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                                    <input type="tel" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="10-digit number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                                    <input type="tel" name="whatsappNumber" required value={formData.whatsappNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="WhatsApp number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID</label>
                                    <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="Optional" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Aadhaar Number</label>
                                    <input type="text" name="aadhaarNumber" required value={formData.aadhaarNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="12-digit number" />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Shop Details */}
                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-red mb-6 pb-2 border-b border-brand-red/10">
                                <Building2 className="h-5 w-5" /> 2️⃣ Shop / Firm Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name of Shop / Firm</label>
                                    <input type="text" name="shopName" required value={formData.shopName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Shop Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type of Business</label>
                                    <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red outline-none transition-all bg-white">
                                        <option value="Retailer">Retailer</option>
                                        <option value="Distributor">Distributor</option>
                                        <option value="Wholesaler">Wholesaler</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Establishment</label>
                                    <input type="text" name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="YYYY" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">GST Number</label>
                                    <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="GSTN" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">License Number</label>
                                    <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Fertilizer/Seed License" />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Shop Address */}
                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-600/10">
                                <MapPin className="h-5 w-5" /> 3️⃣ Shop Address
                            </h3>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Shop Location (Google Maps Link) <span className="text-brand-red">* Required</span>
                                </label>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <input
                                            type="url"
                                            name="locationLink"
                                            required
                                            value={formData.locationLink}
                                            onChange={handleChange}
                                            placeholder="https://www.google.com/maps?q=..."
                                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all pr-12 font-mono text-xs bg-white"
                                        />
                                        {formData.locationLink && (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleGetLocation}
                                        disabled={isLocating}
                                        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-brand-red transition-all shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 whitespace-nowrap"
                                    >
                                        {isLocating ? "Locating..." : "📍 Get My Current Location"}
                                    </button>
                                </div>
                                <p className="mt-3 text-sm text-gray-500 italic pb-4 border-b border-gray-100">
                                    * Please click the button to auto-fill your current shop location. This is mandatory for field verification.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="md:col-span-3">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Shop Address (Postal Address)</label>
                                    <textarea name="shopAddress" required value={formData.shopAddress} onChange={handleChange} rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" placeholder="Door No, Street, Landmark" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Village / Town</label>
                                    <input type="text" name="villageTown" required value={formData.villageTown} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mandal / Taluka</label>
                                    <input type="text" name="mandalTaluka" required value={formData.mandalTaluka} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">District</label>
                                    <input type="text" name="district" required value={formData.district} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                                    <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                                    <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Business Information */}
                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-orange-600 mb-6 pb-2 border-b border-orange-600/10">
                                <Briefcase className="h-5 w-5" /> 4️⃣ Business Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-4">Current Products Selling</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Seeds", "Fertilizers", "Pesticides", "Bio Products"].map((item) => (
                                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    name={`selling${item.replace(" ", "")}`}
                                                    checked={(formData as any)[`selling${item.replace(" ", "")}`]}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-600 transition-all"
                                                />
                                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-4">Major Crops in Your Region</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Paddy", "Maize", "Cotton", "Vegetables"].map((item) => (
                                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    name={`crop${item}`}
                                                    checked={(formData as any)[`crop${item}`]}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-600 transition-all"
                                                />
                                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-6">
                            <button
                                type="submit"
                                className="bg-brand-green text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-brand-red transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
                            >
                                Send via WhatsApp <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DealershipModal;
