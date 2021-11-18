import React from "react";
import ButtonPlan from "./buttonPlan";
import ItemPlan from "./ItemPlan";
interface Plan {
  PlanPrice: number;

  class: string;
  PlanName: string;
  ItemData: Array<string>;
}

const Planprice = (props: Plan) => {
  return (
    <div className="col-md-4 col-12">
      <div className={props.class}>
        <div className="header">
          <div className="price">
            <div className="icon">$</div>
            <div className="dolar">
              <h1>{props.PlanPrice}</h1>
            </div>
            <div className="month">/ Month</div>
          </div>
          <div className="title">
            <h3>{props.PlanName}</h3>
          </div>
        </div>

        <ItemPlan itemData={props.ItemData} />

        <div className="footer">
          <ButtonPlan content="register" />
        </div>
      </div>
    </div>
  );
};

export default Planprice;
