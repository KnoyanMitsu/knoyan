import './App.css';
import { IoIosCode } from "react-icons/io";

function Content() {
    return(
    <>
        <h1 className='text-center   text-green-800 dark:text-green-400 font-bold  text-3xl py-10 '>What I can?</h1>
        <div className='grid lg:grid-cols-3 items-center gap-6 place-items-center md:grid-cols-2 py-5'>
            
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 ">
                    <svg class="w-10 h-10 mb-2 text-green-800 dark:text-green-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><IoIosCode/></svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-800 dark:text-green-400">Bootstrap</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">I can use Bootstrap and PHP Native and i change to React JS because no securty and PHP from Scratch</p>
                    </div>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 ">
                    <svg class="w-10 h-10 mb-2 text-green-800 dark:text-green-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><IoIosCode/></svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-800 dark:text-green-400">ReactJS</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">I can use ReactJs but still benginner and this site using reactjs</p>
                   
            </div>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 ">
                    <svg class="w-10 h-10 mb-2 text-green-800 dark:text-green-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><IoIosCode/></svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-800 dark:text-green-400">Design UI</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Yeah, I can pretty much design even though the design is bad</p>
                    </div>
        </div>
        </div>
  </>
  );
}

export default Content;