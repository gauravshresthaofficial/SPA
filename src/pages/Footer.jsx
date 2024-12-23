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
        { icon: <IoCall className="text-[#FF4D4F] h-6 w-auto" />, text: "+1 (406) 555-0120", href: "tel:+14065550120" },
        { icon: <MdEmail className="text-[#FF4D4F] h-6 w-auto" />, text: "example@email.com", href: "mailto:example@email.com" },
        { icon: <FaLocationDot className="text-[#FF4D4F] h-6 w-auto" />, text: "2464 Royal Ln. Mesa, New Jersey 45463", href: "#" },
    ];

    const socialLinks = {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
    };

    return (
        <footer id="footer" className="bg-[#3a3b3f] text-white pt-16 font-pop">
            <div className="container mx-auto px-24 grid grid-cols-7 gap-8">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                        <ul className="space-y-4">
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="font-light hover:text-[#FF4D4F] text-sm">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="col-span-2">
                    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {info.icon}
                                <a href={info.href} className="font-light hover:text-[#FF4D4F] text-sm">
                                    {info.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-2">
                    <h3 className="font-medium text-lg mb-4">Subscribe to Our Newsletter</h3>
                    <form className="flex items-center space-x-2 bg-white rounded-full p-2 overflow-hidden relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="text-gray-800 px-4 py-2 rounded-full focus:outline-none text-sm"
                        />
                        <IoSend
                            type="submit"
                            className="absolute right-2 bg-[#FF4D4F] h-10 w-10 p-2 -rotate-45 rounded-full hover:bg-[#ff6668] text-white"
                        />
                    </form>
                    <p className="text-sm text-gray-400 mt-4">Never miss an update & news to your email.</p>
                </div>
            </div>

            <div className="border-t border-gray-600 mt-8 py-8">
                <div className="container mx-auto px-8 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <img src="src/assets/logo.png" alt="Logo" className="h-6" />
                        <span className="text-xl font-extrabold uppercase text-white">FITNESXIA</span>
                    </div>
                    <p>©2023 DesignAxen. All Rights Reserved.</p>
                    <div className="flex items-center space-x-4">
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="h-6 w-auto text-white hover:text-primary hover:scale-110 duration-200" />
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-6 w-auto text-white hover:text-primary hover:scale-110 duration-200" />
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="h-6 w-auto text-white hover:text-primary hover:scale-110 duration-200" />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="h-6 w-auto text-white hover:text-primary hover:scale-110 duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
