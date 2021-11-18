import React from "react";
import HomeText from "../HomeArea/HomeText";
import HomeImage from "../HomeArea/HomeImage";
interface AboutAreaData {
  aboutAreaData: {
    description: string;
    title: string;
    content: string;
    img: string;
  };
}

const BestApp = (props:AboutAreaData) => {
  return (
    <div id="bestapp-area" className="fix home-3">
      <div className="container">
        <div className="row">
          <HomeText
             Data={props.aboutAreaData}
            class="title-style-3"


          />

          <HomeImage class="home-image col-md-6" img={props.aboutAreaData.img} />
        </div>
      </div>
    </div>
  );
};

export default BestApp;
