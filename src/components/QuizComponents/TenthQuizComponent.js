import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const TenthQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('ninth')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>10/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={100}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>How much water do you drink daily?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('tenth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Less than 0.5 L 💧</h2>
                                <p className='text-gray-400 text-sm pt-2'>Less than 2 glasses</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('tenth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>0.5 - 1.5 L 💧💧</h2>
                                <p className='text-gray-400 text-sm pt-2'>2-6 glasses</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('tenth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>1.5 - 2.5 L 💧💧💧</h2>
                                <p className='text-gray-400 text-sm pt-2'>7-10 glasses</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('tenth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>More than 2.5 L 🐳</h2>
                                <p className='text-gray-400 text-sm pt-2'>More then 10 glasses</p>
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-2 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('tenth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-2">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-semibold'>Don't count, it depends 🤷</h2>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TenthQuizComponent;