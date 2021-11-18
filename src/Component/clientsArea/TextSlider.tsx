import React from "react";
interface Item {
  comment: string;
}
const TextSlider = (props: Item) => {
  return (
    <div className="sin-testiText">
      <p>{props.comment}</p>
    </div>
  );
};

export default TextSlider;
