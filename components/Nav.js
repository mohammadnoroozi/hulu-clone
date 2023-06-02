import requests from '@/utils/requests'
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'

export default function Nav() {

    const ref = useRef(null);

    const router = useRouter();

    useEffect(() => {
        ref.current.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) {
                ref.current.scrollLeft += 30;
                e.preventDefault();
            }
            else {
                ref.current.scrollLeft -= 30;
                e.preventDefault();
            }
        })
    })

    return (
        <nav className='relative'>
            <div ref={ref} className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide' >
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className='cursor-pointer transition select-none duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24'>
                        {title}
                    </h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
        </nav>
    )
}
