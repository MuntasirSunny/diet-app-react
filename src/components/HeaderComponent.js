import React from 'react';
import { BsQuestionCircle } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {

    const navigate = useNavigate();

    const handleMenuClick = () => {
        console.log('Clicked!');
    }

    const handleLogoHome = () => {
        navigate('/');
    }

  return (
    <section>
        <nav className='flex flex-row justify-between h-auto w-full p-4 bg-gradient-to-r from-cyan-600'>
            <div className='flex flex-row items-center cursor-pointer' onClick={()=>handleLogoHome()}>
                <img
                    src="/logo-tree.png"
                    alt="logo"
                    width={50}
                    height={50}
                    style={{
                        marginLeft: '2rem',
                        paddingRight: '2px',
                    }}
                />
                <h2 className='mx-4 font-bold font-sans text-white text-2xl'>unimeal</h2>
            </div>
            <div className='flex flex-row mr-4'>
                <BsQuestionCircle className='text-sky-600 font-bold text-3xl pr-2 cursor-pointer'/>
                <MdMenu 
                    className='text-sky-600 font-bold text-3xl cursor-pointer'
                    onClick={()=>handleMenuClick()}
                />
            </div>
        </nav>
    </section>
  )
}

export default HeaderComponent;