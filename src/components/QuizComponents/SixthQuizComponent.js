import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const SixthQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('fifth')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>6/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={60}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>how do you typically spend your day?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('seventh')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Sitting all day long at work</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('seventh')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>I'm always on my feet</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('seventh')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Doing lots of physical activity</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('seventh')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Staying at home</h2>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SixthQuizComponent;