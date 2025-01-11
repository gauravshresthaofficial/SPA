import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { GrRun, GrYoga } from 'react-icons/gr';
import { ImCheckboxChecked } from 'react-icons/im';
import bpm from '/src/assets/bpm.webp'

const programData = [
    {
        id: 1,
        title: "Weightlifting",
        description: "Strengthen your body with customized workout plans crafted by our expert trainers.",
        icon: FaDumbbell
    },
    {
        id: 2,
        title: "Basic Yoga",
        description: "Improve balance and flexibility with yoga routines designed just for you.",
        icon: GrYoga,
    },
    {
        id: 3,
        title: "Body Building",
        description: "Build muscle mass and achieve your bodybuilding goals through focused plans.",
        icon: GiMuscleUp,
    },
    {
        id: 4,
        title: "Weight Loss",
        description: "Burn calories effectively and work towards your ideal weight with guided programs.",
        icon: GrRun,
    },
];

const sercicesData = [
    {
        id: 1,
        title: "Personal Training",
        description: "Our personal trainers can help you create a personalized fitness plan and track your progress.",
    },

    {
        id: 2,
        title: "Expert Training",
        description: "Our personal trainers can help you create a personalized fitness plan and track your progress.",
    },
    {
        id: 3,
        title: "Flexible Time",
        description: "Our personal trainers can help you create a personalized fitness plan and track your progress.",
    },

]

const Program = () => {
    return (
        <>
            <div id="program" className="flex flex-col justify-center items-center gap-12 bg-[#37383C] p-32 w-full font-pop text-white">
                <div className="items-center gap-56 grid grid-cols-2">
                    <h2 className="font-bold text-4xl capitalize leading-normal">
                        The best programs we<br />offer for you.
                    </h2>
                    <p className="text-sm leading-loose">
                        We provide a variety of fitness programs tailored for all fitness levels.
                        Our goal is to help you achieve your specific objectives and maximize results efficiently.
                    </p>
                </div>
                <div className="gap-6 grid grid-cols-4 w-full">
                    {programData.map((program) => (
                        <div key={program.id} className="space-y-4 bg-[#464646] hover:bg-secondary p-6 rounded-2xl transition duration-150">
                            <program.icon className="w-auto h-12" />
                            <h2 className="font-bold text-xl">{program.title}</h2>
                            <p className="text-sm leading-loose">{program.description}</p>
                            <p className="text-xs cursor-pointer">Learn More...</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='gap-12 grid grid-cols-2 bg-[#3A3B3F] p-32 max-h-screen font-pop text-white'>
                <div className='flex flex-col justify-center items-start gap-6 pr-12'>
                    <h2 className="font-bold text-4xl capitalize leading-normal">
                        Why should people choose Fitnesxia services
                    </h2>
                    {sercicesData.map((service) => (
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2' key={service.id}>
                                <ImCheckboxChecked className='inline-block mr-2 rounded-full w-auto h-full text-secondary' />
                                <h2 className="font-bold text-xl">{service.title}</h2>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                    <button className='bg-primary hover:opacity-70 mt-6 px-6 rounded-lg w-fit h-12 text-sm text-white transition-colors duration-200 cursor-pointer'>Join Today</button>
                </div>
                <img src={bpm} alt="" className='w-auto h-full' />
            </div>
        </>
    );
};

export default Program;
