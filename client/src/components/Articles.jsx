/* eslint-disable no-unused-vars */
import React from "react";
import ink from "/Assets/Images/ink.svg";
import poster from "/Assets/Images/poster.svg";
import NotJustArticles from "../SvgComponents/NotJustArticles";

function Articles() {
  return (
    <div className="relative bg-white h-full pt-[10%] lg:pt-2">
   
      <NotJustArticles />

      <h1 className="text-3xl lg:text-[120px] ibm-bold text-[#FFE68F] tracking-widest leading-none text-center pt-5">
        Emotions Captured
      </h1>

      <div className="flex justify-center lg:justify-between mt-[5%] lg:mt-10 w-5/6 mx-auto flex-wrap">
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            XPLORE
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            CAMPUS LIFE
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            STUDENT HQ
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            CAREER
          </button>
        </div>
      </div>

      <p className="text-start text-black w-5/6 mx-auto mt-10">
        The Xplore section is an extraordinary realm filled with boundless
        creativity and endless possibilities. It opens the doors to a world
        where imagination knows no bounds and thinking outside the box becomes
        second nature. This section is truly awe-inspiring, as it not only
        encourages exploration but makes you feel like the very essence of
        adventure itself.Within the Xplore section, there is a captivating
        energy that ignites the spark of curiosity within each individual. It
        invites you to step outside your comfort zone, daring you to embrace new
        experiences and venture into uncharted territories. It is a place where
        limitations cease to exist, and the boundaries of what is deemed
        possible are shattered.
      </p>

      <div className="flex flex-row w-5/6 mx-auto justify-between flex-wrap">
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px]" />
      </div>
      <div className="flex justify-center">
        <button className="btn bg-custom-1 btn-wide mx-auto text-slate-400 hover:text-white">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
}

export default Articles;
