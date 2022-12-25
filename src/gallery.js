import './App.css';
import photo1 from './public/1.png'
import photo2 from './public/2.png'
import photo3 from './public/3.png'
import photo4 from './public/4.png'
import photo5 from './public/5.png'

function Gallery() {
    return(
    <> 
    <h1 className='text-3xl text-center  text-green-800 dark:text-green-400 font-bold py-10'>Gallery</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6">
    <img src={photo1} className="max-w-sm" alt='My Big Project Campus'></img>
    <img src={photo2}  className="max-w-sm" alt='My Big Project Campus'></img>
    <img src={photo3}  className="max-w-sm" alt='My Big Project Campus'></img>
    <img src={photo4}  className="max-w-sm" alt='Design Skin Osu'></img>
    <img src={photo5}  className="max-w-sm" alt='My Big Project Campus'></img>   
    </div>
  </>
  );
}

export default Gallery;