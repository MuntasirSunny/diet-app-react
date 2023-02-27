import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const SeventhQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('sixth')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>7/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={70}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>How many meals do you have in a day?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('eighth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Two</h2>
                                <p className='text-gray-400 text-sm pt-2'>Breakfast, dinner, optional snacks</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('eighth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Three</h2>
                                <p className='text-gray-400 text-sm pt-2'>Breakfast, lunch, and dinner</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('eighth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Four</h2>
                                <p className='text-gray-400 text-sm pt-2'>Breakfast, snack, lunch, and dinner</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('eighth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Five</h2>
                                <p className='text-gray-400 text-sm pt-2'>Breakfast, lunch, dinner, and two snacks</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeventhQuizComponent;