import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Movies from "./Movies";
import New from "./New";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Carousel />
      <Movies />
      <New />
    </div>
  );
};

export default Main;
