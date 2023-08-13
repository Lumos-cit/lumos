import React from "react";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import Entry from "./components/Entry";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="basis-[5%] bg-white">
        <MenuBar />
      </div>
      <div className="basis-[15%] bg-slate-100">
        <Content />
      </div>
      <div className="basis-[80%] bg-slate-200">
        <Entry />
      </div>
    </div>
  );
}

export default App;
