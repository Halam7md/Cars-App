import React from 'react'
import Styles from './WhyChooseUs.module.css'
import Pic1 from '../../assets/images/landing-page/sec-5/Audi 1.png'
import Icon1 from '../../assets/images/landing-page/sec-5/user.png'
import Icon2 from '../../assets/images/landing-page/sec-5/user.png'
import Icon3 from '../../assets/images/landing-page/sec-5/message.png'
import Icon4 from '../../assets/images/landing-page/sec-5/chat.png'


export default function WhyChooseUs() {
  return (
    <>
    <section className={`${Styles.bgHome} pt-2 md:pt-10`}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
       
        <div>
        <img src={Pic1} alt='Blue Car' className="w-full py-5 md:py-20"/>
        </div>
        
        <div className="">
        <div>
        <div
        className="py-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-1/2 md:w-1/4 mx-auto md:mx-0"
        role="alert"
      >
        <span className="text-xl uppercase px-12 md:px-4">why choose us</span>
        </div>
        <p className='font-bold text-xl py-5 text-center md:text-start'>We offer the best experience with our rental deals</p>
        
        <div className='flex my-5 '>
          <img src={Icon1} alt="" className='me-5'/>
          <span> 
          <h6 className='font-semibold'>Best price guaranteed</h6>
          <p>Find a lower price? We'll refund you 100% of the difference.</p>
          </span>
        </div>
        <div className='flex my-5'>
          <img src={Icon2} alt="" className='me-5'/>
          <span> 
          <h6 className='font-semibold'>24 hour car delivery</h6>
          <p>Book your car anytime and we will deliver it directly to you.</p>
          </span>
        </div>
        <div className='flex my-5'>
          <img src={Icon3} alt="" className='me-5'/>
          <span> 
          <h6 className='font-semibold'>Best price guaranteed</h6>
          <p>Find a lower price? We'll refund you 100% of the difference.</p>
          </span>
        </div>
        <div className='flex my-5'>
          <img src={Icon4} alt="" className='me-5'/>
          <span> 
          <h6 className='font-semibold'>24/7 technical support</h6>
          <p>Have a question? Contact Rentcars support any time when you have problem.</p>
          </span>
        </div>
        </div>
        
        

       
        </div>
        
        
      </div>
      
    </section>
    
    </>
  )
}
