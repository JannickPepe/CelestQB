import { CallToAction } from "@/sections/CallToAction"

const page = () => {

    return (
        <section>
            <div className="container max-w-7xl py-10 md:py-16 lg:py-20">

                <div className="mb-10">
                    <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-black">
                        My <span className="text-indigo-600">recent</span> uploaded <span className="text-indigo-600">Youtube </span> Videos
                    </h1>
                    <p>

                    </p>
                </div>

                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/R1wem1SDFvc?si=npfhDpI0KtqrcQj0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/eqSr6_aAiaE?si=a9pj_wjmlEMKHt94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className="max-w-[560px]" height="315" src="https://www.youtube.com/embed/nZKhNgGn_18?si=gisDWgBntro65zvf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <section>
                    <CallToAction />
                </section>

            </div>
        </section>
    )
}

export default page
