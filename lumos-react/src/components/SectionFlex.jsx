import React from "react";

function SectionFlex({ images, texts ,buttons,dates,authors }) {
  return (
    <div className="flex justify-between w-11/12 my-[5%] mx-auto flex-wrap p-1">
      {images.map((image, index)  =>(
        <div className="h-[480px] w-[250px] lg:w-[360px] mx-auto" key={index}>
          <img src={image} alt="" />
          <div className="bg-[#D9D9D9] w-[250px] lg:w-[360px]">
            <div className="flex justify-between items-center">
                <button className="p-1 border border-solid border-black text-black m-2">{buttons[index]}</button>
                <p className="text-black">{dates[index]}</p>
            </div>
            <p className="text-2xl poppins-bold text-[#2A2A2A]">
              {texts[index]}
            </p>
            <p className="poppins-bold text-[#2A2A2A]">{authors[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionFlex;
