import React from 'react';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroSection';
import WhatYouGetSection from '../components/WhatYouGetSection';

const HomePage = () => {
  return (
    <div>
        <HeaderComponent />
        <section>
            <HeroSection />
            <WhatYouGetSection />
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

export default HomePage;