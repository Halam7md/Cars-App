import React from "react";
import Pic1 from "../../assets/images/card/car1.png"
import Pic2 from "../../assets/images/card/car2.png"
import Pic3 from "../../assets/images/card/car3.png"
import Star from "../../assets/images/card/star.png"
import user from "../../assets/images/card/user.png"
import d8wxke_2_ from "../../assets/images/card/d8wxke_2_.png"
import doors from "../../assets/images/card/doors.png"
import Frame from "../../assets/images/card/Frame.png"
import { NavLink } from 'react-router-dom';


export default function APICars() {
  return (
    <>
      <section className="p-5">
        <form className=" mx-auto w-4/5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by Name"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="text-center my-5">
          <div
            className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-80 m-auto text-center"
            role="alert"
          >
            <span className="text-xl uppercase">Popular Rental Deals</span>
          </div>

          <h2 className="text-4xl font-semibold py-3  mb-3 text-center">
            Most popular cars rental deals
          </h2>

          {/* ---------- API Data ----------------- */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5 w-4/5 mx-auto">

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg p-5 mx-auto w-full"
                src={Pic1}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Jaguar XE L P250
                </h5>
              </a>
              <div className="flex"> 
              <img src={Star} alt="" className="w-[15px] h-[15px] "/>
              <p className="px-2 mb-3 font-bold text-gray-700 dark:text-gray-400">  4.8 <span className="font-thin text-gray-500">(2.436reviews)</span>
              </p>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-500 mb-5">
              <div className="flex"> <img src={user} alt="" className="w-[15px] h-[15px] me-2"/> <p> 4 Passagers</p> </div>
              <div className="flex"> <img src={Frame} alt="" className="w-[15px] h-[15px] me-2"/><p> Auto</p> </div>
              <div className="flex"> <img src={d8wxke_2_} alt="" className="w-[15px] h-[15px] me-2"/> <p>Air Conditioning</p> </div>
              <div className="flex"> <img src={doors} alt="" className="w-[15px] h-[15px] me-2"/><p>4 Doors</p> </div>
              </div>

              <hr/>
              <div className="flex justify-between mt-3">
                <p className="text-gray-700">Price</p>
                <p>$1,800 <span className="font-thin text-gray-500">/day</span></p>
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rent Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg p-5 mx-auto w-full"
                src={Pic2}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Audi R8
                </h5>
              </a>
              <div className="flex"> 
              <img src={Star} alt="" className="w-[15px] h-[15px] "/>
              <p className="px-2 mb-3 font-bold text-gray-700 dark:text-gray-400">  4.6 <span className="font-thin text-gray-500">(1.436reviews)</span>
              </p>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-500 mb-5">
              <div className="flex"> <img src={user} alt="" className="w-[15px] h-[15px] me-2"/> <p> 2 Passagers</p> </div>
              <div className="flex"> <img src={Frame} alt="" className="w-[15px] h-[15px] me-2"/><p> Auto</p> </div>
              <div className="flex"> <img src={d8wxke_2_} alt="" className="w-[15px] h-[15px] me-2"/> <p>Air Conditioning</p> </div>
              <div className="flex"> <img src={doors} alt="" className="w-[15px] h-[15px] me-2"/><p>2 Doors</p> </div>
              </div>

              <hr/>
              <div className="flex justify-between mt-3">
                <p className="text-gray-700">Price</p>
                <p>$2,100 <span className="font-thin text-gray-500">/day</span></p>
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rent Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg p-5 mx-auto w-full"
                src={Pic3}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  BMW M3
                </h5>
              </a>
              <div className="flex"> 
              <img src={Star} alt="" className="w-[15px] h-[15px] "/>
              <p className="px-2 mb-3 font-bold text-gray-700 dark:text-gray-400">  4.5 <span className="font-thin text-gray-500">(2.436reviews)</span>
              </p>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-500 mb-5">
              <div className="flex"> <img src={user} alt="" className="w-[15px] h-[15px] me-2"/> <p> 4 Passagers</p> </div>
              <div className="flex"> <img src={Frame} alt="" className="w-[15px] h-[15px] me-2"/><p> Auto</p> </div>
              <div className="flex"> <img src={d8wxke_2_} alt="" className="w-[15px] h-[15px] me-2"/> <p>Air Conditioning</p> </div>
              <div className="flex"> <img src={doors} alt="" className="w-[15px] h-[15px] me-2"/><p>4 Doors</p> </div>
              </div>

              <hr/>
              <div className="flex justify-between mt-3">
                <p className="text-gray-700">Price</p>
                <p>$1,600 <span className="font-thin text-gray-500">/day</span></p>
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rent Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg p-5 mx-auto w-full"
                src={Pic1}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Jaguar XE L P250
                </h5>
              </a>
              <div className="flex"> 
              <img src={Star} alt="" className="w-[15px] h-[15px] "/>
              <p className="px-2 mb-3 font-bold text-gray-700 dark:text-gray-400">  4.8 <span className="font-thin text-gray-500">(2.436reviews)</span>
              </p>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-500 mb-5">
              <div className="flex"> <img src={user} alt="" className="w-[15px] h-[15px] me-2"/> <p> 4 Passagers</p> </div>
              <div className="flex"> <img src={Frame} alt="" className="w-[15px] h-[15px] me-2"/><p> Auto</p> </div>
              <div className="flex"> <img src={d8wxke_2_} alt="" className="w-[15px] h-[15px] me-2"/> <p>Air Conditioning</p> </div>
              <div className="flex"> <img src={doors} alt="" className="w-[15px] h-[15px] me-2"/><p>4 Doors</p> </div>
              </div>

              <hr/>
              <div className="flex justify-between mt-3">
                <p className="text-gray-700">Price</p>
                <p>$1,800 <span className="font-thin text-gray-500">/day</span></p>
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rent Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          </div>

          <NavLink to="/AllCars">
          <button
            type="button"
            className="mt-5 w-4/5 md:w-1/4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Show all vehicles
          </button>

          </NavLink>

          
        </div>
      </section>
    </>
  );
}
