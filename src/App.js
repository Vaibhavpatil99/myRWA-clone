import React from 'react'
import bg from './imgs/bg.jpg'
import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function App() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <div className='relative'>
        {/* <nav className={navbar ? 'bg-white flex justify-end items-center h-12 w-full fixed top-0 right-0 ': ' flex justify-end items-center h-12 w-full fixed top-0 right-0'}> */}
        <nav className={` flex justify-end items-center h-12 w-full fixed top-0 right-0 duration-300 ${navbar ? 'bg-white' : 'bg-transparent'}`}>
          <a className='mx-2' href='#'>MyRWA</a>
          <a className='mx-2' href='#'>Services</a>
          <a className='mx-2' href='#'>Documents</a>
          <a className='mx-2' href='#'>Initiatives</a>
          <a className='mx-2' href='#'>Bills</a>
          <a className='mx-2' href='#'>Covid Response</a>
          <a className='mx-2' href='#'>Key Links</a>
          <a className='mx-2' href='#'>About us</a>
        </nav>
      </div>

      <div className='w-full'>
        <img className='w-full h-[40rem]' src={bg} alt="" />
      </div>

      <div className='flex justify-center items-center my-4'>
        <p className='mx-3'>AT-8 Jun 5</p>
        <p className='mx-3'>Ka-25 May</p>
        <p className='mx-3'>GS-4</p>
        <p className='mx-3'>May KB</p>
      </div>
      <div className='mx-72'>
        <h2 className='text-center text-4xl font-bold my-12'>KIDS & FAMILY ENGAGEMENTS</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"4"}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mx-72'>
        <h2 className='text-center text-4xl font-bold my-12'>HEALH & WELLNESS</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"4"}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mx-72'>
        <h2 className='text-center text-4xl font-bold my-12'>EVENTS</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"4"}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={"https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg"} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

          <footer className=' mt-12 bg-black text-gray-400 text-lg'>
            <div className='flex px-72 py-12'>
              <div className='mr-4'>
                <h2 className='underline text-3xl'>myRWA</h2>
                <p>Opp-Courtyard Mkt, Nirvana Country, Sector 50, Gurgaon - 122018</p>
                <p> Office Timings : 10:00 am - 6:00 pm, Thurs-Tues</p>
                <p>website.admin@allrwas.com</p>
                <p>Office Contact 8076704008</p>
              </div>
              <div>
                <h2 className='underline text-3xl'>Office Bearers (Click to Email)</h2>
                <p>President : RWA</p>
                <p>Secretary : Mr Sujoy</p>
              </div>
              <div>

              </div>
            </div>
            <hr />
            <div>
              <ul className='flex justify-center'>
                <li className='border-r px-4 py-2 border-white '>Home</li>
                <li className='border-r px-4 py-2 border-white '>Terms of use</li>
                <li className='border-r px-4 py-2 border-white '>Privacy Policy</li>
                <li className='border-r px-4 py-2 border-white '>Cookies Policy</li>
                <li className='border-r px-4 py-2 border-white '>Advertise with us</li>
                <li className='border-r px-4 py-2 border-white '>Refund Policy</li>
                <li className='border-r px-4 py-2 border-white '>Cancellation Policy</li>
                <li className=' px-4 py-2 border-white '>Contact Us</li>
              </ul>
            </div>
          </footer>

    </>
  )
}

export default App