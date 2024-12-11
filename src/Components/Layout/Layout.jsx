import React from 'react'
import NavBar from './../NavBar/NavBar';
import Home from './../Home/Home'
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import APICars from './../APICars/APICars';
import HowItWork from './../HowItWork/HowItWork';
import WhyChooseUs from './../WhyChooseUs/WhyChooseUs';
import RentDeals from './../RentDeals/RentDeals';
import ForRent from './../ForRent/ForRent';

export default function Layout() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <APICars/>
        <HowItWork/>
        <WhyChooseUs/>
        <RentDeals/>
        <ForRent/>
        <Footer/>
        
    </div>
  )
}
