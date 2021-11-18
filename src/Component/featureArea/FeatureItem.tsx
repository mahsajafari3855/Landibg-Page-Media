import React from "react";

const FeatureItem = (props: any) => {
  return (
    <div className="sin-feature fix">
      <div className="icon">
        <i className={props.item.icon} />
      </div>
      <div className="content">
        <h2>{props.item.title}</h2>
        <p>{props.item.content}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
