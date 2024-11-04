import React from 'react'
import { AboutNav } from '@/components/AboutTabs';
import { AboutAniText } from '@/components/AboutIntro';
import MediaIconBar from '@/components/AboutIcons';
import WhatIDo from '@/components/AboutJourney';
import StorySection from '@/components/AboutStory';

const About = () => {
    return (
        <main>
            <div className='my-4'>
                <AboutNav />
            </div>

            <section className='text-center'>
                <AboutAniText />
                <StorySection />
            </section>

            <section className='text-center'>
                <WhatIDo />
            </section>

            <section className='text-center'>
                <MediaIconBar />
            </section>

            <section className='text-center'>
                <h2>Contact</h2>
            </section>
        </main>
    )
}

export default About
