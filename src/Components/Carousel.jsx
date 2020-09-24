import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";

const items = [
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    src: "https://wallpaperaccess.com/full/645142.jpg",
    title: "Thor"
  },
  {
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2",
    src:
      "https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",
    title: "Oblivion"
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    src:
      "https://d10u9ygjms7run.cloudfront.net/6kgv3weaph1syhyxwmqsdymqxw/1543192394253_aquaman-movie-poster-6g.jpg",
    title: "Aquaman"
  }
];

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="custom-tag-img" src={item.src} alt="im" />
        <div className="posterDetails">
          <div className="theme">Action | Drama | Movie | Adventure</div>
          <h3>{item.title}</h3>
          <div className="butns">
            <button className="watch">Watch trailer</button>
            <button className="add">Add to favourites</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            culpa magni, quae obcaecati accusantium ullam minima sit, beatae, et
            aliquam maxime autem.
          </p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default App;
