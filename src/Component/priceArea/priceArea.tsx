import React from "react";
import SectionTitle from "../SectionTitle";
import Planprice from "./Planprice";
interface PricItem {
  ItemPlanData: { title: string; description: string; data: Array<any> };
}

const PriceArea = (props: PricItem) => {
  return (
    <div id="price-area" className="fix home-2">
      <div className="container">
        <div className="row">
          <SectionTitle
            title={props.ItemPlanData.title}
            description={props.ItemPlanData.description}
            class="title-style-2 title-line-2"
          />
          <div className="col-12">
            <div className="price-container text-center row">
              {props.ItemPlanData.data.map((item, index) => (
                <Planprice
                  key={index}
                  class={
                    index === 1 ? "sin-price active" : "sin-price ml-md-auto"
                  }
                  PlanPrice={item.price}
                  PlanName={item.name}
                  ItemData={item.itemData}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceArea;
