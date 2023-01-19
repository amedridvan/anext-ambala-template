import { Navigation } from 'swiper';
import "swiper/css"
import "swiper/css/navigation"

// Import Swiper styles
import React, {useRef,useState} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
export default () => {
  return (
    <>
<Swiper  navigation={true} modules={[Navigation]} className="relative w-full h-[400px] flex flex-col mt-[20px] text-center felx items-center" >
<SwiperSlide><div>
    <span className="text-9xl block font-sass text-fuchsia-700 uppercase mb-[5px]">anext</span>
    <span className="capitalize text-7xl font-sass font-bold mb-[5px]" >next ambalaj</span>
    <p className="mt-[5px] font-sass w-[300px] slef-center mx-auto mt-20px mb-auto "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta fugit odio architecto optio suscipit, quam animi quaerat illo corporis sunt est, nobis vel ipsam nihil a quia doloribus! Ut.</p>
    <button className="mt-[20px] rounded w-[60px] h-[45px] border-2 border-white border-solid 	"> more</button>
    </div> </SwiperSlide>
    <SwiperSlide> 
    <div>
    <span className="text-9xl block font-sass text-fuchsia-700 uppercase mb-[5px]">anext</span>
    <span className="uppercase text-7xl font-sass font-bold mb-[5px]" >next ambalaj</span>
    <p className="mt-[5px] font-sass w-[300px] mx-auto mt-20px mb-auto "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta fugit odio architecto optio suscipit, quam animi quaerat illo corporis sunt est, nobis vel ipsam nihil a quia doloribus! Ut.</p>
    <button className="mt-[20px] rounded w-[60px] h-[45px] border-2 border-white border-solid 	"> more</button>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div>
    <span className="text-9xl block font-sass text-fuchsia-700 uppercase mb-[5px]">anext</span>
    <span className="uppercase text-7xl font-sass font-bold mb-[5px]" >next ambalaj</span>
    <p className="mt-[5px] font-sass w-[300px] mx-auto mt-20px mb-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta fugit odio architecto optio suscipit, quam animi quaerat illo corporis sunt est, nobis vel ipsam nihil a quia doloribus! Ut.</p>
    <button className="mt-[20px] rounded w-[60px] h-[45px] border-2 border-white border-solid 	"> more</button>
    </div>
    </SwiperSlide>
</Swiper>
    </>
  );
};