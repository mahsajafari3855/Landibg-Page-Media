import React from "react";
interface Src {
  src: any;
}

const Carousel = (props: Src) => {
  return <img src={props.src} alt="" />;
};

export default Carousel;
