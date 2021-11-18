import React from "react";
import ImgSlider from "./ImgSlider";
import TextSlider from "./TextSlider";
interface ClientAreaData {
  clientAreaData: Array<any>;
}

const ClientsArea = (props: ClientAreaData) => (
  <div id="clients-area" className="fix home-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12 mx-auto">
          <div className="testimonial-image-slider text-center">
            {props.clientAreaData.map((item, index) => (
              <ImgSlider key={index} img={item.img} />
            ))}
          </div>
          <div className="testimonial-text-slider text-center">
            {props.clientAreaData.map((item, index) => (
              <TextSlider key={index} comment={item.comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ClientsArea;
