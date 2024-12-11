import React from 'react'
import Styles from './Home.module.css'
import HomePic from '../../assets/images/landing-page/car 2 1.png'
import Pic1 from '../../assets/images/landing-page/andriod.png'
import Pic2 from '../../assets/images/landing-page/ios.png'

export default function Home() {
  return (
    <>
    <section className={`${Styles.bgHome} pt-10`}>
    <div className="grid md:my-10 md:py-10 grid-cols-1 md:grid-cols-2 gap-4">
      <div className='mx-auto py-10 md:px-44 md:py-32'>
        <h1 className='text-5xl font-bold pb-5'>Find, book and <br/>rent a car <span className='text-blue-700'>Easily</span></h1>
        <p className='text-lg text-gray-500'>Get a car wherever and whenever you need it <br/>with your IOS and Android device.</p>
        <div>
          <div className="flex pt-5">
          <img src={Pic1} alt="" className="h-[40px] me-5" />
          <img src={Pic2} alt="" className="h-[40px]" />
          </div>
         </div> 
      </div>
      
      <div className=''>
        <img src={HomePic} alt='Blue Car' className="w-full"/>
      </div>
      
    </div>
    </section>

    
    </>
  )
}
