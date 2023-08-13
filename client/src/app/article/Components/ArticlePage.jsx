// import { useState } from "react";
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

import ArticleImage from "../../../../public/Assets/Images/ArticleImage.svg";
import RelatedImage from "../../../../public/Assets/Images/RelatedImage.svg";
import ArticlePoster from "../../../../public/Assets/Images/ArticlePoster.svg";
import Author from "../../../../public/Assets/Images/Author.svg";

async function ArticlePage() {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   axios.get("http://localhost:3030/api/article/1").then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <section className="h-full bg-black">
      <div className="flex w-11/12 mx-auto gap-16">
        <div className="basis-[60%] mt-[3%]">
          <h1 className="poppins-semibold text-lg text-white">
            {/* {data.updatedAt} */}
          </h1>

          <p className="poppins-bold text-4xl mt-[2%] text-white">
            The Five Most Critical Financial Pitfalls to Avoid
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

          <p className="mt-[2%] poppins-regular text-lg text-white">
            As a student, it’s easy to fall into financial traps that can ruin
            your long-term financial goals. Right from tuition fees,
            accommodation, textbooks, entertainment, traveling, and social life
            to balance. It’s essential to be aware of and avoid students’
            biggest financial traps. These tips will help you avoid the most
            significant financial pitfalls students face.
          </p>
          <Image
            width={500}
            height={500}
            className="my-[2%]"
            alt=""
            src={ArticleImage}
          />

          <p className="poppins-regular mt-[1%] text-white">
            {/* <span className="font-black">Overspending:</span> Overspending can
            be a major problem for college students, especially those who are
            living on a limited budget. To avoid overspending, it’s important to
            set a budget and stick to it. This means tracking your expenses,
            avoiding impulse purchases, and prioritizing your spending. One
            ultimate solution is to set a budget and fix it. Differentiate
            between the wants and needs and avoid spending on the wants.
          </p>
          <p className="poppins-regular mt-[1%] text-white">
            <span className="font-black">Credit card debt:</span> While you are
            in your College, Generally it’s not recommended to have a Credit
            card, The logic is simple: Spend with money what you own, not by
            borrowing. Using a Credit card is like spending money by borrowing.
            Failing to repay results in a Credit card defaulter. Because you do
            not have cash flow during college. But If you’re a person with a
            cash flow you might opt for a Credit card, On the other hand, a
            Credit card also offers amazing discounts which also helps in
            building a good credit score in the long run.
          </p>
          <p className="poppins-regular mt-[1%] text-white">
            <span className="font-black">Student loans: </span> Student loans
            can be a financial trap for college students if they need to be
            managed carefully. While student loans can help cover the cost of
            tuition, housing, and other educational expenses, they can also lead
            to a significant debt burden after graduation. To avoid this trap,
            it’s essential to borrow only what you need and have a plan for
            repayment. Make sure you research your loan options and choose the
            one with the lowest interest rate and most straightforward repayment
            schedule.
          </p>
          <p className="poppins-regular mt-[1%] text-white">
            <span className="font-black">Not tracking your spending:</span>{" "}
            Nowadays we started using digital transactions, thanks to UPI. The
            usage of physical cash has decreased. Of course, it minimized the
            flow of black money in the market. But we are less aware when using
            UPI for digital transactions. When using physical cash we were aware
            of each and every penny we spend. This has been proven practically.
          </p>
          <p className="poppins-regular mt-[1%] text-white">
            <span className="font-black">Falling into the crypto scam:</span>{" "}
            Many youngsters and teenagers have a craze for Cryptocurrencies,
            Which is not wrong, but differentiating between real and fake things
            is essential to avoid huge losses. Of course Crypto market itself is
            more volatile Fake ICOs, Ponzi schemes, and fake exchanges. Do your
            own research and invest your money.
          */}
          </p>

          <div className="p-12 flex justify-center items-start gap-2">
            <div className="basis-[40%] flex justify-center items-center">
              <Image src={ArticleImage} alt="" />
            </div>
            <div className="mt-[3%] basis-[50%]">
              <h1 className="poppins-bold text-white text-justify">
                Ahmed Mustafa N
              </h1>
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
            <Image
              width={500}
              height={500}
              className="p-10"
              alt=""
              src={ArticleImage}
            />
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
                    <p className="text-white text-sm">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={ArticleImage} alt="" />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={ArticleImage} alt="" />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={ArticleImage} alt="" />
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr />

          <div className="px-20">
            <h1 className="poppins-bold text-3xl mt-[3%] text-white">Share</h1>
            <div className="flex mt-[3%]">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="px-[2%]"
              />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="px-[2%]" />
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="px-[2%]"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="px-[2%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
