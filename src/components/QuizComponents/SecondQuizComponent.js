import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const SecondQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('first')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>2/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={20}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>Let's check your body measurements</h1>
                <div className="w-full">
                    <form className="bg-neutral-50 rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="text-gray-900 text-sm font-bold mb-2" for="weight">
                                Current weight (kg)
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="weight (kg)" />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-900 text-sm font-bold mb-2" for="weight">
                                Age (years)
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Age" />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-900 text-sm font-bold mb-2" for="weight">
                                Height (cm)
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Height (cm)" />
                        </div>
                    </form>

                    <button
                        type="button"
                        className="w-full h-12 bg-teal-300 rounded-lg"
                        onClick={()=>props.changeStep('third')}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondQuizComponent;