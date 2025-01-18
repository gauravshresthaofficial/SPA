import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import arrrow from '/src/assets/arrrow.webp'
import { motion } from 'motion/react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sita Shrestha',
            role: 'Happy Customer',
            profileImg: 'https://images.unsplash.com/photo-1668258848213-c1967ba6fb01?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            stars: 5,
            text: "I’ve been coming to this gym for 3 years now and I’ve never been in better shape. The trainers are amazing and they always push me to be my best. I’m so glad to this gym.",
        },
        {
            id: 2,
            name: 'Hari Prasad',
            role: 'Satisfied Client',
            profileImg: 'https://images.unsplash.com/photo-1708364171385-6a5996af9503?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            stars: 4,
            text: "Joining this gym was the best decision I made. The trainers are super supportive and the environment is fantastic. It’s helped me achieve my fitness goals effortlessly.",
        },
        {
            id: 3,
            name: 'Reshma Gurung',
            role: 'Loyal Member',
            profileImg: 'https://images.unsplash.com/photo-1668258848213-c1967ba6fb01?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            stars: 5,
            text: "This gym feels like a second home! The equipment is top-notch, and the trainers are incredibly knowledgeable and friendly. Highly recommend it to anyone!",
        },
    ];

    const img1 = "https://images.unsplash.com/photo-1708364171385-6a5996af9503?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const img2 = "https://images.unsplash.com/photo-1668258848213-c1967ba6fb01?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // State to track the current testimonial
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handler for navigating testimonials
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const staggerVariants = {
        initial: {
            opacity: 0.1,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, }
        }
    }

    return (
        <div id='testimonials' className='relative flex flex-col justify-center items-center gap-12 bg-[#37383c] px-32 py-24 w-full font-pop text-white'>

            <div className='flex justify-center items-center gap-24 w-full '>
                <motion.div
                    className='flex flex-col items-start gap-6 w-3/5 text-left overflow-hidden'
                    initial="initial"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        delay: 0.4, staggerChildren: 0.3
                    }}
                >
                    <motion.h2 variants={staggerVariants} className='font-bold text-4xl leading-snug'>What Our Happy Clients Say About Us</motion.h2>
                    <motion.p variants={staggerVariants} className='w-2/3 text-sm'>
                        I’ve been a member of Fitness Within for about 6 months now and I absolutely love it!
                        The trainers are so motivated and they really help to reach fitness goals.
                    </motion.p>
                    <motion.div variants={staggerVariants} className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            <div className='flex -space-x-2'>
                                <img src={img1} alt='Client 1' className='border-2 border-gray-500 bg-center rounded-full w-10 h-10 object-cover' />
                                <img src={img2} alt='Client 2' className='border-2 border-gray-500 bg-center rounded-full w-10 h-10 object-cover' />
                                <img src={img1} alt='Client 3' className='border-2 border-gray-500 bg-center rounded-full w-10 h-10 object-cover' />
                                <img src={img2} alt='Client 4' className='border-2 border-gray-500 bg-center rounded-full w-10 h-10 object-cover' />
                            </div>
                            <button className='flex justify-center items-center bg-[#FF4D4F] rounded-full w-10 h-10 text-white text-xl'>
                                +
                            </button>
                        </div>
                        <div className='flex items-center gap-3 text-yellow-400'>
                            <IoIosStar className='w-auto h-5'></IoIosStar>
                            <p>4.9 (450 Reviews)</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='relative bg-[#2e2f33] shadow-lg p-6 rounded-lg w-2/5'
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='flex items-center gap-4 mb-4'>
                        <img src={testimonials[currentIndex].profileImg} alt={testimonials[currentIndex].name} className='border-2 border-gray-500 bg-center rounded-full w-12 h-12 object-cover' />
                        <div>
                            <h3 className='font-semibold text-xl'>{testimonials[currentIndex].name}</h3>
                            <p className='text-gray-400 text-sm'>{testimonials[currentIndex].role}</p>
                        </div>
                    </div>
                    <div className='flex items-center mb-4 text-yellow-400'>
                        {Array.from({ length: testimonials[currentIndex].stars }).map((_, index) => (
                            <IoIosStar key={index}></IoIosStar>
                        ))}
                    </div>
                    <p className='text-sm'>
                        {testimonials[currentIndex].text}
                    </p>
                    {/* Navigation Buttons */}
                    <div className='top-1/2 -left-6 absolute transform -translate-y-1/2'>
                        <FaArrowLeft
                            onClick={handlePrev}
                            className='flex justify-center items-center bg-white shadow-lg p-3 rounded-full w-10 h-10 text-black text-lg cursor-pointer hover:scale-105'>

                        </FaArrowLeft>
                    </div>
                    <div className='top-1/2 -right-6 absolute transform -translate-y-1/2'>
                        <FaArrowRight
                            onClick={handleNext}
                            className='flex justify-center items-center bg-[#FF4D4F] shadow-lg p-3 rounded-full w-10 h-10 text-lg text-white cursor-pointer hover:scale-105'>
                            →
                        </FaArrowRight>
                    </div>
                </motion.div>
            </div>

            <div className='flex items-center gap-2 w-full text-gray-400'>
                <IoIosStar className='w-auto h-6'></IoIosStar>
                <h2 className='font-medium text-2xl'>TrustPilot</h2>
            </div>

            <img src={arrrow} alt="" className='bottom-24 absolute w-auto h-16' />
        </div>
    );
};

export default Testimonials;
