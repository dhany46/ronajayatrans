import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Budi Santoso',
            role: 'Pelanggan Langganan',
            content: 'Travel paling nyaman dari Jakarta ke Cirebon. Driver sopan dan yang penting mobil selalu wangi dan bersih. Rekomendasi banget!',
            rating: 5
        },
        {
            name: 'Siti Aminah',
            role: 'Pekerja Kantoran',
            content: 'Layanan door to door sangat membantu saya yang sering dinas luar kota. Tepat waktu dan proses bookingnya via WA sangat cepat.',
            rating: 5
        },
        {
            name: 'Agus Pratama',
            role: 'Mahasiswa',
            content: 'Harganya cocok di kantong mahasiswa. Sering diskon kalau rombongan. Fasilitas lengkap ada charger juga di tiap bangku.',
            rating: 4
        }
    ];

    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-[#edf3fb] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/50 border border-slate-200 shadow-sm text-rona-blue text-[13px] font-semibold mb-5 tracking-wide">
                        <Quote size={16} strokeWidth={2} className="text-rona-blue" />
                        Testimoni
                    </div>

                    <h2 className="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                        Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-rona-blue to-rona-mint italic">Penumpang Kami?</span>
                    </h2>

                    <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto">
                        Ulasan jujur dari pelanggan yang telah merasakan perjalanan bersama Rona Jaya Trans.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            key={idx}
                            className="bg-slate-50 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100" size={48} />

                            <div className="flex text-amber-400 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-700 italic mb-8 relative z-10">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center text-white font-bold text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-sm text-slate-500">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
