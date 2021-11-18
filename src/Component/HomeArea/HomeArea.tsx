import React from "react";
import HomeImage from "./HomeImage";
import HomeText from "./HomeText";
interface HomeAreaData {
  homeAreaData: {
    description: string;
    title: string;
    content: string;
    img: string;
  };
}

const HomeArea = (props: HomeAreaData) => {
  return (
    <div id="home-area" className="fix home-3">
      <div className="container">
        <div className="home-wrapper align-items-center row">
          <HomeText class="title-style-3" Data={props.homeAreaData} />
          <HomeImage
            class="home-image col-md-6 "
            img={props.homeAreaData.img}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeArea;
