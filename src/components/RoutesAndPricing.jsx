import React, { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Phone, Clock, ChevronDown, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RoutesAndPricing = () => {
    const routes = [
        // KUNINGAN
        { from: 'Kuningan', to: 'Jakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Bogor', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Depok', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Tangerang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Bekasi', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Bandung', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Karawang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Cikarang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Purwakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Indramayu', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Kuningan', to: 'Bandara Soekarno-Hatta', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },

        // CIREBON
        { from: 'Cirebon', to: 'Jakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Bogor', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Depok', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Tangerang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Bekasi', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Bandung', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Karawang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Cikarang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Purwakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Cirebon', to: 'Bandara Soekarno-Hatta', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },

        // MAJALENGKA
        { from: 'Majalengka', to: 'Jakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Bogor', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Depok', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Tangerang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Bekasi', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Bandung', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Karawang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Cikarang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Purwakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Majalengka', to: 'Bandara Soekarno-Hatta', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },

        // INDRAMAYU
        { from: 'Indramayu', to: 'Jakarta', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Bogor', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Depok', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Tangerang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Bekasi', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Bandung', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Karawang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Cikarang', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Indramayu', to: 'Bandara Soekarno-Hatta', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },

        // JABODETABEK & BANDUNG REVERSE (TO CIAYUMAJAKUNING)
        ...['Jakarta', 'Bogor', 'Depok', 'Bekasi', 'Bandung', 'Karawang', 'Cikarang', 'Purwakarta'].flatMap(city => [
            { from: city, to: 'Kuningan', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
            { from: city, to: 'Cirebon', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
            { from: city, to: 'Majalengka', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
            { from: city, to: 'Indramayu', price: 'Rp 200.000', freq: 'Mulai Pukul 18.00 WIB' },
        ]),
        { from: 'Tangerang', to: 'Kuningan', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Cirebon', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Majalengka', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Indramayu', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Bekasi', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Cikarang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Karawang', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Tangerang', to: 'Purwakarta', price: 'Rp 230.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Kuningan', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Cirebon', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Majalengka', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Indramayu', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Bekasi', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Cikarang', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Karawang', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
        { from: 'Bandara Soekarno-Hatta', to: 'Purwakarta', price: 'Rp 300.000', freq: 'Mulai Pukul 18.00 WIB' },
    ];

    // Unique origin cities (all cities)
    const fromCities = useMemo(() => {
        const cities = new Set();
        routes.forEach(r => { cities.add(r.from); cities.add(r.to); });
        return [...cities].sort();
    }, []);

    // Search state
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    // Destination cities filtered by selected origin
    const toCities = useMemo(() => {
        if (!fromCity) return [];
        const cities = new Set();
        routes.filter(r => r.from === fromCity).forEach(r => cities.add(r.to));
        return [...cities].sort();
    }, [fromCity]);

    const handleSearch = () => {
        if (!fromCity || !toCity) return;
        const found = routes.find(
            r => r.from.toLowerCase() === fromCity.toLowerCase() && r.to.toLowerCase() === toCity.toLowerCase()
        );
        setSearchResult(found || null);
        setHasSearched(true);
    };

    const handleReset = () => {
        setFromCity('');
        setToCity('');
        setSearchResult(null);
        setHasSearched(false);
    };

    return (
        <section id="routes" className="pt-16 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/50 border border-slate-200 shadow-sm text-rona-blue text-[13px] font-semibold mb-5 tracking-wide">
                            <MapPin size={16} strokeWidth={2} className="text-rona-blue" />
                            Rute & Harga
                        </div>

                        <h2 className="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                            Cek Rute & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rona-blue to-rona-mint italic">Harga Terbaik</span>
                        </h2>

                        <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl">
                            Temukan rute perjalanan favorit Anda dengan harga kompetitif dan fasilitas terbaik.
                        </p>
                    </motion.div>
                </div>

                {/* 2-Column Layout: Left = Price Checker, Right = Price Table */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Column: Price Checker */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full lg:w-[45%] xl:w-[40%]"
                    >
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center">
                                    <Search size={14} className="text-white" strokeWidth={2.5} />
                                </div>
                                <h4 className="text-sm font-bold text-slate-700">Cek Harga Rute</h4>
                            </div>

                            <div className="space-y-3">
                                {/* From Select */}
                                <div>
                                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Kota Asal</label>
                                    <div className="relative">
                                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={2} />
                                        <select
                                            value={fromCity}
                                            onChange={(e) => { setFromCity(e.target.value); setToCity(''); setHasSearched(false); }}
                                            className="w-full pl-9 pr-8 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-rona-blue/20 focus:border-rona-blue/40 transition-all cursor-pointer"
                                        >
                                            <option value="">Pilih kota asal</option>
                                            {fromCities.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center shadow-sm rotate-90">
                                        <ArrowRight size={12} className="text-white" strokeWidth={3} />
                                    </div>
                                </div>

                                {/* To Select */}
                                <div>
                                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Kota Tujuan</label>
                                    <div className="relative">
                                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-rona-blue" strokeWidth={2} />
                                        <select
                                            value={toCity}
                                            onChange={(e) => { setToCity(e.target.value); setHasSearched(false); }}
                                            className="w-full pl-9 pr-8 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-rona-blue/20 focus:border-rona-blue/40 transition-all cursor-pointer"
                                        >
                                            <option value="">{fromCity ? 'Pilih kota tujuan' : 'Pilih kota asal dulu'}</option>
                                            {toCities.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={handleSearch}
                                    disabled={!fromCity || !toCity}
                                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-rona-blue to-rona-blue/90 text-white text-sm font-bold hover:shadow-[0_6px_20px_-4px_rgba(26,67,142,0.4)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 disabled:hover:translate-y-0 mt-1"
                                >
                                    Cek Harga
                                </button>
                            </div>

                            {/* Search Result */}
                            <AnimatePresence mode="wait">
                                {hasSearched && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        {searchResult ? (
                                            <div className="bg-white rounded-xl p-4 border border-rona-mint/20 shadow-sm">
                                                <div className="flex items-center gap-2 flex-wrap mb-3">
                                                    <span className="text-sm font-bold text-slate-700">{searchResult.from}</span>
                                                    <ArrowRight size={14} className="text-rona-mint" strokeWidth={2.5} />
                                                    <span className="text-sm font-bold text-slate-700">{searchResult.to}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[12px] text-slate-400 flex items-center gap-1">
                                                        <Clock size={12} /> {searchResult.freq}
                                                    </span>
                                                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-rona-blue to-rona-blue/90 text-white text-[15px] font-bold">
                                                        {searchResult.price}
                                                    </span>
                                                </div>
                                                <button onClick={handleReset} className="mt-3 text-rona-blue text-xs font-semibold hover:underline flex items-center gap-1">
                                                    <X size={12} /> Reset
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                                                <p className="text-sm text-slate-500">
                                                    Rute <span className="font-semibold text-slate-700">{fromCity}</span> → <span className="font-semibold text-slate-700">{toCity}</span> belum tersedia.
                                                </p>
                                                <p className="text-[13px] text-slate-400 mt-1">Hubungi CS kami untuk informasi rute ini.</p>
                                                <button onClick={handleReset} className="mt-2 text-rona-blue text-xs font-semibold hover:underline">Reset</button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* CTA inside checker */}
                            <div className="mt-6 pt-5 border-t border-slate-200/60">
                                <p className="text-[13px] text-slate-400 mb-3">Rute tidak tersedia?</p>
                                <a href="#contact" className="inline-flex items-center gap-2 text-rona-blue text-sm font-bold hover:underline">
                                    <Phone size={14} />
                                    Hubungi Customer Service
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Route Results */}
                    <div className="w-full lg:w-[55%] xl:w-[60%]">
                        <AnimatePresence mode="wait">
                            {fromCity && toCities.length > 0 ? (
                                <motion.div
                                    key={fromCity}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                                        {/* Header */}
                                        <div className="px-5 py-3.5 bg-gradient-to-r from-rona-blue to-rona-blue/90 flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
                                                <MapPin size={14} className="text-white" strokeWidth={2.5} />
                                            </div>
                                            <h4 className="text-white text-sm font-bold tracking-wide">Rute dari {fromCity}</h4>
                                        </div>

                                        {/* Route Rows */}
                                        <div className="divide-y divide-slate-100">
                                            {routes.filter(r => r.from === fromCity).map((route, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                                                    onClick={() => { setToCity(route.to); setSearchResult(route); setHasSearched(true); }}
                                                    className={`flex items-center justify-between px-5 py-4 hover:bg-white transition-all cursor-pointer group ${toCity === route.to ? 'bg-white ring-1 ring-rona-blue/10' : ''
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${toCity === route.to
                                                            ? 'bg-gradient-to-br from-rona-blue to-rona-mint'
                                                            : 'bg-slate-100 group-hover:bg-rona-blue/10'
                                                            }`}>
                                                            <ArrowRight size={12} className={toCity === route.to ? 'text-white' : 'text-rona-mint'} strokeWidth={2.5} />
                                                        </div>
                                                        <span className="text-[14px] font-semibold text-slate-700 truncate">{route.to}</span>
                                                    </div>
                                                    <div className="flex items-center gap-4 shrink-0">
                                                        <span className="text-[12px] text-slate-400 items-center gap-1 hidden sm:flex">
                                                            <Clock size={11} /> {route.freq}
                                                        </span>
                                                        <span className={`text-[14px] font-bold min-w-[100px] text-right transition-colors ${toCity === route.to ? 'text-white bg-gradient-to-r from-rona-blue to-rona-blue/90 px-3 py-1 rounded-full' : 'text-rona-blue'
                                                            }`}>
                                                            {route.price}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                                        <MapPin size={28} className="text-slate-300" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-300 mb-2">Pilih Kota Asal</h4>
                                    <p className="text-sm text-slate-400 max-w-[260px]">
                                        Pilih kota asal di sebelah kiri untuk melihat daftar rute & harga yang tersedia.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoutesAndPricing;
