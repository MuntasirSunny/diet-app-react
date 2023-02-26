import React from 'react';

const WhatYouGetSection = () => {
  return (
    <section className='bg-cyan-50 p-4'>
        <div className='m-4 px-10'>
            <h2 className='text-2xl'>What you get with Unimeal!</h2>
        </div>
        <div className='flex flex-col md:flex-row m-10'>
            <div 
            
                className='bg-red-200 w-1/2 mr-6 h-60 p-10 rounded-xl justify-center items-center bg-cover bg-center'
                style={{backgroundImage: `url('/diet-app.png')`}}
            >
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='font-serif text-2xl italic m-2'>Personalized meal plan</h3>
                <p className='m-2'>Сontains ingredients, step-by-step preparation, extra recipes to swap and nutritional value.</p>
            </div>
        </div>
    </section>
  )
}

export default WhatYouGetSection;