import React from 'react'
import videoask from '/src/assets/videoask.webp';
import hubspot from '/src/assets/hubspot.webp';
import mapbox from '/src/assets/mapbox.webp';
import lady from '/src/assets/lady.webp'
import { motion } from 'motion/react';

const About = () => {
    const staggerVariants = {
        initial: {
            opacity: 0,
            x: 200,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.1,
                type: "spring",
                stiffness: 20
            }
        }
    }
    return (
        <div id='about' className='flex flex-col w-full h-full text-white'>
            <div className='flex justify-between bg-[#37383C] shadow-lg px-32 w-full h-44'>
                <motion.div
                    className='flex flex-col justify-center gap-4'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className='font-extrabold text-4xl'>970+ More</h2>
                    <p className=''>Trusted Company Partners</p>
                </motion.div>
                <motion.div
                    className='flex items-center gap-10'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img src={videoask} alt="" className='w-auto h-8' />
                    <img src={hubspot} alt="" className='w-auto h-8' />
                    <img src={mapbox} alt="" className='w-auto h-8' />
                </motion.div>
            </div>
            <div className='gap-12 grid grid-cols-2 bg-[#3A3B3F] px-32 py-8 w-full'>
                <motion.img
                    src={lady}
                    alt="workout_picture"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, }}
                />
                <motion.div
                    className="flex flex-col justify-center gap-4 font-pop"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        initial: { opacity: 0, y: 200 },
                        whileInView: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                when: "beforeChildren",
                                staggerChildren: 0.2,
                            },
                        },

                    }}
                >
                    <motion.h2 variants={staggerVariants} className='font-bold text-4xl capitalize leading-normal'>Get ready to reach<br />your fitness goal
                    </motion.h2>
                    <motion.p variants={staggerVariants} className='text-sm leading-relaxed'>We are a gym that is committed to helping people
                        reach their fitness goals. We offer a variety of theirs
                        programs and services to fit your needs, whether
                        you are a experienced athlete.
                    </motion.p>
                    <motion.p variants={staggerVariants} className='text-sm leading-relaxed'>
                        We believe that everyone should have access to
                        the benefits of exercise make it happen.
                    </motion.p>
                    <motion.button variants={staggerVariants}
                        className='bg-primary hover:opacity-70 mt-6 px-6 rounded-lg w-fit h-12 text-sm text-white transition-colors duration-200 cursor-pointer'>
                        Free Trail Today
                    </motion.button>
                </motion.div>

            </div>

        </div >
    )
}

export default About