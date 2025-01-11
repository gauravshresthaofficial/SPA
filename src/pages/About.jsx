import React from 'react'
import videoask from '/src/assets/videoask.webp';
import hubspot from '/src/assets/hubspot.webp';
import mapbox from '/src/assets/mapbox.webp';
import lady from '/src/assets/lady.webp'

const About = () => {
    return (
        <div id='about' className='flex flex-col w-full min-h-screen text-white'>
            <div className='flex justify-between bg-[#37383C] shadow-lg px-32 w-full h-44'>
                <div className='flex flex-col justify-center gap-4'>
                    <h2 className='font-extrabold text-4xl'>970+ More</h2>
                    <p className=''>Trusted Company Partners</p>
                </div>
                <div className='flex items-center gap-10'>
                    <img src={videoask} alt="" className='w-auto h-8' />
                    <img src={hubspot} alt="" className='w-auto h-8' />
                    <img src={mapbox} alt="" className='w-auto h-8' />
                </div>
            </div>
            <div className='gap-12 grid grid-cols-2 bg-[#3A3B3F] p-32 w-full grow'>
                <img src={lady} alt="" />
                <div className="flex flex-col justify-center gap-4 font-pop">
                    <h2 className='font-bold text-4xl capitalize leading-normal'>Get ready to reach<br />your fitness goal</h2>
                    <p className='text-sm leading-relaxed'>We are a gym that is committed to helping people
                        reach their fitness goals. We offer a variety of theirs
                        programs and services to fit your needs, whether
                        you are a experienced athlete.
                    </p>
                    <p className='text-sm leading-relaxed'>
                        We believe that everyone should have access to
                        the benefits of exercise make it happen.</p>
                    <button className='bg-primary hover:opacity-70 mt-6 px-6 rounded-lg w-fit h-12 text-sm text-white transition-colors duration-200 cursor-pointer'>Free Trail Today</button>
                </div>

            </div>

        </div>
    )
}

export default About