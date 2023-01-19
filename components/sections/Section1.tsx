import * as React from "react";
import { useState } from "react";
import img2 from "../../public/machine1.jpg";
import Image from "next/image";
import Divs from "../ProductItems";
import { idText } from "typescript";

const myPrudtcs = [
  { id: "1", name: "Food",     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" ,ButName:"read more" },
  { id: "2", name: "HYGIENE",  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",ButName:"read more" },
  { id: "3", name: "CARRIER",   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" ,ButName:"read more"},
  { id: "4", name: "INDUSTRAL", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" ,ButName:"read more"},
  { id: "5", name: "AGRICULTURAL",  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" ,ButName:"read more"},
  { id: "6", name: "BIODEGRADABLE",  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" ,ButName:"read more"},
];
function Section1() {
  const [clickedButton, setClickedButton] = useState("a1");
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };
  return (
    <>
      <div key="2 "
        className="flex flex-row relative z-10 mx-auto  mb-auto text-black justify-center pt-[30px] "
        style={{ letterSpacing: 15 }}
      >
        <span className="text-2xl text-gray-600 mr-[10px] bold font-sans font-black">
          01
        </span>
        <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">
          /
        </span>
        <h2 className="uppercase text-2xl font-black  font-sans ml-[10px]">
          products
        </h2>
      </div>
      <div className=" text-black relative w-full  flex felx-row h-[30px] mb-[70px] mt-[30px]   justify-center  flex-wrap ">
        <button
          name="a1"
          className="ml-[20px] border border-gray-900 border-solid bg-pink-500 pb-[5px] px-[5px] text-white  rounded  cursor-text"
          onClick={buttonHandler}
        >
          Show All
        </button>
        <button
          name="b1"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="FOOD"
          onClick={buttonHandler}
        >
          FOOD
        </button>
        <button
          name="b2"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="HEIGHIEN"
          onClick={buttonHandler}
        >
          HEIGHIEN
        </button>
        <button
          name="b3"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="CARRIER"
          onClick={buttonHandler}
        >
          CARRIER
        </button>
        <button
          name="b4"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="INDUSTRIAL"
          onClick={buttonHandler}
        >
          INDUSTRIAL
        </button>
        <button
          name="b5"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="AGRICULTURAL"
          onClick={buttonHandler}
        >
          AGRICULTURAL
        </button>
        <button
          name="b6"
          className="ml-[20px] border border-black border-solid pb-[5px] px-[5px]  my-[5px]   rounded cursor-text"
          title="BIODEGRADABLE"
          onClick={buttonHandler}
        >
          BIODEGRADABLE
        </button>
      </div>
      <div key="1"
        id="a2"
        className="  h-[600px]  relative  justify-center items-start  mt-[-30px] flex flex-wrap  text-center   "
      > 
      {myPrudtcs.map(item =>( 
      <div key={item.id}
        className={
          clickedButton == `b${item.id}` ||
          clickedButton == "a1"
            ? "flex flex-col   w-1/3  "
            : "hidden"
        }
      >
      <Divs key={item.id} title={item.name} id={item.id} desc={item.desc } butname={item.ButName}  />
        </div>
      ))} 
      </div>
    </>
  );
}

export default Section1;
