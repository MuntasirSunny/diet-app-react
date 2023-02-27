import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import EighthQuizComponent from '../components/QuizComponents/EighthQuizComponent';
import FifthQuizComponent from '../components/QuizComponents/FifthQuizComponent';
import FirstQuizComponent from '../components/QuizComponents/FirstQuizComponent';
import FourthQuizComponent from '../components/QuizComponents/FourthQuizComponent';
import NinthQuizComponent from '../components/QuizComponents/NinthQuizComponent';
import SecondQuizComponent from '../components/QuizComponents/SecondQuizComponent';
import SeventhQuizComponent from '../components/QuizComponents/SeventhQuizComponent';
import SixthQuizComponent from '../components/QuizComponents/SixthQuizComponent';
import StartComponent from '../components/QuizComponents/StartComponent';
import TenthQuizComponent from '../components/QuizComponents/TenthQuizComponent';
import ThirdQuizComponent from '../components/QuizComponents/ThirdQuizComponent';

const GoalQuiz = () => {
  const [step, setStep] = useState('zero');

  const changeStep = (step) => {
    setStep(step);
  }

  return (
    <div className='flex flex-col flex-wrap'>
        <HeaderComponent />
        <section className='flex justify-center'>
          <div className='h-fit w-10/12 overflow-visible'>
            {
              {
                'zero': <StartComponent step={step} changeStep={changeStep}/>,
                'first': <FirstQuizComponent step={step} changeStep={changeStep}/>,
                'second': <SecondQuizComponent step={step} changeStep={changeStep}/>,
                'third': <ThirdQuizComponent step={step} changeStep={changeStep}/>,
                'fourth': <FourthQuizComponent step={step} changeStep={changeStep}/>,
                'fifth': <FifthQuizComponent step={step} changeStep={changeStep}/>,
                'sixth': <SixthQuizComponent step={step} changeStep={changeStep}/>,
                'seventh': <SeventhQuizComponent step={step} changeStep={changeStep}/>,
                'eighth': <EighthQuizComponent step={step} changeStep={changeStep}/>,
                'ninth': <NinthQuizComponent step={step} changeStep={changeStep}/>,
                'tenth': <TenthQuizComponent step={step} changeStep={changeStep}/>
              }[step]
            }
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default GoalQuiz;