import React from "react";
import book from "/Assets/Images/book.svg";
import poster from "/Assets/Images/poster.svg";

function MostRead() {
  return (
    <div className="bg-white">
      <div className="bg-white w-5/6 mx-auto pt-5">
        <p className="text-6xl md:text-9xl lg:text-[200px] font-bold text-black 	 ibm-bold">
          Our Most
        </p>
        <div className="flex">
          <div className="basis-1/3">
            <p className="text-8xl md:text-9xl lg:text-[200px] font-bold text-[#FFC600]  ibm-bold">
              Read
            </p>
          </div>
          <div className="basis-2/3">
            <progress
              className="progress progress-warning w-full my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-70 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-50 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-25 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <div className="flex justify-end">
              <img src={book} className="h-[10vh] lg:h-[20vh]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center flex-wrap">
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
      </div>
    </div>
  );
}

export default MostRead;
