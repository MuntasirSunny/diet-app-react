import React from 'react';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import StartComponent from '../components/QuizComponents/StartComponent';

const GoalQuiz = () => {
  return (
    <div className='flex flex-col flex-wrap'>
        <HeaderComponent />
        <section className='flex justify-center'>
          <div className='h-fit w-10/12 overflow-visible'>
            <StartComponent />

          </div>
        </section>
        <Footer />
    </div>
  )
}

export default GoalQuiz;