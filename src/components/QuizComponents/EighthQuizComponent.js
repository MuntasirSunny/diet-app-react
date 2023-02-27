import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const EighthQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('seventh')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>8/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={80}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>Do you workout?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('ninth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>No, I don't</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('ninth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Only walks</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('ninth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>1-2 times a week</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('ninth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>3-5 times a week</h2>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('ninth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>More than 5 times a week</h2>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EighthQuizComponent;