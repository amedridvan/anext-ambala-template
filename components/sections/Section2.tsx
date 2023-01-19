import Image from "next/image";
import img1 from "../../public/machine1.jpg"
function Section2 (){
 return(
<>
<div className="relative h-[100px]  flex flex-col  text-center mt-9">
 <div  style={{ letterSpacing: 15 }} className="flex flex-row m-[10px] p-[10px] justify-center text-center ml-[-120px]  "> 
     <span className="text-2xl text-gray-600 mr-[10px] bold font-sans font-black">02</span>
     <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">/</span>
     <h3 className="uppercase text-2xl font-black   ml-[10px] text-black font-sans ">News</h3>
 </div>
 <p className="h-[10px] font-sans text-gray-600 mr-[-120px] ">The most important news of your projects</p>
 </div>

 <div className="relative flex flex-row w-full h-[250px]  ">
 <div className=" mt-[40px] w-1/3    ">
    <Image className="  w-full h-full"
    src={img1}
    alt="cover photo"
     /> 
   </div>

   <div style={{backgroundColor:"rgb(206, 83, 163)"}} className=" mt-[40px] w-1/3  flex flex-col justify-center items-center px-3 relative">
     <span className="mb-[15px]">Natural Materials </span>
     <div className="w-[60px] pb-[1px] bg-black "></div>
     <p className="w-full text-center hover:text-blue-600 my-3 text-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
     <button className="border-solid rounded-xl px-8 text-center capitalize border-white border "> more </button>
     <div className="absolute bottom-[-30px] ">
     <svg height="30" width="50">
  <polygon points="0,0 50,0 25,30" fill="#CE53A3" />
   </svg>
   </div>
   </div>
   
   <div className=" mt-[40px]  w-1/3">
    <Image className="w-full h-full"
    src={img1}
    alt="cover photo"
     />    
     </div>

   </div>

    <div className="relative flex flex-row w-full h-[250px]">

    <div style={{backgroundColor:"rgb(206, 83, 163)"}} className="w-1/3  flex flex-col justify-center items-center px-3 relative">
     <span className="mb-[15px]">Natural Materials </span>
     <div className="w-[60px] pb-[1px] bg-black "></div>
     <p className="w-full text-center hover:text-blue-600 my-3 text-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
     <button className="border-solid rounded-xl px-8 text-center capitalize border-white border "> more </button>
     <div className="absolute top-[-30px] ">
     <svg height="30" width="50">
  <polygon points="25,0 0,30 50,30" fill="#CE53A3" />
   </svg>
   </div>
   </div>
  <div className="  w-1/3 ">
   <Image className="  w-full h-full"
   src={img1}
   alt="cover photo"
    /> 
  </div>
  <div style={{backgroundColor:"rgb(206, 83, 163)"}} className="w-1/3  flex flex-col justify-center items-center px-3 relative">
     <span className="mb-[15px]">Natural Materials </span>
     <div className="w-[60px] pb-[1px] bg-black "></div>
     <p className="w-full text-center hover:text-blue-600 my-3 text-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
     <button className="border-solid rounded-xl px-8 text-center capitalize border-white border "> more </button>
     <div className="absolute top-[-30px] ">
     <svg height="30" width="50">
  <polygon points="25,0 0,30 50,30" fill="#CE53A3" />
   </svg>
   </div>
   </div>

  </div>
   </>
 )
}
export default Section2 ;