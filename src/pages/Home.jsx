import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import { useLocation } from 'react-router-dom';

// Lazy load non-critical sections
const About = lazy(() => import('../components/About'));
const RoutesAndPricing = lazy(() => import('../components/RoutesAndPricing'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Blog = lazy(() => import('../components/Blog'));

const SectionDivider = () => (
    <div className="relative py-2 sm:py-8 bg-[#edf3fb]" aria-hidden="true">
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
            <Suspense fallback={<LoadingSkeleton />}>
                <About />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<LoadingSkeleton />}>
                <RoutesAndPricing />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<LoadingSkeleton />}>
                <Testimonials />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<LoadingSkeleton />}>
                <Blog />
            </Suspense>
        </main>
    );
};

// Enhanced loading skeleton component
const LoadingSkeleton = () => (
    <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-b from-white to-slate-50/50 py-20">
        <div className="text-center space-y-4">
            {/* Animated spinner */}
            <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-rona-blue border-t-transparent animate-spin"></div>
            </div>
            {/* Loading text with pulse */}
            <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600 animate-pulse">Memuat konten...</p>
                <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-rona-blue animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-rona-mint animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-rona-blue animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
