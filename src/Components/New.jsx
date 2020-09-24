import React from "react";
import Card from "./Card";
import "../styles/New.css";

const New = () => {
  const newMovies = [
    {
      img:
        "https://images.hdqwalls.com/wallpapers/justice-league-movie-poster-so.jpg",
      title: "Super heroes",
      subTitle: "Action, Thriller"
    },
    {
      img:
        "https://rukminim1.flixcart.com/image/352/352/jcc9ci80/poster/v/u/e/medium-pl-knock-knock-keanu-reeves-wide-wall-poster-13-19-inches-original-imafyvpazkzqs3zk.jpeg?q=70",
      title: "Knock Knock",
      subTitle: "Action, Thriller"
    },

    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3fEZwbTvjBlwn_r_eh_b3xSh1HA6UzsRPmQ&usqp=CAU",
      title: "2 States",
      subTitle: "Action, Thriller"
    },

    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvsYvJoezx45b0BCxFjcPr-uv3EDes7ALJog&usqp=CAU",
      title: "300",
      subTitle: "Action, Thriller"
    }
  ];
  return (
    <div className="New">
      <div className="heading">
        <p>New</p>
      </div>
      <div className="cards">
        {newMovies.map((movie, index) => (
          <Card key={index} card={movie} />
        ))}
      </div>
    </div>
  );
};

export default New;
