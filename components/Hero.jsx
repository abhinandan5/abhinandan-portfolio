// components/Hero.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, Download } from 'lucide-react';

export default function Hero({ contact, scrollToSection }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            className="min-h-[80vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 z-0 glow-effect"
                style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-white/20">
                    <Image
                        src="/my-photo.png"
                        alt="Abhinandan's Photo"
                        width={96}
                        height={96}
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2">
                    Hi, I'm Abhinandan
                </h1>
                <p className="text-3xl md:text-4xl text-gray-400 mb-8">
                    Software Developer
                </p>

                <div className="flex justify-center items-center space-x-6 mb-8">
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><Linkedin size={24} /></a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><Github size={24} /></a>
                    <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><Mail size={24} /></a>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                        Get In Touch
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1lCyEGNwrKjiSCROuzcJybeqpP4Trm9bi/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        <Download size={20} className="mr-2" />
                        Download CV
                    </a>
                </div>
            </motion.div>
        </section>
    );
}