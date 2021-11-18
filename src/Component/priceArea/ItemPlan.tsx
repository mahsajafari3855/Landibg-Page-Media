import React from "react";
interface ItemData {
  itemData: Array<string>;
}

const ItemPlan = (props: ItemData) => {
  return (
    <div className="content">
      <ul>
        {props.itemData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemPlan;
