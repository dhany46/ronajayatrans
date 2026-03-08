import React, { useId, useState } from 'react';
import { MapPin, Calendar, Users, Send, Shield, Clock, Star, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker, { registerLocale } from 'react-datepicker';
import { id } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { createWhatsAppLink } from '../utils/whatsapp';

registerLocale('id', id);

const Hero = () => {
    const [formData, setFormData] = useState({
        service: 'travel',
        origin: '',
        destination: '',
        date: null,
        seats: '1',
        weight: '',
        vehicle: 'Toyota Hiace'
    });

    const handleWhatsAppBooking = (e) => {
        e.preventDefault();
        const { service, origin, destination, date, seats } = formData;

        const serviceLabels = { travel: 'Pesan Travel', carter: 'Carter Mobil', paket: 'Kirim Paket' };

        const formattedDate = date
            ? date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            : '-';

        const message = [
            `Halo Rona Jaya Trans, saya ingin *${serviceLabels[service]}*:`,
            '',
            '• *Layanan:* ' + serviceLabels[service],
            '• *Asal:* ' + (origin || '-'),
            '• *Tujuan:* ' + (destination || '-'),
            '• *Tanggal:* ' + formattedDate,
            ...(service === 'travel' ? ['• *Jumlah Seat:* ' + seats] : []),
            ...(service === 'carter' ? ['• *Mobil:* ' + formData.vehicle] : []),
            ...(service === 'paket' ? ['• *Berat Paket:* ' + (formData.weight || '-')] : []),
            '',
            'Mohon info ketersediaan jadwalnya. Terima kasih!'
        ].join('\n');

        const whatsappUrl = createWhatsAppLink(message);
        window.open(whatsappUrl, '_blank');
    };

    const stats = [
        { img: '/images/stats/exp.webp', value: '10 Thn', label: 'Pengalaman' },
        { img: '/images/stats/price.webp', value: 'Termurah', label: 'Harga Terbaik' },
        { img: '/images/stats/rating.webp', value: '4.9', label: 'Rating Bintang' },
    ];

    const CustomSelect = ({ value, onChange, options, icon: Icon, label }) => {
        const [isOpen, setIsOpen] = useState(false);
        const listboxId = useId();

        return (
            <div className={`relative ${isOpen ? 'z-[120]' : 'z-20'}`}>
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                    <Icon size={12} className="text-rona-mint" /> {label}
                </label>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                setIsOpen((prev) => !prev);
                            }
                            if (event.key === 'Escape') {
                                setIsOpen(false);
                            }
                        }}
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                        aria-controls={listboxId}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white flex items-center justify-between hover:bg-white/[0.15] hover:border-white/30 transition-all duration-300 shadow-inner"
                    >
                        <span>{value}</span>
                        <ChevronDown size={16} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <>
                                <div className="fixed inset-0 z-[110]" onClick={() => setIsOpen(false)} />
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    id={listboxId}
                                    role="listbox"
                                    tabIndex={-1}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Escape') {
                                            setIsOpen(false);
                                        }
                                    }}
                                    className="absolute left-0 right-0 z-[120] bottom-full mb-2 sm:bottom-auto sm:top-full sm:mb-0 sm:mt-2 bg-[#0d1b2a] backdrop-blur-xl border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl py-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                >
                                    {options.map((opt) => (
                                        <button
                                            key={(opt.val || opt).toString()}
                                            type="button"
                                            role="option"
                                            aria-selected={value === (opt.val || opt)}
                                            onClick={() => {
                                                onChange(opt);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full px-5 py-3 text-sm text-left transition-colors flex items-center justify-between ${value === (opt.val || opt)
                                                ? 'bg-rona-mint/20 text-rona-mint font-semibold'
                                                : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                                                }`}
                                        >
                                            {opt.label || opt}
                                            {value === (opt.val || opt) && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-rona-mint shadow-[0_0_8px_rgba(76,201,161,0.6)]" />
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        );
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#040d1b]">
            {/* Premium Background Layers */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#040d1b] to-[#0a1e3d]" />
                {/* Image layer */}
                <img
                    src="/hero-bg.webp"
                    alt="Armada Travel Rona Jaya Trans"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
                />
                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#040d1b] to-transparent" />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040d1b] to-transparent" />
                {/* Accent glows */}
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-rona-mint/8 blur-[150px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-rona-blue/15 blur-[120px]" />

            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:py-20 flex flex-col justify-center">
                <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

                    {/* Left Content — 7 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative lg:col-span-7 text-center lg:text-left pt-4 sm:pt-6 lg:pt-0"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-rona-mint/90 mb-6 sm:mb-10 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rona-mint opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-rona-mint" />
                            </span>
                            <span className="text-[11px] sm:text-sm font-semibold tracking-wide">Layanan Travel Door to Door</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tight leading-[1.1] mb-5 sm:mb-8">
                            <span className="block">Perjalanan</span>
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rona-mint via-[#5dd9b4] to-rona-blue italic">
                                Nyaman & Aman
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-[15px] sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
                            Nikmati layanan jemput antar langsung dari alamat Anda tanpa perlu ke terminal. Armada terawat, pengemudi profesional, dan tarif kompetitif siap mendukung perjalanan yang lebih nyaman bersama <span className="text-white font-medium">Rona Jaya Trans</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-5 sm:mb-14 px-0 sm:px-0">
                            <a href="#routes" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-rona-mint to-[#3db38c] text-white font-bold text-[15px] sm:text-base hover:shadow-lg hover:shadow-rona-mint/25 transition-all transform hover:-translate-y-0.5 active:scale-95 active:shadow-md flex items-center justify-center gap-2 min-h-11">
                                Lihat Rute & Tarif
                                <ChevronRight size={18} className="transition-transform duration-200 group-active:translate-x-0.5" />
                            </a>
                            <a href="#about" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-[15px] sm:text-base hover:bg-white/10 active:bg-white/15 active:scale-95 transition-all flex items-center justify-center min-h-11">
                                Mengapa Kami?
                            </a>
                        </div>

                        {/* Stats Row - Desktop only */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="relative hidden lg:flex flex-nowrap items-center gap-10 mb-10 overflow-hidden"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3 shrink-0 overflow-hidden">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <img src={stat.img} alt={stat.label} loading="lazy" decoding="async" className="w-full h-full object-contain mix-blend-screen brightness-110" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-white leading-none whitespace-nowrap">{stat.value}</div>
                                        <div className="text-xs text-slate-500 mt-1 whitespace-nowrap">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Booking Form — 5 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="relative lg:col-span-5"
                    >
                        <div className="relative">
                            {/* Form glow */}
                            <div className="absolute -inset-4 bg-rona-mint/5 rounded-[3rem] blur-3xl opacity-40 pointer-events-none" />
                            <div className="absolute -inset-4 bg-rona-blue/10 rounded-[3rem] blur-3xl opacity-30 pointer-events-none translate-x-8 translate-y-8" />

                            <div className="relative bg-gradient-to-br from-[#1a438e]/40 via-[#0d1b2a]/98 to-[#0a1929]/95 backdrop-blur-3xl border border-white/[0.15] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]">
                                {/* Form Header */}
                                <div className="flex items-center gap-3 mb-5 sm:mb-7">
                                    <div className="w-10 h-10 rounded-xl bg-rona-mint/15 flex items-center justify-center">
                                        <Send size={18} className="text-rona-mint" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white leading-tight">Reservasi Cepat</h2>
                                        <p className="text-xs text-slate-400">Konfirmasi pemesanan langsung via WhatsApp</p>
                                    </div>
                                </div>

                                <form onSubmit={handleWhatsAppBooking} className="space-y-3.5 sm:space-y-4">
                                    {/* Service Type */}
                                    <div>
                                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <Send size={12} className="text-rona-mint" /> Jenis Layanan
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[{ val: 'travel', label: 'Travel' }, { val: 'carter', label: 'Carter' }, { val: 'paket', label: 'Paket' }].map(opt => (
                                                <button
                                                    key={opt.val}
                                                    type="button"
                                                    onClick={() => setFormData({
                                                        service: opt.val,
                                                        origin: '',
                                                        destination: '',
                                                        date: null,
                                                        seats: '1',
                                                        weight: '',
                                                        vehicle: 'Toyota Avanza'
                                                    })}
                                                    className={`py-3 rounded-2xl text-[11px] font-bold tracking-wider transition-all duration-300 border active:scale-95 ${formData.service === opt.val
                                                        ? 'bg-rona-mint/15 border-rona-mint/50 text-rona-mint shadow-[0_0_20px_rgba(76,201,161,0.2)]'
                                                        : 'bg-white/[0.08] border-white/15 text-slate-400 hover:bg-white/[0.12] hover:border-white/25 hover:text-slate-300 active:bg-white/20'
                                                        }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Origin */}
                                    <div>
                                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <MapPin size={12} className="text-rona-mint" /> Kota Asal
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Contoh: Jakarta"
                                            required
                                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rona-mint/50 focus:bg-white/[0.15] focus:ring-4 focus:ring-rona-mint/15 focus:scale-[1.01] transition-all duration-300 shadow-inner"
                                            value={formData.origin}
                                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                        />
                                    </div>

                                    {/* Destination */}
                                    <div>
                                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <MapPin size={12} className="text-rona-mint" /> Kota Tujuan
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Contoh: Bandung"
                                            required
                                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rona-mint/50 focus:bg-white/[0.15] focus:ring-4 focus:ring-rona-mint/15 focus:scale-[1.01] transition-all duration-300 shadow-inner"
                                            value={formData.destination}
                                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                        />
                                    </div>

                                    {/* Date row + conditional second field */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                                <Calendar size={12} className="text-rona-mint" /> Tanggal
                                            </label>
                                            <DatePicker
                                                selected={formData.date}
                                                onChange={(date) => setFormData({ ...formData, date })}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                placeholderText="Pilih tanggal"
                                                locale="id"
                                                popperPlacement="top-start"
                                                popperProps={{ strategy: 'fixed' }}
                                                popperModifiers={[
                                                    { name: 'preventOverflow', options: { boundary: 'viewport', padding: 16 } },
                                                    { name: 'flip', options: { fallbackPlacements: ['top-start', 'top-end', 'bottom-start'] } }
                                                ]}
                                                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rona-mint/50 focus:bg-white/[0.15] focus:ring-4 focus:ring-rona-mint/15 focus:scale-[1.01] transition-all duration-300 cursor-pointer shadow-inner"
                                                calendarClassName="rona-datepicker"
                                                required
                                            />
                                        </div>
                                        {formData.service === 'travel' && (
                                            <CustomSelect
                                                label="Seat"
                                                icon={Users}
                                                value={`${formData.seats} Kursi`}
                                                options={[1, 2, 3, 4, 5, 6].map(num => ({ val: num.toString(), label: `${num} Kursi` }))}
                                                onChange={(opt) => setFormData({ ...formData, seats: opt.val })}
                                            />
                                        )}
                                        {formData.service === 'carter' && (
                                            <CustomSelect
                                                label="Mobil"
                                                icon={Users}
                                                value={formData.vehicle}
                                                options={['Toyota Avanza', 'Toyota Hiace', 'Suzuki APV', 'Daihatsu Luxio', 'Daihatsu Grandmax', 'Isuzu Elf Long'].map(v => ({ val: v, label: v }))}
                                                onChange={(opt) => setFormData({ ...formData, vehicle: opt.val })}
                                            />
                                        )}
                                        {formData.service === 'paket' && (
                                            <div>
                                                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                                    <Shield size={12} className="text-rona-mint" /> Berat Paket
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Cth: 5 kg"
                                                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rona-mint/50 focus:bg-white/[0.15] focus:ring-4 focus:ring-rona-mint/15 focus:scale-[1.01] transition-all duration-300 shadow-inner"
                                                    value={formData.weight}
                                                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-rona-mint/90 to-[#3db38c]/90 hover:from-rona-mint hover:to-[#3db38c] text-white font-bold rounded-2xl shadow-[0_20px_40px_-12px_rgba(76,201,161,0.3)] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 active:shadow-[0_10px_25px_-8px_rgba(76,201,161,0.4)] mt-4 text-sm tracking-wide"
                                    >
                                        <Send size={16} className="transition-transform duration-200 group-active:translate-x-0.5" />
                                        Pesan via WhatsApp
                                    </button>
                                </form>

                                {/* Trust badge */}
                                <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center justify-center gap-2 text-[11px] text-slate-500">
                                    <Shield size={12} className="text-rona-mint/60" />
                                    Data Anda aman & tidak disimpan
                                </div>
                            </div>

                            {/* Mobile Stats Row - only shows on mobile/tablet */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="relative flex lg:hidden items-center justify-center gap-3 sm:gap-8 mt-6 sm:mt-8 px-1"
                            >
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5">
                                        <div className="w-9 h-9 flex items-center justify-center shrink-0">
                                            <img src={stat.img} alt={stat.label} loading="lazy" decoding="async" className="w-full h-full object-contain mix-blend-screen brightness-110" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white leading-none whitespace-nowrap">{stat.value}</div>
                                            <div className="text-[9px] text-slate-500 mt-0.5 whitespace-nowrap">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rona-mint/20 to-transparent" />
        </section>
    );
};

export default Hero;
