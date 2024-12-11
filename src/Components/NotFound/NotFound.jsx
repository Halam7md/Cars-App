import React from 'react'
import Notfound from '../../assets/images/not-found/404-not-found.png'
import NavBar from '../NavBar/NavBar'


export default function NotFound() {
  return (
    <>
    <div>
      <NavBar/>
      <img src={Notfound} alt="not found picture" className='w-1/2 mx-auto' />
    </div>

    </>
  )
}
