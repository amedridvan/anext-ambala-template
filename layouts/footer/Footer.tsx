function Footer(){
    return ( 
        <>
        <div className="w-full  bg-gray-800 flex flex-row p-[10px] flex-nowrap justify-center items-center" > 
        <div className="flex flex-col w-[20%] p-3 ">
            <h2>contact</h2>
            <div>
                 <div> <span></span> adress</div>
                 <span>908 New Hampshire Avenue #100, Washington, DC 20037, United States</span>
            </div>
             <div className="flex  flex-row ">
             <span className="w-[15px] h-[15px] absolute bg-white rounded-full mr-3 "></span>
             <span>Phone: +1 916-875-2235</span>
              </div>
             <div>
                <span></span>
                <span>Fax: +1 916-875-2235</span>
            </div>

             <div>
                <span></span>
                <span>Email: info@domain.tld</span>
            </div>

             <div> 
                <span></span>
                <span></span>Website: www.codex-themes.com</div>
        </div>

        <div className="flex flex-col w-[30%]">
            <h2>email us </h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea name="" placeholder="Your Message" id="" ></textarea>
            <button type="button" >send</button>
        </div>
        <div className="flex-col flex  w-[20%]">
            <h2>News</h2>
            <div>photo 1</div>
            <div>photo 2</div>
            <div>photo 3</div>
        </div>
        <div className="flex flex-col w-[20%]"> 
            <div>logo</div>
            <div>icons</div>
        </div>

        </div>
        </>
    )
}
export default Footer