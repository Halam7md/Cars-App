import React from "react";
import Pic1 from "../../assets/images/landing-page/andriod.png";
import Pic2 from "../../assets/images/landing-page/ios.png";
import Pic3 from '../../assets/images/landing-page/sec-7/iPhone-14.png'

export default function ForRent() {
  return (
    <>
    <div className="md:px-44 md:pt-20 text-center md:text-start"> 
      <h1 className="mt-5 text-5xl font-bold pb-5 ">Download Rentcars<br/>App for <span className="text-blue-700">FREE</span></h1>
      <p>For faster, easier booking and exclusive deals.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch">
        <div>
          <div className="flex p-5 mx-auto md:mx-0">
          <img src={Pic1} alt="" className="h-[40px] mx-5" />
          <img src={Pic2} alt="" className="h-[40px]" />
          </div>
          
          <div>
            <form className="max-w-sm pb-5 mx-auto md:mx-0">
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-3xl px-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="tel"
                  id="phone"
                  className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-3xl px-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-3xl px-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <img src={Pic3} alt="" className="w-1/2 justify-self-center md:justify-self-end" />
        </div>
      </div>
      </div>
    </>
  );
}
