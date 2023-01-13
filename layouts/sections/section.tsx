import * as React from 'react';
import Image from "next/image";
import img1 from  '../../public/image.jpg'
import { useState } from 'react';
import img2 from '../../public/i5.jpg'
function Sec(){
  const [clickedButton, setClickedButton] = useState('');

  
const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    let a=``
    switch(button.name){
      case "b2":
        a=`ahmed`
        break;

    }
    setClickedButton(a)
  };
    return(
        <>
  <div className="h-[800px]    ">
   <Image className="absolute  h-full w-full z-0 "
   src={img1}
   alt="cover foto"
   objectPosition="center"
   objectFit="cover"
    /> 
       <div className="flex flex-row relative z-10 mx-auto  mb-auto text-black justify-center pt-[30px]  " style={{letterSpacing:15}}>
       <span className="text-2xl text-gray-600 mr-[10px] bold font-sans font-black   ">01</span>
       <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">/</span>
       <h2 className="uppercase text-2xl font-black  font-sans ml-[10px]">products</h2>
      </div>
      <div    className="text-black relative w-full  flex felx-row h-[30px] mt-[50px] mb-auto mx-auto justify-center  flex-wrap ">
      <button  name="b1" className="ml-[20px] border border-gray-900 border-solid bg-pink-500 pb-[5px] px-[5px] text-white  rounded  cursor-text">Show All</button>
      <button  name="b2" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler} >FOOD</button>
      <button  name="b3" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler}>HEIGHIEN</button>
      <button  name="b4" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler}>CARRIER</button>
      <button  name="b5" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler}>INDUSTRIAL</button>
      <button  name="b6" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler}>AGRICULTURAL</button>
      <button  name="b7" className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text" onClick={buttonHandler}>BIODEGRADABLE</button>
      </div>
      <div className="bg-zinc-700 h-[200px] relative mt-[30px] text-center p-[10px]">
      {clickedButton !== ""
          ? `You have clicked "${clickedButton}"` 
          : "No button clicked yet"}
      </div>
      </div>
      <div className="w-[400px] flex justify-center">
        <Image  className=" absolute z-0 h-[120px] w-[420px]  "
        src={img2}
        alt="cover foto"
        objectPosition="center"
        objectFit="cover"/>
       <div className="relative text-black flex flex-col text-center ">
         <span>food</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
         <span>readmoer</span>
       </div>
       </div>
        </>
)
}
export default Sec