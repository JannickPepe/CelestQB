import React from 'react'
import { AboutNav } from '@/components/AboutTabs';
import { AboutAniText } from '@/components/AboutIntro';
import WhatIDo from '@/components/AboutJourney';
import StorySection from '@/components/AboutStory';
import EmailButton from '@/components/OutlookButton';

const About = () => {
    return (
        <main>
            <div className='my-4'>
                <AboutNav />
            </div>

            {/* STORY SECTION */}
            <section className='text-center py-20' id="mystory">
                <AboutAniText />
                <StorySection />
            </section>

            {/* JOURNEY SECTION */}
            <section className='text-center py-20' id="myjourney">
                <WhatIDo />
            </section>

            {/* CONTACT SECTION */}
            <section className='text-center py-20' id="contact">
                <h2 className='text-3xl'>Contact</h2>
                <div className='md:flex justify-center items-center gap-8 mt-4 px-10 md:px-0 space-y-4 md:space-y-0'>
                    <p className='border-2 border-violet-700 py-2 px-3 rounded-xl'>
                        Celestqb<span className='text-purple-500 font-bold'>@</span>hotmail.com
                    </p>
                    <p className='border-2 border-violet-700 py-2 px-3 rounded-xl'><span className='border-b border-b-purple-500'>
                        PSN</span>: CelestQB
                    </p>
                </div>

                <EmailButton />
            </section>
        </main>
    )
}

export default About
