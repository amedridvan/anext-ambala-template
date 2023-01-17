import Image from "next/image";
import img1 from "../../public/machine1.jpg"
function Section2 (){
 return(
<>
<div className="relative    text-red-900 flex flex-col  text-center border-2 border-red-600 border-solid mt-9">
 <div className="flex flex-row m-[10px] p-[10px] justify-center text-center "> 
     <span>02</span>
     <span>/</span>
     <h3>News</h3>
 </div>
 <p className="h-[10px] ">The most important news of your projects</p>
 <div className=" mt-[40px] ">
    <Image className="w-full h-[800px]"
    src={img1}
    alt="cover photo"
     /> 
     <div>
       
     </div>
   </div>
</div>
</>

 )
}
export default Section2 ;