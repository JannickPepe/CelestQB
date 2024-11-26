import { CallToAction } from "@/sections/CallToAction"
import Image from "next/image";
import { MdOutlineCelebration } from "react-icons/md";
import YouTubeDashboard from "@/sections/youtubeDashboard";
import VideoStats from "@/sections/VideoStats";
import { ShowMore } from "@/components/Video/YoutubeShowMore";
import celestImg from "../../assets/celest-icon-nobg.png";
import Link from "next/link";
import YoutubeModal from "@/components/Video/YoutubeModal";
import mediaGif from "../../assets/social-media.gif";

const page = () => {

    return (
        <section>
            <div className="container max-w-7xl py-10 md:py-16">

                <section className="mb-8">
                    <div className="flex items-center justify-center gap-1 ring-2 ring-purple-700 rounded-xl max-w-[260px] mx-auto mb-2">
                        <p className="text-center text-xs font-semibold text-zinc-400 py-1">
                            Subscribe, Like & Comment
                        </p>
                        <MdOutlineCelebration className="size-4 text-violet-400" />
                    </div>
        
                    <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-black">
                        My <span className="text-violet-600">recent</span> uploaded <span className="text-violet-600">Youtube </span> Videos
                    </h1>

                    <div className="md:max-w-[600px] mx-auto rounded-xl mt-8 mb-16 shadow-md shadow-purple-600 bg-neutral-900/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[540px]">
                            <div className="relative overflow-hidden md:max-w-[200px] flex justify-center md:justify-center group">
                                <Image 
                                    priority 
                                    src={celestImg} 
                                    alt="celestqb avatar" 
                                    className="size-28 md:size-40 mt-4 md:mb-3" 
                                />
                                {/* Text box */}
                                <Link href={'https://www.youtube.com/@celestqb'}>
                                    <Image
                                        src={mediaGif}
                                        alt="GIF Animation"
                                        unoptimized
                                        className="absolute inset-0 m-auto translate-x-16 -translate-y-5 md:-translate-y-14 size-20 object-contain opacity-0 group-hover:opacity-100"
                                    />
                                </Link>
                            </div>

                            <div className="lg:-ml-12 my-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-center md:text-start">
                                    CelestQB
                                </h3>
                                <YouTubeDashboard 
                                    channelId={process.env.YOUTUBE_CELEST_KEY} 
                                    fieldsToShow={['title', 'subscribers', 'totalVideos']} 
                                    className="grid grid-cols-3 text-center md:text-start" 
                                />
                                <YoutubeModal />
                            
                                <div className="">
                                    <div className="text-start text-sm gap-1 flex justify-center md:justify-start items-center">
                                        <ShowMore>
                                            <div className="">
                                                <YouTubeDashboard 
                                                    channelId={process.env.YOUTUBE_CELEST_KEY} 
                                                    createdDate="2014-08-08"
                                                    className="grid grid-cols-3 text-center md:text-start"
                                                />
                                                <VideoStats 
                                                    videoId={process.env.YOUTUBE_VIDEO_ID_KEY} 
                                                    title={'Title'} 
                                                    subs={'Subs'} 
                                                    likes={'Likes'} 
                                                    className="flex-none border-none md:text-xs lg:px-0 py-0" 
                                                />
                                            </div>
                                        </ShowMore>
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start items-center gap-4 text-sm mt-4 mb-2">
                                    <button className="bg-purple-700 px-2 py-1 hover:bg-transparent transition-transform" style={{borderRadius:7}}>
                                        <Link href={'/games'}>
                                            Game Chat Helper
                                        </Link>
                                    </button>
                                    <button className="border-2 border-purple-500 px-2 py-1 hover:border-white transition-transform" style={{borderRadius:7}}>
                                        <Link href={'/features'}>
                                            Tips & Guides
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" 
                        title="YouTube video player"  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                    <iframe 
                        className="max-w-[560px] mx-auto" 
                        height="315" 
                        src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="no-referrer" 
                        allowFullScreen
                    >
                    </iframe>
                </section>

                <section>
                    <CallToAction />
                </section>
            </div>
        </section>
    )
}

export default page
