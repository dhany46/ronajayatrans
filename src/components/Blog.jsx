import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
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
        }
    ];

    const containVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="blog" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-rona-blue font-semibold tracking-wide uppercase text-sm group inline-flex mb-3">
                            Artikel & Berita
                            <div className="h-0.5 w-8 bg-rona-mint mt-1 mx-auto" />
                        </h2>
                        <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Informasi Terbaru Seputar Perjalanan Anda
                        </h3>
                    </div>
                    <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-rona-blue hover:text-rona-mint transition-colors group whitespace-nowrap">
                        Lihat Semua Artikel
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Blog Grid */}
                <motion.div
                    variants={containVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {posts.map((post, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">

                            {/* Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rona-blue shadow-sm">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-rona-mint" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} className="text-rona-mint" />
                                        {post.author}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-rona-blue transition-colors">
                                    <Link to="/blog">{post.title}</Link>
                                </h4>

                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-rona-blue hover:text-rona-mint transition-colors text-sm">
                                    Baca Selengkapnya
                                    <ArrowRight size={16} />
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Blog;
