import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function NewsFlex({ articles }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {/* {images.map((image, index) => {
        return (
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-4/5 mx-auto border border-solid border-white my-[2%] bg-black shadow-md shadow-white"
            key={index}
          >
            <div className="basis-[20%]">
              <img src={image} />
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
      })} */}
      {articles.map((article, index) => {
        return (
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-4/5 mx-auto border border-solid border-white my-[2%] bg-black shadow-md shadow-white"
            key={index}
          >
            <div className="basis-[20%]">
              <img src={article.cover_img} alt="cover-img" />
            </div>
            <div className="basis-[60%]">
              <h1 className="poppins-bold my-[2%] text-2xl text-white">
                {article.title}
              </h1>
              <p className="poppins-regular text-white">
                {article.description}
              </p>
            </div>
            <div className="basis-[20%] flex flex-col justify-center items-center gap-5 h-3/4 my-auto ">
              <p className="text-white">{article.createdAt.substring(0, 10)}</p>
              <div>{/* <FontAwesomeIcon icon={faHeart} /> 73 */}</div>
              <p
                className="text-white cursor-pointer"
                onClick={() => navigate("/article/" + article.article_id)}
              >
                READ MORE
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFlex;
