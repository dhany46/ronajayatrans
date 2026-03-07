import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '/#home' },
        { name: 'Rute & Harga', href: '/#routes' },
        { name: 'Testimoni', href: '/#testimonials' },
        { name: 'Artikel', href: '/blog' },
    ];

    const isBlogPage = location.pathname === '/blog';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isBlogPage ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src={logo}
                                alt="Rona Jaya Trans"
                                className="h-14 w-auto object-contain transition-all duration-300"
                            />
                            <span className="text-2xl font-black italic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rona-blue to-rona-mint">
                                Rona Jaya Trans
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="font-medium text-white hover:text-rona-mint transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="#contact" className="flex items-center gap-2 bg-rona-blue text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-rona-blue/30">
                            <Phone size={18} />
                            <span>Pesan Sekarang</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a1628] shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top-2 duration-200 border-t border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-white/80 hover:text-rona-mint hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-rona-blue text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                <Phone size={18} />
                                <span>Pesan Sekarang via WA</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
