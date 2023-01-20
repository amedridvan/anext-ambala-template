import img from "../../public/world.jpg"
import Image from "next/image"
function OurVision (){
    return  <>
    <div className="w-full h-[800px] bg-white text-slate-900 flex flex-col justify-center items-center ">
    <div style={{ letterSpacing: 15 }} className="flex flex-row  p-[30px] justify-center text-center ">
               <span className="text-2xl text-zinc-700  mr-[10px] bold font-sans font-black">06</span>
               <span className="ml-[10px] bold text-2xl text-pink-200 font-black  " >/</span>
               <h2 className=" text-2xl font-bold font-sans  ml-[10px] text-black uppercase"  >OurVision</h2>
    </div>
    <span className="text-xs text-gray-500 ">Becoming the World’s Leading Global Brand, Guiding and Leading the Sector.</span>
      <div className="w-full h-[600px]">
    <Image className="w-full h-full absolute"
    src={img}
    alt="cover" />
    <div>
    <div className="relative z-10 flex flex-row justify-center top-[125px] ">
    <svg className=" relative right-16 md:w-[75px] md:h-[75px] md:right-36 lg:h-[125px] lg:w-[125px] lg:right-52 "  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    <svg className=" relative  md:w-[75px] md:h-[75px] lg:h-[125px] lg:w-[125px] "  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    <svg className=" relative left-16 md:w-[75px] md:h-[75px]  md:left-36 lg:h-[125px] lg:w-[125px] lg:left-52" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    </div>
    <div className="relative z-10 flex flex-row justify-center top-[200px] ">
    <svg className=" relative right-16 md:w-[75px] md:h-[75px] md:right-36 lg:h-[125px] lg:w-[125px] lg:right-52 "  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    <svg className=" relative  md:w-[75px] md:h-[75px] lg:h-[125px] lg:w-[125px] "  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    <svg className=" relative left-16 md:w-[75px] md:h-[75px]  md:left-36 lg:h-[125px] lg:w-[100px] lg:left-52" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
    </div>
    </div>
    </div>
    </div>
       
   </>
     

}
export default OurVision