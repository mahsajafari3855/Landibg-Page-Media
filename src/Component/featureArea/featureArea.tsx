import React from "react";
import HomeImage from "../HomeArea/HomeImage";
import FeatureWrapper from "./Feature-wrapper";
interface FeatureItemData {
  featureItemData: {
    data: Array<object>;
    img: string;
    title: string;
    description: string;
  };
}

const FeatureArea = (props: FeatureItemData) => {
  return (
    <div id="feature-area" className="fix home-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-style-2 title-line-2">
              <h1>{props.featureItemData.title}</h1>
              <p>{props.featureItemData.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <HomeImage class="col-lg-8 col-12" img={props.featureItemData.img} />
          <FeatureWrapper featureItemData={props.featureItemData.data} />
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
