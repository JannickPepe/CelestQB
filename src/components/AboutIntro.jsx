"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutAniText = () => {
    return (
        <div className="px-4 py-10 text-center">
            <div className="text-2xl font-medium text-zinc-300 sm:text-3xl md:text-4xl lg:text-5xl">
                CelestQB Gaming Offers:
                <AnimatedText
                phrases={[
                    "Star Wars BF2",
                    "Wukong",
                    "Elden Ring",
                    "Dragon Ball",
                    "Dark Souls",
                ]}
                />
            </div>
        </div>
    );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
        setActive((pv) => (pv + 1) % phrases.length);
        }, WAIT_TIME);

        return () => clearInterval(intervalRef);
    }, [phrases]);

    return (
        <div className="relative mb-14 mt-2 ">
            {phrases.map((phrase) => {
                const isActive = phrases[active] === phrase;
                return (
                    <motion.div
                        key={phrase}
                        initial={false}
                        animate={isActive ? "active" : "inactive"}
                        style={{
                        x: "-50%",
                        }}
                        variants={{
                        active: {
                            opacity: 1,
                            scale: 1,
                        },
                        inactive: {
                            opacity: 0,
                            scale: 0,
                        },
                        }}
                        className="absolute left-1/2 top-0 text-violet-500"
                    >
                        {phrase}
                    </motion.div>
                );
            })}
        </div>
    );
};