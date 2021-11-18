import React from "react";
interface HomeAreaData {
  img: string;
  class: any;
}

const HomeImage = (props: HomeAreaData) => {
  return (
    <div className={props.class}>
      <img src={props.img} alt="" />
    </div>
  );
};

export default HomeImage;
