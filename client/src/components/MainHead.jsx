import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MainHead() {
  const [cards, setCards] = useState([]);
  const [showFullContent, setShowFullContent] = useState(false);


  function fetchCards() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles`)
      .then((res) => {
        console.log(res.data.data);
        setCards(res.data.data);
      });
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
  >
    {cards.map((card) => (
      <SwiperSlide key={card.article_id} className="article-card ">
          <div className="flex w-full h-[25rem] justify-between">
      <div className="flex bg-black text-white w-1/3 p-4">
        <img src={card.cover_img} alt="Article Cover" className="h-full w-full" />
      </div>
      <div className="flex flex-col bg-black text-white w-2/3 p-4">
        <div>
          <h2 className="font-bold text-3xl">{card.title}</h2>
          <p className="font-semibold text-2xl">{card.description}</p>
        </div>
        <div className="font-italic text-xl  overflow-y-auto max-h-[10rem]">
          <p className="scroll-content">
          {showFullContent
      ? JSON.parse(card.content).blocks.map(block => {
          if (block.type === 'paragraph') {
            return <p>{block.data.text}</p>;
          }
          if (block.type === 'list') {
            return (
              <ul>
                {block.data.items.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })
      : JSON.parse(card.content).blocks[0].data.text.slice(0, 50) + '...'}
          </p>
        </div>
        {!showFullContent && (
          <button
            className="text-yellow-500 mt-2 cursor-pointer bottom-10"
            onClick={() => setShowFullContent(true)}
          >
            Continue Reading......
          </button>
        )}
      </div>
    </div>


      </SwiperSlide>
    ))}
  </Swiper>
    </>
  );
}

export default MainHead;
