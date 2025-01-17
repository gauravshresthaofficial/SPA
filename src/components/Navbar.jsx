import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import Logo from '/src/assets/Logo.webp';

const NavItem = ({ to, label, activeClass = "text-[#ef2230]", className = "", extraStyles = "" }) => {
  return (
    <Link
      to={to}
      smooth={true}
      spy={true}
      duration={500}
      activeClass={activeClass}
      className={`text-white hover:text-[#ef2230] cursor-pointer transition-colors duration-300 ${className} ${extraStyles}`}
    >
      {label}
    </Link>
  );
};

// Variants for parent and child
const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      when: "beforeChildren",
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } },
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 50);
    setShowNavbar(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-0 w-full px-24 flex justify-between items-center text-white z-10 h-28 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-grayDark shadow-lg" : "bg-transparent"}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Logo Section */}
      <motion.div className="flex items-center gap-4 cursor-pointer" variants={navItemVariants}>
        <img src={Logo} alt="Logo" className="w-auto h-5" />
        <h1 className="font-extrabold text-xl uppercase">Fitnesxia</h1>
      </motion.div>

      {/* Navigation Items */}
      <motion.div className="flex items-center gap-8" variants={navVariants}>
        {["home", "about", "program", "membership", "testimonials", "signup"].map((item, index) => (
          <motion.div key={index} variants={navItemVariants}>
            <NavItem
              to={item}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
              activeClass={item === "signup" ? "text-white" : "text-red-500"}
              className={item === "signup" ? "bg-primary hover:opacity-70 px-6 py-2 rounded-lg hover:text-white duration-200" : ""}
              extraStyles={item === "signup" ? "ml-4" : ""}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
