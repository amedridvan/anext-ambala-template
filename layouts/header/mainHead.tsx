import styles from '../../styles/Home.module.css'
function HeadMain(){
    return(
   <>  
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className=" relative w-full h-[300px] flex flex-col mt-[20px] text-center felx items-center">
    <button className=" fa fa-arrow-left text-4xl  relative self-start  top-[150px] "> </button>
    <div>
    <span className="text-2xl block font-sass text-fuchsia-700 uppercase mb-[5px]">anext</span>
    <span className="uppercase text-xl font-sass font-bold mb-[5px]" >next ambalaj</span>
    <p className="mt-[5px] font-sass w-[300px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta fugit odio architecto optio suscipit, quam animi quaerat illo corporis sunt est, nobis vel ipsam nihil a quia doloribus! Ut.</p>
    <button className="mt-[20px] rounded w-[60px] h-[45px] border-2 border-white border-solid 	"> more</button>
    </div>
    <button className="fa fa-arrow-right relative self-end  bottom-[150px] text-9xl"></button>
    </div>
   </>
    );
}
export default HeadMain