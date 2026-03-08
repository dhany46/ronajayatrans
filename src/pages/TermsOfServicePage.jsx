import React, { useEffect } from 'react';
import { ChevronRight, ClipboardList, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="bg-slate-900 text-white pt-24 sm:pt-28 pb-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-rona-blue/20 mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-rona-mint/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
                        <ClipboardList size={28} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Syarat dan ketentuan penggunaan layanan transportasi dan pengiriman Rona Jaya Trans.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 bg-white inline-flex py-3 px-5 rounded-full shadow-sm border border-slate-100">
                    <Link to="/" className="hover:text-rona-blue flex items-center gap-1.5 font-medium transition-colors">
                        <HomeIcon size={16} /> Beranda
                    </Link>
                    <ChevronRight size={16} />
                    <span className="text-slate-900 font-semibold">Terms of Service</span>
                </nav>

                <article className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Ruang Lingkup Layanan</h2>
                        <p>
                            Rona Jaya Trans menyediakan layanan travel door to door, carter mobil, dan pengiriman paket
                            sesuai area operasional dan jadwal yang berlaku.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Pemesanan dan Pembayaran</h2>
                        <p>
                            Pelanggan wajib memberikan data pemesanan yang benar. Ketentuan pembayaran, DP, atau pelunasan
                            mengikuti informasi yang disampaikan saat konfirmasi pemesanan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Kebijakan Pembatalan</h2>
                        <p>
                            Pembatalan atau perubahan jadwal dapat dikenakan ketentuan biaya tertentu bergantung pada waktu
                            konfirmasi dan ketersediaan armada.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Tanggung Jawab Pelanggan</h2>
                        <p>
                            Pelanggan bertanggung jawab atas ketepatan informasi penjemputan, keamanan barang bawaan,
                            dan kepatuhan terhadap aturan selama perjalanan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Batas Tanggung Jawab Layanan</h2>
                        <p>
                            Kami berupaya memberikan layanan terbaik, namun keterlambatan dapat terjadi karena kondisi lalu
                            lintas, cuaca, atau hal di luar kendali operasional.
                        </p>
                    </section>

                    <p className="text-sm text-slate-500 pt-2 border-t border-slate-100">
                        Terakhir diperbarui: 8 Maret 2026.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
