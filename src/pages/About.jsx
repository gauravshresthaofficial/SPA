import React from 'react'

const About = () => {
    return (
        <div id='about' className='min-h-screen w-full text-white flex flex-col'>
            <div className='bg-[#37383C] h-44 w-full flex justify-between px-32 shadow-lg'>
                <div className='flex justify-center flex-col gap-4'>
                    <h2 className='text-4xl  font-extrabold'>970+ More</h2>
                    <p className=''>Trusted Company Partners</p>
                </div>
                <div className='flex items-center gap-10'>
                    <img src="src/assets/videoask.svg" alt="" className='h-8 w-auto' />
                    <img src="src/assets/hubspot.svg" alt="" className='h-8 w-auto' />
                    <img src="src/assets/mapbox.svg" alt="" className='h-8 w-auto' />
                </div>
            </div>
            <div className='grow bg-[#3A3B3F] w-full grid grid-cols-2 p-32 gap-12'>
                <img src="src/assets/lady.png" alt="" />
                <div className="flex flex-col gap-4 justify-center font-pop">
                    <h2 className='capitalize text-4xl font-bold leading-normal'>Get ready to reach<br />your fitness goal</h2>
                    <p className='text-sm leading-relaxed'>We are a gym that is committed to helping people
                        reach their fitness goals. We offer a variety of theirs
                        programs and services to fit your needs, whether
                        you are a experienced athlete.
                    </p>
                    <p className='text-sm leading-relaxed'>
                        We believe that everyone should have access to
                        the benefits of exercise make it happen.</p>
                    <button className='text-white bg-primary px-6 h-12 rounded-lg duration-200 hover:opacity-70 cursor-pointer transition-colors w-fit text-sm mt-6'>Free Trail Today</button>
                </div>

            </div>

        </div>
    )
}

export default About