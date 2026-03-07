import React from 'react';
import { Phone, Mail, MapPin, Map, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Area */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <img src={logo} alt="Rona Jaya Trans" className="h-12 w-auto object-contain" />
                            <span className="text-2xl font-black italic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rona-blue to-rona-mint">
                                Rona Jaya Trans
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Pilihan cerdas untuk perjalanan darat Anda. Aman, Nyaman, dan Pasti Sampai Tujuan.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rona-blue hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rona-mint hover:text-slate-900 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Layanan Kami</h4>
                        <ul className="space-y-4">
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Travel Antar Kota</Link></li>
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Pengiriman Paket Kilat</Link></li>
                            <li><Link to="/#features" className="text-slate-400 hover:text-rona-mint transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rona-blue" /> Sewa Mobil Parawisata</Link></li>
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
                                    <p className="text-slate-400 text-sm">Jl. Raya Pantura No. 123, Cirebon, Jawa Barat</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rona-blue/20 text-rona-mint flex items-center justify-center shrink-0">
                                    <Map size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1">Kantor Cabang</h5>
                                    <p className="text-slate-400 text-sm">Terminal Pulo Gebang Lt. 2, Jakarta Timur</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rona-blue/20 text-rona-mint flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1">Hotline / WhatsApp</h5>
                                    <p className="text-slate-400 text-sm">+62 812 3456 7890</p>
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
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
