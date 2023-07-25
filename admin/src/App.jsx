import React from "react";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import Entry from "./components/Entry";
import { useSelector } from "react-redux";
import AddProduct from "./components/Entries/AddProduct";

function App() {
  const type = useSelector((state) => state.product.contentType);
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="basis-[5%] bg-white">
        <MenuBar />
      </div>
      <div className="basis-[15%] bg-slate-100">
        <Content />
      </div>
      <div className="basis-[80%] bg-slate-200">
        {type != "Deal of the day" ? <Entry /> : <AddProduct />}
      </div>
    </div>
  );
}

export default App;
