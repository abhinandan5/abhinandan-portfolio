'use client';
import { motion } from 'framer-motion';

export default function Header({ scrollToSection }) {
    const navItems = ['About', 'Experience', 'Projects'];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <div
                    className="font-bold text-lg text-white cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    Abhinandan
                </div>
                <nav className="hidden md:flex items-center gap-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                    Contact Me
                </button>
            </div>
        </motion.header>
    );
}