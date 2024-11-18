"use client"

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const WhatIDo: React.FC = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=" text-white"
        >
        <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6 } }}
            >
                The <span className='text-purple-600'>QB</span> Journey
            </motion.h2>
            <motion.p
                className="text-lg md:text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
            >
                Bringing the best in gaming and streaming experiences to life.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Streaming</h3>
                    <p className="text-gray-400 text-base">
                        Engaging live streams with interactive content and real-time gameplay.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Game Reviews</h3>
                    <p className="text-gray-400 text-base">
                        In-depth game reviews, highlighting the best and worst aspects of your favorite titles.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">Tutorials & Guides</h3>
                    <p className="text-gray-400 text-base">
                        Comprehensive tutorials and guides to help you master your favorite games.
                    </p>
                </motion.div>
            </div>
        </div>
        </motion.section>
    );
};

export default WhatIDo;
