/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {

    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <img src={dark ? "/ps5-temp-one.jpg" : "/ps5-temp-two.png" } className='pointer-events-none z-50 select-none' alt='Phone image' />
            <div className='absolute -z-10 inset-0'>
                <img src={imgSrc} alt='overlay phone image' className='object-cover min-w-full min-h-full' />
            </div>
        </div>
    );

};


export default Phone
