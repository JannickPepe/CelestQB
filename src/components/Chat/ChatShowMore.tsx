"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CiRead } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";
import { PiCursorClickBold } from "react-icons/pi";



interface ShowMoreProps {
    children: React.ReactNode;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs flex mx-auto"
            >
                {isOpen ? <CiUnread className="size-6 text-violet-500 mt-6 hover:text-white transition-colors" /> : 
                    <div className="flex items-center gap-1 text-base mt-6">
                        Get the <span className="text-purple-400">Latest</span> Questions here 
                        <PiCursorClickBold className="size-5 text-violet-500 ml-1 hover:text-white transition-colors" />
                    </div>
                }
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
