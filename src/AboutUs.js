import './App.css';
import knoyan from './public/knoyan.png'

function About() {
    return(
    <> 
    <h1 className='text-3xl text-center  text-green-800 dark:text-green-400 font-bold py-10'>About</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center gap-6">
        <div className=' max-w-sm '>
            <h1 className='font-inter font-bold text-green-800 dark:text-green-400 text-3xl lg:text-left md:text-center'>
                What Knoyan it is?      
            </h1>
            <p className='font-inter text-black dark:text-white py-4 lg:text-left md:text-center'>
                Knoyan or Knoyan Mitsu it is my Name OC (Original Character). Knoyan have a long meaning unKNOwn cYAN will become one, it will be Knoyan <br></br>
                Knoyan is Species Artic Fox. why Artic Fox? because i like Artic Fox very cute UwU.
                why i name this site? yeah i no have idea name this website LMAO
            </p>
        </div>
        <div className='max-w-md'>
           <img src={knoyan}></img>
        </div>
        </div>
  </>
  );
}

export default About;