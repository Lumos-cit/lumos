"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import pic from "../../../public/Assets/Images/caropic.svg";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function Carousel() {
  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex justify-center items-center "
        >
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
          <SwiperSlide className="basis-1/4 p-10">
            <Image src={pic} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center p-10">
            <div className="flex items-center justify-center">
              <Image src={pic} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
