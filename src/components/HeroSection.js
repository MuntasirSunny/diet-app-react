import React from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div 
        className={`h-[70vh] w-full bg-cover bg-center flex flex-col justify-between p-2 items-center`}
        style={{backgroundImage: `url('/weightLoss.jpg')`}}
    >
        <div className='mt-4'>
            <h1 className='text-gray-900 md:text-white text-2xl italic text-center'>Become The Better Version Of Yourself</h1>
        </div>
        <div className='mb-4 items-center'>
            <Link to='/quiz'>
            <button type="button" className='bg-gradient-to-r from-cyan-600 to-sky-500 hover:from-pink-500 hover:to-fuchsia-600 p-3 rounded-lg text-white hover:scale-110' onClick={()=> {}}>Take Our Quiz</button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection;