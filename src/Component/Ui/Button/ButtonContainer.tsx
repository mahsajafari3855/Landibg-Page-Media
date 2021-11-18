import React from "react";
import Button from "./Button";

const ButtonContainer = (props: any) => {
  return (
    <div className={props.class}>
      <Button
        classbtn="button active "
        classcontent="fa fa-apple"
        content="Apple store"
      />
      <Button
        classbtn="button"
        classcontent="fa fa-send-o"
        content="Google play"
      />
    </div>
  );
};

export default ButtonContainer;
// <div className="button-set">
//     <a href="#" className="button active">
//         <i className="fa fa-apple" />
//         Apple store
//     </a>
//     <a href="#" className="button">
//         <i className="fa fa-send-o" />
//         Google play
//     </a>
// </div>
