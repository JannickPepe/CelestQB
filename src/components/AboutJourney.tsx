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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
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
                    style={{borderRadius:6}}
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-500">Streaming</h3>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        When I first dipped my toes into the vast and vibrant world of YouTube streaming, I never imagined it would become such a significant part of my life. What started as a simple passion project has blossomed into an incredible journey filled with memorable moments, personal growth, and an amazing community.
                    </p>

                    <h4 className='text-base md:text-lg font-semibold mb-2'> Building a Community: The Power of Connection</h4>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        One of the most fulfilling aspects of streaming has been building a community. The early days were slow, with only a handful of viewers, but every comment, every new subscriber, felt like a victory. Over time, this small group grew into a vibrant community of like-minded individuals who shared my passion for gaming. We have laughed together, celebrated wins, and even supported each other through tough times. The sense of connection and belonging is something I cherish deeply.
                    </p>

                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    style={{borderRadius:6}}
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-500">Game Reviews</h3>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        When I first started streaming on YouTube, I never imagined that game reviews would become such an integral part of my content. What began as a way to share my thoughts on new releases has grown into a passion that shapes my channel and connects me with a wider community of gamers. Here is a reflection on why I do game reviews and what this journey means to me.
                    </p>

                    <h4 className='text-base md:text-lg font-semibold mb-2'>The First Review: Taking the Plunge</h4>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        I vividly remember my first game review. I had just finished a game that left a profound impact on me, and I felt an overwhelming urge to talk about it. Nervously, I hit the record button and poured my thoughts into the camera, sharing what I loved, what I didn’t, and why I thought the game was worth playing. The response was modest, but the feedback was encouraging. I realized that game reviews could be a way to engage with my audience on a deeper level.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    style={{borderRadius:6}}
                >
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-500">Tutorials & Guides</h3>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        Creating tutorials and guides has become an essential part of my journey as a content creator on YouTube. Here is a reflection on why I decided to start making tutorials and guides, and what this journey has meant for me and my community.
                    </p>

                    <h4 className='text-base md:text-lg font-semibold mb-2'>The First Guide: A Leap of Faith</h4>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        The first guide I ever created was born out of necessity. I had just mastered a challenging part of a game and realized that others might be struggling with the same section. With a mix of excitement and nerves, I recorded my first tutorial, explaining each step in detail. The feedback was overwhelmingly positive, and it became clear that there was a demand for this type of content.
                    </p>
                    
                    <h4 className='text-base md:text-lg font-semibold mb-2'>Looking Ahead: More Tips to Create</h4>
                    <p className="text-gray-400 text-base mb-3 text-start">
                        As I look to the future, I am excited to continue creating tutorials and tips. There are always new games to explore, new skills to master, and new challenges to overcome. My goal is to keep providing valuable content that helps my viewers succeed and enjoy their gaming experiences to the fullest.
                    </p>
                </motion.div>
            </div>
        </div>
        </motion.section>
    );
};

export default WhatIDo;
