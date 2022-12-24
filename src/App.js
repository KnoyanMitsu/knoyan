import './App.css';

import Content from './content';
import About from './AboutUs';

import Navbar from './Navbar';
import Footer from './Footer';

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
    </h1>
    <p className="font-inter text-black dark:text-white text-center py-4">
      Welcome to my site or my portofolio
    </p>
    <a href='https://github.com/KnoyanMitsu' className="bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded-full text-white ">
      My Github
    </a>
    
  </div>
  <About/>
  <Content/>

  </div>
  </div>

  </div>
  <Footer/>
  </>
  );
}

export default App;
