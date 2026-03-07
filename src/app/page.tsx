"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { Leaf, ShieldCheck, Zap, Users, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/img/hero/hero-1.jpg",
    "/img/hero/hero-2.jpg",
    "/img/hero/hero-3.jpg",
    "/img/hero/hero-4.jpg",
    "/img/hero/hero-5.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url('${img}')`,
              filter: "brightness(0.4)",
            }}
          ></div>
        ))}
        <div className="container-custom relative z-10 text-center">
          <p
            data-aos="fade-down"
            className="text-blue-400 font-bold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            The Solution for Agriculture Needs
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Nurturing Life with <br />
            <span className="text-brand-green">Superior Seeds</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Venus Crop Science - Providing high-quality seeds to farmers for better productivity,
            higher yield, and sustainable farming solutions.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/products" className="btn-primary flex items-center justify-center gap-2">
              Explore Our Seeds <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-md flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-brand-red font-bold tracking-wider uppercase text-sm">About Our Company</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
                A Dedicated Partner in <span className="text-brand-green">Agricultural Success</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Venus Crop Science is a dedicated agricultural seeds company committed to providing
                high-quality seeds to farmers for better productivity and profitability.
                Our mission is to provide agricultural solutions that increase farmers’ yield, income, and sustainability.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "High-yield seed development",
                  "Climate adaptability",
                  "Disease resistance",
                  "Sustainable farming solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-brand-green bg-opacity-10 p-1 rounded-full text-brand-green">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="text-brand-green font-bold flex items-center gap-2 hover:text-brand-red transition-colors">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-brand-green rounded-2xl p-4 shadow-2xl overflow-hidden">
                <img
                  src="/img/paddy-field.png"
                  alt="Farming"
                  className="rounded-xl w-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-2xl hidden md:block" data-aos="zoom-in" data-aos-delay="300">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-red p-3 rounded-xl text-white">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-gray-500 text-sm">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-brand-green">Venus Seeds?</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600">
              We understand farming challenges and provide engineered seed varieties
              that perform exceptionally under various climatic conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Premium Quality",
                desc: "Every seed is tested for maximum germination and purity.",
                color: "text-green-500"
              },
              {
                icon: Zap,
                title: "High Yield",
                desc: "Designed to maximize your harvest and profitability.",
                color: "text-brand-red"
              },
              {
                icon: ShieldCheck,
                title: "Resistant",
                desc: "Our varieties are bred for strong disease tolerance.",
                color: "text-blue-500"
              },
              {
                icon: Users,
                title: "Farmer Focus",
                desc: "Providing personalized support and agricultural solutions.",
                color: "text-orange-500"
              }
            ].map((feature, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`${feature.color} mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-green relative overflow-hidden">
        <div className="container-custom relative z-10 text-center text-white">
          <h2 data-aos="zoom-in" className="text-3xl md:text-5xl font-bold mb-8">
            Ready to Grow Better?
          </h2>
          <p data-aos="zoom-in" data-aos-delay="100" className="text-xl mb-10 max-w-2xl mx-auto text-green-100">
            Join thousands of successful farmers who trust Venus Crop Science for their agricultural needs.
          </p>
          <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
              Get in Touch
            </Link>
            <Link href="/products" className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
              View Products
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red opacity-10 rounded-full -ml-48 -mb-48"></div>
      </section>
    </Layout>
  );
}
