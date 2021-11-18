import React from "react";
import FeatureItem from "./FeatureItem";
interface FeatureData {
  featureItemData: Array<any>;
}

const FeatureWrapper = (props: FeatureData) => {
  return (
    <div className="feature-wrapper col-lg-4 col-12">
      {props.featureItemData.map((item, index) => (
        <FeatureItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FeatureWrapper;
