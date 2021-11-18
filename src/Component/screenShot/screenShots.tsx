import React from "react";
import Carousel from "./carousel";
import SectionTitle from "../SectionTitle";
interface ScreenShotsData {
  screenShotsData: {
    title: string;
    description: string;
    data: Array<any>;
  };
}
const ScreenShots = (props: ScreenShotsData) => {
  return (
    <div id="screenshot-area" className="fix home-2">
      <div className="container">
        <div className="row">
          <SectionTitle
            title={props.screenShotsData.title}
            description={props.screenShotsData.description}
            class="title-style-2 title-line-2"
          />

          <div className="col-12">
            <div id="screenshot-carousel" data-carousel-3d={true}>
              {props.screenShotsData.data.map((item, index) => (
                <Carousel key={index} src={item.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;
