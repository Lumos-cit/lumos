/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import axios from "axios"


import ArticleImage from "/Assets/Images/ArticleImage.svg";
import RelatedImage from "/Assets/Images/RelatedImage.svg";
import ArticlePoster from "/Assets/Images/ArticlePoster.svg";
import Author from "/Assets/Images/Author.svg";

function ArticlePage() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3030/api/article/2").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <section className="h-full bg-black">
      <div className="flex w-11/12 mx-auto gap-16">
        <div className="basis-[60%] mt-[3%]">
          <h1 className="poppins-bold text-xl text-white">29, March 2023</h1>

          <p className="poppins-bold text-7xl mt-[2%] text-white">
          {data && data.title}

          </p>

          <p className="text-3xl poppins-semibold mt-[2%] text-white">
            Mind over matter: Taking control of your mental well-being
          </p>
          <div className="flex justify-between mt-[2%]">
            <p className=" text-white">By Vijay KP (EEE)</p>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-white hover:text-red-700"
            />
          </div>

          <p className="mt-[2%] poppins-regular text-2xl text-white">
            As a student, it’s easy to fall into financial traps that can ruin
            your long-term financial goals. Right from tuition fees,
            accommodation, textbooks, entertainment, traveling, and social life
            to balance. It’s essential to be aware of and avoid students’
            biggest financial traps. These tips will help you avoid the most
            significant financial pitfalls students face.
          </p>
          <img src={ArticleImage} className="my-[2%]" />

         
          <p className="poppins-regular mt-[1%] text-white">
            <span className="font-black">Falling into the crypto scam:</span>{" "}
            {data && data.content}
          </p>

          <div className="p-12 flex ">
            <div className="basis-[40%]">
              <img src={Author} />
            </div>
            <div className="mt-[3%] basis-[50%]">
              <h1 className="poppins-bold text-white">Ahmed Mustafa N</h1>
              <p className="text-white">
                B.Tech AI&DS CIT 25' graduate, AI enthusiast, and Web Dev
                learner. Content Writer at Chennai Institute of Technology,
                volunteer at Lumos, CIT. Active member of GDSC@CIT. Ready to
                make an impact in AI and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[40%] ">
          <div className="flex justify-center">
            <img src={ArticlePoster} className="p-10" />
          </div>
          <div className="flex justify-center items-center">
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              StudentHQ
            </button>
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              Spring Edition
            </button>
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              Finance
            </button>
          </div>
          <br />
          <hr />
          <div className="px-20 mt-[3%]">
            <h1 className="poppins-bold text-3xl text-white">Related</h1>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">A Guide To Garner Your Galaxy of Thoughts</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">A Guide To Garner Your Galaxy of Thoughts</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">A Guide To Garner Your Galaxy of Thoughts</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr />

          <div className="px-20">
            <h1 className="poppins-bold text-3xl mt-[3%] text-white">Share</h1>
            <div className="flex mt-[3%]">

              <FontAwesomeIcon icon={faFacebook} size="2x"  className="px-[2%]"/>
              <FontAwesomeIcon icon={faTwitter} size="2x"  className="px-[2%]"/>
              <FontAwesomeIcon icon={faLinkedin} size="2x"  className="px-[2%]"/>
              <FontAwesomeIcon icon={faWhatsapp} size="2x"  className="px-[2%]"/>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
