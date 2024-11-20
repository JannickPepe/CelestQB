"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { DragonballList, EldenRingList, SWBFList, WukongList } from "../utils";
import { GameChat } from "@/sections/GameChat";


const Games = () => {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <h1 className="text-center font-bold text-xl md:text-3xl lg:text-4xl my-10">
                <span className="text-purple-500">Game List</span> Overview and <span className="text-purple-500">Game Chat</span> Helper
            </h1>
            <section className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-6 px-4 py-8 mb-4 md:flex-row md:gap-12 md:px-8">
                <AnimatePresence mode="wait">
                    {FEATURES.map((tab, index) => {
                        return selected === index ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                key={index}
                                className="w-full"
                            >
                                <tab.Feature />
                            </motion.div>
                        ) : undefined;
                    })}
                </AnimatePresence>
                <Tabs selected={selected} setSelected={setSelected} />
            </section>  

            <section>
                <GameChat />
            </section> 
        </>
    );
};

const Tabs = ({ selected, setSelected } : {selected: any; setSelected: any;}) => {
    return (
        <div className="w-full shrink-0  md:w-fit">
            {FEATURES.map((tab, index) => {
                return (
                    <Tab
                        key={index}
                        setSelected={setSelected}
                        selected={selected === index}
                        title={tab.title}
                        tabNum={index}
                    />
                );
            })}
        </div>
    );
};

const Tab = ({ selected, title, setSelected, tabNum } : {title:string; tabNum: number; setSelected: any; selected: any;}) => {
    return (
        <div className="group relative w-full md:w-fit">
            <button
                onClick={() => setSelected(tabNum)}
                className="relative z-0 flex w-full  p-4 transition-colors 0 md:flex-col md md:p-6"
            >
                <span
                    className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
                        selected
                        ? "text-violet-500"
                        : "text-slate-400 group-hover:text-slate-500"
                    }`}
                >
                    {title}
                </span>
            </button>
            {selected && (
                <motion.span
                    layoutId="vertical-slide-feature-slider"
                    className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-violet-500 md:w-2"
                />
            )}
        </div>
    );
};

export default Games;

const FEATURES = [
    {
        title: "Star Wars",
        Feature: () => <SWBF text="Star Wars" />,
    },
    {
        title: "Elden Ring",
        Feature: () => <EldenRing text="Elden Ring" />,
    },
    {
        title: "Wukong",
        Feature: () => <Wukong text="Wukong" />,
    },
    {
        title: "Dragonball",
        Feature: () => <Dragonball text="DB Sparkling Zero" />,
    },
];

const SWBF = ({ text } : {text:string}) => (
    <div className="w-full">
        <div className="relative w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
                <div className="font-mono text-slate-200">
                    {SWBFList.map((items) => (
                        <div key={items.title}>
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl text-center my-2"><span className="text-green-300">~</span> {items.title}</h3>
                                <h4 className="text-center text-xl text-purple-400/80">About The Game</h4>
                                <p className="text-base text-center">{items.text}</p>
                                <h4 className="text-center text-xl mt-2 text-purple-400/80">My Experince</h4>
                                <p className="text-base text-center">{items.textTwo}</p>
                            </div>
                            <div className="md:flex justify-center gap-6 mt-8 space-y-6 md:space-y-0 mb-4">
                                <Image src={items.imageUrl} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}} />
                                <Image src={items.imageUrlTwo} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                                <Image src={items.imageUrlThree} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const EldenRing = ({ text } : { text:string;}) => (
    <div className="w-full">
        <div className="relative w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
                <div className="font-mono text-sm text-slate-200">
                    {EldenRingList.map((items) => (
                        <div key={items.title}>
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl text-center my-2"><span className="text-green-300">~</span> {items.title}</h3>
                                <h4 className="text-center text-xl text-purple-400/80">About The Game</h4>
                                <p className="text-base text-center">{items.text}</p>
                                <h4 className="text-center text-xl mt-2 text-purple-400/80">My Experince</h4>
                                <p className="text-base text-center">{items.textTwo}</p>
                            </div>
                            <div className="md:flex justify-center gap-6 mt-8 space-y-6 md:space-y-0 mb-4">
                                <Image src={items.imageUrl} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}} />
                                <Image src={items.imageUrlTwo} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                                <Image src={items.imageUrlThree} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Wukong = ({ text } : { text:string;}) => (
    <div className="w-full">
        <div className="relative w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
                <div className="font-mono text-sm text-slate-200">
                    {WukongList.map((items) => (
                        <div key={items.title}>
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl text-center my-2"><span className="text-green-300">~</span> {items.title}</h3>
                                <h4 className="text-center text-xl text-purple-400/80">About The Game</h4>
                                <p className="text-base text-center">{items.text}</p>
                                <h4 className="text-center text-xl mt-2 text-purple-400/80">My Experince</h4>
                                <p className="text-base text-center">{items.textTwo}</p>
                            </div>
                            <div className="md:flex justify-center gap-6 mt-8 space-y-6 md:space-y-0 mb-4">
                                <Image src={items.imageUrl} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}} />
                                <Image src={items.imageUrlTwo} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                                <Image src={items.imageUrlThree} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Dragonball = ({ text } : { text:string;}) => (
    <div className="w-full">
        <div className="relative w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
                <div className="font-mono text-sm text-slate-200">
                    {DragonballList.map((items) => (
                        <div key={items.title}>
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl text-center my-2"><span className="text-green-300">~</span> {items.title}</h3>
                                <h4 className="text-center text-xl text-purple-400/80">About The Game</h4>
                                <p className="text-base text-center">{items.text}</p>
                                <h4 className="text-center text-xl mt-2 text-purple-400/80">My Experince</h4>
                                <p className="text-base text-center">{items.textTwo}</p>
                            </div>
                            <div className="md:flex justify-center gap-6 mt-8 space-y-6 md:space-y-0 mb-4">
                                <Image src={items.imageUrl} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}} />
                                <Image src={items.imageUrlTwo} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                                <Image src={items.imageUrlThree} alt="game image" className="max-h-[150px] max-w-[240px] mx-auto md:mx-0" style={{borderRadius: 10}}/>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
);