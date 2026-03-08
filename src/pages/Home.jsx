import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import RoutesAndPricing from '../components/RoutesAndPricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import { useLocation } from 'react-router-dom';

const SectionDivider = () => (
    <div className="relative py-3 sm:py-8 bg-[#edf3fb]" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent">
                <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2px] border border-slate-300/80 bg-[#edf3fb] shadow-sm" />
            </div>
        </div>
    </div>
);

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Memeriksa jika ada hash (misal #features) dari URL yang diteruskan dari halaman lain
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <About />
            <SectionDivider />
            <RoutesAndPricing />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <Blog />
        </main>
    );
};

export default Home;
