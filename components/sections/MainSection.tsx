import * as React from 'react';
import { useState } from 'react';
import img1 from  '../../public/image.jpg'
import Section1 from './Section1';
import Image from 'next/image';
import Section2 from './Section2';

function Sec(){
    return(
        <>
   <div className="mb-[52px]">
   <Image className="absolute  h-[1450px] w-full z-0  "
   src={img1}
   alt="cover foto"
   objectPosition="center"
   objectFit="cover"
    /> 
    <Section1 />
    <Section2 />
    </div>
      
        </>
)
}
export default Sec