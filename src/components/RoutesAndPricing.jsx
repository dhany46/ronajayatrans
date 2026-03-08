import React, { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Phone, Clock, ChevronDown, Search, X, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createWhatsAppLink } from '../utils/whatsapp';

const RoutesAndPricing = () => {
    const cashbackPromo = 'Cashback e-wallet Rp10.000 setelah perjalanan selesai';
    const cashbackAmount = 10000;

    const parseRupiah = (priceText) => Number(priceText.replace(/[^\d]/g, '')) || 0;
    const formatRupiah = (value) => `Rp ${value.toLocaleString('id-ID')}`;
    const getPromoPricing = (priceText) => {
        const basePrice = parseRupiah(priceText);
        const finalPrice = Math.max(basePrice - cashbackAmount, 0);
        return { basePrice, finalPrice };
    };

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
    
    // Dropdown state
    const [isFromOpen, setIsFromOpen] = useState(false);
    const [isToOpen, setIsToOpen] = useState(false);

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

    const handleRouteBooking = (route) => {
        const { basePrice, finalPrice } = getPromoPricing(route.price);

        const message = [
            'Halo Rona Jaya Trans, saya ingin pesan travel dengan detail:',
            '',
            `• Rute: ${route.from} ke ${route.to}`,
            `• Harga normal: ${formatRupiah(basePrice)}`,
            `• Cashback e-wallet: ${formatRupiah(cashbackAmount)}`,
            `• Estimasi harga setelah cashback: ${formatRupiah(finalPrice)}`,
            `• Jadwal: ${route.freq}`,
            `• Promo: ${cashbackPromo}`,
            '',
            'Mohon info ketersediaan kursi untuk rute ini. Terima kasih!'
        ].join('\n');

        const whatsappUrl = createWhatsAppLink(message);
        window.open(whatsappUrl, '_blank');
    };

    const promoPricing = searchResult ? getPromoPricing(searchResult.price) : null;

    return (
        <section id="routes" className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#edf3fb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/50 border border-slate-200 shadow-sm text-rona-blue text-[13px] font-semibold mb-5 tracking-wide">
                            <MapPin size={16} strokeWidth={2} className="text-rona-blue" />
                            Rute & Harga
                        </div>

                        <h2 className="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                            Cek Rute & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rona-blue to-rona-mint italic">Harga Terbaik</span>
                        </h2>

                        <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto">
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
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 lg:sticky lg:top-28 shadow-lg">
                            
                            <div className="relative flex items-center gap-3 mb-7">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center shadow-sm">
                                    <Search size={18} className="text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 leading-tight">Cari Rute Perjalanan</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Cek ketersediaan & harga</p>
                                </div>
                            </div>

                            <div className="relative space-y-4 sm:space-y-5">
                                {/* From Select */}
                                <div className={`relative ${isFromOpen ? 'z-50' : 'z-10'}`}>
                                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                                        <MapPin size={12} className="text-rona-blue" /> Kota Asal
                                    </label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsFromOpen(!isFromOpen)}
                                            className="w-full pl-5 pr-11 py-3.5 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 text-[15px] font-medium text-slate-700 text-left hover:bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-rona-blue/20 focus:border-rona-blue/40 focus:bg-white transition-all flex items-center justify-between"
                                        >
                                            <span className={fromCity ? 'text-slate-700' : 'text-slate-500'}>
                                                {fromCity || 'Pilih kota asal'}
                                            </span>
                                            <ChevronDown size={17} className={`text-slate-400 transition-transform duration-200 ${isFromOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isFromOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-40" onClick={() => setIsFromOpen(false)} />
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute left-0 right-0 z-50 mt-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl max-h-[280px] sm:max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
                                                    >
                                                        {fromCities.map((city) => (
                                                            <button
                                                                key={city}
                                                                type="button"
                                                                onClick={() => {
                                                                    setFromCity(city);
                                                                    setToCity('');
                                                                    setHasSearched(false);
                                                                    setIsFromOpen(false);
                                                                }}
                                                                className={`w-full px-5 py-3.5 text-[15px] text-left transition-colors flex items-center justify-between border-b border-slate-100 last:border-0 ${
                                                                    fromCity === city
                                                                        ? 'bg-rona-blue/5 text-rona-blue font-semibold'
                                                                        : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                                                                }`}
                                                            >
                                                                {city}
                                                                {fromCity === city && (
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-rona-blue" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center -my-1">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center shadow-md rotate-90">
                                        <ArrowRight size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                </div>

                                {/* To Select */}
                                <div className={`relative ${isToOpen ? 'z-50' : 'z-10'}`}>
                                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                                        <MapPin size={12} className="text-rona-blue" /> Kota Tujuan
                                    </label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => fromCity && setIsToOpen(!isToOpen)}
                                            disabled={!fromCity}
                                            className="w-full pl-5 pr-11 py-3.5 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 text-[15px] font-medium text-slate-700 text-left hover:bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-rona-blue/20 focus:border-rona-blue/40 focus:bg-white transition-all flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-50 disabled:hover:border-slate-200"
                                        >
                                            <span className={toCity ? 'text-slate-700' : 'text-slate-500'}>
                                                {toCity || (fromCity ? 'Pilih kota tujuan' : 'Pilih kota asal dulu')}
                                            </span>
                                            <ChevronDown size={17} className={`text-slate-400 transition-transform duration-200 ${isToOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isToOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-40" onClick={() => setIsToOpen(false)} />
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute left-0 right-0 z-50 mt-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl max-h-[280px] sm:max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
                                                    >
                                                        {toCities.map((city) => (
                                                            <button
                                                                key={city}
                                                                type="button"
                                                                onClick={() => {
                                                                    setToCity(city);
                                                                    setHasSearched(false);
                                                                    setIsToOpen(false);
                                                                }}
                                                                className={`w-full px-5 py-3.5 text-[15px] text-left transition-colors flex items-center justify-between border-b border-slate-100 last:border-0 ${
                                                                    toCity === city
                                                                        ? 'bg-rona-blue/5 text-rona-blue font-semibold'
                                                                        : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                                                                }`}
                                                            >
                                                                {city}
                                                                {toCity === city && (
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-rona-blue" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={handleSearch}
                                    disabled={!fromCity || !toCity}
                                    className="w-full px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-rona-blue to-rona-blue/90 hover:from-rona-blue/90 hover:to-rona-blue/80 text-white text-[15px] font-bold shadow-lg shadow-rona-blue/20 hover:shadow-xl hover:shadow-rona-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 disabled:hover:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                                >
                                    <Search size={17} />
                                    Cek Harga
                                </button>
                            </div>

                            {/* Search Result */}
                            <AnimatePresence mode="wait">
                                {hasSearched && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden relative"
                                    >
                                        {searchResult ? (
                                            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-[0_14px_30px_-18px_rgba(15,23,42,0.28)]">
                                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rona-blue via-rona-mint to-rona-blue/70" />

                                                <div className="mt-2 px-1">
                                                    <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Detail Perjalanan</p>
                                                        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">Promo Aktif</span>
                                                    </div>

                                                    <div className="mt-3 space-y-2.5 text-[13px] leading-relaxed">
                                                        <div className="flex items-start justify-between gap-3 border-b border-dashed border-slate-200 pb-2.5">
                                                            <span className="text-slate-500">Rute</span>
                                                            <span className="text-right font-semibold text-slate-900">{searchResult.from} {'->'} {searchResult.to}</span>
                                                        </div>

                                                        <div className="flex items-start justify-between gap-3 border-b border-dashed border-slate-200 pb-2.5">
                                                            <span className="text-slate-500">Keberangkatan</span>
                                                            <span className="text-right font-medium text-slate-800">{searchResult.freq}</span>
                                                        </div>

                                                        <div className="flex items-start justify-between gap-3 border-b border-dashed border-slate-200 pb-2.5">
                                                            <span className="text-slate-500">Promo Cashback</span>
                                                            <span className="text-right font-medium text-emerald-700">{formatRupiah(cashbackAmount)}</span>
                                                        </div>

                                                        <div className="flex items-start justify-between gap-3 border-b border-dashed border-slate-200 pb-2.5">
                                                            <span className="text-slate-500">Harga Normal</span>
                                                            <span className="text-right font-medium text-slate-500 line-through decoration-slate-400">{formatRupiah(promoPricing.basePrice)}</span>
                                                        </div>

                                                        <div className="flex items-end justify-between gap-3 pt-1">
                                                            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">Total Bayar</span>
                                                            <span className="text-[1.85rem] leading-none font-bold tracking-tight text-rona-blue">{formatRupiah(promoPricing.finalPrice)}</span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-3.5">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRouteBooking(searchResult)}
                                                            className="w-full rounded-xl bg-gradient-to-r from-rona-mint to-[#37b68d] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(76,201,161,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(76,201,161,0.75)] active:scale-[0.98]"
                                                        >
                                                            Pesan via WhatsApp
                                                        </button>

                                                        <button onClick={handleReset} className="inline-flex items-center gap-1.5 self-start text-[12px] font-semibold text-rona-blue transition-colors hover:text-rona-blue/80">
                                                            <X size={13} /> Reset Pencarian
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
                                                <p className="text-sm text-slate-600">
                                                    Rute <span className="font-semibold text-slate-800">{fromCity}</span> → <span className="font-semibold text-slate-800">{toCity}</span> belum tersedia.
                                                </p>
                                                <p className="text-[12px] text-slate-500 mt-2">Hubungi CS kami untuk informasi rute ini.</p>
                                                <button onClick={handleReset} className="mt-3 text-rona-blue text-xs font-semibold hover:text-rona-blue/80 transition-colors">Reset Pencarian</button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* CTA inside checker */}
                            <div className="relative mt-7 pt-6 border-t border-slate-200">
                                <p className="text-[12px] text-slate-500 mb-3.5">Rute tidak tersedia?</p>
                                <a href="#contact" className="inline-flex items-center gap-2 text-rona-blue text-[14px] font-bold hover:text-rona-blue/80 transition-colors">
                                    <Phone size={15} />
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
