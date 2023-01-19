import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import img2 from '../../public/gray-cover.jpg'
import img3 from "../../public/qr-1.jpg"
import img4 from "../../public/mob.png"
function Section3(){
    return ( 
       <div className=" mt-[-30px] mb-[-44px] h-[700px]">
           <Image className="h-full w-full absolute z-0 "
           alt="cover"
           src={img2} />
           <div className="relative z-10 text-center mb-[30px] pt-8   ">
           <div style={{ letterSpacing: 15 }} className="flex flex-row m-[10px] p-[10px] justify-center text-center ">
               <span className="text-2xl text-zinc-700  mr-[10px] bold font-sans font-black">03</span>
               <span className="ml-[10px] bold text-2xl text-pink-200 font-black  " >/</span>
               <h2 className="capitalize text-2xl font-black   ml-[10px] text-black font-"  >Tracking Application</h2>
           </div>
           <p className="h-[20px] font-sans text-gray-600  ">The most important news of your projects</p>
      </div>
        <div className="relative w-full  text-black pl-52  flex-row flex   ">
            <div className=" flex flex-col justify-center items-center  w-[50%]">
                <p className="text-pink-600 font-sans text-xl  pb-4">
                Application to protect yourself, your loved ones, your community and society as a whole. 
                <span className="">|</span>
                </p>
                <div className="h-[1px] bg-pink-700 w-full "></div>
                <p className="font-sans text-xs py-4 "> This is an application that will automatically alert people to whether they are at high risk of having the virus, based on whether someone infected and diagnosed has recently walked past <span>|</span>
                </p>
                <div className="pt-8 self-start">
                <Image className="w-[70px] h-[70px]"
                src={img3}
                alt="cqe" />
                </div>
            </div>
            <div className="w-[40%]">
              <Image className="  "
              alt="co"
              src={img4} />
            </div>
        </div>
      </div>
    
    )
} 
export default Section3;