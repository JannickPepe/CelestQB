import { CallToAction } from "@/sections/CallToAction"
import Image from "next/image";
import { MdOutlineCelebration } from "react-icons/md";
import YTCover from '../../../public/celestYTCover.png';
import YouTubeDashboard from "@/sections/youtubeDashboard";
import VideoStats from "@/sections/VideoStats";
import { ShowMore } from "@/components/GlobalShowMore";

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

                    <Image src={YTCover} alt="CelestQB Youtube cover" className="max-w-[600px] mx-auto rounded-xl mt-8 shadow-md shadow-purple-700" />
                </section>

                <section className="mb-16">
                    <h3 className="text-center text-xl"><span className="text-purple-500 font-semibold">Stats About:</span> General Info & The Newest Video</h3>
                    <ShowMore>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <YouTubeDashboard channelId={process.env.YOUTUBE_CELEST_KEY}  />
                        <VideoStats videoId={process.env.YOUTUBE_VIDEO_ID_KEY} />
                    </div>
                    </ShowMore>
                </section>

                <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px] mx-auto" height="315" src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </section>

                <section>
                    <CallToAction />
                </section>
            </div>
        </section>
    )
}

export default page
