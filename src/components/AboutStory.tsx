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
            className=" text-white"
        >
            <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                    className="text-2xl md:text-4xl lg:text-5xl mt-28 font-bold mb-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6 } }}
                >
                    The <span className='text-purple-600'>QB</span> Story
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
                >
                    Sharing my passion for gaming and streaming with the world.
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        whileHover="hover"
                        variants={imageVariants}
                        className="bg-gray-800 p-6 border-2 border-violet-700 shadow-lg rounded-xl"
                    >
                        <h3 className="text-lg md:text-2xl font-semibold mb-3">Streaming Highlights</h3>
                        <p className="text-gray-400 mb-4 text-base">
                            Engaging live streams with interactive content and real-time gameplay. Join me as I take on various challenges and interact with viewers in real-time.
                        </p>
                    
                        <h4 className='text-base md:text-lg font-semibold mb-3'>Live Gameplay and Interaction</h4>
                        <p className="text-gray-400 mb-4 text-base">
                        Whether its the latest game release or an old favorite, the gameplay is at the heart of the stream. But its the interaction that truly brings it to life. I engage with my viewers, responding to their comments, taking on their challenges, and sharing tips and tricks. Their excitement and support fuel my performance.
                        </p>

                        <h4 className='text-base md:text-lg font-semibold mb-3'>Highlight Moments</h4>
                        <p className="text-gray-400 mb-4 text-base">
                        Every stream has its unforgettable moments. From epic in-game victories to hilarious fails, these highlights are what make each session unique. I often find myself laughing along with the chat, celebrating the wins, and strategizing for the next big move.
                        </p>

                    </motion.div>
                    <motion.div
                        whileHover="hover"
                        variants={imageVariants}
                        className="bg-gray-800 p-6 border-2 border-violet-700 shadow-lg rounded-xl"
                    >
                        <h3 className="text-lg md:text-2xl font-semibold mb-3">Epic Game Reviews</h3>
                        <p className="text-gray-400 mb-4 text-base">
                            In-depth reviews of the latest and greatest games. Discover what makes these games stand out and why theyre worth playing.
                        </p>

                        <h4 className='text-base md:text-lg font-semibold mb-3'>Honest Opinions</h4>
                        <p className="text-gray-400 mb-4 text-base">
                            Transparency is key in my reviews. I share my genuine thoughts on each game, highlighting both the positives and the areas that could use improvement. Whether a game is a groundbreaking masterpiece or a bit of a letdown, my audience can always count on my honest take. This helps viewers make informed decisions about which games are worth their time and money.
                        </p>
                        <h4 className='text-base md:text-lg font-semibold mb-3'>Highlights and Drawbacks</h4>
                        <p className="text-gray-400 mb-4 text-base">
                            Every game has its standout moments and, sometimes, its pitfalls. I break down these aspects in detail, discussing the highlights that make a game shine, as well as any drawbacks that may hinder the experience. This balanced approach ensures that viewers get a well-rounded perspective on each title.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default StorySection;
