let MyAchievements =
[{number :500  ,name:"Type"},
{number :640   ,name:"Product"},
{number :4200  ,name:"Target"},
{number :1000  ,name:"Customers"},
]
function  Section4(){
    return( 
    <div className="h-[500px] w-full bg-white mt-5 scroll  overflow-hidden">
       
       <div style={{ letterSpacing: 15 }} className="flex flex-row w-full p-[50px] justify-center items-center text-black ml-10 ">
       <span  className="text-2xl text-zinc-700  mr-[10px] bold font-sans font-black ">04</span>
       <span className="ml-[10px] bold text-2xl text-pink-200 font-black  ">/</span>
       <h2 className="capitalize text-xl font-black   ml-[10px] text-black ">Achievements</h2>
       </div>
        
        <div className="flex-row flex  full pl-1 justify-center    ">

        <div className="flex flex-col text-black w-[12.5%] justify-center items-center  ">
        <svg className=""
        xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
       <span className="text-black font-bold text-4xl my-5">500</span>
       <span className=" capitalize text-pink-600 text-2xl font-bold ">type</span> 
        </div>

        <div className="w-[12.5%] flex justify-center items-center"> 
        <div >
        <svg className="md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]"   xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e642c7" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M9 18l6-6-6-6"/></svg> 
        </div>  
        </div>

        <div className="flex flex-col text-black w-[12.5%] justify-center items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
       <span className="text-black font-bold text-4xl my-5">640</span>
       <span className=" capitalize text-pink-600 text-2xl font-bold ">Products</span> 
        </div>

        <div className="w-[12.5%] flex justify-center items-center">
        <div>
        <svg className="md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]"  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e642c7" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M9 18l6-6-6-6"/></svg> 
        </div>  
        </div>

        <div className="flex flex-col text-black w-[12.5%] justify-center items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>       <span className="text-black font-bold text-4xl my-5">4200</span>
       <span className=" capitalize text-pink-600 text-2xl font-bold  ">Target</span> 
        </div>

        <div className="w-[12.5%] flex justify-center items-center">
        <div className="">
        <svg className="md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e642c7" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M9 18l6-6-6-6"/></svg> 
        </div>  
        </div>

        <div className="flex flex-col text-black w-[12.5%] justify-center items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>       <span className="text-black font-bold text-4xl my-5">100</span>
       <span className=" capitalize text-pink-600 text-2xl font-bold  ">Customers</span> 
        </div>

        </div>

    </div>
    )
}
export default Section4