import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div>
        <HeaderComponent />
        <section>
            <HeroSection />
        </section>
        <section>
            Footer
        </section>
    </div>
  )
}

export default HomePage;