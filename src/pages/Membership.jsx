/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { motion } from 'motion/react';
import { delay } from 'motion';

const monthlyPlans = [
    {
        id: 1,
        name: "DISCOVER",
        price: "$99",
        features: [
            "5 classes per month",
            "4 group class monthly",
            "Online class access",
            "E-book fitness guide",
        ],
        availableFeatures: [true, true, false, false],
        button: "Choose Plan",
    },
    {
        id: 2,
        name: "ENTERPRISE",
        price: "$299",
        features: [
            "10 classes per month",
            "8 group class monthly",
            "Online class access",
            "E-book fitness guide",
            "7 Extra fitness training",
        ],
        availableFeatures: [true, true, true, true, true],
        button: "Choose Plan",
    },
    {
        id: 3,
        name: "PROFESSIONAL",
        price: "$199",
        features: [
            "7 classes per month",
            "6 group class monthly",
            "Online class access",
            "E-book fitness guide",
        ],
        availableFeatures: [true, true, true, false],
        button: "Choose Plan",
    },
];

const AnnualPlans = [
    {
        id: 1,
        name: "DISCOVER",
        price: "$999",
        features: [
            "5 classes per month",
            "4 group class monthly",
            "Online class access",
            "E-book fitness guide",
        ],
        availableFeatures: [true, true, false, false],
        button: "Choose Plan",
    },
    {
        id: 2,
        name: "ENTERPRISE",
        price: "$2999",
        features: [
            "10 classes per month",
            "8 group class monthly",
            "Online class access",
            "E-book fitness guide",
            "7 Extra fitness training",
        ],
        availableFeatures: [true, true, true, true, true],
        button: "Choose Plan",
    },
    {
        id: 3,
        name: "PROFESSIONAL",
        price: "$1999",
        features: [
            "7 classes per month",
            "6 group class monthly",
            "Online class access",
            "E-book fitness guide",
        ],
        availableFeatures: [true, true, true, false],
        button: "Choose Plan",
    },
];

const Membership = () => {
    const [activePlan, setActivePlan] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState(null);


    const plans = activePlan === "monthly" ? monthlyPlans : AnnualPlans;

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
        alert(`You have selected the ${plan.name} plan!`);
    };

    const staggerVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                staggerChildren: 0.3
            }
        }
    }

    const childVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            id='membership'
            className='flex flex-col justify-center overflow-hidden items-center gap-8 bg-[#37383c] px-32 py-24 w-full min-h-screen font-pop text-white'
            initial="initial"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{
                staggerChildren: 0.2
            }}
        >
            <motion.h2 variants={staggerVariants} className="font-bold text-4xl capitalize leading-normal">
                Choose the best plan.
            </motion.h2>
            <motion.p variants={staggerVariants} className="text-sm leading-loose">
                Choose the plan that&apos;s right for your growing team. Simple pricing & no hidden charges.
            </motion.p>

            <motion.div variants={staggerVariants} className="flex justify-center bg-gray-800 border border-red-600 rounded-full">
                <button
                    className={`px-6 py-2 text-white rounded-full outline-none duration-200 ${activePlan === "monthly" ? "bg-red-600" : "bg-gray-800"}`}
                    onClick={() => setActivePlan("monthly")}
                >
                    Monthly
                </button>
                <button
                    className={`px-6 py-2 text-white rounded-full duration-200 ring-0 outline-none ${activePlan === "annual" ? "bg-red-600" : "bg-gray-800"}`}
                    onClick={() => setActivePlan("annual")}
                >
                    Annual
                </button>
            </motion.div>

            <motion.div
                className="gap-8 grid md:grid-cols-3 w-full"
                variants={staggerVariants}
                transition={{ duration: 1, staggerChildren: 0.3 }}

            >
                {plans.map((plan) => (
                    <motion.div
                        key={plan.id}
                        className={`rounded-lg p-8 bg-[#464646] hover:bg-secondary shadow-md hover:scale-105 transition-transform duration-200`}
                        variants={childVariants}
                    >
                        <h3 className="mb-4 text-center text-sm uppercase">
                            {plan.name}
                        </h3>
                        <p className="mb-6 font-bold text-4xl text-center">{plan.price} <span className='font-normal text-sm'>/ per {activePlan}</span></p>
                        <ul className="space-y-4 mb-6">
                            {plan.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center space-x-2 text-sm ${plan.availableFeatures[index] ? 'text-white' : 'text-gray-500'}`}
                                >
                                    <GiCheckMark className={`${plan.availableFeatures[index] ? 'text-white' : 'text-gray-500'}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="block border-white bg-transparent hover:bg-white mt-8 py-2 border rounded-full w-full text-center text-white hover:text-black transition-colors"
                            onClick={() => handlePlanSelection(plan)}
                        >
                            {plan.button}
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div >
    );
};

export default Membership;
