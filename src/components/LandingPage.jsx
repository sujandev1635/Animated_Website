import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-20 px-20 '>
                {["WE ARE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return (
                        <div className='masker' key={index}>
                            <div className='w-fit flex'>
                                {index === 1 && (<div className='w-[5vw] h-[3.5vw] bg-red-400 relative top-[1vw] '></div>)}
                                <h1 className="  uppercase text-[5vw] leading-[5vw] tracking-tighter font-['Founders_Grotesk'] font-bold">{item}</h1>
                            </div>
                        </div>
                    )
                })}


            </div>
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tighter leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>

                    <div className='py-2 px-5 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase'>
                        start the project
                    </div>
                    <div className='w-10 h-10 flex justify-center items-center border-[1px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage