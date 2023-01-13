function MainHead2() {
  return (
    <>
      <div className="relative  flex flex-row p-[20px] ml-[90px]   ">
        <div className="w-[700px] flex flex-col ">
          <span className="uppercase text-white ">
            <h1 className="underline underline-offset-8 text-4xl mb-[30px] ">
              what we do
            </h1>
          </span>
          <div className="flex flex-row mb-[20px]  ">
            <span className="text-yellow-800 mr-[32px] text-4xl">01</span>
            <span className="mr-[30px] pr-[5px]  text-yellow-800 text-4xl">
              /
            </span>
            <p className="h-[60px] w-full text-white bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="flex flex-row    ">
            <span className="text-yellow-800 mr-[20px] text-4xl">02</span>
            <span className="mr-[32px]  text-yellow-800 text-4xl">/</span>
            <p className="h-[60px] w-full text-white bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-rows-2 grid  grid-cols-2 mt-[-50px] text-white md:text-blue ">
            <div className="m-[20px] p-[20px] text-center ">
            <p>logo 1</p>
              <a href="/">
                <h5 className="capitalize bold font0-sans text-white ">
                  certificate
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </a>
            </div>
            <div className="m-[20px] p-[20px] text-center ">
              <span>logo 2</span>
              <a href="/">
                <h5 className="capitalize bold font0-sans">quality</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </a>
            </div>
            <div className="m-[20px] p-[20px] text-center ">
              <span>logo 3 </span>
              <a href="/">
                <h5 className="capitalize bold font0-sans">vision</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </a>
            </div>
            <div className="m-[20px] p-[20px] text-center  ">
              <span>logo 4</span>
              <a href="/">
                <h5 className="capitalize bold font0-sans">work</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainHead2;
