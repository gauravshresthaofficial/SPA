import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

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

    return (
        <div id='membership' className='min-h-screen w-full text-white bg-[#37383c] flex flex-col gap-8 justify-center items-center px-32 py-24 font-pop'>
            <h2 className="capitalize text-4xl font-bold leading-normal">
                Choose the best plan.
            </h2>
            <p className="text-sm leading-loose">
                Choose the plan that's right for your growing team. Simple pricing & no hidden charges.
            </p>

            <div className="flex justify-center rounded-full bg-gray-800 border-red-600 border">
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
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`rounded-lg p-8 bg-[#464646] hover:bg-secondary shadow-md hover:scale-105 transition-transform duration-200`}
                    >
                        <h3 className="text-sm uppercase text-center mb-4">
                            {plan.name}
                        </h3>
                        <p className="text-4xl font-bold text-center mb-6">{plan.price} <span className='text-sm font-normal'>/ per {activePlan}</span></p>
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
                        <button className="block w-full mt-8 bg-transparent border border-white py-2 rounded-full text-center text-white hover:bg-white hover:text-black transition-colors"
                            onClick={() => handlePlanSelection(plan)}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Membership;
