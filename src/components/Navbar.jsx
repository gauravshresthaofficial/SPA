import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from '/src/assets/Logo.webp'
import { motion, stagger } from "motion/react"

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

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full px-24 flex justify-between items-center text-white z-10 h-28 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-grayDark shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={Logo} alt="Logo" className="w-auto h-5" />
        <h1 className="font-extrabold text-xl uppercase">Fitnesxia</h1>
      </div>

      <motion.div
        className="flex items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // Controls the delay between each child animation
              // ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smooth easing
              when: "beforeChildren"
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem to="home" label="Home" activeClass="text-red-500" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem to="about" label="About" activeClass="text-red-500" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem to="program" label="Program" activeClass="text-red-500" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem to="membership" label="Membership" activeClass="text-red-500" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem to="testimonials" label="Testimonials" activeClass="text-red-500" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <NavItem
            to="signup"
            label="Sign Up"
            className="bg-primary hover:opacity-70 px-6 py-2 rounded-lg hover:text-white duration-200"
            extraStyles="ml-4"
            activeClass="text-white"
          />
        </motion.div>
      </motion.div>


    </nav>
  );
};

export default Navbar;
