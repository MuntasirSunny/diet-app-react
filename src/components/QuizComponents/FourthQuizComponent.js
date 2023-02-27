import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import ProgressBar from '../ProgressBar';

const FourthQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('third')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>4/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={40}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>What is your body type?</h1>
                <div className="w-full">
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-6 pb-2 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('fifth')}
                    >
                        <div className="flex flex-row justify-between mb-4">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-bold'>Ectomorph</h2>
                                <p className='text-gray-400 text-sm pt-2'>Lean and long, fast metabolism</p>
                            </div>
                            <div>
                                <img 
                                    src='/ECTOMORPH.svg'
                                    alt='ECTOMORPH'
                                    className="h-12"
                                />
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-6 pb-2 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('fifth')}
                    >
                        <div className="flex flex-row justify-between mb-4">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-bold'>Mesomorph</h2>
                                <p className='text-gray-400 text-sm pt-2'>Muscular and well-built, average metabolism</p>
                            </div>
                            <div>
                                <img 
                                    src='/MESOMORPH.svg'
                                    alt='MESOMORPH'
                                    className="h-12"
                                />
                            </div>
                        </div>
                    </button>
                    <button 
                        type="button"
                        className="w-full bg-neutral-50 rounded-md px-4 pt-6 pb-2 mb-2 hover:bg-amber-100"
                        onClick={()=>props.changeStep('fifth')}
                    >
                        <div className="flex flex-row justify-between mb-4">
                            <div className='flex flex-col items-start'>
                                <h2 className='text-gray-700 font-bold'>Endomorph</h2>
                                <p className='text-gray-400 text-sm pt-2'>Soft and round, slow metabolism</p>
                            </div>
                            <div>
                                <img 
                                    src='/ENDOMORPH.svg'
                                    alt='ENDOMORPH'
                                    className="h-12"
                                />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthQuizComponent;