import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, Info, Bus, UserCheck, Tag, Headset, ShieldCheck, Star } from 'lucide-react';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Refined Parallax Transforms (Smoother Range)
    const yText = useTransform(scrollYProgress, [0, 1], [0, -20]); // Subtle text drift
    const blobY = useTransform(scrollYProgress, [0, 1], [0, 50]); // Glow drift
    const yCarousel = useTransform(scrollYProgress, [0, 1], [0, -40]); // Image float

    // Carousel State
    const [currentImage, setCurrentImage] = useState(0);
    const carouselImages = [
        "/images/carousel-exterior.webp",
        "/images/carousel-interior.webp",
        "/images/carousel-driver.webp",
        "/images/carousel-unloading.webp",
        "/images/carousel-greeting.webp",
        "/images/carousel-group.webp"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    const features = [
        { title: 'Armada Terawat & Nyaman', icon: Bus, style: { background: '#22c5c52d', color: '#5b52dfff' } },
        { title: 'Driver Profesional & Ramah', icon: UserCheck, style: { background: '#f4fbf6', color: '#13513a' } }, // Soft mint text
        { title: 'Harga Kompetitif', icon: Tag, style: { background: '#d8dee4ff', color: '#193f8a' } }, // Soft slate blue
        { title: 'Layanan 24/7', icon: Headset, style: { background: '#fcf3eb', color: '#aa4d1c' } } // Soft muted orange
    ];

    return (
        <section id="about" ref={sectionRef} className="pt-24 pb-16 bg-slate-50 overflow-hidden font-sans relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 xl:gap-28">

                    {/* Left: Elegant Carousel */}
                    <div className="w-full lg:w-[45%] xl:w-[42%] relative min-h-[420px] sm:min-h-[500px] flex flex-col justify-center mb-10 sm:mb-0 pb-8 sm:pb-0">
                        {/* Subtle Background Glow */}
                        <motion.div
                            style={{ y: blobY }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-rona-blue/10 via-rona-mint/5 to-transparent rounded-full blur-[100px] opacity-60" />
                        </motion.div>

                        {/* Card Stack Container (Poker Hand Style) */}
                        <motion.div style={{ y: yCarousel }} className="relative w-[75%] sm:w-[60%] lg:w-[70%] xl:w-[65%] max-w-[340px] aspect-[3/4] mx-auto z-20">
                            {carouselImages.map((src, index) => {
                                // Calculate position in the stack: 
                                // 0 = active/front, 1 = right/next, N-1 = left/previous
                                const position = (index - currentImage + carouselImages.length) % carouselImages.length;

                                const isRight = position === 1;
                                const isLeft = position === carouselImages.length - 1;
                                const isVisible = position === 0 || isRight || isLeft;

                                // Cards not on the sides form a "messy deck" in the background
                                let zIndex = position === 0 ? 30 : (isVisible ? 20 : 10 - position);
                                let scale = position === 0 ? 1 : (isVisible ? 0.9 : 0.82);
                                let rotation = position === 0 ? 0 : (isRight ? 8 : (isLeft ? -8 : (position % 2 === 0 ? -2 : 2)));
                                let xOffset = position === 0 ? 0 : (isRight ? 60 : (isLeft ? -60 : 0));
                                let yOffset = position === 0 ? 0 : (isVisible ? 25 : 40 + (position * 2));
                                let opacity = position === 0 ? 1 : (isVisible ? 0.7 : 0.4);

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{
                                            zIndex: zIndex,
                                            scale: scale,
                                            x: xOffset,
                                            y: yOffset,
                                            rotateZ: rotation,
                                            opacity: opacity,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1] // Very smooth spring-like easing
                                        }}
                                        className="absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-[4px] border-white bg-slate-50 origin-bottom"
                                    >
                                        {/* Subtle overlay on background cards for depth */}
                                        {position !== 0 && (
                                            <div className="absolute inset-0 bg-white/30 z-10 transition-opacity duration-500" />
                                        )}
                                        <img
                                            src={src}
                                            className="w-full h-full object-cover"
                                            alt={`Galeri ${index + 1}`}
                                        />
                                    </motion.div>
                                );
                            })}

                            {/* Ultra-Minimalist Indicators (Dots) */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-40">
                                {carouselImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ease-out ${idx === currentImage
                                            ? 'bg-rona-blue w-8 shadow-[0_0_12px_rgba(32,163,171,0.4)]'
                                            : 'bg-slate-300 w-2 hover:bg-slate-400 hover:w-4'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Elegant Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute right-0 sm:-right-6 -bottom-8 sm:bottom-8 z-50 bg-white/70 backdrop-blur-lg p-1.5 rounded-[1.25rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/50 pointer-events-none"
                        >
                            <div className="bg-gradient-to-br from-white/90 to-white/40 border border-white/60 py-2.5 px-4 rounded-2xl flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rona-blue to-rona-mint flex items-center justify-center shadow-inner">
                                    <ShieldCheck className="w-5 h-5 text-white" />
                                </div>
                                <div className="pr-1">
                                    <div className="flex items-center gap-0.5 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <div className="text-[13px] font-bold text-rona-dark leading-none tracking-tight">Pilihan Utama</div>
                                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Terpercaya</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content with subtle Parallax */}
                    <motion.div
                        style={{ y: yText }}
                        className="w-full lg:w-[50%] xl:w-[48%] space-y-6 lg:pl-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/50 border border-slate-200 shadow-sm text-rona-blue text-[13px] font-semibold mb-5 tracking-wide">
                                <Info size={16} strokeWidth={2} className="text-rona-blue" />
                                Tentang Kami
                            </div>

                            <h2 className="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                                Mitra Perjalanan
                                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-rona-blue to-rona-mint italic pr-2 pb-1">
                                    Terpercaya Anda
                                </span>
                            </h2>

                            <div className="space-y-5 text-slate-600 text-[15px] sm:text-base leading-[1.7] max-w-lg">
                                <p>
                                    Udah 10 tahun lebih Rona Jaya Trans konsisten jadi pioneer di aspal nusantara. Kita nggak cuma sekadar nganterin kamu, tapi kurasi journey yang safe, comfy, dan pastinya auto-smooth dengan inovasi fleet terbaru.
                                </p>
                                <p>
                                    Tim pro kami siap sat-set buat menuhi kebutuhan travel kamu, mau itu hustle buat bisnis atau sekadar healing-leisure yang chill. Bersama kami, tiap kilometer jadi memori yang worth it.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-slate-200/60 mt-2">
                            {features.map((feature, idx) => {
                                const isFirst = idx === 0;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] cursor-default"
                                    >
                                        <div
                                            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm"
                                            style={feature.style}
                                        >
                                            <feature.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[13px] sm:text-[15px] font-bold text-slate-800 tracking-tight leading-snug">{feature.title}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section >
    );
};

export default About;
