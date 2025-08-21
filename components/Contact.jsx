// components/Contact.jsx
'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact({ contact }) {
    return (
        <section id="contact" className="py-24 bg-black/20 border-t border-white/10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                        <p className="text-gray-400 mb-6">
                            Feel free to reach out for opportunities or just to say hi! Here's how you can connect with me.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Phone className="text-gray-400" size={20} />
                                <span className="text-gray-300">{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-gray-400" size={20} />
                                <span className="text-gray-300">{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="text-gray-400" size={20} />
                                <span className="text-gray-300">{contact.location}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Linkedin className="text-gray-400" size={20} />
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">linkedin.com/in/abhinandan5</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Github className="text-gray-400" size={20} />
                                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">github.com/abhinandan5</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                        action="https://formspree.io/f/mdkdqozv"
                        method="POST"
                    >
                        <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition" />
                        <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition" />
                        <textarea name="message" id="message" rows="4" required placeholder="Your Message" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"></textarea>
                        <button type="submit" className="w-full bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-all duration-300">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}