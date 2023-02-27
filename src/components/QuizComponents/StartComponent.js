import React from 'react';

const StartComponent = () => {
  return (
    <div className='mt-2 overflow-hidden'>
        <h1 className='text-3xl font-extrabold mt-4'>Do you want to lose weight?</h1>
        
        <div className='flex flex-col flex-wrap md:flex-row md:justify-around mt-9'>

            <div className='flex flex-row items-start justify-between md:w-fit h-60 bg-emerald-100 mb-2'>
                <img
                    src="/loose-weight2.png"
                    alt="loose-weight"
                    className="w-7/12 max-h-72"
                />
                <button
                    type="button"
                    className="bg-teal-500 hover:bg-teal-400 hover:scale-110 duration-100 text-white font-bold px-10 py-2 m-6 rounded-md"
                >
                    Yes
                </button>
            </div>

            <div className='flex flex-row items-start justify-between md:w-fit h-60 bg-amber-100'>
                <img
                    src="/weight-loss-1.png"
                    alt="loose-weight"
                    className="w-64 min-h-full overflow-auto"
                />
                <button
                    type="button"
                    className="bg-yellow-400 hover:bg-yellow-300 hover:scale-110 duration-100 text-white  font-bold px-10 py-2 m-6 rounded-md"
                >
                    No
                </button>
            </div>
        </div>
    </div>
  )
}

export default StartComponent;