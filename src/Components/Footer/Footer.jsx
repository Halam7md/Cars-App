import React from 'react'
import Pic1 from '../../assets/images/footer/facebook.png'
import Pic2 from '../../assets/images/footer/instagram.png'
import Pic3 from '../../assets/images/footer/youtube.png'
import icon1 from '../../assets/images/footer/location.png'
import icon2 from '../../assets/images/footer/call.png'
import icon3 from '../../assets/images/footer/sms.png'
import logo from '../../assets/images/footer/logo-footer.png'

export default function Footer() {
  return (
    <>
    <div className='bg-[#051C34] p-10'>
      <div className='w-4/5 mx-auto text-white'>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-5">
        <div>
          <img src={logo} className='pb-4' alt=''/>
          <span className='flex py-2'><img src={icon1} alt='' className='w-[20px] h-[25px] me-3'/> <p>25566 Hc 1, Glenallen,<br/>
          Alaska, 99588, USA</p></span>
          <span className='flex py-2'><img src={icon2} alt='' className='w-[20px] h-[25px] me-3'/><p>+603 4784 273 12</p></span>
          <span className='flex py-2'><img src={icon3} alt='' className='w-[20px] h-[25px] me-3'/><p>rentcars@gmail.com</p></span>
        </div>
        <div>
          <h5 className='pb-4 font-semibold'>Our Products</h5>
          <ul>
            <li>Career</li>
            <li>Car</li>
            <li>Packages</li>
            <li>Features</li>
            <li>Priceline</li>
          </ul>
        </div>
        <div>
        <h5 className='pb-4 font-semibold'>Resources</h5>
          <ul>
            <li>Download</li>
            <li>Help Center</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
          </div>
        <div>
        <h5 className='pb-4 font-semibold'>About Rentcars</h5>
          <ul>
            <li>Why choose us</li>
            <li>Our story</li>
            <li>Investor Relations</li>
            <li>Partner Network</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
          </div>
        <div>
          <h5 className='pb-4 font-semibold'>Follow us</h5>
          <div className='flex'>
            <img src={Pic1} alt='' className='px-2'/>
            <img src={Pic2} alt='' className='px-2'/>
            <img src={Pic3} alt='' className='px-2'/>
          </div>
        </div>
      </div>

      <hr/>
      <p className='pt-9 font-thin'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>



      </div>

    </div>
    </>
  )
}
