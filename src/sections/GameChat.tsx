"use client";

import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import ChatHistoryComponent from "@/components/ChatHistory";


interface Topic {
    id: number;
    topicName: string;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const [allTopics, setAllTopics] = useState<Topic[]>([]); // For dropdown options
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null); // Store selected topic ID
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const [paginatedTopics, setPaginatedTopics] = useState<Topic[]>([]); // For descriptions
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 3;

     // Fetch all topics for the dropdown
    const fetchAllTopics = async () => {
        try {
            const res = await fetch(`/api/topics?page=1&itemsPerPage=100`); // Fetch all topics
            if (!res.ok) throw new Error("Failed to fetch topics");

            const data = await res.json();
            setAllTopics(data.topics);

        } catch (error) {
            console.error("Error fetching all topics:", error);
        }
    };

    const fetchPaginatedTopics = async (page: number) => {
        try {
            const res = await fetch(`/api/topics?page=${page}&itemsPerPage=${itemsPerPage}`);
            if (!res.ok) throw new Error("Failed to fetch paginated topics");

            const data = await res.json();
            setPaginatedTopics(data.topics);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.error("Error fetching paginated topics:", error);
        }
    };

    // Fetch topics for the dropdown and pagination on initial render
    useEffect(() => {
        fetchAllTopics();
        fetchPaginatedTopics(currentPage);
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };
    const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTopic(Number(e.target.value));
    };

    // For my chat question and answer
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
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">Game Helper Chat</h1>

            <div className="container">
                <motion.div 
                    ref={borderedDivRef}
                    className="border border-white/15 py-16 rounded-xl overflow-hidden relative group" 
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
                        {/* Display paginated topic descriptions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto text-center max-w-4xl">
                            {paginatedTopics.map((topic) => (
                            <div key={topic.id} className="mb-4">
                                <div className="border-2 border-purple-600" style={{borderRadius:7}}>
                                    <p className="p-2 text-sm font-semibold">{topic.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center gap-2 mb-6">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className="disabled:opacity-50"
                            >
                                <FaRegArrowAltCircleLeft className="size-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className="disabled:opacity-50"
                            >
                                <FaRegArrowAltCircleRight className="size-5" />
                            </button>
                        </div>
                        {/*
                        <p className="mt-4 text-center">
                            Page {currentPage} of {totalPages || 1}
                        </p>
                         */}

                         {/* Dropdown for selecting topics */}
                        <div className="my-4 mx-auto text-center">
                            <select
                                id="topic-select"
                                value={selectedTopic || ""}
                                onChange={handleTopicChange}
                                className="mt-2 p-2 border border-gray-300 rounded bg-gray-100 text-gray-700 focus:outline-none"
                            >
                                <option value="" disabled>
                                    Topics
                                </option>
                                {allTopics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>
                                        {topic.topicName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full px-2 py-3 text-gray-800 bg-white border border-gray-300 max-w-[360px] grid mx-auto shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none hover:border-violet-500 hover:shadow-lg transition duration-300 ease-in-out"
                            style={{borderRadius:7}}
                            placeholder="Type your question..."
                        />

                        <div className='flex justify-center items-center mt-2'>
                            <button onClick={handleChat} className="mt-2 border-2 border-purple-700 text-white p-2 rounded">
                                Ask Me
                            </button>
                        </div>

                        <div className='text-center mx-auto'>
                            {response && 
                                <p className="mt-6 text-center mx-auto max-w-lg " style={{borderRadius:5}}>
                                    {response}
                                </p>
                            }
                        </div>

                        <ChatHistoryComponent />
                    </div>
                </motion.div>
            </div>
        </section>
    )

};
