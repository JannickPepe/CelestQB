"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from "@/assets/icon-menu.svg";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="md:hidden">
            <button onClick={toggleMenu}>
                <MenuIcon className="w-6 h-6" />
            </button>

            {/* Menu panel with Framer Motion */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center z-50"
                >
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-purple-300 bg-purple-500 p-1.5 rounded-full">
                        Close
                    </button>

                    <nav className="flex flex-col gap-4 text-3xl">
                        <a href="/features" className="text-black/90 hover:text-purple-700 transition border-b-2 border-b-purple-800 rounded-lg">Features</a>
                        <a href="/games" className="text-black/90 hover:text-purple-700 transition border-b-2 border-b-purple-800 rounded-lg">Games</a>
                        <a href="about" className="text-black/90 hover:text-purple-700 transition border-b-2 border-b-purple-800 rounded-lg">About</a>
                        <a href="/video" className="text-black/90 hover:text-purple-700 transition border-b-2 border-b-purple-800 rounded-lg">Videos</a>
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;
