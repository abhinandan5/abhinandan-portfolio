'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-[#1a1a1a] p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                            >
                                <div className="h-48 bg-gray-700 rounded-md mb-4 overflow-hidden relative">
                                    <Image
                                        src={project.image}
                                        alt={`${project.name} Thumbnail`}
                                        layout="fill"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                    <p className="text-gray-400 my-4">{project.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">{t}</span>
                                            ))}
                                        </div>
                                        <div className="text-gray-400 group-hover:text-white">
                                            <ExternalLink size={20} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}