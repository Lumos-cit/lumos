import React from "react";
import Image from "next/image";
import bg from "../../../public/Assets/Images/Background.svg";

function MainHead() {
  return (
    <>
      <div className="bg-cover bg-main-lg bg-no-repeat h-full hidden lg:block">
        <div className="flex items-center p-10 gap-40 ">
          <div className="basis-1/3">
            <Image src={bg} className="h-[400px] w-[400px]" />
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning btn-sm  poppins-medium">
                  Feb 19 2023
                </button>
                <button className="btn btn-outline btn-warning btn-sm  poppins-medium">
                  Spring Edition
                </button>
                <button className="btn btn-outline btn-warning btn-sm  poppins-medium">
                  Student HQ
                </button>
              </div>
              <div>
                <h1 className="text-6xl text-start poppins-medium text-white">
                  <span>The Five Most Critical </span>
                  <span className="text-[#FFC600]">Financial Pitfalls </span>to
                  Avoid
                </h1>
              </div>
              <div className="poppins-regular text-white">
                This article dives into the common money traps that many college
                students fall into, and offers practical advice on how to avoid
                them. From overspending to getting caught up in credit card
                offers and Crypto scams, we’ll show you how to make wise
                financial choices that will set you up for success during and
                after college.
              </div>
              <span className="text-end decoration-[#FFC600] underline text-[#FFC600] poppins-light">
                continue reading
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-main-lg bg-no-repeat h-full block md:hidden">
        <div className="flex items-center gap-2 p-2 ">
          <div className="basis-[70%]">
            <Image src={bg} className="h-[400px] w-[400px] " />
          </div>
          <div className="basis-[30%]">
            <button className="btn btn-outline btn-warning btn-sm  poppins-regular my-2 mx-2 ">
              Feb 19 2023
            </button>
            <button className="btn btn-outline btn-warning btn-sm  poppins-regular my-2 mx-2 ">
              Spring Edition
            </button>
            <button className="btn btn-outline btn-warning btn-sm  poppins-regular my-2 mx-2 ">
              Student HQ
            </button>
          </div>
        </div>

        <div className="p-5">
          <h1 className="text-3xl text-start poppins-medium text-white">
            <span>The Five Most Critical </span>
            <span className="text-[#FFC600]">Financial Pitfalls </span>to Avoid
          </h1>
        </div>
        <div className="poppins-regular text-white p-5">
          This article dives into the common money traps that many college
          students fall into, and offers practical advice on how to avoid them.
          From overspending to getting caught up in credit card offers and
          Crypto scams, we’ll show you how to make wise financial choices that
          will set you up for success during and after college.
        </div>
        <div className=" pl-5 pb-10">
          <span className=" decoration-[#FFC600] underline text-[#FFC600] poppins-light">
            continue reading
          </span>
        </div>
      </div>
    </>
  );
}

export default MainHead;
