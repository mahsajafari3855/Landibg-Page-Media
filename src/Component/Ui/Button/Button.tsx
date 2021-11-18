import React from "react";

const Button = (props: any) => {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.kahkeshan.rain_media" className={props.classbtn}>
      <i className={props.classcontent} />
      {props.content}
    </a>
  );
};

export default Button;
