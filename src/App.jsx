import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Program from './pages/Program';
import Membership from './pages/Membership';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';
import Lenis from "@studio-freight/lenis";
import { useEffect } from 'react';

function App() {

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup to avoid memory leaks
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  // Scroll event handler
  const handleScroll = (e) => {
    console.log(e, "Scroll event triggered");
  };
  return (
    <div id='main' className='w-full overflow-x-hidden p-0 m-0'>
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Program />
        <Membership />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
