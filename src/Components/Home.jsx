import React from "react";
import MenuLeft from "./MenuLeft";
import Main from "./Main";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <MenuLeft />
      <Main />
    </div>
  );
};

export default Home;
