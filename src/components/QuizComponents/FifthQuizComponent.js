import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const FifthQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('fourth')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>5/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={50}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>Do you experience stomach discomfort during the day?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-4 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('sixth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-4">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-bold'>Yes</h2>
                            </div>
                            <AiOutlineCheckCircle  className='text-2xl text-teal-600'/>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-4 pb-1 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('sixth')}
                    >
                        <div className="flex flex-row justify-between items-center mb-4">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-bold'>No</h2>
                            </div>
                            <AiOutlineCloseCircle className='text-2xl text-red-600'/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FifthQuizComponent;