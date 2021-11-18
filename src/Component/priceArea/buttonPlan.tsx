import React from "react";
interface Btn {
  content: string;
}

const ButtonPlan = (props: Btn) => {
  return <button className="button">{props.content}</button>;
};

export default ButtonPlan;
