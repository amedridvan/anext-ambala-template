import Image from "next/image";
import img2 from "../../public/machine1.jpg";

export interface ProductItem  {
  id: string;
  name: string;
  desc: string;
  ButName:string
};
interface Props {
  item: ProductItem;
}
function Divs(props:{id:string ,title:string ,desc:string ,butname:string} ) {
  return (
    <>
      <Image
        className="z-0 absolute  h-[240px] w-1/3 "
        src={img2}
        alt="cover"
      />
      <div id={props.id} className="z-10 flex flex-col  ">
        <span className="text-black font-sans font-bold text-4xl  border-b-2 border-solid border-red-700 mb-[10px] self-center ">
          {props.title.toUpperCase()}
        </span>
        <p className="text-yellow-900 font-sans text-xs"> 
          {props.desc}
        </p>
        <span className="border-b-2 border-solid border-black capitalize self-center ">
         {props.butname}
        </span>
      </div>
    </>
  );
}
export default Divs;
