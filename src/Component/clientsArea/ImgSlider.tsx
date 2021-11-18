import React from "react";
interface Item {
  img: string;
}

const ImgSlider: React.FC<Item> = ({ img }) => {
  return (
    <div className="sin-testiImage">
      <img src={img} alt="testimonial 2" />
      <h2>
        Mohamet luis - <span>Web designer</span>
      </h2>
    </div>
  );
};

export default ImgSlider;
