import React from 'react'
import axios from 'axios';
import Image from "next/image";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import Career1 from "../../../public/Assets/Images/Career1.svg";
import Career2 from "../../../public/Assets/Images/Career2.svg";
import Career3 from "../../../public/Assets/Images/Career3.svg";
import Career4 from "../../../public/Assets/Images/Career4.svg";
import Career5 from "../../../public/Assets/Images/Career5.svg";
import Career6 from "../../../public/Assets/Images/Career6.svg";
import Career7 from "../../../public/Assets/Images/Career7.svg";
import Career8 from "../../../public/Assets/Images/Career8.svg";
import Career9 from "../../../public/Assets/Images/Career9.svg";


async function page() {
  const response = await axios.get("http://localhost:5000/api/articles")
  // console.log(response.data);
  const {data} = response.data;
  const head = "STUDENT HQ";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";
    const Image1 = [Career1, Career2, Career3];
    const Image2 = [Career4, Career5, Career6];
    const Image3 = [Career7, Career8, Career9];
    const Text1 = [
      "The Five Most Critical Financial Pitfalls to Avoid",
      "The Five Most Critical Financial Pitfalls to Avoid",
      "The Five Most Critical Financial Pitfalls to Avoid",
    ];
    const Button1 = ["studentHQ", "studentHQ", "studentHQ"];
    const Date1 = ["23, March 2023", "23, March 2023", "23, March 2023"];
    const Author1 = [
      "By VIJAY KP , EEE-24",
      "By VIJAY KP , EEE-24",
      "By VIJAY KP , EEE-24",
    ];
  
  
    return (
    <div>
       <SectionHead head={head} body={body} />
        <div className="flex flex-wrap p-6 gap-3 justify-around mt:gap-5">
          {
            data.map((article) => {
              return (
                <section className='card h-auto w-[250px] lg:w-[360px]' key={article.article_id}>
                  <div className='image'>
                    <Image src={article.cover_img} width={359} height={359} alt="cover img" />
                  </div>
                  <div className='content bg-[#D9D9D9] w-[250px] p-1 md:p-2 lg:w-[360px]'>
                     <div className="flex justify-between items-center">
                        <button className="p-1 border border-solid border-black text-black m-2">studentHQ</button>
                        <p className="text-black">{article.updatedAt}</p>
                    </div>
                     <p className="text-2xl poppins-bold text-[#2A2A2A]"> {article.title}</p>
                     <p className="poppins-bold text-[#2A2A2A]">VIJAY KP , EEE-24</p>
                  </div>
                </section>
              )
            
            })
          }
        {/* <SectionFlex
          images={Image1}
          texts={Text1}
          buttons={Button1}
          dates={Date1}
          authors={Author1}
        />
        <SectionFlex
          images={Image2}
          texts={Text1}
          buttons={Button1}
          dates={Date1}
          authors={Author1}
        />
        <SectionFlex
          images={Image3}
          texts={Text1}
          buttons={Button1}
          dates={Date1}
          authors={Author1}
        /> */}
      </div>
    </div>
  )
}

export default page