import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { GrRun, GrYoga } from 'react-icons/gr';
import { ImCheckboxChecked } from 'react-icons/im';

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
            <div id="program" className="w-full text-white flex flex-col gap-12 items-center justify-center bg-[#37383C] p-32 font-pop">
                <div className="grid grid-cols-2 gap-56 items-center">
                    <h2 className="capitalize text-4xl font-bold leading-normal">
                        The best programs we<br />offer for you.
                    </h2>
                    <p className="text-sm leading-loose">
                        We provide a variety of fitness programs tailored for all fitness levels.
                        Our goal is to help you achieve your specific objectives and maximize results efficiently.
                    </p>
                </div>
                <div className="w-full grid grid-cols-4 gap-6">
                    {programData.map((program) => (
                        <div key={program.id} className="p-6 space-y-4 bg-[#464646] hover:bg-secondary transition duration-150 rounded-2xl">
                            <program.icon className="h-12 w-auto" />
                            <h2 className="text-xl font-bold">{program.title}</h2>
                            <p className="text-sm leading-loose">{program.description}</p>
                            <p className="text-xs cursor-pointer">Learn More...</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#3A3B3F] text-white p-32 font-pop grid grid-cols-2 gap-12 max-h-screen'>
                <div className='flex flex-col gap-6 justify-center items-start pr-12'>
                    <h2 className="capitalize text-4xl font-bold leading-normal">
                        Why should people choose Fitnesxia services
                    </h2>
                    {sercicesData.map((service) => (
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2' key={service.id}>
                                <ImCheckboxChecked className='rounded-full inline-block mr-2 h-full w-auto text-secondary' />
                                <h2 className="text-xl font-bold">{service.title}</h2>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                    <button className='text-white bg-primary px-6 h-12 rounded-lg duration-200 hover:opacity-70 cursor-pointer transition-colors w-fit text-sm mt-6'>Join Today</button>
                </div>
                <img src="src/assets/bpm.png" alt="" className='h-full w-auto' />
            </div>
        </>
    );
};

export default Program;
