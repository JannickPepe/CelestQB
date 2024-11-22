"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import YouTubeDashboard from "@/sections/youtubeDashboard";
import ShowShareButton from "./ShowSocialShare";



const YoutubeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-center md:text-start">
            <button
                onClick={() => setIsOpen(true)}
                className=""
            >
                <p className="text-xs text-zinc-400 mt-2">More about this channel <span className="text-zinc-300 font-semibold">...here</span></p>
            </button>
                <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen } : {isOpen: ReactNode; setIsOpen: any;}) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="py-4 z-50 grid place-items-center cursor-pointer overflow-y-scroll max-h-[400px] bg-zinc-900"
                    style={{borderRadius:7}}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full cursor-default relative mt-4"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute translate-x-[120px] lg:translate-x-[276px] -translate-y-6" 
                        >
                            <IoCloseOutline className="size-6" />
                        </button>
                        <div className="relative z-10 pl-3">
                            {/* SOCIAL MEDIA */}
                            <h3 className="text-xl font-bold text-start mb-2">
                                Links
                            </h3>
                            <div className="text-start grid grid-cols-6 gap-2">
                                <div className="col-span-1 flex justify-center">
                                    <FaYoutube className="size-6 mt-1" />
                                </div>
                                <div className="col-span-5">
                                    <h4 className="text-base">Subscribe</h4>
                                    <p className="text-xs text-purple-400">https://www.youtube.com/@CelestQB</p>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-2">
                                <div className="col-span-1 flex justify-center">
                                    <FaXTwitter className="size-6 mt-1" />
                                </div>
                                <div className="col-span-5">
                                    <h4 className="text-base">Twitter</h4>
                                    <p className="text-xs text-purple-400">twitter.com/CelestQB</p>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2">
                                <div className="col-span-1 flex justify-center">
                                    <FaTwitch className="size-6 mt-1" />
                                </div>
                                <div className="col-span-5">
                                    <h4 className="text-base">Twitch</h4>
                                    <p className="text-xs text-purple-400">twitch.tv/celestqb</p>
                                </div>
                            </div>

                            {/* CHANNEL INFO */}
                            <h3 className="text-xl font-bold text-start mt-4 mb-2">
                                Channel Info
                            </h3>
                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <IoMailOutline className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <h4 className="text-sm">Mailadress</h4>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <FaYoutube className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <h4 className="text-sm">www.youtube.com/@CelestQB</h4>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <RiUserVoiceLine className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <div className="text-sm">
                                        <YouTubeDashboard 
                                            channelId={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY} 
                                            fieldsToShow={['subscribers']}
                                            className="text-sm mt-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <MdOndemandVideo className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <div className="text-sm">
                                        <YouTubeDashboard 
                                            channelId={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY} 
                                            fieldsToShow={['totalVideos']}
                                            className="text-sm mt-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <BsGraphUpArrow className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <div className="text-sm">
                                        <YouTubeDashboard 
                                            channelId={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY} 
                                            fieldsToShow={['totalViews']}
                                            className="text-sm mt-0"
                                        />
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <RiErrorWarningLine className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <div className="text-sm">
                                        <span className="text-violet-400">Created:</span> 8. jul. 2014
                                    </div>
                                </div>
                            </div>

                            <div className="text-start grid grid-cols-6 gap-2 my-3">
                                <div className="col-span-1 flex justify-center">
                                    <HiOutlineGlobeAmericas className="size-6" />
                                </div>
                                <div className="col-span-5">
                                    <div className="text-sm">
                                        <YouTubeDashboard 
                                            channelId={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY} 
                                            fieldsToShow={['location']}
                                            className="text-sm mt-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div 
                                className="text-white font-semibold text-sm px-2 py-1 text-center" 
                                style={{borderRadius:7}}
                            >
                                <ShowShareButton />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className=" text-white font-semibold flex justify-center mx-auto text-sm py-1 mt-2 border-2 border-purple-500 px-2 hover:text-purple-400 transition-colors"
                                style={{borderRadius:7}}
                            >
                                Back
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default YoutubeModal;