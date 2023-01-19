import Image from "next/image";
import img2 from "../public/machine1.jpg";

function Divs(props:{id:string ,title:string ,desc:string ,butname:string} ) {
  return (
    <>
      <Image
        className="z-0 absolute  h-[300px] w-1/3 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 "
        src={img2}
        alt="cover"
      />
      <div key={props.id} className="z-10 flex flex-col  ">
        <span className="text-red-900 font-sans font-bold text-4xl  border-b-2 border-solid border-red-900 mb-[10px] self-center duration-300
        transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-purple-900 hover:border-purple-900 my-5">
          {props.title.toUpperCase()}
        </span>
        <p className="text-white font-sans text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-800 my-5"> 
          {props.desc}
        </p>
        <span className="border-b-2 border-solid border-black capitalize self-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  hover:text-yellow-400 hover:border-yellow-400 my-5 ">
         {props.butname}
        </span>
      </div>
    </>
  );
}
export default Divs;
