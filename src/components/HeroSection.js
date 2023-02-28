import React from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div 
        className={`h-[70vh] w-full bg-cover bg-center`}
        style={{backgroundImage: `url('/meal-background.jpg')`}}
    >
      <div class="w-full h-full flex flex-col justify-around p-2 items-center backdrop-blur-sm">
        <div className='md:w-1/2 rounded-lg'>
            <h1 className='text-gray-900 md:text-gray-800 text-6xl  font-bold text-center'>Weight loss management app</h1>
        </div>
        <div className='items-center'>
            <Link to='/quiz'>
            <button type="button" className='bg-gradient-to-r from-cyan-600 to-sky-500 hover:from-pink-500 hover:to-fuchsia-600 p-3 rounded-lg text-white hover:scale-110' onClick={()=> {}}>Start Your Journey</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default HeroSection;