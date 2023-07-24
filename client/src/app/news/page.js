import React from "react";
import SectionHead from "../Components/SectionHead";
import NewsFlex from "../Components/NewsFlex";
import News1 from "../../../public/Assets/Images/News1.svg";
import News2 from "../../../public/Assets/Images/News2.svg";
import News3 from "../../../public/Assets/Images/News3.svg";
import News4 from "../../../public/Assets/Images/News4.svg";
import News5 from "../../../public/Assets/Images/News5.svg";

function page() {
  const head = "NEWS";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";

  const Images = [News1, News2, News3, News4, News5];
  const Header = [
    "LEARNING JAPANESE ",
    "THE AI HYPE",
    "THE CHINESE LANTERN",
    "LIGHT POLLUTION",
    "INSTAGRAM QUIRKS",
  ];
  const Content = [
    "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
    "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
    "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
    "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
    "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  ];
  const Dates = [
    "23, March 2023",
    "23, March 2023",
    "23, March 2023",
    "23, March 2023",
    "23, March 2023",
  ];
  return (
    <div>
      <SectionHead head={head} body={body} />
      <div>
        <NewsFlex
          images={Images}
          heads={Header}
          contents={Content}
          dates={Dates}
        />
      </div>
    </div>
  );
}

export default page;
