import React from "react";
import wand from "/Assets/Images/wand.svg";
function News() {
  return (
    <div className="bg-white ">
      <div className="relative h-[65vh] hidden md:block pt-[5%]">
        <img
          src={wand}
          className="absolute w-[300px] h-[300px] right-40"
          style={{ zIndex: 1 }}
        />
        <div className="bg-[#FFC600] h-[40vh] w-5/6 mx-auto flex border rounded-3xl">
          <div className="basis-3/4">
            <h1 className=" text-black text-4xl lg:text-[80px] ibm-bold tracking-wide leading-none ml-10 mt-5 ">
              Stick With Us
            </h1>
            <h1 className="ibm-bold text-white md:text-[40px] ml-10">
              For the latest
            </h1>
          </div>
        </div>
      </div>

      <div className=" h-[35vh] block md:hidden">
        <div className="bg-[#FFC600] w-5/6 mx-auto flex border rounded-3xl h-[25vh] relative ">
          <img
            src={wand}
            className="absolute w-[150px] h-[150px] right-0 top-0"
            style={{ zIndex: 1 }}
          />
          <div className="basis-3/4 mt-2 p-3">
            <h1 className=" text-black text-2xl ibm-bold tracking-wide leading-none ">
              Stick With Us
            </h1>
            <h1 className="ibm-bold text-white text-2xl ">For the latest</h1>
          </div>
        </div>
      </div>
      <h1 className="ibm-bold text-6xl lg:text-[150px] text-center text-black leading-none pt-10">
        NEWS
      </h1>
      <p className="text-[#FFC600] text-[48px] text-center ibm-bold leading-none">
        Stay Updated
      </p>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center px-[15%] h-[160vh] py-[5%] ">
          <div className="w-full h-full flex gap-2">
            <div className="flex flex-col h-full w-[50%] gap-10 ">
              <div className="h-[60%] w-full bg-[#FF7575] relative border rounded-2xl">
                <p className="px-[10%] py-[10%] ibm-bold text-2xl text-black">
                  23/11/23
                </p>
                <p className="px-[10%] ibm-bold text-3xl text-white">
                  Day scholors were asked to vacate the hostel and join the
                  hostel again for residential training
                </p>
                <p className="absolute bottom-1 left-12 text-xl ibm-italic text-white">
                  Erwin Smith, survey corps
                </p>
              </div>
              <div className="h-[40%]  w-full  bg-[#67FFFF] relative border rounded-2xl">
                <p className="px-[10%] py-[10%] ibm-bold text-2xl text-black">
                  23/11/23
                </p>
                <p className="px-[10%] ibm-bold text-3xl text-white">
                  Day scholors were asked to vacate the hostel and join the
                  hostel again for residential training
                </p>
                <p className="absolute bottom-1 left-12 text-xl ibm-italic text-white">
                  Erwin Smith, survey corps
                </p>
              </div>
            </div>
            <div className="flex flex-col h-full w-[50%] gap-4">
              <div className="h-[35%] w-full bg-[#EDFF7D] relative border rounded-2xl">
                <p className="px-[10%] py-[10%] ibm-bold text-2xl text-black">
                  23/11/23
                </p>
                <p className="px-[10%] ibm-bold text-2xl text-white">
                  Day scholors were asked to vacate the hostel and join the
                  hostel again for residential training
                </p>
                <p className="absolute bottom-1 left-12 text-xl ibm-italic text-white">
                  Erwin Smith, survey corps
                </p>
              </div>
              <div className="h-[40%] w-full bg-[#8490FF] relative border rounded-2xl">
                <p className="px-[10%] py-[10%] ibm-bold text-2xl text-black">
                  23/11/23
                </p>
                <p className="px-[10%] ibm-bold text-3xl text-white">
                  Day scholors were asked to vacate the hostel and join the
                  hostel again for residential training
                </p>
                <p className="absolute bottom-1 left-12 text-xl ibm-italic text-white">
                  Erwin Smith, survey corps
                </p>
              </div>
              <div className="h-[30%] w-full  border-[#FFC600] relative border rounded-2xl flex justify-center items-center">
                <div>
                  <button className="border-[#D4A400] btn btn-outline text-[#D4A400] hover:bg-custom-2 hover:text-white">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden pb-10">
        <div className="flex flex-col justify-center items-center h-[100vh] px-[5%] py-[2%] gap-3">
          <div className="basis-[50%] bg-[#FF7575] h-[40%] w-full relative border rounded-2xl">
            <p className="px-[5%] py-[5%] ibm-bold text-xl text-black ">
              23/11/23
            </p>
            <p className="px-[5%] ibm-bold text-lg text-white">
              Day scholors were asked to vacate the hostel and join the hostel
              again for residential training
            </p>
            <p className="absolute bottom-1 left-12 text-xl ibm-italic text-white">
              Erwin Smith, survey corps
            </p>
          </div>
          <div className="flex flex-row h-[40%] w-full gap-2">
            <div className="bg-[#67FFFF] h-[30vh] w-1/2 relative border rounded-2xl">
              <p className="px-[1%] py-[1%] ibm-bold text-sm text-black">
                23/11/23
              </p>
              <p className="ibm-bold text-[11px] px-1 text-white">
                Day scholors were asked to vacate the hostel and join the hostel
                again for residential training
              </p>
              <p className="absolute bottom-1 left-4 text-sm ibm-italic text-white">
                Erwin Smith, survey corps
              </p>
            </div>

            <div className="bg-[#EDFF7D] h-[30vh] w-1/2 border rounded-2xl relative">
              <p className="px-1 py-[1%] ibm-bold text-sm text-black">
                23/11/23
              </p>
              <p className="px-[1%] ibm-bold text-[11px] text-white">
                Day scholors were asked to vacate the hostel and join the hostel
                again for residential training
              </p>
              <p className="absolute bottom-1 left-4 text-sm ibm-italic text-white">
                Erwin Smith, survey corps
              </p>
            </div>
          </div>

          <div className="h-[20%] w-full border-[#D4A400] border rounded-2xl flex justify-center">
            <button className="border-[#D4A400] btn btn-outline btn-sm text-[#D4A400] hover:bg-custom-2 hover:text-white my-[10%]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
