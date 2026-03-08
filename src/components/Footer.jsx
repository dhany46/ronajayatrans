import React from 'react';
import { Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { createWhatsAppLink } from '../utils/whatsapp';

const Footer = () => {
    const waLink = createWhatsAppLink();

    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Area */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2.5 mb-6 group">
                            <img src={logo} alt="Rona Jaya Trans" className="h-8 sm:h-10 w-auto object-contain" />
                            <span className="text-xl sm:text-2xl font-black italic leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rona-blue to-rona-mint">
                                Rona Jaya Trans
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Melayani perjalanan travel door to door, carter mobil, dan pengiriman paket untuk rute Kuningan, Cirebon, Majalengka, Indramayu, hingga Jabodetabek.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/ronajayatrans"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Rona Jaya Trans"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rona-blue hover:text-white transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/ronajayatrans"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Rona Jaya Trans"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rona-mint hover:text-slate-900 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@ronajayatrans"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok Rona Jaya Trans"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                                    <path d="M19.59 6.69A4.83 4.83 0 0 1 16.03 5v7.79a5.2 5.2 0 1 1-4.5-5.15v2.28a2.93 2.93 0 1 0 2.22 2.84V2h2.3a4.84 4.84 0 0 0 3.54 2.58z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Layanan Kami</h4>
                        <ul className="space-y-4">
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Travel Antar Kota</Link></li>
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Pengiriman Paket Kilat</Link></li>
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Sewa Mobil Pariwisata</Link></li>
                            <li><Link to="/#routes" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Info Tarif & Rute</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Hubungi Kami</h4>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rona-blue/20 text-rona-mint flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1">Kantor Pusat</h5>
                                    <p className="text-slate-400 text-sm">Jl. Raya Mancagar, Desa Mancagar, RT 01/RW 01, Kecamatan Lebakwangi, Kabupaten Kuningan 45574</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat WhatsApp Rona Jaya Trans"
                                    className="w-12 h-12 rounded-xl bg-rona-blue/20 text-rona-mint flex items-center justify-center shrink-0 hover:bg-rona-mint hover:text-slate-900 transition-colors"
                                >
                                    <MessageCircle size={24} />
                                </a>
                                <div>
                                    <h5 className="font-bold text-white mb-1">Hotline / WhatsApp</h5>
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 text-sm hover:text-rona-mint transition-colors"
                                    >
                                        +62 857-2765-8604
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rona-blue/20 text-rona-mint flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1">Email</h5>
                                    <p className="text-slate-400 text-sm">cs@ronajayatrans.co.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 mt-12 text-center flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Rona Jaya Trans. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-slate-500">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
