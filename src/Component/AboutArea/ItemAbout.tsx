import React from "react";
interface ItemAboutData {
  icon: string;
  title: string;
  content: string;
}

const ItemAbout = (props: ItemAboutData) => {
  return (
    <div className="single">
      <div className="icon">
        <i className={props.icon} />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default ItemAbout;
