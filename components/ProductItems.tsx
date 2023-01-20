import Image from "next/image";
import img2 from "../public/machine1.jpg";

interface MyPrudtcs {
  id: string;
  name: string;
  desc: string;
  ButName: string;
}

interface Props {
  propduct: MyPrudtcs;
}

function Divs(props: Props) {
  const { propduct } = props;
  return (
    <>
      <Image
        className="z-0 absolute  h-[320px] w-1/3 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 "
        src={img2}
        alt="cover"
      />
      <div key={propduct.id} className="z-10 flex flex-col  ">
        <span
          className="text-red-900 font-sans font-bold  sm:text-xl md:text-4xl border-b-2 border-solid border-red-900 mb-[10px] self-center duration-300
        transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-purple-900 hover:border-purple-900 my-5"
        >
          {propduct.name.toUpperCase()}
        </span>
        <p className="text-white font-sans text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-800 my-5">
          {propduct.desc}
        </p>
        <span className="border-b-2 border-solid border-black capitalize self-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  hover:text-yellow-400 hover:border-yellow-400 my-5 ">
          {propduct.ButName}
        </span>
      </div>
    </>
  );
}
export default Divs;
