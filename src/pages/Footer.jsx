import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall, IoSend } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const sections = [
        {
            title: "Company",
            links: [
                { text: "About Us", href: "#about-us" },
                { text: "Why Us", href: "#why-us" },
                { text: "Security", href: "#security" },
                { text: "Partnership", href: "#partnership" },
            ],
        },
        {
            title: "Categories",
            links: [
                { text: "Basic Yoga", href: "#basic-yoga" },
                { text: "Strength Training", href: "#strength-training" },
                { text: "Body Building", href: "#body-building" },
                { text: "Weight Loss", href: "#weight-loss" },
            ],
        },
        {
            title: "Help",
            links: [
                { text: "Account", href: "#account" },
                { text: "Support Center", href: "#support-center" },
                { text: "Privacy Policy", href: "#privacy-policy" },
                { text: "Terms & Conditions", href: "#terms" },
            ],
        },
    ];

    const contactInfo = [
        { icon: <IoCall className="w-auto h-6 text-[#FF4D4F]" />, text: "+1 (406) 555-0120", href: "tel:+14065550120" },
        { icon: <MdEmail className="w-auto h-6 text-[#FF4D4F]" />, text: "example@email.com", href: "mailto:example@email.com" },
        { icon: <FaLocationDot className="w-auto h-6 text-[#FF4D4F]" />, text: "2464 Royal Ln. Mesa, New Jersey 45463", href: "#" },
    ];

    const socialLinks = {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
    };

    return (
        <footer id="footer" className="bg-[#3a3b3f] pt-16 font-pop text-white">
            <div className="gap-8 grid grid-cols-7 mx-auto px-24 container">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="mb-4 font-semibold text-lg">{section.title}</h3>
                        <ul className="space-y-4">
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="font-light text-sm hover:text-[#FF4D4F]">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="col-span-2">
                    <h3 className="mb-4 font-semibold text-lg">Contact Us</h3>
                    <ul className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {info.icon}
                                <a href={info.href} className="font-light text-sm hover:text-[#FF4D4F]">
                                    {info.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-2">
                    <h3 className="mb-4 font-medium text-lg">Subscribe to Our Newsletter</h3>
                    <form className="relative flex items-center space-x-2 bg-white p-2 rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-full text-gray-800 text-sm focus:outline-none"
                        />
                        <IoSend
                            type="submit"
                            className="right-2 absolute bg-[#FF4D4F] hover:bg-[#ff6668] p-2 rounded-full w-10 h-10 text-white -rotate-45"
                        />
                    </form>
                    <p className="mt-4 text-gray-400 text-sm">Never miss an update & news to your email.</p>
                </div>
            </div>

            <div className="border-gray-600 mt-8 py-8 border-t">
                <div className="flex md:flex-row flex-col justify-between items-center mx-auto px-8 lg:px-24 text-gray-400 text-sm container">
                    <div className="flex items-center space-x-2">
                        <img src="src/assets/logo.webp" alt="Logo" className="h-6" />
                        <span className="font-extrabold text-white text-xl uppercase">FITNESXIA</span>
                    </div>
                    <p>©2023 DesignAxen. All Rights Reserved.</p>
                    <div className="flex items-center space-x-4">
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-auto h-6 text-white hover:text-primary duration-200 hover:scale-110" />
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-auto h-6 text-white hover:text-primary duration-200 hover:scale-110" />
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-auto h-6 text-white hover:text-primary duration-200 hover:scale-110" />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-auto h-6 text-white hover:text-primary duration-200 hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
