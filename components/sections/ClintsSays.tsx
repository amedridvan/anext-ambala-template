import img2 from '../../public/gray-cover.jpg'
import Image from 'next/image'; 
import img3 from "../../public/developer.png"
function Section5 (){
    return (
        <>
        <div className="w-full ">
            <Image className=" w-full h-[500px] absolute z-0"
            alt ="cover"
            src={img2} />
      <div className="relative ">
      <div  style={{ letterSpacing: 15 }} className="flex flex-row w-full p-[50px] justify-center items-center text-black ml-12 ">
       <span  className="text-2xl text-zinc-700  mr-[10px] bold font-sans font-black ">05</span>
       <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">/</span>
       <h2 className="capitalize text-xl font-black   ml-[10px] text-black "> CLIENTS SAYS</h2>
       </div> 
          <div className="flex-row flex justify-evenly ">
             <div>
                  <Image alt="cover" className="w-[100px] h-[100px] rounded-full md:h-[200px] md:w-[200px] border-pink-600 border-solid border-b-0 border-l-0 border-4 "
                  src={img3} />
              </div>
              <div className="flex flex-col w-[60%] h-2/3  ">
           <h2 className="  text-center capitalize text-xl md:text-4xl text-pink-700 mb-3" >mohameed ahmad </h2>
           <span className="text-gray-500 text-xs md:text-xl  h-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus culpa corrupti, iure quam, temporibus molestias laboriosam quod qui repudiandae maxime iusto fuga quos saepe in ratione deleniti enim tempore?</span>
           </div>
          </div>
       </div>

       </div>
        </>
    )
}
export default Section5;