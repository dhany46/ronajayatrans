import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Anda bisa memisahkan data ini nanti ke file terpisah atau memanggilnya dari API API
    const allPosts = [
        {
            title: "5 Tips Nyaman Saat Perjalanan Jauh Menggunakan Travel",
            excerpt: "Perjalanan antar kota bisa terasa melelahkan. Coba 5 tips jitu ini agar perjalanan darat Anda lebih santai dan nyaman sampai tujuan.",
            image: "/images/blog/tips-travel.png",
            date: "12 Okt 2026",
            category: "Tips Travel",
            author: "Admin"
        },
        {
            title: "Rute Baru! Travel Jakarta - Semarang Kini Tersedia",
            excerpt: "Kabar gembira untuk pelanggan setia Rona Jaya Trans. Kami resmi membuka rute baru untuk perjalanan mudik atau dinas ke Semarang.",
            image: "/images/blog/new-route.png",
            date: "28 Sep 2026",
            category: "Info Promo",
            author: "Tim Rona"
        },
        {
            title: "Pilih Travel Door to Door atau Titip Point? Ini Bedanya",
            excerpt: "Masih bingung memilih layanan travel yang tepat? Mari kupas tuntas perbedaan serta keuntungan dari layanan jemput alamat vs pool ke pool.",
            image: "/images/blog/door-to-door.png",
            date: "15 Sep 2026",
            category: "Panduan",
            author: "Admin"
        },
        {
            title: "Mengenal Fasilitas Kelas Eksekutif Rona Jaya Trans",
            excerpt: "Apa saja fasilitas yang akan Anda dapatkan di armada kelas eksekutif kami? Dari AC, Port USB, hingga kursi Reclining Seat yang empuk.",
            image: "/images/blog/executive-fleet.png",
            date: "05 Sep 2026",
            category: "Info Layanan",
            author: "Tim Rona"
        },
        {
            title: "5 Alasan Mengapa Harus Booking Travel Lebih Awal",
            excerpt: "Sering kehabisan kursi saat musim liburan? Menghindari lonjakan harga dengan memesan lebih awal adalah trik terbaik para traveler cerdas.",
            image: "/images/blog/booking-tips.png",
            date: "20 Agu 2026",
            category: "Tips Travel",
            author: "Admin"
        },
        {
            title: "Protokol Kesehatan Terkini di Armada Kami",
            excerpt: "Keamanan Anda adalah prioritas kami. Simak protokol kebersihan armada harian yang secara rutin dilakukan tim maintenance Rona Jaya Trans.",
            image: "/images/carousel-interior.webp", // Fallback to carousel interior
            date: "10 Agu 2026",
            category: "Info Layanan",
            author: "Tim Rona"
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-24 min-h-screen bg-slate-50 pb-20">

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-rona-blue/20 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-rona-mint/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog & Artikel Travel</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Temukan panduan, tips perjalanan, review destinasi wisata, serta kabar terbaru dan promo khusus dari Rona Jaya Trans.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 bg-white inline-flex py-3 px-5 rounded-full shadow-sm border border-slate-100">
                    <Link to="/" className="hover:text-rona-blue flex items-center gap-1.5 font-medium transition-colors">
                        <HomeIcon size={16} /> Beranda
                    </Link>
                    <ChevronRight size={16} />
                    <span className="text-slate-900 font-semibold">Artikel</span>
                </nav>

                {/* Categories / Filter Options (Static for now) */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {["Semua Artikel", "Tips Travel", "Info Promo", "Info Layanan", "Panduan"].map((category, i) => (
                        <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-rona-blue text-white shadow-md shadow-rona-blue/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >

                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden shrink-0">
                                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-extrabold text-rona-blue shadow-sm uppercase tracking-wide">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-4">
                                    <div className="flex items-center gap-1.5 text-rona-blue">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} />
                                        {post.author}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-rona-blue transition-colors">
                                    <a href="#">{post.title}</a>
                                </h4>

                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 font-bold text-rona-mint group-hover:text-rona-blue transition-colors text-sm uppercase tracking-wider mt-auto pt-4 border-t border-slate-50">
                                    Baca Selengkapnya
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Pagination Dummy */}
                <div className="mt-16 flex justify-center gap-2">
                    <button className="w-10 h-10 rounded-full bg-rona-blue text-white font-medium flex items-center justify-center shadow-md">1</button>
                    <button className="w-10 h-10 rounded-full bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 font-medium flex items-center justify-center transition-colors">2</button>
                    <button className="w-10 h-10 rounded-full bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 font-medium flex items-center justify-center transition-colors">...</button>
                    <button className="w-10 h-10 rounded-full bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 font-medium flex items-center justify-center transition-colors">
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
