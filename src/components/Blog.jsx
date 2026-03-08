import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const posts = blogPosts.slice(0, 3);

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
        <section id="blog" className="py-16 sm:py-24 bg-[#edf3fb] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/50 border border-slate-200 shadow-sm text-rona-blue text-[13px] font-semibold mb-5 tracking-wide">
                        <Calendar size={16} strokeWidth={2} className="text-rona-blue" />
                        Artikel & Berita
                    </div>

                    <h2 className="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                        Informasi Terbaru <span className="text-transparent bg-clip-text bg-gradient-to-r from-rona-blue to-rona-mint italic">Seputar Perjalanan Anda</span>
                    </h2>

                    <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto mb-6">
                        Temukan tips, promo, dan panduan perjalanan terbaru dari Rona Jaya Trans.
                    </p>

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
                        <motion.div key={post.slug} variants={itemVariants} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">

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
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>

                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-bold text-rona-blue hover:text-rona-mint transition-colors text-sm">
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
