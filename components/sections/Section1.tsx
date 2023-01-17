import * as React from 'react';
import { useState } from 'react';
import img2 from "../../public/machine1.jpg"
import Image from 'next/image';
function Section1  ()  {
    const [clickedButton, setClickedButton] = useState('');
const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
   setClickedButton(button.name)
  };
  return (
    <>
       <div className="flex flex-row relative z-10 mx-auto  mb-auto text-black justify-center pt-[30px] " style={{letterSpacing:15}}>
       <span className="text-2xl text-gray-600 mr-[10px] bold font-sans font-black   ">01</span>
       <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">/</span>
       <h2 className="uppercase text-2xl font-black  font-sans ml-[10px]">products</h2>
      </div>
      <div    className="text-black relative w-full  flex felx-row h-[30px] mt-[50px] mb-auto mx-auto justify-center  flex-wrap ">
      <button name ="a1" className="ml-[20px] border border-gray-900 border-solid bg-pink-500 pb-[5px] px-[5px] text-white  rounded  cursor-text">Show All</button>
      <button name ="b1" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="FOOD" onClick={buttonHandler}>FOOD</button>
      <button name ="b2" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="HEIGHIEN" onClick={buttonHandler}>HEIGHIEN</button>
      <button name ="b3" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="CARRIER"onClick={buttonHandler} >CARRIER</button>
      <button name ="b4" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="INDUSTRIAL" onClick={buttonHandler}>INDUSTRIAL</button>
      <button name ="b5" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="AGRICULTURAL" onClick={buttonHandler}>AGRICULTURAL</button>
      <button name ="b6" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" title="BIODEGRADABLE" onClick={buttonHandler}>BIODEGRADABLE</button>
      </div>
      <div  id="a2" className="bg-zinc-700 h-[750px] relative mt-[40px] text-center grid grid-cols-3 grid-rows-2  gap-x-0 gap-y-0 ">
      <div  className= {clickedButton=="b1" || clickedButton=="b2"  ?"flex flex-col w-[400px]  " : "invisible" }>
        <Image className="z-0 absolute   h-[400px]"
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       <div  className= {clickedButton=="b1" || clickedButton=="b2"  ?"flex flex-col w-[400px]" : "invisible" }>
        <Image className="z-0 absolute  h-[400px] "
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       <div  className= {clickedButton=="b1" || clickedButton=="b22"  ?"flex flex-col w-[400px]" : "invisible" }>
        <Image className="z-0 absolute  h-[400px] "
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       <div  className= {clickedButton=="b1" || clickedButton=="b22"  ?"flex flex-col w-[400px]" : "invisible" }>
        <Image className="z-0 absolute   h-[400px]"
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       <div  className= {clickedButton=="b1" || clickedButton=="b22"  ?"flex flex-col w-[400px]" : "invisible" }>
        <Image className="z-0 absolute  h-[400px] "
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       <div  className= {clickedButton=="b1" || clickedButton=="b22"  ?"flex flex-col w-[400px]" : "invisible" }>
        <Image className="z-0 absolute  h-[400px] "
        src={img2}
        alt="cover" 
        />
        <div className="z-10 flex flex-col  ">
        <span className="text-white font-sans font-bold text-4xl w-[100px] border-b-2 border-solid border-red-700 mb-[10px] self-center ">FOOD</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <span className="border-b-2 border-solid border-white w-[100px] self-stretch ">read more  </span>
       </div>
       </div>
       
      </div>
    </>
  )
}


export default Section1