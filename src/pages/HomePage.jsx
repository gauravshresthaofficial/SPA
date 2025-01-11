import React from 'react'
import { CgGym } from 'react-icons/cg'
import { FaPlay } from 'react-icons/fa'
import LandingImage from '/src/assets/LandingImage.webp'

const HomePage = () => {
    return (
        <section id='home' className='relative bg-gradient-to-r from-[#2B2A30] to-[#3f3e46] px-32 pt-24 w-full h-screen text-white'>
            <div className='z-30 flex flex-col justify-center gap-8 w-[40vw] h-full'>
                <h1 className='font-extrabold font-pop text-3xl lg:text-5xl uppercase leading-loose lg:leading-relaxed tracking-wide'>
                    Get healthy body with the perfect exercise
                    <div className='inline-block hover:bg-blue-600 bg-gradient-to-r from-pink-500 to-blue-700 my-auto ml-4 rounded-full w-44 h-[3rem] translate-y-2 duration-200 hover:scale-105'></div>
                </h1>
                <p className='font-pop text-sm'>
                    We are always there to help you to make a healthy body and mind through the power of fitness.
                </p>

                <div className='flex items-center gap-4'>
                    <button className='bg-primary hover:opacity-70 px-6 rounded-lg h-12 text-white transition-colors duration-200 cursor-pointer'>Get Started</button>
                    <div className='flex justify-center items-center bg-gray-600 p-2 rounded-full w-12 h-12 duration-150 hover:scale-110'>
                        <FaPlay className=''></FaPlay>
                    </div>
                    <p className='hover:opacity-80 font-semibold cursor-pointer'>Watch Video</p>
                </div>

                <div className='flex gap-4 divide-x-2 divide-gray-500'>
                    <div className='space-y-2'>
                        <h2 className='font-extrabold text-3xl'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>
                    <div className='space-y-2 pl-4'>
                        <h2 className='font-extrabold text-3xl'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>
                    <div className='space-y-2 pl-4'>
                        <h2 className='font-extrabold text-3xl'>105+</h2>
                        <p className='text-sm'>Experts Trainers</p>
                    </div>

                </div>
            </div>

            <CgGym className='top-36 left-1/2 absolute opacity-15 w-auto h-20' />

            <img src={LandingImage} alt="" className='right-10 bottom-0 absolute w-auto h-[90vh]' />

        </section>
    )
}

export default HomePage