"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CiRead } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";


interface ShowMoreProps {
    children: React.ReactNode;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto"
            >
                {isOpen ? <CiUnread className="size-7 text-purple-500" /> : <CiRead className="size-7 text-purple-500" />}
            </button>

            {isOpen && (
                <motion.div
                    className=""
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};
