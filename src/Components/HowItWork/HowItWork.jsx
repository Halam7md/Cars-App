import React from "react";
import brand1 from "../../assets/images/landing-page/jaguar.png"
import brand2 from "../../assets/images/landing-page/nissan.png"
import brand3 from "../../assets/images/landing-page/volvo.png"
import brand4 from "../../assets/images/landing-page/audi.png"
import icon1 from "../../assets/images/landing-page/location.png"
import icon2 from "../../assets/images/landing-page/car-icon.png"
import icon3 from "../../assets/images/landing-page/location.png"


export default function HowItWork() {
  return (
    <>
    <section className="text-center">
    <div
        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-60 m-auto text-center"
        role="alert"
      >
        <span className="text-xl uppercase">How It Work</span>
      </div>

      <h2 className="text-4xl font-semibold py-3">Rent with following 3 working steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-3 place-items-center w-1/2 mx-auto gap-2">
      <div className="my-5">
        <div className="my-5">
          <img src={icon1} alt="" className="place-self-center"/>
        </div>
        <h4 className="font-semibold text-[20px] pb-2">Choose location</h4>
        <p className="text-gray-500">Choose your and find <br/>your best car</p>
      </div>
      <div className="my-5">
          <div className="my-5">
          <img src={icon2} alt="" className="place-self-center"/>
          </div>
        <h4 className="font-semibold text-[20px] pb-2">Pick-up date</h4>
        <p className="text-gray-500">Select your pick up date <br/>and time to book your <br/>car</p>
      </div>
      <div className="my-5">
      <div className="my-5">
      <img src={icon3} alt="" className="place-self-center"/>
      </div>
        <h4 className="font-semibold text-[20px] pb-2">Book your car</h4>
        <p className="text-gray-500">Book your car and we <br/>will deliver it directly to<br/> you</p>
      </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 my-10 place-items-center w-4/5 mx-auto">
        <div><img src={brand1} alt="Jaguar logo" className=""/></div>
        <div><img src={brand2} alt="Nissan logo" className=""/></div>
        <div><img src={brand3} alt="Volvo logo" className=""/></div>
        <div><img src={brand4} alt="Audi logo" className=""/></div>
      </div>
    </section>
      
    </>
  );
}
