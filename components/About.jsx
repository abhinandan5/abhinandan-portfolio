// components/About.jsx
'use client';
import { motion } from 'framer-motion';

export default function About({ summary }) {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        {summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}