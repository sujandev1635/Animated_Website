import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    motion
    return (
        <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap gap-10 '>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[15vw] leading-none font-["FoundersGrotesk-Semibold"] uppercase pt-10 -mb-[1vw] '>we are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[15vw] leading-none font-["FoundersGrotesk-Semibold"] uppercase pt-10 -mb-[1vw] '>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee