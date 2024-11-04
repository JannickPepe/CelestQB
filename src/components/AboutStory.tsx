"use client"

import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const StorySection: React.FC = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="pb-10 pt-10 md:pb-20 md:pt-10 text-white"
        >
        <div className="container mx-auto px-6 lg:px-12">
            <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6 } }}
            >
                The <span className='text-purple-600'>QB</span> Story
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
            >
                Sharing my passion for gaming and streaming with the world.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    whileHover="hover"
                    variants={imageVariants}
                    className="bg-gray-800 p-6 border-2 border-violet-700 shadow-lg rounded-xl"
                >
                    <h3 className="text-2xl font-semibold mb-3">Streaming Highlights</h3>
                    <p className="text-gray-400 mb-4">
                        Engaging live streams with interactive content and real-time gameplay. Join me as I take on various challenges and interact with viewers in real-time.
                    </p>
                
                </motion.div>
                <motion.div
                    whileHover="hover"
                    variants={imageVariants}
                    className="bg-gray-800 p-6 border-2 border-violet-700 shadow-lg rounded-xl"
                >
                    <h3 className="text-2xl font-semibold mb-3">Epic Game Reviews</h3>
                    <p className="text-gray-400 mb-4">
                        In-depth reviews of the latest and greatest games. Discover what makes these games stand out and why theyre worth playing.
                    </p>
            
                </motion.div>
            </div>
        </div>
        </motion.section>
    );
};

export default StorySection;
