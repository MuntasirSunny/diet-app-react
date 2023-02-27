import React from 'react';

const Footer = () => {
  return (
    <section className='pt-10 pb-10 flex flex-col justify-center items-center'>
        <h5 className='text-sm text-center'>{`Copyright © ${new Date().getFullYear()} Orbit Digital Solutions Ltd. All Rights Reserved`}</h5>
    </section>
  )
}

export default Footer;