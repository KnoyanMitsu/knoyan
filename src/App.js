import './App.css';

import Content from './content';
import About from './AboutUs';

import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from './gallery';
import { IoIosHeart } from "react-icons/io";

function App() {

  return (
    <>
    <Navbar/>
    <div className=' bg-white dark:bg-slate-800 py-10'>
    <div class="container mx-auto">
      <div class="container mx-auto">
  <div className="flex items-center justify-center flex-col ">
    <h1 className="font-inter text-center font-bold text-green-800 dark:text-green-400 text-3xl ">
      Welcome to Knoyan site
      and this My React Projects
    </h1>
    <p className="font-inter text-black dark:text-white text-center py-4">
    React projects that demonstrate my expertise
    </p>
    <a href='https://github.com/KnoyanMitsu' className="bg-green-600 hover:bg-green-900 font-bold py-2 px-4 rounded-full text-white ">
      My Github
    </a>
    
  </div>
  <About/>
  <Content/>
  <Gallery/>
  

  <div className='place-items-center justify-center flex flex-col'>
  <h1 className='text-center font-bold text-green-800 dark:text-green-400 text-3xl py-10'>Thanks for see my website i still update this website</h1>
  <h1 className='items-center font-bold text-3xl text-pink-700'><IoIosHeart/></h1>
  </div>

  </div>
  </div>

  </div>
  <Footer/>
  </>
  );
}

export default App;
