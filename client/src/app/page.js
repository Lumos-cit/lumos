import React from "react";
import MainHead from "./Components/MainHead";
import MostRead from "./Components/MostRead";
import News from "./Components/News";
import Articles from "./Components/Articles";
import JoinUs from "./Components/JoinUs";
import SpotlightMain from "./Components/SpotlightMain";

function page() {
  return (
    <div>
      <MainHead />
      <MostRead />
      <News />
      <SpotlightMain />
      <Articles />
      <JoinUs />
    </div>
  );
}

export default page;
