"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const iconVariants = {
    hover: { scale: 1.2, rotate: 10 },
    tap: { scale: 0.8, rotate: -10 },
};

const MediaIconBar: React.FC = () => {
    return (
        <div className="flex justify-center gap-4 mt-8">
            <motion.a
                href="https://facebook.com"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                className="text-blue-600"
            >
                <FaFacebook size={32} />
            </motion.a>
            <motion.a
                href="https://twitter.com"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                className="text-blue-400"
            >
                <FaTwitter size={32} />
            </motion.a>
            <motion.a
                href="https://instagram.com"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                className="text-pink-600"
            >
                <FaInstagram size={32} />
            </motion.a>
            <motion.a
                href="https://linkedin.com"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                className="text-red-700"
            >
                <FaYoutube size={32} />
            </motion.a>
        </div>
    );
};

export default MediaIconBar;
