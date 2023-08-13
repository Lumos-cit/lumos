import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import NewsFlex from "../Components/NewsFlex";
import News1 from "/Assets/Images/News1.svg";
import News2 from "/Assets/Images/News2.svg";
import News3 from "/Assets/Images/News3.svg";
import News4 from "/Assets/Images/News4.svg";
import News5 from "/Assets/Images/News5.svg";

function News() {
  const head = "NEWS";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";

  const Image1 = [News1, News2, News3, News4, News5];
  const Button1 = [
    //  "studentHQ",
    //  "studentHQ",
    //  "studentHQ",
    //  "studentHQ",
    //  "studentHQ",
    //  "studentHQ",
    "news",
    "news",
    "news",
    "news",
  ];
  const [articles, setArticles] = useState([]);
  let tag = "news";

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles?tag=${tag}`)
      .then((res) => {
        console.log(res.data.data);
        setArticles(res.data.data);
      });
  }

  // const Images = [News1, News2, News3, News4, News5];
  // const Header = [
  //   "LEARNING JAPANESE ",
  //   "THE AI HYPE",
  //   "THE CHINESE LANTERN",
  //   "LIGHT POLLUTION",
  //   "INSTAGRAM QUIRKS",
  // ];
  // const Content = [
  //   "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  //   "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  //   "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  //   "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  //   "People learn Japanese either because they love the language or to watch anime without subtitles or perhaps to get high-paying jobs in Japan. Whatever the reason might be, here is an article which covers the ins and outs of the language and the nation, with insights from our very own Japanese instructor, Mr Kaushik.",
  // ];
  const dates = [
    "23, March 2023",
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
        {/* <NewsFlex
          images={Images}
          heads={Header}
          contents={Content}
          dates={Dates}
          articles={articles}
        /> */}
        <NewsFlex articles={articles} />
      </div>
    </div>
  );
}

export default News;
