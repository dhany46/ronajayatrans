import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { createWhatsAppLink } from '../utils/whatsapp';

const FloatingWhatsApp = () => {
    const whatsappUrl = createWhatsAppLink();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
            <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-sm font-medium text-slate-700 animate-bounce relative hidden sm:block">
                Butuh bantuan? Chat kami!
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
            </div>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat via WhatsApp"
                className="w-16 h-16 bg-green-500 rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center text-white hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
            >
                <MessageCircle size={32} className="transition-transform duration-200 group-active:scale-90" />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400 group-hover:animate-ping opacity-75"></div>
            </a>
        </motion.div>
    );
};

export default FloatingWhatsApp;
