// components/Experience.jsx
'use client';
import { motion } from 'framer-motion';

export default function Experience({ experience }) {
    return (
        <section id="experience" className="py-24 bg-black/20 border-y border-white/10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Work Experience</h2>

                {/* --- Two-column grid for side-by-side view --- */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#1a1a1a] p-6 rounded-lg border border-white/10"
                        >
                            <p className="text-gray-400 mb-2 text-sm">{job.period}</p>
                            <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                            <p className="text-gray-300 mb-4">{job.company}</p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                {job.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}