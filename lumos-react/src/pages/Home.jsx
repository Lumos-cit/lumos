import React from "react";
import MainHead from "../components/MainHead";
import MostRead from "../components/MostRead";
import News from "../components/News";
import Articles from "../components/Articles";
import JoinUs from "../components/JoinUs";
import SpotlightMain from "../components/SpotlightMain";

function Home() {
  return (
    <>
      <MainHead />
      <MostRead />
      <News />
      <SpotlightMain />
      <Articles />
      <JoinUs />
    </>
  );
}

export default Home;
