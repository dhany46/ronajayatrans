import React from 'react';
import { Home, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: Home,
            title: 'Door to Door',
            description: 'Layanan antar jemput tepat di depan pintu rumah Anda tanpa biaya tambahan dalam kota.'
        },
        {
            icon: ShieldCheck,
            title: 'Armada Nyaman & Aman',
            description: 'Mobil terawat dengan fasilitas AC, charger, audio visual, dan asuransi Jasa Raharja.'
        },
        {
            icon: Clock,
            title: 'Tepat Waktu',
            description: 'Jadwal keberangkatan pasti dan rute perjalanan terencana untuk memastikan Anda tiba on-time.'
        },
        {
            icon: HeartHandshake,
            title: 'Layanan Ramah',
            description: 'Customer service 24 jam dan driver berpengalaman siap membantu perjalanan Anda.'
        }
    ];

    const containVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-rona-blue font-semibold tracking-wide uppercase text-sm group inline-flex mb-3">
                        Keunggulan Kami
                        <div className="h-0.5 w-12 bg-rona-mint mt-1 mx-auto" />
                    </h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Mengapa Memilih Kami?
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        Berbagai alasan kenapa Rona Jaya Trans adalah mitra perjalanan terbaik Anda.
                    </p>
                </div>

                <motion.div
                    variants={containVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                            <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-rona-blue group-hover:bg-rona-blue group-hover:text-white transition-colors">
                                <feature.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
