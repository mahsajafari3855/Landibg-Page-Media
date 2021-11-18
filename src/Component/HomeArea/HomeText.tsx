import React from "react";
import ButtonContainer from "../Ui/Button/ButtonContainer";
interface HomeAreaData {
  Data: {
    description: string;
    title: string;
    content: string;
    img: string;
  };

  class: string;
}

const HomeText = (props: HomeAreaData) => {
  return (
    <div className="home-text col-md-6">
      <h1 className={props.class}>
        {props.Data.title}
        <br />
        {props.Data.description}
      </h1>
      <p>{props.Data.content}</p>
      <ButtonContainer class="button-set" />
    </div>
  );
};

export default HomeText;
