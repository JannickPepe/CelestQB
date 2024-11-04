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
            <Tab setPosition={setPosition}>My Story</Tab>
            <Tab setPosition={setPosition}>My Journey</Tab>
            <Tab setPosition={setPosition}>My Medias</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
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
        </li>
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