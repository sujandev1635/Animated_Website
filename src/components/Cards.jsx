import React from 'react'

function Cards() {
    return (
        <div>
            <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
                <div className='card-container h-[50vh] w-1/2'>
                    <div className='relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                        <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 border-cyan-50 uppercase'>&copy;2024</button>
                    </div>
                </div>
                <div className='card-container w-1/2 h-[50vh] flex gap-5'>
                    <div className='card relative flex items-center justify-center rounded-xl h-full w-1/2 bg-[#51c22f]'>
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 border-cyan-50 uppercase'>Rating 5 & clutch</button>
                    </div>

                    <div className='card relative flex items-center justify-center rounded-xl h-full w-1/2 bg-[#51c22f]'>
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className='absolute px-5 py-1 left-10 bottom-10 rounded-full border-2 border-cyan-50 uppercase'>business bootcamp </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards