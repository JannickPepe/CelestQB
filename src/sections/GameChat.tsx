"use client";

import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import axios from 'axios';

interface Topic {
    id: number;
    name: string;
    description?: string;
}


// RefObject - A readonly ref container where current cannot be mutated. Created by createRef, or useRef when passed null
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

export const GameChat = () => {

    const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

    const maskImage = useMotionTemplate `radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

    const [topics, setTopics] = useState<Topic[]>([]); // Explicitly type topics as Topic[]
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null); // Store selected topic ID
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await fetch('/api/topics');
                if (res.ok) {
                    const data = await res.json();
                    setTopics(data); // Assuming `setTopics` updates your topics state
                } else {
                    console.error("Failed to fetch topics");
                }
                
            } catch (error) {
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const handleChat = async (event: React.FormEvent)=> {
        event.preventDefault();
        if (!selectedTopic) {
            alert("Please select a topic first!");
            return;
        }
        try {
            const res = await axios.post('/api/chat', { question, topicId: selectedTopic });
            setResponse(res.data.response);

        } catch (error) {
        console.error("Failed to get response:", error);
        }
    };

    return (
        <section className="py-20" ref={sectionRef}>
            <div className="container">
                <motion.div 
                ref={borderedDivRef}
                className="border border-white/15 py-24 rounded-xl overflow-hidden relative group" 
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
                    
                    <div className="relative ">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">Game Helper Chat</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-4 px-6">
                            {topics.map((topic) => (
                                <div key={topic.id}>
                                    <div className="border-2 border-purple-600 px-2 py-2 text-base font-light" style={{borderRadius:7}}>
                                        {topic.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center items-center mt-6'>
                            <select
                                onChange={(e) => setSelectedTopic(Number(e.target.value))}
                                className="mt-2 text-zinc-800 "
                                value={selectedTopic || ''}
                            >
                                <option value="">Select Topic</option>
                                {topics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="mt-4 p-2 border text-black flex justify-center max-w-[400px] md:w-full mx-auto focus:outline-none"
                            placeholder="select a topic and ask"
                        />

                        <div className='flex justify-center items-center mt-2'>
                            <button onClick={handleChat} className="mt-2 bg-purple-700 text-white p-2 rounded">
                                Ask Me
                            </button>
                        </div>

                        <div className=''>
                            {response && 
                                <p className="mt-4 text-center">{response}</p>
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )

};
