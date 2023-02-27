import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import { GrUser, GrUserFemale } from "react-icons/gr";
import ProgressBar from '../ProgressBar';

const FirstQuizComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='flex flex-row justify-between pb-2'>
                <div className='flex flex-row items-center'>
                <FiChevronLeft />
                <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={()=> props.changeStep('zero')}
                >Previous Step</button>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>1/10</p>
                </div>
            </div>
            <ProgressBar
                progressPercentage={10}
            />
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>Select your gender</h1>
                <button
                    type="button"
                    className="flex flex-row justify-between items-center w-full m-2 p-3 bg-gray-200 hover:bg-amber-200 rounded-lg mb-4"
                    onClick={()=>props.changeStep('second')}
                >
                    Male
                    <GrUser />
                </button>
                <button
                    type="button"
                    className="flex flex-row justify-between items-center w-full m-2 p-3 bg-gray-200 hover:bg-amber-200 rounded-lg mb-4"
                    onClick={()=>props.changeStep('second')}
                >
                    Female
                    <GrUserFemale />
                </button>
            </div>
        </div>
    </div>
  )
}

export default FirstQuizComponent;