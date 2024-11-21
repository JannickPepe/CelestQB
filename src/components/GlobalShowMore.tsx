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
        <div className="">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs"
            >
                {isOpen ? <CiUnread className="size-6 text-purple-500" /> : <div className="flex items-center gap-1 text-xs">General Info & The Newest Video <CiRead className="size-6 text-purple-500" /></div>}
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
