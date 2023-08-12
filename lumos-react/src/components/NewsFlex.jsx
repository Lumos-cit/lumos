import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function NewsFlex({ images, heads, contents, dates }) {
  return (
    <div className="flex flex-col">
      {images.map((image, index) => {
        return (
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-4/5 mx-auto border border-solid border-white my-[2%] bg-black shadow-md shadow-white"
            key={index}
          >
            <div className="basis-[20%]">
              <Image src={image} />
            </div>
            <div className="basis-[60%]">
              <h1 className="poppins-bold my-[2%] text-2xl text-white">{heads[index]}</h1>
              <p className="poppins-regular text-white">{contents[index]}</p>
            </div>
            <div className="basis-[20%] flex flex-col justify-center items-center gap-5 h-3/4 my-auto ">
              <p className="text-white">{dates[index]}</p>
              <div>
                  <FontAwesomeIcon icon={faHeart} />
                  {" "} 73
              </div>
              <p className="text-white">READ MORE</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFlex;
