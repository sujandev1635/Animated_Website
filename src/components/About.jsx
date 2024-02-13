import React from 'react'

function About() {
    return (
        <div className='w-full  bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl text-black tracking-tighter'>
            <h1 className='font-[""] text-[3vw] leading-[4.5vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className='w-full flex gap-5  border-t-[1px] pt-10 mt-20 border-[#aeb986]'>

                <div className='w-1/2  '>
                    <h1 className='text-7xl'>Our approach:</h1>
                    <button className='py-6 px-10 mt-10 flex items-center gap-10 bg-zinc-900 rounded-full text-white uppercase'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>

                </div>
                <div className='w-1/2 h-[70vh]  rounded-3xl bg-[#d5e49f] '></div>
            </div>
        </div>
    )
}

export default About