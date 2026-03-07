import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import RoutesAndPricing from '../components/RoutesAndPricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import { useLocation } from 'react-router-dom';

const SectionDivider = () => (
    <hr className="border-t border-slate-100" />
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
            <Testimonials />
            <Blog />
        </main>
    );
};

export default Home;
