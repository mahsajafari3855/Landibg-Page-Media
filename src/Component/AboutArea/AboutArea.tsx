import React from "react";
import ItemAbout from "./ItemAbout";
interface ItemAboutData {
  ItemAboutData: Array<any>;
}

const AboutArea = (props: ItemAboutData) => {
  return (
    <div id="about-area" className="fix home-3">
      <div className="container">
        <div className="row text-center">
          {props.ItemAboutData.map((item, index: number) => (
            <div className="col-12 col-md-6 col-lg-3">
              <ItemAbout
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
