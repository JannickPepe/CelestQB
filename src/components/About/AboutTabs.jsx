"use client"

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const AboutNav = () => {
    return (
        <section className="hidden md:block">
            <SlideTabs />
        </section>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const handleScroll = (id) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } };

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-purple-700/80 text-white p-1"
        >
            <Tab setPosition={setPosition}><li onClick={() => handleScroll('mystory')}>My Story</li></Tab>
            <Tab setPosition={setPosition}><li onClick={() => handleScroll('myjourney')}>My Journey</li></Tab>
            <Tab setPosition={setPosition}><li onClick={() => handleScroll('contact')}>Contact</li></Tab>
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-white md:px-5 md:py-2"
        >
            {children}
        </div>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-9 rounded-full bg-black "
        />
    );
};