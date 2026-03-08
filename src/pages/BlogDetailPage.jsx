import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find((item) => item.slug === slug);

    const relatedPosts = post
        ? [
            ...blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category),
            ...blogPosts.filter((item) => item.slug !== post.slug && item.category !== post.category)
        ].slice(0, 3)
        : [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Artikel Tidak Ditemukan</h1>
                    <p className="text-slate-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau sudah dipindahkan.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rona-blue text-white font-semibold hover:bg-blue-700 transition-colors">
                        <ArrowLeft size={18} /> Kembali ke Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-slate-50 pb-20">
            <div className="bg-slate-900 text-white pt-24 sm:pt-28 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-rona-blue/20 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-rona-mint/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                        <Link to="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
                            <HomeIcon size={16} /> Beranda
                        </Link>
                        <ChevronRight size={16} />
                        <Link to="/blog" className="hover:text-white transition-colors">Artikel</Link>
                        <ChevronRight size={16} />
                        <span className="text-white font-semibold">Detail</span>
                    </nav>

                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide uppercase">
                        {post.category}
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
                        <span className="inline-flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                        <span className="inline-flex items-center gap-2"><User size={16} /> {post.author}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm mb-8 bg-white">
                    <img src={post.image} alt={post.title} className="w-full h-auto max-h-[460px] object-cover" />
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">{post.excerpt}</p>

                    {post.content.map((paragraph, idx) => (
                        <p key={idx} className="text-slate-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}

                    <div className="pt-6 border-t border-slate-100">
                        <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-rona-blue hover:text-rona-mint transition-colors">
                            <ArrowLeft size={18} /> Kembali ke semua artikel
                        </Link>
                    </div>
                </div>

                {relatedPosts.length > 0 && (
                    <section className="mt-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-2xl font-extrabold text-slate-900">Artikel Terkait</h2>
                            <Link to="/blog" className="text-sm font-semibold text-rona-blue hover:text-rona-mint transition-colors">
                                Lihat semua
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            {relatedPosts.map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/blog/${item.slug}`}
                                    className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
                                >
                                    <div className="h-36 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-flex px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-rona-blue transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
};

export default BlogDetailPage;
