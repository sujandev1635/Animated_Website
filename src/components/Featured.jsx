import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] pb-20  border-zinc-700'>
                <h1 className='text-6xl font-["FoundersGrotesk-Semibold tracking-tighter"]'>Featured projects</h1>

            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-5 mt-11'>
                    <div className='relative card-container w-1/2 h-[75vh] '>
                        <h1 className='absolute  text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2  leading-none tracking-tighter mb-20 text-6xl z-10'>

                            {"FYDE".split('').map((item, index) => <span key={index}>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-x overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className='card-container w-1/2 h-[75vh] relative'>
                        <h1 className='absolute right-full  text-[#CDEA68] top-1/2 translate-x-1/2 -translate-y-1/2  leading-none tracking-tighter mb-20 text-6xl z-10'>
                            {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-x overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured