"use client"

import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import EmailButton from "./OutlookButton";
import Link from "next/link";



const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
        const { top, left } = to.current.getBoundingClientRect();
        mouseX.set(event.x - left);
        mouseY.set(event.y - top);
    };
    
    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
    
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, []);
    
    return [mouseX, mouseY];
};


const ScrollIcon: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const handleIconClick = () => { setIsExpanded(true); }; 

    const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setIsExpanded(false); };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => { 
        window.addEventListener('scroll', toggleVisibility); 
        return () => { 
            window.removeEventListener('scroll', toggleVisibility); 
        }; 
    }, []);

    const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

    const maskImage = useMotionTemplate `radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 right-10 z-[999999] hidden md:block"
        >
            <motion.div
                initial={{ width: 50, height: 50 }}
                animate={{ width: isExpanded ? 360 : 50, height: isExpanded ? 360 : 50 }}
                className="rounded-xl flex items-center justify-center cursor-pointer overflow-hidden relative"
                onClick={handleIconClick}
                whileHover={{ scale: 1.1 }}
            >
                {!isExpanded ? (
                    <IoChatbubbleEllipsesOutline size={30} className='text-white' />
                ) : (
                    <motion.div 
                        ref={borderedDivRef}
                            className="border border-white/15 py-16 rounded-xl overflow-hidden relative group px-16 left-6 md:left-0" 
                            style={{backgroundImage: `url(${starsBg.src})`, backgroundPositionY}}
                            animate={{backgroundPositionX: starsBg.width, }}
                            transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 60,
                        }}
                    >
                        <div 
                            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700" 
                            style={{backgroundImage: `url(${gridLines.src})`}}
                        >
                        </div>
                        <motion.div 
                            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700" 
                            style={{
                                maskImage,
                                backgroundImage: `url(${gridLines.src})`
                            }}
                        >
                        </motion.div>
                
                        <div className="relative z-[999999]">
                            <button
                                onClick={handleCloseClick}
                                className="absolute -top-5 -right-10 rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                <IoCloseCircleSharp size={20} className='text-white' />
                            </button>
                            
                            <h4 className='text-2xl text-center'>Contact</h4>
                            <div className='mt-4 px-10 md:px-0 space-y-4 md:space-y-4'>
                                <p className='border-2 border-violet-700 py-2 px-3 rounded-xl'>
                                    Celestqb<span className='text-purple-500 font-bold'>@</span>hotmail.com
                                </p>
                                <p className='border-2 border-violet-700 py-2 px-3 rounded-xl'><span className='border-b border-b-purple-500'>
                                    PSN</span>: CelestQB
                                </p>
                            </div>
                            <div className="-mt-4">
                                <EmailButton />
                            </div>

                            <h4 className='text-2xl text-center mt-6'>Help with Gaming?</h4>
                            <Link href={'/games'} className="flex justify-center mt-2 hover:scale-110 transition">
                                <p className="border-b border-white">
                                    Game <span className="text-purple-600 font-semibold">Chat</span> Helper
                                </p>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ScrollIcon;

