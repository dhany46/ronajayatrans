import React, { useEffect } from 'react';
import { ChevronRight, Home as HomeIcon, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="bg-slate-900 text-white pt-24 sm:pt-28 pb-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-rona-blue/20 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-rona-mint/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
                        <ShieldCheck size={28} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Komitmen kami untuk menjaga dan melindungi data pribadi pelanggan Rona Jaya Trans.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 bg-white inline-flex py-3 px-5 rounded-full shadow-sm border border-slate-100">
                    <Link to="/" className="hover:text-rona-blue flex items-center gap-1.5 font-medium transition-colors">
                        <HomeIcon size={16} /> Beranda
                    </Link>
                    <ChevronRight size={16} />
                    <span className="text-slate-900 font-semibold">Privacy Policy</span>
                </nav>

                <article className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Informasi yang Kami Kumpulkan</h2>
                        <p>
                            Kami dapat mengumpulkan informasi seperti nama, nomor telepon, alamat penjemputan dan tujuan,
                            serta detail pemesanan yang Anda berikan saat menggunakan layanan kami.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Penggunaan Informasi</h2>
                        <p>
                            Informasi digunakan untuk memproses pemesanan, menghubungi pelanggan terkait layanan,
                            meningkatkan kualitas operasional, dan mengirimkan informasi promo jika diperlukan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Keamanan Data</h2>
                        <p>
                            Kami berupaya melindungi data pelanggan dari akses tidak sah, perubahan, atau penyalahgunaan
                            melalui prosedur dan kontrol internal yang sesuai.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Pembagian Data</h2>
                        <p>
                            Kami tidak menjual data pribadi pelanggan. Data hanya dibagikan kepada pihak terkait yang dibutuhkan
                            untuk mendukung layanan, sesuai ketentuan hukum yang berlaku.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Perubahan Kebijakan</h2>
                        <p>
                            Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan ditampilkan pada halaman ini
                            agar pelanggan selalu mendapatkan informasi terbaru.
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

export default PrivacyPolicyPage;
