import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Program from './pages/Program';
import Membership from './pages/Membership';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';

function App() {
  return (
    <div className='w-full overflow-x-hidden p-0 m-0'>
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
