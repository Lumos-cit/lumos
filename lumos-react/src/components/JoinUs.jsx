import React from "react";
import JoinusToday from "../SvgComponents/JoinusToday";
import Pic from "../SvgComponents/Pic";
import Family from "../SvgComponents/Family";

function JoinUs() {
  return (
    <div className="bg-white h-full">
      <JoinusToday />
      <Pic />
      <Family />
      <h1 className="ibm-bold text-[#FFE500] text-2xl lg:text-[350px]  text-end leading-none tracking-[55px] ">
        FAMILY
      </h1>
      <div className="flex justify-center p-3">
        <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] ">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default JoinUs;
