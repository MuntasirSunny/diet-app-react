import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useNavigate } from "react-router-dom";

const FinalEmailComponent = (props) => {

    const navigate = useNavigate();
    const [isExploding, setIsExploding] = useState(false);

    const handleExplosion = () => {
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
            navigate('/');
        }, 3000);
    }

  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='w-full h-fit md:w-1/2'>
            <div className='mt-8'>
                <h1 className='text-xl font-extrabold mt-4 mb-4'>Enter your email to get your personal meal and workout plan</h1>
                <div className="w-full">
                    <form className="bg-neutral-50 rounded px-4 pt-3 pb-4 mb-4">
                        <div className="mb-4">
                            <label className="text-gray-900 text-sm font-bold mb-2" for="weight">
                                Your email
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                        </div>
                    </form>
                    <button
                        type="button"
                        className="w-full h-12 bg-teal-300 rounded-lg"
                        onClick={()=> handleExplosion()}
                    >
                        Get My Programme
                    </button>
                    <div className='flex flex-row justify-center items-center'>
                    {
                        isExploding?<ConfettiExplosion /> : ''
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinalEmailComponent;