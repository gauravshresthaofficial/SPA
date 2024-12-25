import React from 'react'
import { CgGym } from 'react-icons/cg'
import { FaPlay } from 'react-icons/fa'

const HomePage = () => {
    return (
        <section id='home' className='relative h-screen w-full bg-gradient-to-r from-[#2B2A30] to-[#3f3e46] text-white px-32 pt-24'>
            <div className='flex flex-col justify-center h-full w-[40vw] gap-8 z-30 '>
                <h1 className='uppercase font-extrabold lg:leading-relaxed leading-loose tracking-wide font-pop lg:text-5xl text-3xl'>
                    Get healthy body with the perfect exercise
                    <div className='h-[3rem] w-44 inline-block bg-gradient-to-r to-blue-700 from-pink-500 rounded-full my-auto ml-4 hover:bg-blue-600 hover:scale-105 duration-200 translate-y-2'></div>
                </h1>
                <p className='font-pop text-sm'>
                    We are always there to help you to make a healthy body and mind through the power of fitness.
                </p>

                <div className='flex items-center gap-4'>
                    <button className='text-white bg-primary px-6 h-12 rounded-lg duration-200 hover:opacity-70 cursor-pointer transition-colors'>Get Started</button>
                    <div className='h-12 w-12 p-2 rounded-full bg-gray-600 flex items-center justify-center hover:scale-110 duration-150'>
                        <FaPlay className=''></FaPlay>
                    </div>
                    <p className='font-semibold cursor-pointer hover:opacity-80'>Watch Video</p>
                </div>

                <div className='flex gap-4 divide-gray-500 divide-x-2'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl  font-extrabold'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>
                    <div className='space-y-2 pl-4'>
                        <h2 className='text-3xl  font-extrabold'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>
                    <div className='space-y-2 pl-4'>
                        <h2 className='text-3xl  font-extrabold'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>

                </div>
            </div>

            <CgGym className='absolute top-36 left-1/2  h-20 w-auto opacity-15' />

            <img src="/src/assets/file.png" alt="" className='absolute right-10 bottom-0 h-[90vh] w-auto' />

        </section>
    )
}

export default HomePage