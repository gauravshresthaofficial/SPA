import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

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

    return (
        <div id='testimonials' className='relative w-full text-white bg-[#37383c] flex flex-col gap-12 justify-center items-center px-32 py-24 font-pop'>

            <div className='flex gap-24 items-center justify-center w-full'>
                <div className='flex flex-col items-start text-left gap-6 w-3/5'>
                    <h2 className='text-4xl font-bold leading-snug'>What Our Happy Clients Say About Us</h2>
                    <p className='text-sm w-2/3'>
                        I’ve been a member of Fitness Within for about 6 months now and I absolutely love it!
                        The trainers are so motivated and they really help to reach fitness goals.
                    </p>
                    <div className='flex gap-6 items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='flex -space-x-2'>
                                <img src={img1} alt='Client 1' className='w-10 h-10 rounded-full object-cover bg-center border-2 border-gray-500' />
                                <img src={img2} alt='Client 2' className='w-10 h-10 rounded-full object-cover bg-center border-2 border-gray-500' />
                                <img src={img1} alt='Client 3' className='w-10 h-10 rounded-full object-cover bg-center border-2 border-gray-500' />
                                <img src={img2} alt='Client 4' className='w-10 h-10 rounded-full object-cover bg-center border-2 border-gray-500' />
                            </div>
                            <button className='w-10 h-10 flex justify-center items-center bg-[#FF4D4F] text-white rounded-full text-xl'>
                                +
                            </button>
                        </div>
                        <div className='flex items-center gap-3 text-yellow-400'>
                            <IoIosStar className='h-5 w-auto'></IoIosStar>
                            <p>4.9 (450 Reviews)</p>
                        </div>
                    </div>
                </div>

                <div className='relative bg-[#2e2f33] p-6 rounded-lg shadow-lg w-2/5'>
                    <div className='flex items-center gap-4 mb-4'>
                        <img src={testimonials[currentIndex].profileImg} alt={testimonials[currentIndex].name} className='w-12 h-12 object-cover bg-center rounded-full border-2 border-gray-500' />
                        <div>
                            <h3 className='text-xl font-semibold'>{testimonials[currentIndex].name}</h3>
                            <p className='text-sm text-gray-400'>{testimonials[currentIndex].role}</p>
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
                    <div className='absolute top-1/2 -left-6 transform -translate-y-1/2'>
                        <FaArrowLeft
                            onClick={handlePrev}
                            className='w-10 h-10 p-3 hover:scale-105 cursor-pointer flex justify-center items-center bg-white text-black rounded-full text-lg shadow-lg'>

                        </FaArrowLeft>
                    </div>
                    <div className='absolute top-1/2 -right-6 transform -translate-y-1/2'>
                        <FaArrowRight
                            onClick={handleNext}
                            className='w-10 h-10 p-3 hover:scale-105 cursor-pointer flex justify-center items-center bg-[#FF4D4F] text-white rounded-full text-lg shadow-lg'>
                            →
                        </FaArrowRight>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 items-center text-gray-400 w-full'>
                <IoIosStar className='h-6 w-auto'></IoIosStar>
                <h2 className='text-2xl font-medium'>TrustPilot</h2>
            </div>

            <img src="src/assets/arrrow.png" alt="" className='absolute bottom-24 h-16 w-auto'/>
        </div>
    );
};

export default Testimonials;
