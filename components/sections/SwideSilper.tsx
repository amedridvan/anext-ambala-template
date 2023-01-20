import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SvgIcon from "./SvgIcons";

// import required modules
import { Pagination } from "swiper";
function SwideSilper (){
    return (
        <>
        <div className="w-full bg-white h-[400px] m-0 p-0  ">
      <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="text-black h-full w-full text-center "
      >
        <SwiperSlide className="flex flex-row justify-center items-center text-purple-900">
           <SvgIcon />
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center text-purple-900">
           <SvgIcon />
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center text-purple-900">
           <SvgIcon />
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center text-purple-900">
           <SvgIcon />
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center text-purple-900">
           <SvgIcon />
        </SwiperSlide>
       
      </Swiper>
      </div>
        </>
    )
}
export default SwideSilper